import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-navy-dark/90 backdrop-blur-sm"
        onClick={onClose}
      ></motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        className="relative glass rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-pink-500/20"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-light-blue/80 hover:text-pink-400 transition-colors z-10"
        >
          <X size={24} />
        </button>
        
        <div className="relative h-72">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent"></div>
        </div>
        
        <div className="p-8">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white text-sm font-bold rounded-full mb-4">
            {project.category}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{project.title}</h2>
          
          <div className="space-y-6">
            <div className="glass rounded-xl p-6 border border-pink-500/10">
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Challenge</h3>
              <p className="text-light-blue/80">{project.challenge}</p>
            </div>
            
            <div className="glass rounded-xl p-6 border border-pink-500/10">
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Solution</h3>
              <p className="text-light-blue/80">{project.solution}</p>
            </div>
            
            <div className="glass rounded-xl p-6 border border-pink-500/10">
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Result</h3>
              <p className="text-light-blue/80">{project.result}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
