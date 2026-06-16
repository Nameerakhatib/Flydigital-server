import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-dark pt-20 pb-8 border-t border-pink-500/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4">
              Fly Digital Technology
            </h3>
            <p className="text-light-blue/70 mb-6 max-w-md leading-relaxed">
              Transforming ideas into digital success through innovation and technology. Empowering businesses with cutting-edge digital solutions.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 glass rounded-lg flex items-center justify-center text-light-blue/70 hover:text-pink-400 hover:border-pink-500/30 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="flex items-center gap-2 text-light-blue/70 hover:text-pink-400 transition-colors group"
                  >
                    <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 glass rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="text-pink-500" size={18} />
                </div>
                <p className="text-light-blue/70">
                  Pride Icon Building, 3rd Floor<br />
                  Gokul Road, Hubballi<br />
                  Karnataka, India
                </p>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 glass rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-pink-500" size={18} />
                </div>
                <p className="text-light-blue/70">info@flydigitaltechnology.com</p>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 glass rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-pink-500" size={18} />
                </div>
                <p className="text-light-blue/70">+91 98765 43210</p>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 glass rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-pink-500" size={18} />
                </div>
                <p className="text-light-blue/70">Mon - Sat: 9AM - 7PM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pink-500/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-light-blue/60 text-sm">
            © 2024 Fly Digital Technology. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-light-blue/60 hover:text-pink-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-light-blue/60 hover:text-pink-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
