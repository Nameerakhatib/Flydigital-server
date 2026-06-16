import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -12, 
        scale: 1.02, 
        rotate: 0.5,
        transition: { duration: 0.3 }
      }}
      className="glass glossy-card rounded-2xl p-8 hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 border border-pink-500/10 hover:border-pink-500/40"
    >
      <motion.div 
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        whileHover={{ rotate: 10, scale: 1.2 }}
        className="text-5xl mb-6 text-pink-500"
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-light-blue/70 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
