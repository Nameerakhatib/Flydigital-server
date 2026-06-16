import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { X } from 'lucide-react';
import api from '../utils/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Digital Marketing', 'Educational Websites', 'Business Websites', 'Social Media Branding', 'Lead Generation', 'AI Automation', 'Software Maintenance', 'Branding'];

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory, projects]);

  const fetchProjects = async () => {
    try {
      const response = await api.get('/projects');
      setProjects(response.data);
      setFilteredProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const processSteps = [
    { step: 1, title: 'Requirement Analysis' },
    { step: 2, title: 'Planning' },
    { step: 3, title: 'Design & Development' },
    { step: 4, title: 'Testing' },
    { step: 5, title: 'Delivery' },
    { step: 6, title: 'Support & Maintenance' }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500 border-transparent mx-auto mb-4"></div>
          <p className="text-light-blue/70 text-lg">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <section className="py-20 bg-navy/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl text-light-blue/70">Showcasing our work and success stories</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'glossy-btn bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white shadow-lg shadow-pink-500/30'
                      : 'glass text-light-blue/80 hover:text-pink-400 border border-pink-500/10'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <ProjectCard
                    project={project}
                    onView={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-navy/50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-pink-400 font-semibold mb-4 block">Our Process</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="glass glossy-card rounded-xl p-6 text-center border border-pink-500/10 hover:border-pink-500/30 transition-all duration-300"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-white">{step.title}</h4>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="glass glossy-card rounded-3xl p-12 md:p-16 border border-pink-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Have a Project in Mind?</h2>
              <p className="text-light-blue/70 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's bring your ideas to life! Get in touch with us for a free consultation.
              </p>
              <Link
                to="/contact"
                className="inline-block glossy-btn bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white px-12 py-6 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300"
              >
                Start Your Project
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
