import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

const GetInvolved = () => {
  const location = useLocation()

  const GetInvolvedHome = () => (
    <div className="min-h-screen pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Get Involved</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join our mission to improve healthcare access and support communities in need. There are many ways to make a difference.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {involvementOptions.map((option, index) => (
              <div key={index} className="card p-8 text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{option.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{option.description}</p>
                <Link to={option.link} className="btn-primary">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )

  const involvementOptions = [
    {
      title: 'Share My Day',
      description: 'Share your experiences and stories to inspire others and raise awareness about our cause.',
      icon: '📝',
      link: '/get-involved/share-my-day'
    },
    {
      title: 'In Memoriam',
      description: 'Honor loved ones by supporting our healthcare initiatives in their memory.',
      icon: '🕊️',
      link: '/get-involved/memoriam'
    },
    {
      title: 'Volunteers',
      description: 'Join our team of dedicated volunteers and contribute your skills to make a direct impact.',
      icon: '🤝',
      link: '/get-involved/volunteers'
    },
    {
      title: 'Internships',
      description: 'Gain valuable experience while contributing to meaningful healthcare projects.',
      icon: '🎓',
      link: '/get-involved/internships'
    },
    {
      title: 'Advisors',
      description: 'Share your expertise and help guide our strategic initiatives and programs.',
      icon: '💡',
      link: '/get-involved/advisors'
    }
  ]

  // Individual involvement pages
  const ShareMyDay = () => (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          <Link to="/get-involved" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Get Involved
          </Link>
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Share My Day</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>Your story matters. Share My Day is a platform where supporters, volunteers, and beneficiaries can share their experiences and inspire others to join our mission.</p>
            <h3>How to Participate</h3>
            <ul>
              <li>Write about your experience with IMHO-UK</li>
              <li>Share photos from volunteer activities</li>
              <li>Tell us how our work has impacted you</li>
              <li>Inspire others to get involved</li>
            </ul>
            <p>Contact us at <a href="mailto:stories@imho-uk.org">stories@imho-uk.org</a> to share your story.</p>
          </div>
        </div>
      </section>
    </div>
  )

  const InMemoriam = () => (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          <Link to="/get-involved" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Get Involved
          </Link>
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">In Memoriam</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>Honor the memory of your loved ones by supporting our healthcare initiatives. Memorial donations create lasting legacies that continue to help communities in need.</p>
            <h3>Memorial Options</h3>
            <ul>
              <li>Dedicated project funding</li>
              <li>Memorial plaques and recognition</li>
              <li>Annual memorial events</li>
              <li>Family tribute pages</li>
            </ul>
            <p>For more information about memorial giving, please contact us at <a href="mailto:memorial@imho-uk.org">memorial@imho-uk.org</a>.</p>
          </div>
        </div>
      </section>
    </div>
  )

  const Volunteers = () => (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          <Link to="/get-involved" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Get Involved
          </Link>
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Volunteer Opportunities</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>Join our dedicated team of volunteers and make a direct impact on communities in need. We welcome volunteers from all backgrounds and skill levels.</p>
            <h3>Volunteer Roles</h3>
            <ul>
              <li>Event organization and coordination</li>
              <li>Fundraising campaign support</li>
              <li>Social media and communications</li>
              <li>Administrative assistance</li>
              <li>Field work and project implementation</li>
            </ul>
            <h3>Requirements</h3>
            <ul>
              <li>Commitment to our mission and values</li>
              <li>Reliable and responsible</li>
              <li>Good communication skills</li>
              <li>Willingness to learn and adapt</li>
            </ul>
            <p>Ready to volunteer? Contact us at <a href="mailto:volunteers@imho-uk.org">volunteers@imho-uk.org</a>.</p>
          </div>
        </div>
      </section>
    </div>
  )

  const Internships = () => (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          <Link to="/get-involved" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Get Involved
          </Link>
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Internship Program</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>Our internship program offers students and recent graduates the opportunity to gain valuable experience while contributing to meaningful healthcare projects.</p>
            <h3>Internship Areas</h3>
            <ul>
              <li>Public Health and Epidemiology</li>
              <li>Project Management</li>
              <li>Communications and Marketing</li>
              <li>Data Analysis and Research</li>
              <li>Grant Writing and Fundraising</li>
            </ul>
            <h3>What We Offer</h3>
            <ul>
              <li>Hands-on experience in international development</li>
              <li>Mentorship from experienced professionals</li>
              <li>Networking opportunities</li>
              <li>Certificate of completion</li>
              <li>Potential for future employment</li>
            </ul>
            <p>Interested in an internship? Send your CV and cover letter to <a href="mailto:internships@imho-uk.org">internships@imho-uk.org</a>.</p>
          </div>
        </div>
      </section>
    </div>
  )

  const Advisors = () => (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          <Link to="/get-involved" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Get Involved
          </Link>
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Advisory Board</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>We seek experienced professionals to join our advisory board and help guide our strategic initiatives and programs with their expertise.</p>
            <h3>Advisory Areas</h3>
            <ul>
              <li>Medical and Healthcare Expertise</li>
              <li>International Development</li>
              <li>Finance and Accounting</li>
              <li>Legal and Regulatory Affairs</li>
              <li>Technology and Innovation</li>
              <li>Marketing and Communications</li>
            </ul>
            <h3>Advisor Responsibilities</h3>
            <ul>
              <li>Provide strategic guidance and expertise</li>
              <li>Attend quarterly advisory meetings</li>
              <li>Review and advise on key initiatives</li>
              <li>Support fundraising efforts when appropriate</li>
              <li>Advocate for IMHO-UK's mission</li>
            </ul>
            <p>If you're interested in becoming an advisor, please contact us at <a href="mailto:advisors@imho-uk.org">advisors@imho-uk.org</a>.</p>
          </div>
        </div>
      </section>
    </div>
  )

  // Navigation for Get Involved section
  const involvedNavItems = [
    { name: 'Overview', path: '/get-involved' },
    { name: 'Volunteers', path: '/get-involved/volunteers' },
    { name: 'Internships', path: '/get-involved/internships' }
  ]

  return (
    <div>
      {/* Sub-navigation */}
      <div className="bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700 pt-20">
        <div className="container-max">
          <nav className="flex space-x-8 py-4">
            {involvedNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<GetInvolvedHome />} />
        <Route path="/share-my-day" element={<ShareMyDay />} />
        <Route path="/memoriam" element={<InMemoriam />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/advisors" element={<Advisors />} />
      </Routes>
    </div>
  )
}

export default GetInvolved