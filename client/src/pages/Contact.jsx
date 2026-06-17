import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Phone, Mail, MapPin, Globe, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Contact Banner */}
      <section className="min-h-[70vh] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=800&fit=crop"
            alt="Contact Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0d6b5a]/80"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-2xl">
              <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Contact Us
              </h1>
              <p className="text-white/90 text-xl md:text-2xl">
                Get in touch with us for any queries or collaborations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Card */}
      <section className="py-16 md:py-24 px-6 -mt-20 relative z-10">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Phone */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#0d6b5a] text-white flex items-center justify-center">
                    <Phone size={28} />
                  </div>
                  <h3 className="text-[#1a1a1a] text-xl font-bold">Phone</h3>
                  <p className="text-[#333333] text-base">+91 76968-06834</p>
                  <p className="text-[#333333] text-base">+91 98765-43210</p>
                </div>
                {/* Location */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#0d6b5a] text-white flex items-center justify-center">
                    <MapPin size={28} />
                  </div>
                  <h3 className="text-[#1a1a1a] text-xl font-bold">Location</h3>
                  <p className="text-[#333333] text-base leading-relaxed">
                    Pride Icon Building, 3rd Floor,<br />
                    Gokul Road, Hubballi, Karnataka, India
                  </p>
                </div>
                {/* Email */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#0d6b5a] text-white flex items-center justify-center">
                    <Mail size={28} />
                  </div>
                  <h3 className="text-[#1a1a1a] text-xl font-bold">Email</h3>
                  <p className="text-[#333333] text-base">info@flydigitaltechnology.com</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 md:py-32 bg-[#f8faf9]">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left */}
              <div>
                <h3 className="text-[#1a6b5a] font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-10 h-0.5 bg-gradient-to-r from-[#1a6b5a] to-[#f4722b]"></span>
                  Contact Us
                </h3>
                <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-extrabold mb-6">
                  Get in Touch
                </h2>
                <p className="text-[#333333] text-base leading-relaxed mb-8 max-w-lg">
                  We’d love to hear from you! Reach out to us with any questions, feedback, or opportunities, and we’ll respond as soon as possible.
                </p>

                {/* Social Icons */}
                <div className="flex gap-4 mb-8">
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

                {/* Business Hours & Website */}
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-[#1a1a1a]" size={20} />
                    </div>
                    <span className="text-[#333333] text-base">
                      Monday to Saturday, 9:00 AM – 7:00 PM
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Globe className="text-[#1a1a1a]" size={20} />
                    </div>
                    <span className="text-[#333333] text-base">
                      www.flydigitaltechnology.com
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[#333333] text-sm font-medium">Your Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#333] focus:outline-none focus:border-[#0d6b5a] focus:ring-2 focus:ring-[#0d6b5a]/10 text-base transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[#333333] text-sm font-medium">Your Email</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#333] focus:outline-none focus:border-[#0d6b5a] focus:ring-2 focus:ring-[#0d6b5a]/10 text-base transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[#333333] text-sm font-medium">Mobile Number</label>
                      <input
                        type="tel"
                        placeholder="+91 9876543210"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#333] focus:outline-none focus:border-[#0d6b5a] focus:ring-2 focus:ring-[#0d6b5a]/10 text-base transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[#333333] text-sm font-medium">Subject</label>
                      <input
                        type="text"
                        placeholder="How can we help?"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#333] focus:outline-none focus:border-[#0d6b5a] focus:ring-2 focus:ring-[#0d6b5a]/10 text-base transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#333333] text-sm font-medium">Your Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us more about your query..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#333] focus:outline-none focus:border-[#0d6b5a] focus:ring-2 focus:ring-[#0d6b5a]/10 text-base transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#e040a0] to-[#7b2ff7] text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.213550846123!2d75.14388147519775!3d15.368783389316326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb9d248e0d19b5d%3A0x1c9e23f8d3b3f1d4!2sPride%20Icon%20Building!5e0!3m2!1sen!2sin!4v1718550000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
                Empowering businesses with innovative digital solutions through innovation and technology.
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
                      className="text-white/80 hover:text-[#f4722b] transition-colors text-base"
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
                    { name: "About Us", path: "/about" },
                    { name: "Portfolio", path: "/portfolio" },
                    { name: "Services", path: "/services" },
                    { name: "Contact Us", path: "/contact" }
                  ].map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.path}
                        className="text-white/80 hover:text-[#f4722b] transition-colors text-base"
                      >
                        {link.name}
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
                    Pride Icon Building, 3rd Floor,<br />
                    Gokul Road, Hubballi,<br />
                    Karnataka
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#05203a] py-4 text-center">
        <p className="text-white text-sm">
          © 2025 Fly Digital Technology. All Rights Reserved.
        </p>
      </div>

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

export default Contact;
