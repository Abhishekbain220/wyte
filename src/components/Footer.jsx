import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#F3F4F6] text-[#1B1F3B] px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left Column */}
        <div className="max-w-md space-y-6">
          <img src="/logo.png" alt="DigiTech Logo" className="h-[15vh]" />

          <p className="text-gray-700 leading-relaxed">
            DigiTech provides cutting-edge digital technology and solutions that empower innovation and business growth.
          </p>

          <address className="not-italic space-y-2 text-sm text-gray-600">
            <p>📍 456 Tech Park, New Industrial Area, Bhopal</p>
            <p>📞 +91 98765 12345</p>
            <p>✉️ support@digitechsolutions.com</p>
          </address>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between">
          <nav className="mb-8 flex space-x-8 font-semibold text-[#1B1F3B]">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#7AC943] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex space-x-6 text-2xl text-[#1B1F3B]">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social Link"
                className="hover:text-[#7AC943] transition-transform duration-300 hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>

          <button
            className="mt-12 px-6 py-2 bg-[#7AC943] text-white rounded-md font-semibold shadow-md hover:brightness-110 transition duration-300"
            onClick={() => alert('Contact form coming soon!')}
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-300 pt-6 text-center text-gray-600 text-sm font-light">
        &copy; {new Date().getFullYear()} DigiTech Solutions. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
