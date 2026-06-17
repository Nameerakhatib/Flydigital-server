import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Products', path: '/products', hasDropdown: true },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-lg py-3' : 'py-5'
    } bg-white`}>
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        <Link to="/" className="flex items-center gap-3">
          <h1 className="text-xl md:text-2xl font-extrabold text-[#1a1a1a]">
            Fly Digital Technology
          </h1>
        </Link>

        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={`relative px-1 py-2 font-medium text-base transition-all duration-300 flex items-center gap-1 ${
                location.pathname === item.path 
                  ? 'text-[#f4a62a]' 
                  : 'text-[#1a1a1a] hover:text-[#f4a62a]'
              }`}
            >
              {item.name}
              {item.hasDropdown && <ChevronDown size={16} />}
            </Link>
          ))}
        </div>

        <button
          className="lg:hidden bg-[#b8a44a] text-white p-2 rounded"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden bg-white border-t border-gray-200"
        >
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`text-lg font-medium py-2 ${
                  location.pathname === item.path 
                    ? 'text-[#f4a62a]' 
                    : 'text-[#1a1a1a] hover:text-[#f4a62a]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
