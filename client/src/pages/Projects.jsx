import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowRight, CheckCircle, Users, Brain, Code2, Rocket, Wrench } from 'lucide-react';

const Projects = () => {
  const categories = [
    "Digital Marketing Campaigns",
    "Educational Institution Websites",
    "Business Websites",
    "Social Media Branding Projects",
    "Lead Generation Campaigns",
    "AI Automation Solutions",
    "Software Maintenance Projects",
    "Branding Projects"
  ];

  const process = [
    { step: 1, title: "Requirement Analysis", icon: <CheckCircle size={32} /> },
    { step: 2, title: "Planning", icon: <Users size={32} /> },
    { step: 3, title: "Design and Development", icon: <Code2 size={32} /> },
    { step: 4, title: "Testing", icon: <Brain size={32} /> },
    { step: 5, title: "Delivery", icon: <Rocket size={32} /> },
    { step: 6, title: "Support & Maintenance", icon: <Wrench size={32} /> }
  ];

  return (
    <div className="bg-white">
      {/* Portfolio Page Banner */}
      <section className="min-h-[70vh] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=800&fit=crop"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-6">
              Our Portfolio
            </h1>
            <h2 className="text-blue-200 text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
              Explore Our Completed Projects & Process
            </h2>
          </div>
        </div>
      </section>

      {/* COMPLETED PROJECTS: Categories Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-[#1a2744] text-4xl md:text-5xl font-extrabold mb-6">
                COMPLETED PROJECTS
              </h2>
              <h3 className="text-[#f4722b] text-2xl md:text-3xl font-bold mb-4">
                Project Categories
              </h3>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="border-2 border-[#0a1f44] rounded-2xl p-6 bg-white shadow-lg"
                >
                  <h4 className="text-[#1a2744] text-lg font-bold text-center">
                    {category}
                  </h4>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* COMPLETED PROJECTS: Process Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#e8f5f0] to-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h3 className="text-[#f4722b] text-2xl md:text-3xl font-bold">
                Project Process
              </h3>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
              {process.map((step, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="text-center p-6 rounded-2xl bg-white border border-gray-200 shadow-md"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1a6b5a] text-white flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="text-[#f4722b] text-2xl font-extrabold mb-2">
                    {step.step}
                  </div>
                  <h4 className="text-[#1a2744] text-lg font-bold">
                    {step.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-[#0a1f44] text-white py-16 relative overflow-hidden border-t border-white/20">
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
                  Quick Links
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

export default Projects;
