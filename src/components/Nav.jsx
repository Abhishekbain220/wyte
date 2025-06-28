import React, { useState, useEffect, useRef, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ProductContext } from '../utils/ProductContext';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [desktopSubOpen, setDesktopSubOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef();
  const navigate = useNavigate();
  const { ProductCategory } = useContext(ProductContext);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(!(currentScrollY > lastScrollY && currentScrollY > 50));
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const allProductItems = ProductCategory.flatMap((cat) =>
    cat.items.map((item) => ({
      label: item.Heading,
      path: `/product/${encodeURIComponent(cat.name)}/${item.id}`,
    }))
  );

  const normalize = (str) =>
    str.toLowerCase().replace(/[\s\-|]/g, '');

  const filteredProducts = allProductItems.filter((p) =>
    normalize(p.label).includes(normalize(searchQuery))
  );

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
    <div className="relative">
      {/* Sticky header */}
      <div className={`fixed top-0 left-0 w-full bg-white z-50 shadow-md transition-transform duration-300 ease-in-out ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className='w-full px-6 py-4 h-[13vh] md:px-[4vw] lg:px-[6vw] xl:px-[20vh] flex items-center justify-between'>
          <div className="flex items-center">
            <img className='h-[15vh] object-contain transition-transform duration-300 hover:scale-105' src="/logo.webp" alt="Main Logo" />
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex justify-center gap-8 md:gap-10 lg:gap-14 uppercase font-bold tracking-wide text-sm md:text-base'>
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
                      className="flex items-center gap-1 text-black hover:text-[#7AC943] uppercase font-bold"
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
                            className="block py-2 text-sm text-gray-700 hover:text-[#7AC943] transition-colors duration-200 font-bold"
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

            {/* Desktop Search */}
            <div className="relative" ref={searchRef}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchOpen(true);
                }}
                placeholder="Search products..."
                className="px-3 py-1 text-sm border rounded-md outline-none focus:ring-2 focus:ring-[#7AC943]"
              />
              {searchOpen && filteredProducts.length > 0 && (
                <div className="absolute z-50 bg-white mt-1 rounded shadow w-72 max-h-60 overflow-y-auto">
                  {filteredProducts.map((item, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        navigate(item.path);
                        setSearchQuery('');
                        setSearchOpen(false);
                      }}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Logo + Menu Icon */}
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
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-md z-40 mt-[13vh]">
          <nav className="flex flex-col gap-4 font-bold uppercase text-sm">
            {navLinks.map(link => {
              if (!link.sub) {
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className="text-black hover:text-[#7AC943]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                );
              } else {
                return (
                  <div key={link.label} className="flex flex-col gap-2">
                    <button
                      onClick={() => setMobileSubOpen(prev => !prev)}
                      className="flex items-center justify-between text-black hover:text-[#7AC943]"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileSubOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {mobileSubOpen && (
                      <div className="ml-4 flex flex-col gap-0  overflow-hidden">
                        <NavLink
                          to={link.path}
                          className="text-[#7AC943] text-[14px] border-b border-gray-300 py-2 px-2"
                          onClick={() => setMenuOpen(false)}
                        >
                          View All Products →
                        </NavLink>
                        {link.sub.map((subItem, index) => (
                          <NavLink
                            key={subItem.path}
                            to={subItem.path}
                            className="text-gray-700 text-[14px] hover:text-[#7AC943] border-b border-gray-200 py-2 px-2"
                            onClick={() => setMenuOpen(false)}
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
            })}

            {/* Mobile Search */}
            <div className="relative mt-4" ref={searchRef}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchOpen(true);
                }}
                placeholder="Search products..."
                className="w-full px-3 py-2 text-sm border rounded-md outline-none focus:ring-2 focus:ring-[#7AC943]"
              />
              {searchOpen && filteredProducts.length > 0 && (
                <div className="absolute z-50 bg-white mt-1 rounded shadow w-full max-h-60 overflow-y-auto">
                  {filteredProducts.map((item, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        navigate(item.path);
                        setSearchQuery('');
                        setSearchOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Nav;
