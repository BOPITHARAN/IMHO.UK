import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import homepagephoto1 from '../../assets/images/1.jpg'
import homepagephoto2 from '../../assets/images/2.jpg'
import homepagephoto3 from '../../assets/images/3.jpg'
import homepagephoto4 from '../../assets/images/4.jpg'
import healthcare from '../../assets/images/health care.jpg'

const Home = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Image Slider Photos
  const sliderImages = [
    homepagephoto1,
    homepagephoto2,
    homepagephoto3,
    homepagephoto4
  ]

  // Static sample news
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
    // Simulate API delay
    const timer = setTimeout(() => {
      setNews(sampleNews)
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Auto Slide every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [sliderImages.length])

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
    }
  ]

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
      image: healthcare
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0">
          {sliderImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 container-max text-center text-white px-4">
          <div className="animate-fade-in"></div>
        </div>

        {/* Slider Controls */}
        <div className="absolute inset-x-0 bottom-8 flex justify-center space-x-3 z-10">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
            ></button>
          ))}
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
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
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
              IMHO-UK envisions a world where every individual, regardless of their circumstances, has access to quality healthcare and the opportunity for a healthier future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="card p-8 text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-7xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{area.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{area.description}</p>
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
              <p className="text-lg text-gray-600 dark:text-gray-400">Stay updated with our latest initiatives and impact stories.</p>
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
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{article.content.substring(0, 150)}...</p>
                    <Link to={`/news/${article.id}`} className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
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