import React, { useState } from 'react'

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState('one-time')

  const predefinedAmounts = ['25', '50', '100', '250', '500']

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value)
    setSelectedAmount('')
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference Today</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Your donation directly supports healthcare initiatives and community development projects that save lives and improve futures.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-md mx-auto">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-sm opacity-90">of your donation goes directly to our projects</div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Choose Your Donation</h2>
              
              {/* Donation Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
                  Donation Type
                </label>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`flex-1 py-2 px-4 rounded-lg border-2 transition-colors duration-200 ${
                      donationType === 'one-time'
                        ? 'border-primary-600 bg-primary-50 text-primary-600 dark:bg-primary-900 dark:text-primary-400'
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-2 px-4 rounded-lg border-2 transition-colors duration-200 ${
                      donationType === 'monthly'
                        ? 'border-primary-600 bg-primary-50 text-primary-600 dark:bg-primary-900 dark:text-primary-400'
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
                  Select Amount (£)
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`py-3 px-4 rounded-lg border-2 transition-colors duration-200 ${
                        selectedAmount === amount
                          ? 'border-primary-600 bg-primary-50 text-primary-600 dark:bg-primary-900 dark:text-primary-400'
                          : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-300'
                      }`}
                    >
                      £{amount}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              {/* Personal Information */}
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              {/* Dedication */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Make this donation in honor or memory of someone
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button className="w-full btn-primary text-lg py-4">
                Donate £{selectedAmount || customAmount || '0'} {donationType === 'monthly' ? 'Monthly' : 'Now'}
              </button>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                Your donation is secure and encrypted. You will receive a confirmation email with your donation receipt.
              </p>
            </div>

            {/* Impact Information */}
            <div className="space-y-8">
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Donation Value</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 dark:text-primary-400 font-bold">£25</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Provides medical supplies</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Essential medicines for 5 patients</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 dark:text-primary-400 font-bold">£50</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Supports clean water access</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Water filtration for one family</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 dark:text-primary-400 font-bold">£100</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Funds healthcare training</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Training for one healthcare worker</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Why Donate to IMHO-UK?</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>100% of donations go directly to projects</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Registered UK charity (No. 1211442)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>15+ years of proven impact</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Transparent reporting and accountability</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Other Ways to Give</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong className="text-gray-900 dark:text-white">Bank Transfer:</strong><br />
                    Account: INTERNATIONAL MEDICAL HEALTH ORGANI SATION UK<br />
                    Sort Code: 23-05-80<br />
                    Account Number: 56405476 <br />
                    IBAN : GB57 MYMB 2305 8056 4054 76
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong className="text-gray-900 dark:text-white">Gift Aid:</strong> If you are a UK taxpayer, please consider adding Gift Aid to your donation. This allows us to claim an extra 25p for every £1 you donate.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    For large donations or legacy giving, please contact us at{' '}
                    <a href="mailto:donations@imho-uk.org" className="text-primary-600 dark:text-primary-400 hover:underline">
                      info@imho-uk.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Donate