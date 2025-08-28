import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const NewsDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Same mock data as News.jsx
  const sampleNews = [
    {
      id: 1,
      title: "IMHO-UK Launches New Health Initiative",
      content:
        `✨ Save the Date ✨Join us for the IMHO UK Charity Gala 2025 in aid of Primary Care Development in UK. 💙 📅 Sunday, 5th October 2025 📍 Crystal Banqueting Hall, Uxbridge Road, London ⏰ Doors open 5:30 PM An evening of compassion, community, and change – together, let’s make a difference! 🌍❤`,
      image_url: "https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/539114026_122095177107001487_2571345977508872008_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YqcdaDHllQYQ7kNvwEFlo96&_nc_oc=AdkSxtzq5o-pA7beLAp_toQ8zl5SG7bIY_Mjc0m09i2fb2-n8F24j403YZ8LaRYvatU&_nc_zt=23&_nc_ht=scontent.fcmb2-2.fna&_nc_gid=bhstyDl3xq83Mr3TTgYl8A&oh=00_AfV_yGQDeLNJzAXJaw3JKILEEKQNp10df19AZp5Ox--mvA&oe=68B63800",
      created_at: "2025-08-15",
    },

    {
      id: 2,
      title: "IMHO-UK Launches New Health Initiative",
      content:
        `✨ Join us at the IMHO UK Charity Gala 2025 ✨
            An evening of fine dining, live music, and dance in support of the Jaffna Jaipur Prosthetic Centre and Online Educational Facilities for Orphanages.
            📅 Sunday, 5th October 2025
            📍 Crystal Banqueting Hall, London
            🎟️ Tickets: £50pp` ,
      image_url: "https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/539324296_122095209333001487_1047298803308266828_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zR3PksS-7fsQ7kNvwE1HkJN&_nc_oc=AdkMCLekTUXqWMl5XuDcEB67QttM7peGG8RuH4qeIA2_Jcz2Mo67jAI7KVt6Q6y3joE&_nc_zt=23&_nc_ht=scontent.fcmb2-2.fna&_nc_gid=9aKUhSKKA8Xl73KhEVYtyg&oh=00_AfUUk6WqIvQomFJ7RXG1YepJU5cf3Hkpor8y6ZFmIWnTag&oe=68B65DE2",
      created_at: "2025-08-15",
    },

  ]

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      const foundArticle = sampleNews.find(
        (item) => item.id === parseInt(id, 10)
      )
      if (foundArticle) {
        setArticle(foundArticle)
      } else {
        setError('Article not found')
      }
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [id])

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
            onClick={() => navigate('/news')}
            className="btn-primary"
          >
            Back to News
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      <article className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/news"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {new Date(article.created_at).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              {article.title}
            </h1>
          </header>

          {/* Featured Image */}
          {article.image_url && (
            <div className="mb-8">
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
              {article.content}
            </div>
          </div>

          {/* Share Section */}
<div className="mt-12 pt-8 border-t dark:border-gray-700">
  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
    Share this article
  </h3>
  <div className="flex space-x-4">
    {/* Twitter */}
    <a
      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
    >
      <span>Twitter</span>
    </a>

    {/* Facebook */}
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors duration-200"
    >
      <span>Facebook</span>
    </a>

    {/* LinkedIn */}
    <a
      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(article.title)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
    >
      <span>LinkedIn</span>
    </a>
  </div>
</div>


          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">More News</h3>
            <Link
              to="/news"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
            >
              View all news articles
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

export default NewsDetail
