# IMHO-UK Website

A modern, responsive website for the International Medical Health Organization UK (IMHO-UK), built with React.js, Node.js, Express.js, and MySQL.

## Features

- **Modern Design**: Clean, responsive design inspired by professional healthcare organizations
- **Dark/Light Mode**: Toggle between dark and light themes
- **News Management**: Admin panel for managing news articles
- **Secure Authentication**: JWT-based admin authentication
- **Database Integration**: MySQL database for storing news and admin data
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Mobile Responsive**: Optimized for all device sizes

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: Helmet, CORS, Rate Limiting, bcrypt

## Project Structure

```
imho-uk-website/
├── src/
│   ├── components/          # Reusable React components
│   ├── contexts/           # React contexts (Theme, Auth)
│   ├── pages/              # Page components
│   │   ├── admin/          # Admin-specific pages
│   │   └── ...
│   ├── App.jsx             # Main App component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── database/
│   └── schema.sql         # Database schema
├── server.js              # Express server
├── package.json
└── README.md
```

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

### 1. Clone the Repository

```bash
git clone <repository-url>
cd imho-uk-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Database Setup

1. Create a MySQL database:
```sql
CREATE DATABASE imho_uk;
```

2. Import the schema:
```bash
mysql -u your_username -p imho_uk < database/schema.sql
```

### 4. Environment Configuration

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Update the `.env` file with your database credentials:
```env
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=imho_uk
JWT_SECRET=your-super-secret-jwt-key
PORT=3001
```

### 5. Start the Application

Development mode (runs both frontend and backend):
```bash
npm run dev
```

Or run separately:

Backend only:
```bash
npm run server
```

Frontend only:
```bash
npm run client
```

## Usage

### Public Website

- Visit `http://localhost:3000` to view the public website
- Browse through different sections: Home, About, Projects, News, etc.
- Toggle between light and dark modes using the theme switcher

### Admin Panel

1. Navigate to `http://localhost:3000/admin/login`
2. Use default credentials:
   - Username: `admin`
   - Password: `admin123`
3. Access the admin dashboard to manage news articles

**Important**: Change the default admin password in production!

## Key Features

### Public Pages

- **Home**: Hero section, mission overview, latest news, current needs
- **About**: Organization information, history, team, FAQ
- **Projects**: Detailed project information and impact stories
- **News**: Latest updates and announcements
- **Get Involved**: Volunteer opportunities, internships, advisory roles
- **Donate**: Donation form and impact information
- **Contact**: Contact form and organization details

### Admin Features

- **Secure Login**: JWT-based authentication
- **News Management**: Create, edit, delete news articles
- **Rich Content**: Support for images and formatted text
- **Statistics Dashboard**: Overview of website metrics

### Technical Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Lazy loading, optimized images
- **Security**: Rate limiting, input validation, secure headers
- **SEO Friendly**: Meta tags, semantic HTML, structured data
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/verify` - Verify JWT token

### News
- `GET /api/news` - Get all news articles
- `GET /api/news/:id` - Get specific news article
- `POST /api/news` - Create news article (admin only)
- `PUT /api/news/:id` - Update news article (admin only)
- `DELETE /api/news/:id` - Delete news article (admin only)

### Utility
- `GET /api/health` - Health check endpoint

## Deployment

### Production Build

```bash
npm run build
```

### Environment Variables for Production

Ensure these environment variables are set in production:

- `DB_HOST` - Database host
- `DB_USER` - Database username
- `DB_PASSWORD` - Database password
- `DB_NAME` - Database name
- `JWT_SECRET` - Strong JWT secret key
- `PORT` - Server port (default: 3001)

### Security Considerations

1. **Change Default Credentials**: Update the default admin username/password
2. **Strong JWT Secret**: Use a strong, random JWT secret key
3. **Database Security**: Use strong database credentials and restrict access
4. **HTTPS**: Enable HTTPS in production
5. **Environment Variables**: Never commit sensitive data to version control

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email admin@imho-uk.org or create an issue in the repository.

## Acknowledgments

- IMHO-UK team and volunteers
- Contributors and supporters
- Open source community