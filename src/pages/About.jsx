import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

const About = () => {
  const location = useLocation()

  const AboutHome = () => (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">About IMHO-UK</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              The UK chapter of the International Medical Health Organization (IMHO-UK) is an international humanitarian organization that focuses on developing health infrastructure and addressing the unmet needs of disenfranchised communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Story</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  IMHO UK formed in 2010 and is a registered not-for-profit organization in the United Kingdom with the mission/vision of other chapters of the IMHO. Although IMHO UK shares a close relationship with IMHO USA, IMHO Canada, and IMHO Lanka, it is an independent organization driven by its own Board of Directors and Team.
                </p>
                <p>
                  As of November 2024, IMHO-UK is a registered Charity with the Charity Commission for England and Wales. The registered charity number is 1211442.
                </p>
                <p>
                  We are dedicated to strengthening healthcare systems in underserved regions by identifying critical needs, mobilizing resources, and delivering targeted training programs that empower local communities to develop sustainable, self-sufficient healthcare solutions.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Registration & Charity Status</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-gray-900 dark:text-white">Inception:</strong>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">November 2010</span>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Company No:</strong>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">07437265</span>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Charity No:</strong>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">1211442</span>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Status:</strong>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">Registered Charity (December 2024)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                IMHO-UK envisions a world where everyone has access to quality healthcare and the opportunity for a healthier future. We focus on supporting the development of self-sustaining healthcare solutions that promote long-term resilience and self-reliance.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To improve the physical and mental well-being of those most vulnerable—particularly communities affected by poverty, conflict, and natural disasters—through sustainable healthcare solutions and educational empowerment.
              </p>
            </div>
          </div>

          {/* Goals */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Our Goals</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">Immediate</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Increase volunteer membership</li>
                  <li>• Organize fundraising events</li>
                  <li>• Support rehabilitation projects</li>
                  <li>• Improve healthcare access</li>
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">Intermediate</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Establish additional UK chapters</li>
                  <li>• Work with other IMHO chapters</li>
                  <li>• Access EU-regional health projects</li>
                  <li>• Secure additional funding</li>
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">Long Term</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Improve global health outcomes</li>
                  <li>• Assist dignified living</li>
                  <li>• Train medical professionals</li>
                  <li>• Create sustainable impact</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What Makes Us Unique */}
          <div className="card p-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Why IMHO-UK is Unique</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
              IMHO-UK solely depends on member contributions and fundraisers from the greater London area, but we hope to expand membership across the UK in the coming years. We have no overhead costs and 100% of the funds raised are used to support the most urgent projects. We support urgent seed projects that can be sustainable in due course.
            </p>
          </div>
        </div>
      </section>
    </div>
  )

  const Team = () => (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Team</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Meet the dedicated individuals working to make healthcare accessible worldwide.
            </p>
          </div>
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400"> <h2 className=' texh-lg'>Board of trustees </h2> <br />
              - Dr S Sivakumar <br />
              - Dr K Jeyanthan <br />
              - Mr G Rajkumar <br />
              - Mr A Maxwell <br />
              - Mr V Sritharan</p>
          </div>
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400"> <h2 className=' texh-lg'>Officers and Team Members</h2> <br />
              - Mr Sritharan <br />
              - Mr Mariampillai <br />
              - Mr Ganendran <br />
              - Mr Muhunthan <br /> 
              - Mr Neranjan <br />
              - Mr Sivapooranan <br />
              - Mr Sivachelam <br />
              - Mr Thiraviathasan <br />
              - Mr Thanabalasingam </p>
          </div>
        </div>
      </section>
    </div>
  )

  const History = () => (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our History</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The journey of IMHO-UK from inception to becoming a registered charity.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">November 2010 - Inception</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  IMHO-UK was incorporated as a private limited company under the Companies Act of 2006, with company number 07437265.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">2010-2024 - Growth & Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Over 14 years of dedicated service, building partnerships and supporting healthcare initiatives across 19 countries.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">December 2024 - Charity Status</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  IMHO-UK achieved registered charity status with the Charity Commission for England and Wales (Charity No: 1211442).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  const FAQ = () => (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Common questions about IMHO-UK and our work.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What does IMHO-UK do?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                IMHO-UK focuses on developing health infrastructure and addressing unmet needs of disenfranchised communities worldwide through sustainable healthcare solutions and educational programs.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How can I get involved?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                You can get involved by volunteering, making donations, participating in fundraising events, or spreading awareness about our mission.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Where do donations go?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                100% of donations go directly to supporting our projects. We have no overhead costs, ensuring maximum impact from every contribution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  // Navigation for About section
  const aboutNavItems = [
    { name: 'Overview', path: '/about' },
    { name: 'Our Team', path: '/about/team' },
    { name: 'History', path: '/about/history' },
    { name: 'FAQ', path: '/about/faq' }
  ]

  return (
    <div>
      {/* Sub-navigation */}
      <div className="bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700 pt-20">
        <div className="container-max">
          <nav className="flex space-x-8 py-4">
            {aboutNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${location.pathname === item.path
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
        <Route path="/" element={<AboutHome />} />
        <Route path="/team" element={<Team />} />
        <Route path="/history" element={<History />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  )
}

export default About