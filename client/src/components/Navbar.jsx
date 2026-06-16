import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass py-4 shadow-xl shadow-pink-500/10 border-b border-pink-500/10' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
          >
            Fly Digital Technology
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative px-1 py-2 font-medium transition-all duration-300 ${
                location.pathname === item.path 
                  ? 'text-pink-400' 
                  : 'text-light-blue/80 hover:text-pink-400'
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="glossy-btn bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white px-6 py-2.5 rounded-lg font-bold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden text-pink-400 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-pink-500/10"
        >
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`text-lg font-medium py-2 ${
                  location.pathname === item.path 
                    ? 'text-pink-400' 
                    : 'text-light-blue/80 hover:text-pink-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="glossy-btn bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white px-6 py-3 rounded-lg font-bold text-center mt-4"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
