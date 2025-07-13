import express from 'express'
import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(helmet())
app.use(cors())
app.use(express.json({ limit: '10mb' }))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})
app.use('/api/', limiter)

// Database connection
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'imho_uk',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}

const pool = mysql.createPool(dbConfig)

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ message: 'Access token required' })
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' })
    }
    req.user = user
    next()
  })
}

// Initialize database tables
const initDatabase = async () => {
  try {
    const connection = await pool.getConnection()
    
    // Create news table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS news (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        image_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `)

    // Create admin table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS admin (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Create default admin user if not exists
    const [adminExists] = await connection.execute(
      'SELECT id FROM admin WHERE username = ?',
      ['admin']
    )

    if (adminExists.length === 0) {
      const hashedPassword = await bcrypt.hash('admin123', 10)
      await connection.execute(
        'INSERT INTO admin (username, password_hash) VALUES (?, ?)',
        ['admin', hashedPassword]
      )
      console.log('Default admin user created: admin/admin123')
    }

    connection.release()
    console.log('Database initialized successfully')
  } catch (error) {
    console.error('Database initialization error:', error)
  }
}

// Routes

// Auth routes
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password required' })
    }

    const connection = await pool.getConnection()
    const [users] = await connection.execute(
      'SELECT * FROM admin WHERE username = ?',
      [username]
    )
    connection.release()

    if (users.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const user = users[0]
    const validPassword = await bcrypt.compare(password, user.password_hash)

    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    res.json({
      token,
      user: { id: user.id, username: user.username }
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

app.get('/api/auth/verify', authenticateToken, (req, res) => {
  res.json({ user: req.user })
})

// News routes
app.get('/api/news', async (req, res) => {
  try {
    const { limit } = req.query
    const connection = await pool.getConnection()
    
    let query = 'SELECT * FROM news ORDER BY created_at DESC'
    let params = []
    
    if (limit) {
      query += ' LIMIT ?'
      params.push(parseInt(limit))
    }
    
    const [news] = await connection.execute(query, params)
    connection.release()
    
    res.json(news)
  } catch (error) {
    console.error('Get news error:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

app.get('/api/news/:id', async (req, res) => {
  try {
    const { id } = req.params
    const connection = await pool.getConnection()
    
    const [news] = await connection.execute(
      'SELECT * FROM news WHERE id = ?',
      [id]
    )
    connection.release()
    
    if (news.length === 0) {
      return res.status(404).json({ message: 'News article not found' })
    }
    
    res.json(news[0])
  } catch (error) {
    console.error('Get news by ID error:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

app.post('/api/news', authenticateToken, async (req, res) => {
  try {
    const { title, content, image_url } = req.body

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' })
    }

    const connection = await pool.getConnection()
    const [result] = await connection.execute(
      'INSERT INTO news (title, content, image_url) VALUES (?, ?, ?)',
      [title, content, image_url || null]
    )
    connection.release()

    res.status(201).json({
      id: result.insertId,
      message: 'News article created successfully'
    })
  } catch (error) {
    console.error('Create news error:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

app.put('/api/news/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params
    const { title, content, image_url } = req.body

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' })
    }

    const connection = await pool.getConnection()
    const [result] = await connection.execute(
      'UPDATE news SET title = ?, content = ?, image_url = ? WHERE id = ?',
      [title, content, image_url || null, id]
    )
    connection.release()

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'News article not found' })
    }

    res.json({ message: 'News article updated successfully' })
  } catch (error) {
    console.error('Update news error:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

app.delete('/api/news/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params
    const connection = await pool.getConnection()
    
    const [result] = await connection.execute(
      'DELETE FROM news WHERE id = ?',
      [id]
    )
    connection.release()

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'News article not found' })
    }

    res.json({ message: 'News article deleted successfully' })
  } catch (error) {
    console.error('Delete news error:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Something went wrong!' })
})

// Start server
const startServer = async () => {
  await initDatabase()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    console.log(`Health check: http://localhost:${PORT}/api/health`)
  })
}

startServer().catch(console.error)