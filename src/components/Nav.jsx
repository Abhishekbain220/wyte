import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false); // Scroll down
      } else {
        setShowNav(true); // Scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'Profile' },
    { path: '/products', label: 'Products' },
  ];

  const navLinkClasses = ({ isActive }) =>
    `${isActive ? 'text-[#7AC943]' : 'text-black'} 
    hover:text-[#7AC943] transition-all duration-300 ease-in-out 
    relative after:block after:h-[2px] after:bg-[#7AC943] 
    after:scale-x-0 hover:after:scale-x-100 
    after:transition-transform after:duration-300 after:origin-left`;

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white z-50 shadow-md transition-transform duration-300 ease-in-out 
        ${showNav ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className='w-full flex items-center justify-between px-6 py-4 h-[13vh] md:px-[4vw] lg:px-[6vw] xl:px-[23vh]'>

        {/* Logo */}
        <img className='h-[15vh]' src="/logo.png" alt="Logo" />

        {/* Desktop + Tablet Menu */}
        <div className='hidden md:flex ml-auto gap-8 md:gap-10 lg:gap-14 uppercase font-bold tracking-wide text-sm md:text-base'>
          {navLinks.map(link => (
            <NavLink key={link.path} to={link.path} className={navLinkClasses}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {menuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[13vh] left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 uppercase font-bold tracking-wide text-base md:hidden z-30 
        transition-all duration-300 ease-in-out 
        ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        {navLinks.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={toggleMenu}
            className={navLinkClasses}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Nav;
