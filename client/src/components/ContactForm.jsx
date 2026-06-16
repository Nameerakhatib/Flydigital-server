import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import api from '../utils/api';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await api.post('/contact', formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center">
          <CheckCircle size={48} className="text-navy-dark" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white">Thank You!</h3>
        <p className="text-light-blue/70">Your message has been received. We'll get back to you soon!</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-light-blue/80 mb-2 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-navy-dark/50 border border-pink-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-light-blue/80 mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-navy-dark/50 border border-pink-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-light-blue/80 mb-2 font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-navy-dark/50 border border-pink-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label className="block text-light-blue/80 mb-2 font-medium">Service Interested In</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full bg-navy-dark/50 border border-pink-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
          >
            <option value="">Select a service</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="ai-solutions">AI Solutions</option>
            <option value="software-maintenance">Software Maintenance</option>
            <option value="web-development">Web Development</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-light-blue/80 mb-2 font-medium">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-navy-dark/50 border border-pink-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors resize-none"
          placeholder="Tell us about your project..."
        ></textarea>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full glossy-btn bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>
    </form>
  );
};

export default ContactForm;
