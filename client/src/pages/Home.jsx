import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollReveal from '../components/ScrollReveal';
import {
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Search,
  Layout,
  Smartphone,
  TrendingUp,
  ShieldCheck,
  Rocket,
  Zap,
  Sparkles,
  Globe,
  Cpu,
  Star,
  ArrowRight as ArrowRightIcon,
  ChevronRight,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';

const Home = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  
  const heroSlides = [
    {
      title: "Transforming Ideas into Digital Success",
      subtitle: "Innovative solutions for your business growth",
      ctas: [
        { text: "Get In Touch", link: "/contact" },
        { text: "About Us", link: "/about" }
      ]
    },
    {
      title: "Your Business Deserves Smarter Solutions",
      subtitle: "AI-powered tools and digital marketing expertise",
      ctas: [
        { text: "Our Services", link: "/services" },
        { text: "Our Products", link: "/products" }
      ]
    },
    {
      title: "AI-Powered Growth for Modern Businesses",
      subtitle: "Automate, optimize, and scale with cutting-edge technology",
      ctas: [
        { text: "View Portfolio", link: "/portfolio" },
        { text: "Contact Us", link: "/contact" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const services = [
    {
      number: "01",
      icon: <Search className="text-[#1a6b5a]" size={32} />,
      title: "SEO & Digital Marketing",
      description: "Boost your online visibility and drive organic traffic with our comprehensive SEO strategies.",
      link: "/services"
    },
    {
      number: "02",
      icon: <Smartphone className="text-[#f4722b]" size={32} />,
      title: "Social Media Marketing",
      description: "Build your brand presence and engage your audience across all major social platforms.",
      link: "/services"
    },
    {
      number: "03",
      icon: <TrendingUp className="text-[#1a6b5a]" size={32} />,
      title: "Google Ads & Content Marketing",
      description: "Reach your target audience with precision and compelling content.",
      link: "/services"
    },
    {
      number: "04",
      icon: <Cpu className="text-[#f4722b]" size={32} />,
      title: "AI Chatbots & Automation",
      description: "Provide 24/7 support and automate workflows with intelligent chatbots.",
      link: "/services"
    },
    {
      number: "05",
      icon: <CheckCircle className="text-[#1a6b5a]" size={32} />,
      title: "Lead Management & Data Analytics",
      description: "Track, manage, and convert leads effectively with advanced analytics.",
      link: "/services"
    },
    {
      number: "06",
      icon: <ShieldCheck className="text-[#f4722b]" size={32} />,
      title: "Software Maintenance & IT Support",
      description: "Keep your systems running smoothly with our reliable support services.",
      link: "/services"
    }
  ];

  const projectCategories = [
    { number: "01", title: "Digital Marketing Campaigns", icon: <TrendingUp size={32} />, color: "text-[#1a6b5a]" },
    { number: "02", title: "Educational Institution Websites", icon: <Layout size={32} />, color: "text-[#f4722b]" },
    { number: "03", title: "Business Websites", icon: <Globe size={32} />, color: "text-[#1a6b5a]" },
    { number: "04", title: "Social Media Branding Projects", icon: <Smartphone size={32} />, color: "text-[#f4722b]" },
    { number: "05", title: "Lead Generation Campaigns", icon: <CheckCircle size={32} />, color: "text-[#1a6b5a]" },
    { number: "06", title: "AI Automation Solutions", icon: <Cpu size={32} />, color: "text-[#f4722b]" },
    { number: "07", title: "Software Maintenance Projects", icon: <ShieldCheck size={32} />, color: "text-[#1a6b5a]" },
    { number: "08", title: "Branding Projects", icon: <Sparkles size={32} />, color: "text-[#f4722b]" }
  ];

  const projectProcess = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "Understanding your business needs",
      icon: "🔍",
      color: "bg-[#1a6b5a]"
    },
    {
      step: "02",
      title: "Planning",
      description: "Structuring the project roadmap",
      icon: "📋",
      color: "bg-[#f4722b]"
    },
    {
      step: "03",
      title: "Design and Development",
      description: "Bringing your vision to life",
      icon: "🎨",
      color: "bg-[#1a6b5a]"
    },
    {
      step: "04",
      title: "Testing",
      description: "Ensuring quality and performance",
      icon: "✅",
      color: "bg-[#f4722b]"
    },
    {
      step: "05",
      title: "Delivery",
      description: "Launching your project",
      icon: "🚀",
      color: "bg-[#1a6b5a]"
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing care and updates",
      icon: "🛠️",
      color: "bg-[#f4722b]"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechHub Solutions",
      text: "Fly Digital Technology completely transformed our online presence. Their digital marketing strategies and website development helped us achieve 3x more leads in just 3 months.",
      rating: 5
    },
    {
      name: "Priya Patel",
      company: "EduBridge Academy",
      text: "Outstanding service and professional team! The AI chatbot they implemented has revolutionized our customer support, reducing response times by 90%.",
      rating: 5
    }
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextHero = () => {
    setHeroIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHero = () => {
    setHeroIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="bg-white">
      {/* Hero Slider */}
      <section className="min-h-[70vh] relative overflow-hidden">
        <ParticleBackground />
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0">
              <img
                src={`https://images.unsplash.com/photo-${[
                  "1460925895917-afdab827c52f",
                  "1485827404703-89b55fcc595e",
                  "1504384308090-c894fdcc538d"
                ][heroIndex]}?w=1600&h=800&fit=crop`}
                alt="Hero Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1a2744]/80"></div>
            </div>

            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="max-w-3xl">
                  <h3 className="text-[#f4722b] font-bold text-sm md:text-base uppercase tracking-widest mb-4">
                    YOUR VISION, OUR INNOVATION
                  </h3>
                  <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                    {heroSlides[heroIndex].title}
                  </h1>
                  <h2 className="text-[#f4722b] text-xl md:text-2xl italic mb-8">
                    {heroSlides[heroIndex].subtitle}
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {heroSlides[heroIndex].ctas.map((cta, idx) => (
                      <Link
                        key={idx}
                        to={cta.link}
                        className={`px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 transition-all ${
                          idx === 0 
                            ? "bg-gradient-to-r from-[#e040a0] to-[#7b2ff7] text-white shadow-lg hover:shadow-xl hover:-translate-y-1" 
                            : "bg-white text-[#1a2744] hover:bg-gray-100"
                        }`}
                      >
                        {cta.text}
                        {idx === 0 && <ArrowRight size={20} />}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevHero}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
        >
          <ChevronRight className="rotate-180" size={28} />
        </button>
        <button
          onClick={nextHero}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
        >
          <ChevronRight size={28} />
        </button>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="grid grid-cols-3 grid-rows-4 gap-3 h-[500px]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                    alt="Team"
                    className="col-span-2 row-span-2 object-cover rounded-xl"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop"
                    alt="Office"
                    className="col-span-1 row-span-4 object-cover rounded-xl"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop"
                    alt="Meeting"
                    className="col-span-2 row-span-2 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#1a6b5a] text-white p-6 rounded-xl flex items-center gap-3">
                  <Lightbulb size={32} fill="currentColor" />
                  <div>
                    <span className="text-3xl font-extrabold">6+</span>
                    <span className="block text-sm">Years Experience</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#1a6b5a] font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-10 h-0.5 bg-gradient-to-r from-[#1a6b5a] to-[#f4722b]"></span>
                  Who We Are
                </h3>
                <h2 className="text-[#f4722b] text-3xl md:text-4xl font-extrabold mb-6">
                  Transforming Ideas into Digital Success
                </h2>
                <p className="text-[#333333] text-base leading-relaxed mb-8">
                  Fly Digital Technology is your partner in digital innovation. Based in Hubballi, Karnataka, we specialize in Digital Marketing, AI Solutions, and Software Maintenance. Our mission is to empower businesses with innovative digital solutions, and our vision is to become one of India's leading digital technology companies.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Innovative Solutions",
                    "Expert Team",
                    "AI-Powered Tools",
                    "Client-Centric Approach",
                    "Transparent Process",
                    "Long-Term Commitment"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-[#333333]">
                      <CheckCircle className="text-[#1a6b5a] flex-shrink-0" size={18} />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e040a0] to-[#7b2ff7] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  About Us <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-[#eef4f0]">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h3 className="text-[#1a6b5a] font-bold text-sm uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                <span className="w-10 h-0.5 bg-gradient-to-r from-[#1a6b5a] to-[#f4722b]"></span>
                Our Services
              </h3>
              <h2 className="text-[#1a2744] text-3xl md:text-4xl font-extrabold">
                Innovative Services for Digital Growth
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-extrabold text-[#f4722b]">{service.number}</span>
                    <div className="p-4 rounded-xl bg-[#eef4f0]">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-[#1a2744] text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-[#333333] text-base leading-relaxed mb-6">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-[#f4722b] font-semibold hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ NEW: COMPLETED PROJECTS SECTION */}
      <section className="py-16 md:py-24">
        {/* PART A: Project Categories */}
        <div className="bg-[#eef4f0] py-16">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h3 className="text-[#1a6b5a] font-bold text-sm uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                  <span className="w-10 h-0.5 bg-gradient-to-r from-[#1a6b5a] to-[#f4722b]"></span>
                  Our Work
                </h3>
                <h2 className="text-[#1a2744] text-3xl md:text-4xl font-extrabold">
                  Projects We've Delivered
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projectCategories.map((category, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center"
                  >
                    <span className="text-3xl font-extrabold text-[#f4722b] block mb-4">{category.number}</span>
                    <div className={`mx-auto mb-4 ${category.color}`}>
                      {category.icon}
                    </div>
                    <h4 className="text-[#1a2744] text-lg font-bold">{category.title}</h4>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* PART B: Project Process */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h3 className="text-[#1a6b5a] font-bold text-sm uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                  <span className="w-10 h-0.5 bg-gradient-to-r from-[#1a6b5a] to-[#f4722b]"></span>
                  How We Work
                </h3>
                <h2 className="text-[#1a2744] text-3xl md:text-4xl font-extrabold">
                  Our Project Process
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative">
                {/* Desktop: Horizontal Steps */}
                <div className="hidden lg:flex items-center justify-between gap-4">
                  {projectProcess.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="flex-1 flex flex-col items-center text-center">
                        <span className="text-[#f4722b] font-bold text-sm mb-2">{step.step}</span>
                        <div className={`w-20 h-20 rounded-full ${step.color} text-white flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                          {step.icon}
                        </div>
                        <h4 className="text-[#1a2744] text-lg font-bold mb-2">{step.title}</h4>
                        <p className="text-[#333333] text-sm">{step.description}</p>
                      </div>
                      {idx < projectProcess.length - 1 && (
                        <div className="flex-shrink-0 text-[#f4722b] text-3xl">
                          <ChevronRight size={36} />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Mobile: Vertical Steps */}
                <div className="lg:hidden flex flex-col gap-6">
                  {projectProcess.map((step, idx) => (
                    <motion.div
                      key={idx}
                      className="flex flex-col items-center text-center"
                    >
                      <span className="text-[#f4722b] font-bold text-sm mb-2">{step.step}</span>
                      <div className={`w-20 h-20 rounded-full ${step.color} text-white flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                        {step.icon}
                      </div>
                      <h4 className="text-[#1a2744] text-lg font-bold mb-2">{step.title}</h4>
                      <p className="text-[#333333] text-sm mb-4">{step.description}</p>
                      {idx < projectProcess.length - 1 && (
                        <div className="text-[#f4722b] text-3xl">
                          <ChevronDown size={36} />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h3 className="text-[#1a6b5a] font-bold text-sm uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                <span className="w-10 h-0.5 bg-gradient-to-r from-[#1a6b5a] to-[#f4722b]"></span>
                Our Clients
              </h3>
              <h2 className="text-[#1a2744] text-3xl md:text-4xl font-extrabold">
                Trusted by Industry Leaders Worldwide
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-2xl p-8">
              <img
                src={testimonials[testimonialIndex].avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"}
                alt="Client"
                className="w-full max-w-md mx-auto rounded-full"
              />
            </div>

            <div className="relative">
              <div className="bg-[#e8f5f0] p-10 rounded-2xl">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-[#f5c518]" size={24} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[#333333] text-xl mb-8 leading-relaxed italic">
                  "{testimonials[testimonialIndex].text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a6b5a]/20 to-[#f4722b]/20 flex items-center justify-center text-3xl">
                    👤
                  </div>
                  <div>
                    <h4 className="text-[#1a2744] font-bold text-xl">{testimonials[testimonialIndex].name}</h4>
                    <p className="text-[#1a6b5a] text-base">{testimonials[testimonialIndex].company}</p>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-4 mt-8 justify-end">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-[#1a6b5a] text-white flex items-center justify-center hover:bg-[#0f4d3d] transition-colors"
                >
                  <ChevronRight className="rotate-180" size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-[#1a6b5a] text-white flex items-center justify-center hover:bg-[#0f4d3d] transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ NEW: CONTACT US SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <h2 className="text-[#1a2744] text-3xl md:text-4xl font-extrabold mb-4">
                  Get in Touch
                </h2>
                <p className="text-[#333333] text-xl mb-8 leading-relaxed">
                  We'd love to hear from you. Reach out and let's grow together.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <Phone className="text-[#1a2744] flex-shrink-0" size={28} />
                    <span className="text-[#333333] text-lg">+91 76968-06834</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-[#1a2744] flex-shrink-0" size={28} />
                    <span className="text-[#333333] text-lg">info@flydigitaltechnology.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Globe className="text-[#1a2744] flex-shrink-0" size={28} />
                    <span className="text-[#333333] text-lg">www.flydigitaltechnology.com</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#1a2744] flex-shrink-0 mt-1" size={28} />
                    <span className="text-[#333333] text-lg leading-relaxed">
                      Pride Icon Building, 3rd Floor,<br />
                      Gokul Road, Hubballi, Karnataka, India
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="text-[#1a2744] flex-shrink-0" size={28} />
                    <span className="text-[#333333] text-lg">Monday to Saturday, 9:00 AM – 7:00 PM</span>
                  </div>
                </div>

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

              {/* Right Column: Contact Form */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-[#333] focus:outline-none focus:border-[#f4722b] text-base"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-[#333] focus:outline-none focus:border-[#f4722b] text-base"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-[#333] focus:outline-none focus:border-[#f4722b] text-base"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-[#333] focus:outline-none focus:border-[#f4722b] text-base"
                    />
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Your Message (optional)"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-[#333] focus:outline-none focus:border-[#f4722b] text-base"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#e040a0] to-[#7b2ff7] text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>
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
                    <Link
                      to="/services"
                      className="text-white/80 hover:text-white transition-colors text-base"
                    >
                      {link}
                    </Link>
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
                    { name: "Products", path: "/products" },
                    { name: "Portfolio", path: "/portfolio" },
                    { name: "Services", path: "/services" },
                    { name: "Contact Us", path: "/contact" }
                  ].map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.path}
                        className="text-white/80 hover:text-white transition-colors text-base"
                      >
                        {link.name}
                      </Link>
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

export default Home;
