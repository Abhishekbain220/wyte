import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='w-full flex items-center justify-between px-6 py-4 h-[13vh] md:px-[4vw] lg:px-[6vw] xl:px-[23vh]'>

      {/* Logo */}
      <img className='h-[8vh]' src="/logo.png" alt="Logo" />

      {/* Desktop + Tablet Menu */}
      <div className='hidden md:flex ml-auto gap-8 md:gap-10 lg:gap-14 uppercase font-bold tracking-wide text-sm md:text-base'>
        <NavLink className={({ isActive }) => isActive ? "text-red-400" : "text-black"} to={"/"}>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-red-400" : "text-black"} to={"/about-us"}>Profile</NavLink>
      </div>

      {/* Hamburger Button (Mobile Only) */}
      <div className='md:hidden'>
        <button onClick={toggleMenu}>
          {menuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[13vh] left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 uppercase font-bold tracking-wide text-base md:hidden z-30 
        transition-all duration-300 ease-in-out 
        ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? "text-red-400" : "text-black"} to={"/"}>Home</NavLink>
        <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? "text-red-400" : "text-black"} to={"/about-us"}>Profile</NavLink>
      </div>
    </div>
  );
};

export default Nav;
