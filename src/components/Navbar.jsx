import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import imhologo from '../../assets/images/imho-logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/about',
      submenu: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Our Team', path: '/about/team' },
        { name: 'History', path: '/about/history' },
        { name: 'FAQ', path: '/about/faq' }
      ]
    },
    {
      name: 'Projects',
      path: '/projects',
      submenu: [
        { name: 'Gender Equality Initiative', path: '/projects/gender-equality' },
        { name: 'Water Filtration', path: '/projects/water-filtration' },
        { name: 'Home Gardening', path: '/projects/home-gardening' },
        { name: 'Palliative Care', path: '/projects/palliative-care' },
        { name: 'Toilet Facilities', path: '/projects/toilet-facilities' },
        { name: 'Recent Projects', path: '/projects/recent' },
        { name: 'Flood Relief 2024', path: '/projects/flood-relief' }
      ]
    },
    {
      name: 'IMHO 360',
      path: '/imho-360',
      submenu: [
        { name: '360 Home', path: '/imho-360/home' },
        { name: 'Donor Dashboard', path: '/imho-360/donors' },
        { name: 'Recipients', path: '/imho-360/recipients' },
        { name: 'Administration', path: '/imho-360/admin' },
        { name: 'Coordination', path: '/imho-360/coordination' },
        { name: 'Events', path: '/imho-360/events' }
      ]
    },
    {
      name: 'Get Involved',
      path: '/get-involved',
      submenu: [
        { name: 'Share My Day', path: '/get-involved/share-my-day' },
        { name: 'In Memoriam', path: '/get-involved/memoriam' },
        { name: 'Volunteers', path: '/get-involved/volunteers' },
        { name: 'Internships', path: '/get-involved/internships' },
        { name: 'Advisors', path: '/get-involved/advisors' }
      ]
    },
    {
      name: 'Publications',
      path: '/publications'
    },
    {
      name: 'News',
      path: '/news'
    }
  ]

  return (
    <nav className={`w-full z-50  duration-30`}>
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          <img src={imhologo} alt="" width={200} />
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-50 bg-primary-600 rounded-lg flex items-center justify-center">
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">IMHO-UK</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">International Medical Health Organization</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary-600 dark:hover:text-primary-400 ${location.pathname === item.path
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300'
                    }`}
                >
                  {item.name}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Donate Button */}
            <Link to="/donate" className="btn-primary hidden sm:inline-block">
              Donate Now
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-6 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/donate"
                className="block mx-4 mt-4 btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar