import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glossy-card rounded-2xl p-8"
    >
      <div className="mb-6 p-4 w-fit rounded-xl bg-slate-800/50">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-slate-400 text-base leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
