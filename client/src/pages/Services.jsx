import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Build high-performance, scalable, and secure web applications using modern frameworks and industry best practices.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      title: "Customize Software",
      description: "Process involving the creation, maintenance of applications, frameworks of software, design, programming.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    },
    {
      title: "App Development",
      description: "It is the act of developing app suitable for mobile devices that writing software for small, wireless computing devices.",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
    },
    {
      title: "Digital Marketing",
      description: "Grow your brand through SEO, paid ads, and email marketing and engage your audience with strategic content and ad campaigns.",
      img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop"
    },
    {
      title: "Software Consulting Services",
      description: "Expert software consulting to optimize processes, reduce costs, and deliver scalable solutions for your compatibility and company.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
    },
    {
      title: "Image Processing",
      description: "AI-powered image analysis and enhancement with Photoshop editing for real estate and provide the best quality output.",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    },
    {
      title: "UI/UX Design Service",
      description: "We design intuitive, engaging UI/UX experiences that enhance user satisfaction and drive business performance.",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
    },
    {
      title: "AI & Machine Learning",
      description: "Unlock business potential with AI and Machine Learning solutions that automate, analyze, and drive smart decisions.",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
    },
    {
      title: "IoT Application Development",
      description: "We build smart IoT applications that connect devices, streamline operations, and deliver real-time data-driven insights for smooth connectivity.",
      img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop"
    },
    {
      title: "Cloud Services",
      description: "Scalable and secure cloud development solutions that enhance performance, flexibility, and efficiency for your business.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
    },
    {
      title: "DevOps & Deployment",
      description: "Streamline development and operations with DevOps solutions that ensure faster, reliable, and automated software deployment.",
      img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop"
    },
    {
      title: "Software Integration",
      description: "We connect your systems with custom APIs and seamless integrations to improve efficiency, data flow, and performance.",
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="bg-white">
      {/* Services Page Banner */}
      <section className="min-h-[70vh] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&h=800&fit=crop"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-6">
              Services
            </h1>
            <h2 className="text-blue-300 text-3xl md:text-5xl font-bold max-w-2xl mx-auto">
              Smart, Affordable Software for Every Challenge
            </h2>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-lg border border-gray-200 bg-white shadow-sm"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-[#f4722b] text-white text-center py-3 px-4">
                    <h3 className="font-bold text-base">{service.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-base mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 border-2 border-[#f4722b] text-[#f4722b] px-6 py-2 rounded font-semibold text-sm hover:bg-[#f4722b] hover:text-white transition-all"
                    >
                      Read more <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Software Services Section */}
      <section className="py-16 bg-gradient-to-r from-blue-200 to-blue-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-[#1a2744] text-4xl md:text-5xl font-extrabold">
            Trusted Software Services
          </h2>
        </div>
      </section>

      {/* Footer */}
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

export default Services;
