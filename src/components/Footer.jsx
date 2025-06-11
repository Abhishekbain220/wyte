import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1B1F3B] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left Column */}
        <div className="max-w-md space-y-6">
          <img
            src="/logo.png"
            alt="DigiTech Logo"
            className="h-[15vh] w-full object-contain bg-white rounded-xl"
          />

          <p className="text-gray-300 leading-relaxed">
            DigiTech provides cutting-edge digital technology and solutions that empower innovation and business growth.
          </p>

          <address className="not-italic space-y-2 text-sm text-gray-400">
            <p>📍 Godown : 117/A, Rachna Nagar, Bhopal-462023 (M.P.)</p>
            <p>
              📞 <a href="tel:+918823881287" className="text-blue-600 hover:underline">Mob: (+91) 88238 81287</a>
            </p>
            <p>✉️ email : infodigitechindia@gmail.com</p>
          </address>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between">
          <nav className="mb-8 flex space-x-8 font-semibold text-white">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about-us" },
              { label: "Products", path: "/products" }
            ].map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative transition-colors duration-300 ${
                    isActive ? "text-[#7AC943]" : "text-white"
                  } hover:text-[#7AC943] 
                   before:content-[''] before:absolute before:-bottom-1 before:left-0 
                   before:h-[2px] before:bg-[#7AC943] before:transition-all before:duration-300 
                   ${isActive ? "before:w-full" : "before:w-0"} hover:before:w-full`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex space-x-6 text-2xl text-white">
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
            className="group relative mt-12 px-6 py-2 text-black font-semibold rounded-md overflow-hidden 
                       bg-[#7AC943] shadow-md transition-all duration-300 z-10 hover:border hover:border-white"
            onClick={() => alert('Contact form coming soon!')}
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Contact Us
            </span>
            <span
              className="absolute inset-0 bg-[#1B1F3B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform 
                         duration-500 ease-in-out z-0 rounded-md"
            ></span>
          </button>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-600 pt-6 text-center text-gray-400 text-sm font-light">
        &copy; {new Date().getFullYear()} DigiTech Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
