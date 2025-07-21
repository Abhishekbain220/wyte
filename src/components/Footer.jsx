import React, { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa';
import { MapPin, PhoneCall, Phone, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <footer className="bg-[#1B1F3B] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Section 1: Logo & Social */}
        <div className="space-y-6">
          <img
            src="/images/logo.webp"
            alt="DigiTech Logo"
            className="h-[15vh] w-full object-contain bg-white rounded-xl"
          />
          <p className="text-gray-300 text-base leading-relaxed">
            DigiTech delivers innovative digital solutions to help businesses grow and evolve in the ever-changing tech landscape.
          </p>
          <div>
            <div className="flex mt-10 space-x-4 text-xl">
              {[
                { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=100092562676204", color: "text-[#1877F2]" },
                { icon: FaTwitter, href: "#", color: "text-[#1DA1F2]" },
                { icon: FaInstagram, href: "#", color: "text-[#E1306C]" },
                { icon: FaLinkedinIn, href: "#", color: "text-[#0077B5]" },
                {
                  icon: FaWhatsapp,
                  href: "https://wa.me/918823881287?text=Hi%20DigiTech%2C%20I%20am%20interested%20in%20your%20services!",
                  color: "text-[#25D366]"
                }
              ].map(({ icon: Icon, href, color }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:scale-110 transition-transform"
                >
                  <Icon className={`${color}`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Navigation & Contact Button */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-600 pb-2">Quick Links</h3>
          <div className="flex flex-col space-y-3 text-base font-medium">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about-us" },
              { label: "Products", path: "/products" },
              { label: "Gallery", path: "/gallery" }
            ].map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${isActive ? "text-[#7AC943]" : "text-gray-300"} hover:text-[#7AC943]`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Contact Button with Animation */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowOptions(!showOptions)}
              className="group relative mt-6 px-24 py-2 text-black text-base font-semibold rounded-md overflow-hidden 
                         bg-[#7AC943] shadow-md transition-all duration-300 z-10 hover:border hover:border-white"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Contact Us
              </span>
              <span
                className="absolute inset-0 bg-[#1B1F3B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform 
                           duration-500 ease-in-out z-0 rounded-md"
              ></span>
            </motion.button>

            <AnimatePresence>
              {showOptions && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute mt-4 w-full bg-[#1B1F3B] text-white rounded shadow-lg p-4 border border-white z-20 space-y-3 font-semibold"
                >
                  <a
                    href="tel:+918823881287"
                    className="flex items-center gap-2 hover:text-[#7AC943] transition"
                  >
                    <PhoneCall className="text-[#7AC943]" size={18} />
                    Call
                  </a>
                  <a
                    href="https://wa.me/918823881287?text=Hi%20DigiTech%2C%20I%20am%20interested%20in%20your%20services!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#7AC943] transition"
                  >
                    <FaWhatsapp className="text-[#25D366]" size={18} />
                    Chat on WhatsApp
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Section 3: Contact Info & Map */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-600 pb-2">Contact Info</h3>
          <address className="text-base not-italic text-gray-400 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#7AC943] mt-1" />
              <p>117/A, Rachna Nagar, Bhopal-462023 (M.P.)</p>
            </div>
            <div className="flex items-center gap-3">
              <PhoneCall className="text-[#7AC943]" />
              <a href="tel:+918823881287" className="text-blue-400 hover:underline">
                (+91) 88238 81287
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#7AC943]" />
              <a href="tel:+917554948956" className="text-blue-400 hover:underline">
                (+91) 755 494 8956
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[#7AC943]" />
              <a
                href="https://mail.google.com/mail/?view=cm&to=infodigitechindia@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400"
              >
                infodigitechindia@gmail.com
              </a>
            </div>
          </address>

          <div className="rounded overflow-hidden shadow-lg mt-4">
            <iframe
              title="DigiTech Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d550.6395201726131!2d77.43615388935633!3d23.240966131906823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43801fb3b4cd%3A0xce03dba8876f7a54!2sBest%20Stay%20Boys%20Hostel%20(%20Rachna%20Nagar%20)!5e1!3m2!1sen!2sin!4v1753088022487!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-400 text-base">
        &copy; {new Date().getFullYear()} DigiTech Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
