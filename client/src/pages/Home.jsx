import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedCounter from '../components/AnimatedCounter';
import ServiceCard from '../components/ServiceCard';
import ScrollReveal from '../components/ScrollReveal';
import { 
  ArrowRight, 
  CheckCircle, 
  Rocket, 
  Zap, 
  Sparkles,
  Globe,
  Cpu,
  ChevronRight
} from 'lucide-react';

const Home = () => {
  const [index, setIndex] = useState(0);
  const services = ['Digital Marketing', 'AI Solutions', 'Software Maintenance', 'Web Development'];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const quickServices = [
    { icon: '🌐', title: 'Web Development', description: 'Build high-performance, scalable websites and web apps' },
    { icon: '🤖', title: 'AI Solutions', description: 'Intelligent automation and AI-powered tools' },
    { icon: '📱', title: 'Digital Marketing', description: 'Grow your brand with strategic marketing' },
    { icon: '🔧', title: 'Software Maintenance', description: 'Keep your systems running smoothly' },
    { icon: '☁️', title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and services' },
    { icon: '🎨', title: 'Graphic Design', description: 'Creative designs that make an impact' }
  ];

  const products = [
    {
      icon: '🏢',
      title: 'ERP System',
      description: 'Streamline business operations with our comprehensive ERP solution',
      features: ['Automate tasks', 'Real-time reports', 'Inventory management']
    },
    {
      icon: '🏫',
      title: 'School Management',
      description: 'Complete school management system for modern institutions',
      features: ['Attendance tracking', 'Fee management', 'Exam reports']
    },
    {
      icon: '✍️',
      title: 'AI Writing Assistant',
      description: 'Enhance your writing with AI-powered tools',
      features: ['Grammar check', 'Paraphrasing', 'Plagiarism detection']
    }
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      company: 'Tech Solutions Inc.',
      text: 'Fly Digital transformed our business with their amazing web development and digital marketing services!'
    },
    {
      name: 'Priya Patel',
      company: 'Growth Hub',
      text: 'Professional team, outstanding results! Our sales increased by 200% in just 3 months.'
    },
    {
      name: 'Amit Kumar',
      company: 'Future Enterprises',
      text: 'Best software maintenance services we have ever used. Highly recommended!'
    }
  ];

  const whyChooseUs = [
    { icon: '👥', title: 'Expert Team', desc: 'Experienced professionals dedicated to your success' },
    { icon: '🎯', title: 'Tailored Solutions', desc: 'Custom solutions that fit your unique needs' },
    { icon: '⚡', title: 'Cutting-Edge Tech', desc: 'Using the latest technologies for best results' },
    { icon: '🤝', title: 'Seamless Integration', desc: 'Smooth integration with your existing systems' },
    { icon: '💡', title: 'Creative Excellence', desc: 'Innovative designs and creative solutions' },
    { icon: '😊', title: 'Client-First', desc: 'Your satisfaction is our top priority' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <ParticleBackground />
        <div className="container mx-auto px-6 text-center relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 border border-pink-500/30 px-6 py-3 rounded-full mb-8"
            >
              <Sparkles className="text-pink-500" size={20} />
              <span className="text-pink-400 font-semibold">Welcome to Fly Digital Technology</span>
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Your Vision, Our
              <br />
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400"
              >
                {services[index]}
              </motion.span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-light-blue/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into digital excellence. We build software that fits your business perfectly.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="group glossy-btn bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white px-12 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </Link>
              <Link
                to="/about"
                className="border-2 border-pink-500 text-pink-400 px-12 py-5 rounded-xl font-bold text-lg hover:bg-pink-500/10 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                About Us
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="flex justify-center gap-12">
              {[Rocket, Zap, Sparkles, Globe, Cpu].map((Icon, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 8, -8, 0]
                  }}
                  transition={{ 
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                  className="text-pink-500/30"
                >
                  <Icon size={48} />
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Counter Section */}
      <section className="py-20 bg-navy/70">
        <div className="container mx-auto px-6">
          <div className="glass rounded-3xl p-10 md:p-14 border border-pink-500/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedCounter target={6} suffix="+" label="Years Experience" />
              <AnimatedCounter target={150} suffix="+" label="Projects Completed" />
              <AnimatedCounter target={80} suffix="+" label="Happy Clients" />
              <AnimatedCounter target={30} suffix="+" label="Technologies" />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-pink-400 font-semibold mb-4 block text-lg">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Transforming Ideas into Digital Excellence</h2>
              <p className="text-light-blue/70 max-w-3xl mx-auto text-lg leading-relaxed">
                Fly Digital Technology is your partner in digital innovation. We specialize in custom software, web applications, 
                AI solutions, and digital marketing to elevate your business to new heights.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-navy/50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-pink-400 font-semibold mb-4 block text-lg">What We Offer</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Innovative Services for Digital Growth</h2>
              <p className="text-light-blue/70 max-w-2xl mx-auto text-lg">
                Comprehensive digital solutions tailored to your unique business needs
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickServices.map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-pink-400 font-semibold mb-4 block text-lg">Our Products</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Your Success</h2>
              <p className="text-light-blue/70 max-w-2xl mx-auto text-lg">
                High-quality, reliable products designed to meet your needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.15}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="glass glossy-card rounded-2xl p-8 border border-pink-500/10 hover:border-pink-500/40 transition-all duration-300"
                >
                  <div className="text-6xl mb-6">{product.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{product.title}</h3>
                  <p className="text-light-blue/70 mb-6">{product.description}</p>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-light-blue/80">
                        <CheckCircle className="text-pink-500 flex-shrink-0" size={18} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-pink-400 font-semibold hover:gap-3 transition-all"
                  >
                    Explore More <ChevronRight size={18} />
                  </Link>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-navy/50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-pink-400 font-semibold mb-4 block text-lg">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What Sets Us Apart</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass glossy-card rounded-2xl p-8 text-center border border-pink-500/10 hover:border-pink-500/30 transition-all"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-light-blue/70">{item.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-pink-400 font-semibold mb-4 block text-lg">Our Clients</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Industry Leaders</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass glossy-card rounded-2xl p-8 border border-pink-500/10"
                >
                  <div className="text-5xl text-pink-500 mb-6">"</div>
                  <p className="text-light-blue/90 text-lg mb-6 italic leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-pink-400 text-sm">{testimonial.company}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-navy/70 to-navy-dark">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="glass rounded-3xl p-12 md:p-16 border border-pink-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
              <p className="text-light-blue/70 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's discuss how we can help you achieve your digital goals and transform your business.
              </p>
              <Link
                to="/contact"
                className="inline-block glossy-btn bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white px-12 py-6 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300"
              >
                Contact Us Today
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
