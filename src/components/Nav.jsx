import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [desktopSubOpen, setDesktopSubOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'Profile' },
    {
      label: 'Products',
      path: '/products',
      sub: [
        { path: '/Category/Inkjet Water-base Printable Substrates', label: 'Inkjet Water-base Printable Substrates' },
        { path: '/Category/%20CARELIT%20ENVIRONMENT%20FRIENDLY%20PRINTABLE%20FABRICS', label: 'CARELIT Environment Friendly Printable Fabrics' },
        { path: '/Category/%20COMMERCIAL%20SERIES', label: 'Commercial Series' },
        { path: '/Category/%20DECOR%20SERIES', label: 'Decor Series' },
      ],
    },
    { path: '/gallery', label: 'Gallery' },
  ];

  const navLinkClasses = ({ isActive }) =>
    `${isActive ? 'text-[#7AC943]' : 'text-black'} 
     transition-all duration-300 ease-in-out 
     relative after:block after:h-[2px] after:bg-[#7AC943] 
     after:scale-x-0 hover:after:scale-x-100 
     after:transition-transform after:duration-300 after:origin-left`;

  return (
    <div className={`fixed top-0 left-0 w-full bg-white z-50 shadow-md transition-transform duration-300 ease-in-out ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className='w-full px-6 py-4 h-[13vh] md:px-[4vw] lg:px-[6vw] xl:px-[20vh] flex items-center justify-between'>

        {/* Logo */}
        <div className="flex items-center">
          <img className='h-[15vh] object-contain transition-transform duration-300 hover:scale-105' src="/logo.webp" alt="Main Logo" />
        </div>

        {/* Desktop Nav */}
        <div className='hidden md:flex justify-center gap-8 md:gap-10 lg:gap-14 uppercase font-semibold tracking-wide text-sm md:text-base'>
          {navLinks.map(link => {
            if (!link.sub) {
              return (
                <NavLink key={link.path} to={link.path} className={navLinkClasses}>
                  {link.label}
                </NavLink>
              );
            } else {
              return (
                <div key={link.label} className="relative group">
                  <button
                    onClick={() => setDesktopSubOpen(prev => !prev)}
                    className="flex items-center gap-1 text-black hover:text-[#7AC943] uppercase font-semibold"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${desktopSubOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`absolute top-full mt-2 min-w-[280px] bg-white rounded-lg shadow-xl py-2 px-4 z-40 transform transition-all duration-300 ease-in-out ${desktopSubOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                    <NavLink
                      to={link.path}
                      onClick={() => setDesktopSubOpen(false)}
                      className="block py-2 text-[15px] font-medium text-[#7AC943] hover:underline"
                    >
                      View All Products →
                    </NavLink>
                    <hr className="my-2 border-gray-200" />
                    {link.sub.map((subItem, index) => (
                      <React.Fragment key={subItem.path}>
                        <NavLink
                          to={subItem.path}
                          className="block py-2 text-sm text-gray-700 hover:text-[#7AC943] transition-colors duration-200"
                          onClick={() => setDesktopSubOpen(false)}
                        >
                          {subItem.label}
                        </NavLink>
                        {index !== link.sub.length - 1 && (
                          <hr className="border-t border-gray-200 my-1" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              );
            }
          })}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-center">
            <img src="/NEW-Logo-2023-1-1.webp" alt="Co-Partner Logo" className="h-[7vh] w-auto object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105" />
            <span className="font-bold text-black">Media Partner</span>
          </div>
          <button onClick={toggleMenu} className="md:hidden">
            {menuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`absolute top-[13vh] left-0 w-full bg-white shadow-lg flex flex-col gap-6 py-6 md:hidden z-30 
        transition-all duration-300 ease-in-out 
        ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        {navLinks.map((link) => {
          if (!link.sub) {
            return (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={toggleMenu}
                className="text-black text-base font-semibold tracking-wide hover:text-[#7AC943] px-6 w-full text-left"
              >
                {link.label}
              </NavLink>
            );
          } else {
            return (
              <div key={link.label} className="flex flex-col items-start w-full gap-2">
                <button
                  onClick={() => setMobileSubOpen((prev) => !prev)}
                  className="w-full px-6 py-2 flex justify-between items-center text-black font-semibold text-base"
                >
                  {link.label}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${mobileSubOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${
                    mobileSubOpen ? 'max-h-[500px] mt-1' : 'max-h-0'
                  }`}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileSubOpen(false);
                    }}
                    className="block text-[#7AC943] text-sm font-semibold px-8 py-1"
                  >
                    View All Products →
                  </NavLink>
                  <hr className="my-2 border-gray-200 mx-6" />
                  {link.sub.map((subItem, index) => (
                    <React.Fragment key={subItem.path}>
                      <NavLink
                        to={subItem.path}
                        onClick={() => {
                          setMenuOpen(false);
                          setMobileSubOpen(false);
                        }}
                        className="block text-sm font-semibold text-gray-800 hover:text-[#7AC943] px-8 py-2"
                      >
                        {subItem.label}
                      </NavLink>
                      {index !== link.sub.length - 1 && (
                        <hr className="border-t border-gray-200 mx-8" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Nav;
