import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const Products = () => {
  const products = [
    {
      title: "ERP SOFTWARE SYSTEM",
      description: "We provide Engineering College ERP projects designed to streamline academic and administrative processes. These projects offer modules for student management, faculty records, attendance, exams...",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      title: "AI WRITING ASSISTANT",
      description: "Your all-in-one writing assistant for paraphrasing, grammar correction, AI content detection, and plagiarism check. Enhance your writing with clarity, correctness, and originality in one place.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    },
    {
      title: "VASTU ASSISTANT AI",
      description: "AI-driven Vastu assistant that analyzes floor plans, compass directions, and layouts. Designed for homeowners, architects, and builders to align spaces with energy-based Vastu principles...",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop"
    },
    {
      title: "HOSPITAL SOFTWARE",
      description: "Hospital software is a digital system that manages patient records, appointments, billing, and medical workflows. It streamlines hospital operations by integrating ......",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    },
    {
      title: "SCHOOL MANAGEMENT APP",
      description: "Software designed to manage daily school operations like student admissions, attendance, fees, exam reports, and communication between teachers, students, and parents...",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
    },
    {
      title: "IMAGE SCRAPING SOFTWARE",
      description: "Image scraping AI software automates the extraction of images from websites or online sources using AI-powered recognition and filtering...",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
    },
    {
      title: "INVOICE GENERATE SOFTWARE",
      description: "Invoice generation software helps businesses create, manage, and send professional invoices automatically. It streamlines billing, supports payment tracking...",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="bg-white">
      {/* Products Page Banner */}
      <section className="min-h-[70vh] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&h=800&fit=crop"
            alt="Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold">
              Our Products
            </h1>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-3xl bg-gradient-to-b from-orange-100 to-orange-200 p-6 shadow-xl border border-gray-200"
                >
                  <div className="flex items-end justify-center mb-6">
                    <div className="w-full max-w-xs relative">
                      <div className="bg-gray-700 rounded-t-lg h-6 flex items-center px-4">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div className="bg-gray-800 rounded-b-lg overflow-hidden aspect-[4/3]">
                        <img
                          src={product.img}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-[#1a1a1a] text-2xl font-extrabold mb-4 uppercase text-center">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 text-base mb-6 leading-relaxed text-center">
                    {product.description}
                  </p>
                  <div className="flex justify-center">
                    <Link
                      to="/contact"
                      className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-2 rounded font-semibold text-base shadow-sm hover:bg-gray-50 transition-all"
                    >
                      Read more
                    </Link>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
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

export default Products;
