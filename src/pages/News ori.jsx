import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Newss = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      const response = await axios.get('/api/news')
      setNews(response.data)
    } catch (error) {
      console.error('Error fetching news:', error)
      setError('Failed to load news articles')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
          <button 
            onClick={fetchNews}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Latest News & Updates</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay informed about our latest initiatives, impact stories, and community outreach programs.
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="section-padding">
        <div className="container-max">
          {news.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">No News Articles Yet</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                We're working on bringing you the latest updates. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((article, index) => (
                <article 
                  key={article.id} 
                  className="card overflow-hidden animate-slide-up" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {article.image_url && (
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${article.image_url})` }}
                    ></div>
                  )}
                  <div className="p-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {new Date(article.created_at).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {article.content.substring(0, 150)}...
                    </p>
                    <Link 
                      to={`/news/${article.id}`}
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Newss