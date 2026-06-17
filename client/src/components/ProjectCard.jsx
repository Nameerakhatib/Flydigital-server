import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, onView }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative glossy-card rounded-2xl overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90"></div>
        
        {/* View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onView}
            className="glossy-btn text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2"
          >
            View Details
            <ExternalLink size={18} />
          </motion.button>
        </div>
      </div>
      
      <div className="p-8">
        <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3 block">{project.category}</span>
        <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
        <p className="text-slate-400 text-base mb-6 line-clamp-2">{project.description}</p>
        <button
          onClick={onView}
          className="inline-flex items-center gap-2 text-blue-400 font-semibold text-base hover:gap-3 transition-all"
        >
          Read Case Study
          <ExternalLink size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
