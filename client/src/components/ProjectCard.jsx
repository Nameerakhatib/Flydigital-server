import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, onView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass glossy-card rounded-2xl overflow-hidden group border border-pink-500/10 hover:border-pink-500/40 transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-125 group-hover:rotate-1"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-navy-dark/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onView}
            className="glossy-btn flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-pink-500/30"
          >
            <Eye size={20} /> View Project
          </motion.button>
        </div>
      </div>
      <div className="p-8">
        <span className="text-xs bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white px-3 py-1 rounded-full mb-4 inline-block font-semibold">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-pink-400 transition-colors duration-300">{project.title}</h3>
        <p className="text-light-blue/80 text-sm mb-4">{project.description}</p>
        <div className="flex items-center gap-2 text-pink-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          Learn more <ArrowRight size={16} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
