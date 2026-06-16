import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeTab, setActiveTab] = useState('digital-marketing');

  const services = {
    'digital-marketing': [
      { icon: '🔍', title: 'SEO Optimization', description: 'Improve your search engine rankings and drive organic traffic to your website.' },
      { icon: '📱', title: 'Social Media Marketing', description: 'Build your brand presence and engage with your audience across all major platforms.' },
      { icon: '💰', title: 'Google Ads', description: 'Maximize your ROI with targeted PPC campaigns that reach your ideal customers.' },
      { icon: '✍️', title: 'Content Marketing', description: 'Create valuable content that attracts, engages, and retains your target audience.' },
      { icon: '🌐', title: 'Website Development', description: 'Build modern, responsive websites that convert visitors into customers.' },
      { icon: '🎨', title: 'Branding Services', description: 'Create a strong brand identity that resonates with your target market.' }
    ],
    'ai-solutions': [
      { icon: '🤖', title: 'AI Chatbots', description: '24/7 customer support with intelligent chatbots that handle inquiries automatically.' },
      { icon: '⚡', title: 'Business Automation', description: 'Streamline operations and save time with automated workflows and processes.' },
      { icon: '👥', title: 'Lead Management', description: 'Efficiently track, manage, and nurture leads through your sales pipeline.' },
      { icon: '📊', title: 'Data Analytics', description: 'Gain valuable insights from your data to make informed business decisions.' }
    ],
    'software-maintenance': [
      { icon: '💻', title: 'Software Installation', description: 'Professional installation and configuration of software solutions.' },
      { icon: '🔄', title: 'System Updates', description: 'Keep your systems up-to-date with the latest security patches and features.' },
      { icon: '🚀', title: 'Performance Optimization', description: 'Improve system speed, efficiency, and overall performance.' },
      { icon: '🗄️', title: 'Database Management', description: 'Secure, reliable, and optimized database management services.' },
      { icon: '🛡️', title: 'Security Monitoring', description: 'Protect your systems with continuous security monitoring and threat detection.' },
      { icon: '🔧', title: 'Technical Support', description: 'Expert technical support for all your software and system needs.' },
      { icon: '💼', title: 'IT Support Services', description: 'Comprehensive IT support to keep your business running smoothly.' }
    ]
  };

  return (
    <div className="pt-24">
      <section className="py-20 bg-navy/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-light-blue/70">Comprehensive digital solutions for your business</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'digital-marketing', label: 'Digital Marketing' },
              { id: 'ai-solutions', label: 'AI Solutions' },
              { id: 'software-maintenance', label: 'Software Maintenance' }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'glossy-btn bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white shadow-lg shadow-pink-500/30'
                    : 'glass text-light-blue/80 hover:text-pink-400 border border-pink-500/10'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[activeTab].map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass glossy-card rounded-2xl p-8 border border-pink-500/10 hover:border-pink-500/30 transition-all duration-300"
                >
                  <div className="text-5xl mb-6 text-pink-500">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-light-blue/70 leading-relaxed">{service.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy/50">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="glass glossy-card rounded-3xl p-12 md:p-16 border border-pink-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-light-blue/70 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's discuss your project and find the perfect solution for your business needs.
              </p>
              <Link
                to="/contact"
                className="inline-block glossy-btn bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white px-12 py-6 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300"
              >
                Request a Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
