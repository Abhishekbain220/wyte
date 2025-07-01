import React, { useState, useEffect, useRef, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ProductContext } from '../utils/ProductContext';

// ✅ Slugify Function
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+|-+$/g, '');
};

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  // Slugified product paths
  const allProductItems = ProductCategory.flatMap((cat) =>
    cat.items.map((item) => ({
      label: item.Heading,
      path: `/product/${slugify(cat.name)}/${slugify(item.Heading)}`,
    }))
  );

  // Tokenize the search query for partial-word match
  const tokenize = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9\s]/gi, '')
      .split(/\s+/)
      .filter(Boolean);

  const filteredProducts = allProductItems.filter((product) => {
    const productLabel = product.label.toLowerCase();
    const tokens = tokenize(searchQuery);
    return tokens.some(token => productLabel.includes(token));
  });

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'Profile' },
    {
      label: 'Products',
      path: '/products',
      sub: [
        { path: '/Category/inkjet-water-base-printable-substrates', label: 'Inkjet Water-base Printable Substrates' },
        { path: '/Category/carelit-environment-friendly-printable-fabrics', label: 'CARELIT Environment Friendly Printable Fabrics' },
        { path: '/Category/commercial-series', label: 'Commercial Series' },
        { path: '/Category/decor-series', label: 'Decor Series' },
      ],
    },
    { path: '/gallery', label: 'Gallery' },
  ];

  const navLinkClasses = ({ isActive }) =>
    `${isActive ? 'text-[#7AC943]' : 'text-black'} transition-all duration-300 ease-in-out relative after:block after:h-[2px] after:bg-[#7AC943] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left`;

  return (
    <div className="relative">
      <div className={`fixed top-0 left-0 w-full bg-white z-50 shadow-md transition-transform duration-300 ease-in-out ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="w-full px-6 py-4 h-[13vh] md:px-[4vw] lg:px-[6vw] xl:px-[20vh] flex items-center justify-between">
          <img className="h-[15vh] object-contain transition-transform hover:scale-105" src="/images/logo.webp" alt="Logo" />
          <div className="hidden md:flex gap-10 uppercase font-bold text-base items-center">
            {navLinks.map(link =>
              !link.sub ? (
                <NavLink key={link.path} to={link.path} className={navLinkClasses}>{link.label}</NavLink>
              ) : (
                <div key={link.label} className="relative group">
                  <button onClick={() => setDesktopSubOpen(p => !p)} className="flex items-center gap-1 text-black hover:text-[#7AC943]">
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${desktopSubOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`absolute top-full mt-2 bg-white rounded shadow-lg py-2 px-4 min-w-[260px] z-50 transition-all duration-300 ${desktopSubOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                    <NavLink to={link.path} onClick={() => setDesktopSubOpen(false)} className="block py-2 text-[#7AC943] font-medium text-base hover:underline">View All Products →</NavLink>
                    <hr className="my-2 border-gray-200" />
                    {link.sub.map(sub => (
                      <NavLink key={sub.path} to={sub.path} onClick={() => setDesktopSubOpen(false)} className="block py-2 text-base text-gray-700 hover:text-[#7AC943] font-bold">{sub.label}</NavLink>
                    ))}
                  </div>
                </div>
              )
            )}
            {/* Desktop Search */}
            <div className="relative" ref={searchRef}>
              <input
                type="text"
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setSearchOpen(true);
                }}
                placeholder="Search products..."
                className="px-3 py-1 text-base border rounded-md outline-none focus:ring-2 focus:ring-[#7AC943]"
              />
              {searchOpen && filteredProducts.length > 0 && (
                <div
                  className="absolute z-50 bg-white mt-1 rounded shadow w-72 max-h-60 overflow-y-auto"
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  {filteredProducts.map((item, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-base text-gray-800 hover:bg-gray-100 cursor-pointer font-bold"
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

          {/* Right Logo & Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-center">
              <img src="/images/NEW-Logo-2023-1-1.webp" alt="Partner Logo" className="h-[7vh] object-contain hover:scale-105 transition-transform" />
              <span className="font-bold text-black text-sm">Media Partner</span>
            </div>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-[13vh] left-0 w-full h-[87vh] bg-white z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-6 py-4 overflow-y-auto h-full">
          {/* Mobile Search */}
          <div className="relative mb-4" ref={searchRef}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSearchOpen(true);
              }}
              placeholder="Search products..."
              className="w-full px-3 py-2 text-base border rounded-md outline-none focus:ring-2 focus:ring-[#7AC943]"
            />
            {searchOpen && filteredProducts.length > 0 && (
              <div className="bg-white rounded shadow mt-2 max-h-60 overflow-y-auto">
                {filteredProducts.map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 text-base text-gray-800 hover:bg-gray-100 font-bold cursor-pointer"
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

          {/* Mobile Links */}
          <nav className="flex flex-col gap-4 font-bold uppercase text-base">
            {navLinks.map(link =>
              !link.sub ? (
                <NavLink key={link.path} to={link.path} onClick={() => setMenuOpen(false)} className="text-black hover:text-[#7AC943]">{link.label}</NavLink>
              ) : (
                <div key={link.label} className="flex flex-col gap-2">
                  <button onClick={() => setMobileSubOpen(prev => !prev)} className="flex justify-between items-center text-black hover:text-[#7AC943]">
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileSubOpen && (
                    <div className="ml-4 flex flex-col gap-0">
                      <NavLink to={link.path} onClick={() => setMenuOpen(false)} className="text-[#7AC943] text-base border-b py-2 px-2">View All Products →</NavLink>
                      {link.sub.map(sub => (
                        <NavLink key={sub.path} to={sub.path} onClick={() => setMenuOpen(false)} className="text-gray-700 text-base hover:text-[#7AC943] border-b py-2 px-2">{sub.label}</NavLink>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
