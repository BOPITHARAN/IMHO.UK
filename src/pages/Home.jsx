import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import homepagephoto from '../../assets/images/home-page-img.jpg'

const Home = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchLatestNews()
  }, [])

  const fetchLatestNews = async () => {
    try {
      const response = await axios.get('/api/news?limit=3')
      setNews(response.data)
    } catch (error) {
      console.error('Error fetching news:', error)
    } finally {
      setLoading(false)
    }
  }

  const stats = [
    { number: '15+', label: 'Years of Service' },
    { number: '10', label: 'Countries Reached' },
    { number: '35+', label: 'Hospitals & Clinics Supported' },
    { number: '2000+', label: 'Lives Impacted' }
  ]

const focusAreas = [
  {
    title: 'Healthcare Access',
    description: 'Supporting the development of self-sustaining healthcare solutions that promote long-term resilience and self-reliance.',
    icon: '🏥',
    location1: 'Refurbishment of A&E at Thellippalai',
    location2: 'Provision of healthcare facilities in the village of Thenamaravaady'
  },
  {
    title: 'Education & Support',
    description: 'Supplementary education support for underprivileged children.',
    icon: '📚'
  },
  {
    title: 'Community Partnerships',
    description: 'Partnering with local and international organizations to maximize impact and reach those in greatest need.',
    icon: '🤝',
    location1: 'Jaffna Jaipur Center',
    location2: 'Thenamaravaady Health Center'
  }
];


  const currentNeeds = [
  {
    title: 'Jaffna Jaipur Center',
    description: 'Provision of prosthetic limbs for everyone.',
    image: 'https://www.jjcdr.com/wp-content/uploads/2022/06/bg.jpg'
  },
  {
    title: 'Supplementary Education',
    description: 'Providing support for underprivileged children.',
    image: 'https://i.pinimg.com/1200x/3a/9f/85/3a9f85f11847b481569c95b5745a6109.jpg'
  },
  {
    title: 'Healthcare Access',
    description: 'Providing resources and facilities to all communities.',
    image: 'https://i.pinimg.com/1200x/2b/34/dd/2b34ddbb183668e13244861c2d526969.jpg'
  }
];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${homepagephoto})` }}
        ></div>

        {/* Gradient + Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/70 via-primary-700/70 to-primary-800/70"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 container-max text-center text-white px-4">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight">
              International Medical
              Health Organization
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              "Through collaboration and compassion, we strive to create lasting impact and inspire positive change worldwide."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/about" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20">
                Learn More
              </Link>
              <Link to="/donate" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Donate Now
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              IMHO-UK envisions a world where every individual, regardless of their circumstances, 
              has access to quality healthcare and the opportunity for a healthier future. Our focus is 
              on improving the physical and mental well-being of those most vulnerable—particularly communities 
              affected by poverty, conflict, and natural disasters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="card p-8 text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{area.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{area.description}</p>
                <p className="text-gray-500 dark:text-gray-300 mt-2">
                  {area.location1 ? ` ${area.location1}` : '   '} <br />
                  {area.location2 ? ` ${area.location2}` : '   '}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Needs Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Current Needs</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Your support can make an immediate difference in these critical areas where help is needed most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentNeeds.map((need, index) => (
              <div key={index} className="card overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${need.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{need.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{need.description}</p>
                  <Link to="/donate" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
                    Help Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Recent Activities</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Stay updated with our latest initiatives and impact stories.
              </p>
            </div>
            <Link to="/news" className="btn-secondary hidden sm:inline-block">
              View All News
            </Link>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="loading-spinner"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {news.map((article, index) => (
                <article key={article.id} className="card overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  {article.image_url && (
                    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${article.image_url})` }}></div>
                  )}
                  <div className="p-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {new Date(article.created_at).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {article.content.substring(0, 150)}...
                    </p>
                    <Link
                      to={`/news/${article.id}`}
                      className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="text-center mt-8 sm:hidden">
            <Link to="/news" className="btn-secondary">
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join us in our mission to provide healthcare access and support to communities in need worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20">
              Get Involved
            </Link>
            <Link to="/donate" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Donate Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
