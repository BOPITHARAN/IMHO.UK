import React from 'react'

const Publications = () => {
  const publications = [
    {
      title: 'IMHO-UK Newsletter - Winter 2024',
      description: 'Our latest newsletter featuring updates on current projects, success stories, and upcoming events.',
      date: 'December 2024',
      type: 'Newsletter',
      downloadUrl: '#'
    },
    {
      title: 'Annual Impact Report 2023',
      description: 'Comprehensive report on our achievements, financial transparency, and impact metrics for 2023.',
      date: 'January 2024',
      type: 'Annual Report',
      downloadUrl: '#'
    },
    {
      title: 'Healthcare Access in Post-Conflict Regions',
      description: 'Research paper on challenges and solutions for healthcare delivery in post-conflict areas.',
      date: 'September 2023',
      type: 'Research Paper',
      downloadUrl: '#'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Publications</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Access our newsletters, reports, and research publications to stay informed about our work and impact.
          </p>
        </div>
      </section>

      {/* Publications List */}
      <section className="section-padding">
        <div className="container-max">
          {publications.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Publications Coming Soon</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                We're preparing our publications for download. Check back soon for newsletters, reports, and research papers.
              </p>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-8">
              {publications.map((publication, index) => (
                <div key={index} className="card p-8 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1 mb-4 md:mb-0">
                      <div className="flex items-center mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium mr-3 ${
                          publication.type === 'Newsletter' 
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            : publication.type === 'Annual Report'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                        }`}>
                          {publication.type}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{publication.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {publication.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {publication.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <a
                        href={publication.downloadUrl}
                        className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-16 card p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Subscribe to our newsletter to receive the latest updates, reports, and publications directly in your inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
              <button
                type="submit"
                className="btn-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Publications