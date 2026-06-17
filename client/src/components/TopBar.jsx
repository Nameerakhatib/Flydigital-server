import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#0f1b35] text-white py-3 text-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+91 7696806834</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>info@flydigitaltechnology.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>Pride Icon Building, Gokul Road, Hubballi</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Instagram size={18} />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
