import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div >
<footer className="bg-gray-900 text-gray-300 py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side */}
        <div className="max-w-md space-y-6">
          <img src="/logo.png" alt="Logo" className="h-16" />
          <p className="text-gray-400 leading-relaxed">
            Wyte delivers top-quality printable materials for UV, Inkjet, Latex, and Eco-solvent printers, empowering your business.
          </p>

          <address className="not-italic space-y-2 text-sm">
            <p>📍 123 Industrial Area, Bhopal</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ contact@wyteprint.com</p>
          </address>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between">
          <nav className="mb-8 flex space-x-8 text-gray-400 font-semibold">
            {["Home", "About", "Products", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-amber-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex space-x-6 text-2xl text-gray-400">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social Link"
                className="hover:text-amber-500 transition-transform duration-300 hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>

          <button
            className="mt-12 px-6 py-2 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded-md font-semibold shadow-lg transition"
            onClick={() => alert("Contact form coming soon!")}
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm font-light">
        &copy; {new Date().getFullYear()} Wyte Industries. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer