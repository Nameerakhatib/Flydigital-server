import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import ContactForm from '../components/ContactForm';
import { MapPin, Mail, Phone, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: <MapPin size={28} />, title: 'Address', details: 'Pride Icon Building, 3rd Floor, Gokul Road, Hubballi, Karnataka, India' },
    { icon: <Mail size={28} />, title: 'Email', details: 'info@flydigitaltechnology.com' },
    { icon: <Phone size={28} />, title: 'Phone', details: '+91 98765 43210' },
    { icon: <Clock size={28} />, title: 'Business Hours', details: 'Monday - Saturday: 9:00 AM - 7:00 PM' }
  ];

  return (
    <div className="pt-24">
      <section className="py-20 bg-navy/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-light-blue/70">Get in touch with our team</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <span className="text-pink-400 font-semibold mb-4 block">Get In Touch</span>
                <h2 className="text-4xl font-bold mb-8">Let's Start a Conversation</h2>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, idx) => (
                    <div key={idx} className="glass glossy-card rounded-xl p-6 border border-pink-500/10 hover:border-pink-500/30 transition-all duration-300 flex items-start gap-4">
                      <div className="text-pink-500 flex-shrink-0 mt-1">{info.icon}</div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{info.title}</h4>
                        <p className="text-light-blue/70">{info.details}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="glass glossy-card rounded-xl p-6 border border-pink-500/10 mb-8">
                  <h4 className="font-bold text-white mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="w-12 h-12 bg-navy-dark/50 rounded-lg flex items-center justify-center text-light-blue/70 hover:text-pink-400 hover:border-pink-500/30 transition-all duration-300"
                      >
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="glass glossy-card rounded-xl overflow-hidden border border-pink-500/10 h-64">
                  <iframe
                    title="Location"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15257.437570756614!2d75.12294536896959!3d15.36470498128216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb064c07070ed97%3A0x646a51b8ec2e4b7d!2sHubballi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1718479666239!5m2!1sen!2sin"
                  ></iframe>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass glossy-card rounded-3xl p-8 border border-pink-500/10">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
