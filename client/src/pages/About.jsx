import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  const [counted, setCounted] = useState(false);
  const [stats, setStats] = useState({ satisfaction: 0, projects: 0, years: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counted) {
          setCounted(true);
          animateStats();
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => {
      if (statsSection) observer.unobserve(statsSection);
    };
  }, [counted]);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setStats({
        satisfaction: Math.floor((100 / steps) * step),
        projects: Math.floor((50 / steps) * step),
        years: Math.floor((3 / steps) * step)
      });

      if (step >= steps) {
        clearInterval(timer);
        setStats({ satisfaction: 100, projects: 50, years: 3 });
      }
    }, interval);
  };

  const services = [
    { title: "Digital Marketing", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" },
    { title: "SEO & Search Engine Optimization", img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop" },
    { title: "AI Chatbots & Automation", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop" },
    { title: "Social Media Marketing", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop" },
    { title: "Content Marketing & Google Ads", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop" },
    { title: "Software Maintenance & IT Support", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop" }
  ];

  return (
    <div className="bg-white">
      {/* Page Banner Section (Like Home) */}
      <section className="min-h-[70vh] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=800&fit=crop"
            alt="Team Meeting with City View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl">
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                About Us
              </h1>
              <p className="text-white/90 text-xl md:text-2xl mb-8">
                Transforming Ideas into Digital Success Through Innovation and Technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-[#1a6b5a] font-bold text-sm uppercase tracking-widest mb-4 flex items-center justify-center lg:justify-start gap-2">
                  <span className="w-10 h-0.5 bg-gradient-to-r from-[#1a6b5a] to-[#f4722b]"></span>
                  Who We Are
                </h3>
                <h2 className="text-[#1a2744] text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-center lg:text-left">
                  Transforming Ideas into Digital Success
                </h2>
                <p className="text-[#333333] text-base leading-relaxed mb-8 text-center lg:text-left">
                  Fly Digital Technology is your partner in digital innovation.
                  We specialize in Digital Marketing Services, AI-powered
                  Solutions, and Software Maintenance to empower businesses
                  to build a strong online presence, improve operational
                  efficiency, and achieve sustainable growth.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
                  {[
                    "Digital Marketing Services",
                    "AI Solutions & Automation",
                    "Software Maintenance",
                    "Website Development & Branding"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-[#333333]">
                      <CheckCircle className="text-[#2aab8a] flex-shrink-0" size={20} />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:pl-8">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team Working"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-[#e8f5f0]">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h3 className="text-[#1a6b5a] font-bold text-sm uppercase tracking-widest mb-4">
                Why Choose Us
              </h3>
              <h2 className="text-[#1a2744] text-3xl md:text-4xl font-extrabold">
                Full Spectrum of Professional Digital Services<br />
                Designed to Meet Your Unique Need
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-[#0f1b35] text-white p-4">
                    <h3 className="text-lg font-bold">{service.title}</h3>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Stats Section */}
      <section id="stats-section" className="py-20 relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=1600&h=800&fit=crop"
            alt="Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a2744]/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4">
                Customer Satisfaction
              </h2>
              <p className="text-white/80 text-xl mb-12">
                Delivering Value Through Consistency And Care.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0">
                {[
                  { num: stats.satisfaction, label: "Customer Satisfaction", suffix: "%" },
                  { num: stats.projects, label: "Projects Completed", suffix: "+" },
                  { num: stats.years, label: "Years of Experience", suffix: "+" }
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center px-8 md:px-12">
                    <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">
                      {stat.num}{stat.suffix}
                    </div>
                    <p className="text-[#f4722b] font-semibold text-lg">
                      {stat.label}
                    </p>
                    {idx < 2 && (
                      <div className="hidden md:block absolute h-20 w-px bg-white/30"
                        style={{ marginLeft: idx === 0 ? '33%' : '66%' }}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <h2 className="text-[#1a2744] text-3xl md:text-4xl font-extrabold mb-8">
                  Get in Touch
                </h2>

                <div className="flex gap-4 mb-8">
                  {[
                    { icon: "📘", color: "#3b5998" },
                    { icon: "📷", color: "#e1306c" },
                    { icon: "💼", color: "#0077b5" }
                  ].map((social, idx) => (
                    <div
                      key={idx}
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                      style={{ backgroundColor: social.color }}
                    >
                      {social.icon}
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="text-[#1a2744] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-[#333333] text-base">+91 76968-06834</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-[#1a2744] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-[#333333] text-base">info@flydigitaltechnology.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#1a2744] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-[#333333] text-base leading-relaxed">
                        Pride Icon Building, 3rd Floor, Gokul Road,<br />
                        Hubballi, Karnataka 580030
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[#333333] focus:outline-none focus:border-[#1a6b5a]"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[#333333] focus:outline-none focus:border-[#1a6b5a]"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      placeholder="Mobile No"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[#333333] focus:outline-none focus:border-[#1a6b5a]"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[#333333] focus:outline-none focus:border-[#1a6b5a]"
                    />
                  </div>
                  <textarea
                    rows={5}
                    placeholder="Your Message (optional)"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[#333333] focus:outline-none focus:border-[#1a6b5a]"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#e040a0] to-[#7b2ff7] text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-shadow"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer (Same as Home Page) */}
      <footer className="bg-[#0a1f44] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-extrabold mb-6">
                Fly Digital Technology
              </h3>
              <p className="text-white/80 text-base mb-8 leading-relaxed">
                Empowering businesses with innovative digital solutions
              </p>
              <div className="flex gap-4">
                {[
                  { name: "Facebook", icon: "📘", color: "#3b5998" },
                  { name: "Instagram", icon: "📷", color: "#e1306c" },
                  { name: "LinkedIn", icon: "💼", color: "#0077b5" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: social.color }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white text-xl font-bold mb-6">
                Important Links
              </h4>
              <ul className="space-y-3">
                {[
                  "SEO & Digital Marketing",
                  "Social Media Marketing",
                  "AI Chatbots & Automation",
                  "Software Maintenance",
                  "Google Ads & Content Marketing"
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white transition-colors text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white text-xl font-bold mb-6">
                  Contact
                </h4>
                <ul className="space-y-3">
                  {[
                    "About Us",
                    "Products",
                    "Portfolio",
                    "Services",
                    "Contact Us"
                  ].map((link, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-white/80 hover:text-white transition-colors text-base"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white text-xl font-bold mb-6">
                  Contact
                </h4>
                <ul className="space-y-3">
                  <li className="text-white/80 text-base">
                    info@flydigitaltechnology.com
                  </li>
                  <li className="text-white/80 text-base">
                    +91 76968-06834
                  </li>
                  <li className="text-white/80 text-base leading-relaxed">
                    Pride Icon Building, 3rd Floor,
                    <br />
                    Gokul Road, Hubballi,
                    <br />
                    Karnataka 580030
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/20 text-center">
            <p className="text-white/60 text-sm">
              © 2025 Fly Digital Technology. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917696806834"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform"
      >
        💬
      </a>
    </div>
  );
};

export default About;
