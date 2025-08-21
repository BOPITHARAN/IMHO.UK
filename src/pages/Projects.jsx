import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import food1 from '../../assets/images/Food/food (1).jpg'
import food2 from '../../assets/images/Food/food (2).jpg'
import food3 from '../../assets/images/Food/food (3).jpg'
import food4 from '../../assets/images/Food/food (4).jpg'
import food5 from '../../assets/images/Food/food (5).jpg'
import food6 from '../../assets/images/Food/food (6).jpg'
import food7 from '../../assets/images/Food/food (7).jpg'
import food8 from '../../assets/images/Food/food (8).jpg'
import food9 from '../../assets/images/Food/food (9).jpg'
import food from '../../assets/images/Food/food.jpg'

import Primary1 from '../../assets/images/Primary/primary (1).jpg'
import Primary2 from '../../assets/images/Primary/primary (2).jpg'
import Primary3 from '../../assets/images/Primary/primary (3).jpg'
import Primary4 from '../../assets/images/Primary/primary (4).jpg'
import Primary5 from '../../assets/images/Primary/primary (5).jpg'
import Primary6 from '../../assets/images/Primary/primary (6).jpg'

import education1 from '../../assets/images/Education/education (1).jpg'
import education2 from '../../assets/images/Education/education (2).jpg'
import education3 from '../../assets/images/Education/education (3).jpg'
import education4 from '../../assets/images/Education/education (4).jpg'
import education5 from '../../assets/images/Education/education (5).jpg'
import education6 from '../../assets/images/Education/education (6).jpg'



const Projects = () => {
  const location = useLocation()

  const ProjectsHome = () => (
    <div className="min-h-screen pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Our Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our ongoing initiatives and completed projects that are making a real difference in communities worldwide.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div key={index} className="card overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div > <img src={project.image} alt="" /></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'Active'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                      {project.status}
                    </span>
                    <Link to={project.link} className="text-primary-600 dark:text-primary-400 hover:underline">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )

  const projectsData = [
    {
      title: 'Food and Flood Relief',
      description: '',
      image: food,
      status: 'Active',
      link: '/projects/flood-relief'
    },
    {
      title: '⁠Primary Care Assistance',
      description: '',
      image: Primary2,
      status: 'Active',
      link: '/projects/⁠Primary-Care'
    },
    {
      title: '⁠Educational Assistance',
      description: '',
      image: education2,
      status: 'Active',
      link: '/projects/⁠Educational-Assistance'
    },
    {
      title: '⁠Public Health Supports',
      description: '',
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Active',
      link: '/projects/⁠Public-Health'
    }
  ]

  // Individual project components
  const GenderEquality = () => (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          <Link to="/projects" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Primary Care Assistance</h1>
          {/* <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>Our Gender Equality Initiative focuses on improving opportunities and outcomes for women and girls in North and East Sri Lanka. This comprehensive program addresses systemic barriers and promotes equal participation in education, healthcare, and economic activities.</p>
            <h3>Key Components</h3>
            <ul>
              <li>Educational scholarships for girls</li>
              <li>Women's health awareness programs</li>
              <li>Economic empowerment workshops</li>
              <li>Leadership development training</li>
            </ul>
            <h3>Impact</h3>
            <p>Since launching this initiative, we have supported over 200 women and girls, providing them with the tools and opportunities needed to build better futures for themselves and their communities.</p>
          </div> */}
          <div className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="grid gap-3">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={Primary1}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={Primary2}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={Primary3}
                    alt=""
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={Primary4}
                    alt=""
                  />
                </div>

                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={Primary5}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={Primary6}
                    alt=""
                  />
                </div>
              </div>



            </div>
          </div>
        </div>
      </section>
    </div>
  )

  const WaterFiltration = () => (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          <Link to="/projects" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Educational Assistance</h1>
          {/* <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>Access to clean, safe drinking water is a fundamental human right. Our Water Filtration Project in Mullaitivu addresses the critical need for clean water in rural communities affected by contamination and infrastructure challenges.</p>
            <h3>Project Goals</h3>
            <ul>
              <li>Install community water filtration systems</li>
              <li>Train local technicians for maintenance</li>
              <li>Educate communities on water safety</li>
              <li>Monitor water quality regularly</li>
            </ul>
            <h3>Current Status</h3>
            <p>We have successfully installed 15 filtration systems serving over 3,000 community members. Each system is maintained by trained local volunteers, ensuring long-term sustainability.</p>
          </div> */}
          <div className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="grid gap-3">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={education1}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={education2}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={education3}
                    alt=""
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={education4}
                    alt=""
                  />
                </div>

                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={education5}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={education6}
                    alt=""
                  />
                </div>
              </div>



            </div>
          </div>
        </div>
      </section>
    </div>
  )

  const HomeGardening = () => (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          <Link to="/projects" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Mullaitivu Home Gardening Initiative</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>Food security is essential for healthy communities. Our Home Gardening Initiative empowers families in Mullaitivu to grow their own nutritious food, reducing dependency and improving dietary diversity.</p>
            <h3>Program Features</h3>
            <ul>
              <li>Seed and tool distribution</li>
              <li>Organic farming training</li>
              <li>Composting workshops</li>
              <li>Harvest sharing networks</li>
            </ul>
            <h3>Benefits</h3>
            <p>Participating families report improved nutrition, reduced food costs, and increased community cooperation. The program has reached 150 households and continues to expand.</p>
          </div>
        </div>
      </section>
    </div>
  )

  const PalliativeCare = () => (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          <Link to="/projects" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Northern Province Palliative Care Initiative</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>Our Palliative Care Initiative is an international collaborative effort aimed at easing pain and improving quality of life for patients and families facing serious illnesses in the Northern Province of Sri Lanka.</p>
            <h3>Services Provided</h3>
            <ul>
              <li>Pain management training for healthcare workers</li>
              <li>Home-based care support</li>
              <li>Family counseling and support</li>
              <li>Medical equipment provision</li>
            </ul>
            <h3>Partnerships</h3>
            <p>This initiative is conducted in partnership with local hospitals, international medical organizations, and trained volunteers who provide compassionate care to those in need.</p>
          </div>
        </div>
      </section>
    </div>
  )

  const ToiletFacilities = () => (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          <Link to="/projects" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Toilet Facilities in Vanni Area</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>Proper sanitation facilities are crucial for public health and dignity. Our completed project in the Vanni area focused on constructing and improving toilet facilities for underserved communities.</p>
            <h3>Project Achievements</h3>
            <ul>
              <li>Built 50 new toilet facilities</li>
              <li>Renovated 25 existing structures</li>
              <li>Provided hygiene education</li>
              <li>Established maintenance protocols</li>
            </ul>
            <h3>Long-term Impact</h3>
            <p>This project has significantly improved sanitation conditions for over 1,000 community members, reducing waterborne diseases and improving overall health outcomes in the region.</p>
          </div>
        </div>
      </section>
    </div>
  )

  const FloodRelief = () => (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          {/* Back to Projects Link */}
          <Link
            to="/projects"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </Link>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Food and Flood Relief
          </h1>

          {/* Description */}
          {/* <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              In response to the devastating floods of 2024, IMHO-UK launched an
              emergency relief operation to support affected communities with
              immediate aid and long-term recovery assistance.
            </p>

            <h3>Emergency Response</h3>
            <ul>
              <li>Emergency food and water distribution</li>
              <li>Temporary shelter assistance</li>
              <li>Medical aid and supplies</li>
              <li>Evacuation support</li>
            </ul>

            <h3>Recovery Phase</h3>
            <p>
              Our ongoing recovery efforts focus on rebuilding infrastructure,
              restoring livelihoods, and strengthening community resilience
              against future disasters.
            </p>

            <h3>Current Needs</h3>
            <p>
              We continue to seek support for reconstruction efforts, including
              rebuilding homes, schools, and healthcare facilities damaged by
              the floods.
            </p>
          </div> */}

          {/* Gallery Section */}
          <div className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="grid gap-3">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={food8}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={food1}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={food2}
                    alt=""
                  />
                </div>
              </div>

              <div className="grid gap-3">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={food9}
                    alt=""
                  />
                </div>

                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={food3}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={food4}
                    alt=""
                  />
                </div>
              </div>

              <div className="grid gap-3">

                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={food7}
                    alt=""
                  />
                </div>


                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={food6}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={food5}
                    alt=""
                  />
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  )

  const RecentProjects = () => (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-max">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Recent Projects</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.filter(project => project.status === 'Active').map((project, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <Link to={project.link} className="text-primary-600 dark:text-primary-400 hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )

  // Navigation for Projects section
  const projectNavItems = [
    { name: 'All Projects', path: '/projects' },
    { name: 'Recent Projects', path: '/projects/recent' }
  ]

  return (
    <div>
      {/* Sub-navigation */}
      <div className="bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700 pt-20">
        <div className="container-max">
          <nav className="flex space-x-8 py-4">
            {projectNavItems.map((item) => (
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
        <Route path="/" element={<ProjectsHome />} />
        <Route path="/⁠Primary-Care" element={<GenderEquality />} />
        <Route path="/⁠Educational-Assistance" element={<WaterFiltration />} />
        <Route path="/⁠Public-Health" element={<HomeGardening />} />
        <Route path="/flood-relief" element={<FloodRelief />} />
        <Route path="/recent" element={<RecentProjects />} />
      </Routes>
    </div>
  )
}

export default Projects