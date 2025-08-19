import React from 'react'
import { Link } from 'react-router-dom'
import imhologo from '../../assets/images/imho-logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10  bg-primary-600 rounded-lg flex items-center justify-center">
                <img src={imhologo} alt="" />
              </div>
              <div>
                <h3 className="text-lg font-bold">IMHO-UK</h3>
                <p className="text-sm text-gray-400">International Medical Health Organization</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Through collaboration and compassion, we strive to create lasting impact and inspire positive change worldwide.
            </p>
            <div className="text-sm text-gray-400">
              <p>Registered Charity No: 1211442</p>
              <p>Company No: 07437265</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors duration-200">Our Projects</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors duration-200">Latest News</Link></li>
              <li><Link to="/get-involved" className="text-gray-400 hover:text-white transition-colors duration-200">Get Involved</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Work</h4>
            <ul className="space-y-2">
              <li><Link to="/projects/palliative-care" className="text-gray-400 hover:text-white transition-colors duration-200">Palliative Care</Link></li>
              <li><Link to="/projects/water-filtration" className="text-gray-400 hover:text-white transition-colors duration-200">Water Filtration</Link></li>
              <li><Link to="/projects/gender-equality" className="text-gray-400 hover:text-white transition-colors duration-200">Gender Equality</Link></li>
              <li><Link to="/projects/flood-relief" className="text-gray-400 hover:text-white transition-colors duration-200">Flood Relief</Link></li>
              <li><Link to="/donate" className="text-gray-400 hover:text-white transition-colors duration-200">Make a Donation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p>22Woodcrest Rd ,</p>
                  <p>Croydon CR8 4JB,</p>
                  <p>UK</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p>info@imho-uk.org</p>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p>Siva : +44 (0)7947 918 552</p>
            </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p>Jeyanthan : +44 (0)7981 182 723</p>
            </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
               <p> Raj : +44 (0)7786 548 930</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6">
            <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            <p>&copy; 2024 International Medical Health Organization - UK. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</Link>
            <Link to="/admin/login" className="text-gray-400 hover:text-white transition-colors duration-200">Admin</Link>
          </div>
        </div>
      </div>
    </div>
    </footer >
  )
}

export default Footer