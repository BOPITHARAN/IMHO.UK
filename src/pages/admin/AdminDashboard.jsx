import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'

const AdminDashboard = () => {
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('news')
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const [showNewsForm, setShowNewsForm] = useState(false)
  const [editingNews, setEditingNews] = useState(null)
  const [newsForm, setNewsForm] = useState({
    title: '',
    content: '',
    image_url: ''
  })

  useEffect(() => {
    if (activeTab === 'news') {
      fetchNews()
    }
  }, [activeTab])

  const fetchNews = async () => {
    setLoading(true)
    try {
      const response = await axios.get('/api/news')
      setNews(response.data)
    } catch (error) {
      console.error('Error fetching news:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleNewsFormChange = (e) => {
    setNewsForm({
      ...newsForm,
      [e.target.name]: e.target.value
    })
  }

  const handleNewsSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (editingNews) {
        await axios.put(`/api/news/${editingNews.id}`, newsForm)
      } else {
        await axios.post('/api/news', newsForm)
      }
      
      setNewsForm({ title: '', content: '', image_url: '' })
      setShowNewsForm(false)
      setEditingNews(null)
      fetchNews()
    } catch (error) {
      console.error('Error saving news:', error)
      alert('Error saving news article')
    } finally {
      setLoading(false)
    }
  }

  const handleEditNews = (article) => {
    setEditingNews(article)
    setNewsForm({
      title: article.title,
      content: article.content,
      image_url: article.image_url || ''
    })
    setShowNewsForm(true)
  }

  const handleDeleteNews = async (id) => {
    if (window.confirm('Are you sure you want to delete this news article?')) {
      try {
        await axios.delete(`/api/news/${id}`)
        fetchNews()
      } catch (error) {
        console.error('Error deleting news:', error)
        alert('Error deleting news article')
      }
    }
  }

  const resetNewsForm = () => {
    setNewsForm({ title: '', content: '', image_url: '' })
    setEditingNews(null)
    setShowNewsForm(false)
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Welcome back, {user?.username}
            </p>
          </div>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('news')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'news'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              News Management
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'stats'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Statistics
            </button>
          </nav>
        </div>

        {/* News Management Tab */}
        {activeTab === 'news' && (
          <div className="space-y-6">
            {/* Add News Button */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">News Articles</h2>
              <button
                onClick={() => setShowNewsForm(true)}
                className="btn-primary"
              >
                Add New Article
              </button>
            </div>

            {/* News Form Modal */}
            {showNewsForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {editingNews ? 'Edit Article' : 'Add New Article'}
                    </h3>
                    <button
                      onClick={resetNewsForm}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <form onSubmit={handleNewsSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={newsForm.title}
                        onChange={handleNewsFormChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Image URL
                      </label>
                      <input
                        type="url"
                        name="image_url"
                        value={newsForm.image_url}
                        onChange={handleNewsFormChange}
                        placeholder="https://example.com/image.jpg"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Content *
                      </label>
                      <textarea
                        name="content"
                        value={newsForm.content}
                        onChange={handleNewsFormChange}
                        required
                        rows={10}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    
                    <div className="flex space-x-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary disabled:opacity-50"
                      >
                        {loading ? 'Saving...' : (editingNews ? 'Update Article' : 'Create Article')}
                      </button>
                      <button
                        type="button"
                        onClick={resetNewsForm}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* News List */}
            {loading ? (
              <div className="flex justify-center py-8">
                <div className="loading-spinner"></div>
              </div>
            ) : (
              <div className="grid gap-6">
                {news.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-600 dark:text-gray-400">No news articles yet.</p>
                  </div>
                ) : (
                  news.map((article) => (
                    <div key={article.id} className="card p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">
                            {new Date(article.created_at).toLocaleDateString('en-GB', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                            {article.content.substring(0, 200)}...
                          </p>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <button
                            onClick={() => handleEditNews(article)}
                            className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-lg"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDeleteNews(article.id)}
                            className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900 rounded-lg"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}

        {/* Statistics Tab */}
        {activeTab === 'stats' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Website Statistics</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {news.length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">News Articles</div>
              </div>
              
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  18+
                </div>
                <div className="text-gray-600 dark:text-gray-400">Years of Service</div>
              </div>
              
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  19
                </div>
                <div className="text-gray-600 dark:text-gray-400">Countries Reached</div>
              </div>
              
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  35+
                </div>
                <div className="text-gray-600 dark:text-gray-400">Hospitals Supported</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard