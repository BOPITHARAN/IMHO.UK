import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import invitationImage from '../../assets/images/News/Image 2025 i.jpg'
import eventImage from '../../assets/images/News/Image 2025.jpg'

const News = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  // Sample static data
  const sampleNews = [
    {
      id: 1,
      title: "IMHO UK Charity Gala 2025",
      content:
        "✨ Save the Date ✨Join us for the IMHO UK Charity Gala 2025 in aid of Primary Care Development in UK. 💙 📅 Sunday, 5th October 2025 📍 Crystal Banqueting Hall, Uxbridge Road, London ⏰ Doors open 5:30 PM An evening of compassion, community, and change – together, let’s make a difference! 🌍❤",
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
      setNews(sampleNews)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Latest News & Updates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay informed about our latest initiatives, impact stories, and
            community outreach programs.
          </p>
        </div>
      </section>


      {/* News Articles */}
      <section className="section-padding">
        <div className="container-max">
          {news.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                No News Articles Yet
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                We're working on bringing you the latest updates. Check back
                soon!
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
                      className="h-80 md:h-96 bg-cover bg-center rounded-lg shadow-lg"
                      style={{ backgroundImage: `url(${article.image_url})` }}
                    ></div>
                  )}

                  <div className="p-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {new Date(article.created_at).toLocaleDateString(
                        "en-GB",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
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
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
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

export default News
