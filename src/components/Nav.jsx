import React, { useState, useEffect, useRef, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ProductContext } from '../utils/ProductContext'; // Assuming this path is correct

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
  const { ProductCategory } = useContext(ProductContext); // Destructure ProductCategory

  // Effect for hiding/showing navigation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(!(currentScrollY > lastScrollY && currentScrollY > 50));
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Effect for closing search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Effect for controlling body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  // Flatten all product items for easy searching
  const allProductItems = ProductCategory.flatMap((cat) =>
    cat.items.map((item) => ({
      label: item.Heading,
      code: item['Product Code'] || '',
      description: item.Description || '',
      category: item.Category || '',
      application: item.Application || '',
      catName: cat.name || '',
      path: `/product/${slugify(cat.name)}/${slugify(item.Heading)}`,
    }))
  );

  // Helper function to normalize strings for search (lowercase, alphanumeric only)
  const normalize = (str) =>
    str.toLowerCase().replace(/[^a-z0-9]/gi, '').trim();

  // Helper function to tokenize strings into words
  const tokenize = (str) =>
    str
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean); // Filter out empty strings from multiple spaces

  // Filter products based on search query and extended keywords
  const filteredProducts = allProductItems.filter((product) => {
    if (!searchQuery) {
      return true; // Show all products if search query is empty
    }

    const normalizedQuery = normalize(searchQuery);
    const queryTokens = tokenize(searchQuery);

    // Create a comprehensive string of product details to search against
    const productSearchableText = normalize(
      `${product.label} ${product.code} ${product.description} ${product.category} ${product.application} ${product.catName}`
    );

    // 1. Prioritize exact substring match of the entire query
    if (productSearchableText.includes(normalizedQuery)) {
      return true;
    }

    // Define more comprehensive extended keywords/synonyms
    // This map should contain common synonyms or related terms for your product categories
    const extendedKeywordsMap = {
      'premium': ['high quality', 'superior', 'luxurious', 'best', 'top-grade'],
      'printable': ['media', 'material', 'film', 'sheet', 'inkjet', 'digital print', 'roll', 'paper'],
      'vinyl': ['pvc', 'adhesive', 'sticker', 'wrap', 'graphic film', 'decal', 'self-adhesive'],
      'fabric': ['textile', 'cloth', 'material', 'banner'],
      'environment-friendly': ['eco-friendly', 'green', 'sustainable', 'recycled', 'biodegradable', 'environmentally friendly'],
      'carelit': ['eco fabric', 'sustainable fabric', 'carelit brand'], // Specific to your brand/product line
      'commercial': ['business', 'industrial', 'enterprise', 'large format', 'signage'],
      'decor': ['decoration', 'interior design', 'home decor', 'art', 'wall covering', 'decorative'],
      'inkjet': ['water-base', 'dye ink', 'pigment ink'],
      'water-base': ['inkjet', 'aqueous'],
      // Add more as needed based on your product data and common search terms
    };

    // 2. Check if ALL query tokens (or their extended versions) are present in the product's text
    // This provides an "AND" like behavior for multi-word queries, meaning all concepts must match.
    const allTokensOrExtendedMatch = queryTokens.every(queryToken => {
      const normalizedQueryToken = normalize(queryToken);

      // Check if the exact token is in the product text
      if (productSearchableText.includes(normalizedQueryToken)) {
        return true;
      }

      // Check if any of the extended keywords for this token are in the product text
      const potentialMatches = extendedKeywordsMap[normalizedQueryToken];
      if (potentialMatches) {
        return potentialMatches.some(extKeyword => productSearchableText.includes(normalize(extKeyword)));
      }

      return false; // If neither the token nor its extended keywords match, this token fails the 'every' check
    });

    if (allTokensOrExtendedMatch) {
      return true;
    }

    return false;
  });

  // Renders a single search result item
  const renderSearchResultItem = (item, onClick) => (
    <div
      key={item.path}
      className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer font-medium border-b"
      onClick={onClick}
    >
      <div className="font-bold text-base">{item.label}</div>
      {item.code && <div className="text-green-600 text-sm">Code: {item.code}</div>}
      {item.description && (
        <div className="text-gray-600 text-xs">
          {item.description.slice(0, 80)}... {/* Truncate long descriptions */}
        </div>
      )}
    </div>
  );

  // Define navigation links
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'Profile' },
    {
      label: 'PRODUCTS',
      path: '/products',
      sub: [
        { path: '/Category/inkjet-water-base-printable-substrates', label: 'Inkjet Water-base Printable Substrates' },
        { path: '/Category/carelit-environment-friendly-printable-fabrics', label: 'CARELIT Environment Friendly Printable Fabrics' },
        { path: '/Category/commercial-series', label: 'Commercial Series' },
        { path: '/Category/decor-series', label: 'Decor Series' },
        { path: '/Category/consumables-inksolvent', label: 'Consumables - Ink/Solvent' },
      ],
    },
    { path: '/gallery', label: 'Gallery' },
  ];

  // Tailwind CSS classes for active navigation links
  const navLinkClasses = ({ isActive }) =>
    `${isActive ? 'text-[#7AC943]' : 'text-black'} transition-all duration-300 ease-in-out relative after:block after:h-[2px] after:bg-[#7AC943] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left`;

  return (
    <div className="relative">
      {/* Top Navigation Bar */}
      <div className={`fixed top-0 left-0 w-full bg-white z-50 shadow-md transition-transform duration-300 ease-in-out ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="w-full px-6 py-4 h-[13vh] md:px-[4vw] lg:px-[6vw] xl:px-[20vh] flex items-center justify-between">
          <img className="h-[15vh] object-contain transition-transform hover:scale-105" src="/images/logo.webp" alt="Company Logo" />

          {/* Desktop Menu */}
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
                  setSearchOpen(true); // Open search results when typing
                }}
                placeholder="Search products..."
                className="px-3 py-1 text-base border rounded-md outline-none focus:ring-2 focus:ring-[#7AC943]"
              />
              {searchOpen && (
                <div className="absolute z-50 bg-white mt-1 rounded shadow w-80 max-h-72 overflow-y-auto" onMouseDown={(e) => e.stopPropagation()}>
                  {searchQuery === '' || filteredProducts.length > 0
                    ? filteredProducts.map(item =>
                        renderSearchResultItem(item, () => {
                          navigate(item.path);
                          setSearchQuery('');
                          setSearchOpen(false);
                          setDesktopSubOpen(false); // Close dropdown if open
                        })
                      )
                    : <div className="px-4 py-2 text-gray-500 font-semibold">No product found</div>
                  }
                </div>
              )}
            </div>
          </div>

          {/* Right Logo + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-center">
              <img src="/images/NEW-Logo-2023-1-1.webp" alt="Partner Logo" className="h-[7vh] object-contain hover:scale-105 transition-transform" />
              <span className="font-bold text-red-700 text-sm">Media Partner</span>
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
            {searchOpen && (
              <div className="bg-white rounded shadow mt-2 max-h-72 overflow-y-auto">
                {searchQuery === '' || filteredProducts.length > 0
                  ? filteredProducts.map(item =>
                      renderSearchResultItem(item, () => {
                        navigate(item.path);
                        setSearchQuery('');
                        setSearchOpen(false);
                        setMenuOpen(false); // Close mobile menu after selection
                      })
                    )
                  : <div className="px-4 py-2 text-gray-500 font-semibold">No product found</div>
                }
              </div>
            )}
          </div>

          {/* Mobile Navigation Links */}
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