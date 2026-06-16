import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    { icon: '💡', title: 'Innovation' },
    { icon: '🤝', title: 'Integrity' },
    { icon: '⭐', title: 'Excellence' },
    { icon: '😊', title: 'Customer Satisfaction' },
    { icon: '🔍', title: 'Transparency' },
    { icon: '📚', title: 'Continuous Learning' },
    { icon: '💼', title: 'Professionalism' },
    { icon: '🏆', title: 'Long-Term Commitment' }
  ];

  const team = [
    { name: 'John Doe', role: 'CEO & Founder' },
    { name: 'Jane Smith', role: 'CTO' },
    { name: 'Mike Johnson', role: 'Lead Developer' },
    { name: 'Sarah Williams', role: 'Marketing Head' }
  ];

  const milestones = [
    { year: '2020', text: 'Company founded' },
    { year: '2021', text: 'First 10 clients' },
    { year: '2022', text: 'Expanded team to 15' },
    { year: '2023', text: '50+ successful projects' },
    { year: '2024', text: 'New office in Hubballi' },
    { year: '2026', text: 'Continuing growth' }
  ];

  return (
    <div className="pt-24">
      <section className="py-20 bg-navy/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-light-blue/70">Discover our story and mission</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="glass glossy-card rounded-2xl overflow-hidden border border-pink-500/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Our Team"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <span className="text-pink-400 font-semibold mb-4 block">Our Story</span>
                <h2 className="text-4xl font-bold mb-6">Transforming Ideas into Digital Excellence</h2>
                <p className="text-light-blue/70 mb-4 leading-relaxed">
                  Fly Digital Technology was founded with a mission to transform businesses through innovative digital solutions. Based in Hubballi, Karnataka, we've grown from a small startup to a trusted partner for businesses across India.
                </p>
                <p className="text-light-blue/70 leading-relaxed">
                  Our journey is driven by passion, innovation, and a commitment to delivering exceptional results for every client we work with.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="glass glossy-card rounded-2xl p-8 text-center border border-pink-500/10"
              >
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Our Mission</h3>
                <p className="text-light-blue/70 leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, improve efficiency, and create long-term success.
                </p>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02, rotateY: -5 }}
                className="glass glossy-card rounded-2xl p-8 text-center border border-pink-500/10"
              >
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Our Vision</h3>
                <p className="text-light-blue/70 leading-relaxed">
                  To become one of India's leading digital technology companies by delivering reliable, affordable, and cutting-edge technology solutions to businesses of all sizes.
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-pink-400 font-semibold mb-4 block">Core Values</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">The Principles That Guide Us</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="glass glossy-card rounded-xl p-6 text-center border border-pink-500/10 hover:border-pink-500/30 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h4 className="font-bold text-lg text-white">{value.title}</h4>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy/50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-pink-400 font-semibold mb-4 block">Our Team</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet the Experts</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass glossy-card rounded-xl p-8 text-center border border-pink-500/10 hover:border-pink-500/30 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl">
                    👤
                  </div>
                  <h4 className="font-bold text-xl text-white mb-2">{member.name}</h4>
                  <p className="text-pink-400">{member.role}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-pink-400 font-semibold mb-4 block">Our Journey</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Milestones & Achievements</h2>
            </div>
          </ScrollReveal>
          
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className={`flex items-center gap-8 mb-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1"></div>
                  <div className="w-4 h-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full flex-shrink-0"></div>
                  <div className="flex-1 glass glossy-card rounded-xl p-6 border border-pink-500/10 hover:border-pink-500/30 transition-all">
                    <span className="text-pink-400 font-bold text-xl block mb-2">{milestone.year}</span>
                    <p className="text-light-blue/70 text-lg">{milestone.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
