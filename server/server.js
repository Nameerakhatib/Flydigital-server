const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Fly Digital Technology API!',
    version: '1.0.0',
    endpoints: {
      contact: 'POST /api/contact',
      projects: 'GET /api/projects',
      services: 'GET /api/services'
    }
  });
});

// Sample data (in-memory instead of MongoDB)
let contacts = [];

const services = {
  'Digital Marketing': [
    { icon: '🔍', title: 'SEO', description: 'Optimize your website to rank higher on search engines and drive organic traffic.' },
    { icon: '📱', title: 'Social Media Marketing', description: 'Engage your audience and build brand presence across all social platforms.' },
    { icon: '🎯', title: 'Google Ads', description: 'Targeted advertising campaigns to reach potential customers effectively.' },
    { icon: '✍️', title: 'Content Marketing', description: 'Create valuable content to attract, engage, and retain your target audience.' },
    { icon: '💻', title: 'Website Development', description: 'Build responsive, modern websites that convert visitors into customers.' },
    { icon: '🎨', title: 'Branding Services', description: 'Create a unique and memorable brand identity for your business.' }
  ],
  'AI Solutions': [
    { icon: '🤖', title: 'AI Chatbots', description: 'Implement intelligent chatbots to provide 24/7 customer support.' },
    { icon: '⚡', title: 'Business Automation', description: 'Automate repetitive tasks and streamline your business operations.' },
    { icon: '📊', title: 'Lead Management Systems', description: 'Efficiently track and manage your leads through the sales funnel.' },
    { icon: '📈', title: 'Data Analytics', description: 'Transform raw data into actionable insights for better decision-making.' }
  ],
  'Software Maintenance': [
    { icon: '🔧', title: 'Software Installation', description: 'Professional installation and setup of all business software.' },
    { icon: '🔄', title: 'System Updates', description: 'Keep your systems up-to-date with the latest security patches.' },
    { icon: '🚀', title: 'Performance Optimization', description: 'Optimize your systems for maximum speed and efficiency.' },
    { icon: '🗄️', title: 'Database Management', description: 'Secure and efficient management of your business databases.' },
    { icon: '🛡️', title: 'Security Monitoring', description: 'Continuous monitoring to protect your systems from threats.' },
    { icon: '💬', title: 'Technical Support', description: 'Reliable technical support for all your IT needs.' },
    { icon: '🔌', title: 'IT Support Services', description: 'Comprehensive IT support to keep your business running smoothly.' }
  ]
};

const projects = [
  { id: 1, title: 'E-Commerce SEO Campaign', category: 'Digital Marketing', description: 'SEO optimization for a leading e-commerce brand', challenge: 'Low organic traffic and poor search rankings', solution: 'Comprehensive SEO strategy including keyword research and on-page optimization', result: '150% increase in organic traffic in 6 months', thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop' },
  { id: 2, title: 'School Management Portal', category: 'Educational Websites', description: 'Complete portal for school administration', challenge: 'Manual processes and lack of centralized system', solution: 'Custom web application with all school management features', result: '90% reduction in administrative work', thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop' },
  { id: 3, title: 'Corporate Business Website', category: 'Business Websites', description: 'Modern website for a corporate client', challenge: 'Outdated website not reflecting brand identity', solution: 'Complete redesign with modern UI/UX', result: '200% increase in lead generation', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop' },
  { id: 4, title: 'Social Media Rebrand', category: 'Social Media Branding', description: 'Complete social media brand overhaul', challenge: 'Inconsistent branding across platforms', solution: 'Unified brand strategy and content calendar', result: '300% increase in engagement', thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop' },
  { id: 5, title: 'Lead Gen Automation', category: 'Lead Generation', description: 'Automated lead generation system', challenge: 'Time-consuming manual lead follow-up', solution: 'AI-powered lead nurturing system', result: '5x more qualified leads', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop' },
  { id: 6, title: 'Customer Service Chatbot', category: 'AI Automation', description: 'AI chatbot for 24/7 customer support', challenge: 'Limited support hours and high response time', solution: 'Custom AI chatbot with natural language processing', result: '80% of queries resolved automatically', thumbnail: 'https://images.unsplash.com/photo-1531746790731-6c087fecd60a?w=800&h=600&fit=crop' },
  { id: 7, title: 'Legacy System Upgrade', category: 'Software Maintenance', description: 'Complete system modernization', challenge: 'Outdated legacy system with performance issues', solution: 'System migration and performance optimization', result: '10x faster system performance', thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop' },
  { id: 8, title: 'Startup Brand Identity', category: 'Branding', description: 'Complete brand identity design', challenge: 'No established brand presence', solution: 'Full brand kit including logo, colors, and guidelines', result: 'Strong brand recognition in market', thumbnail: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800&h=600&fit=crop' }
];

// API Routes
app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body;
  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
  const newContact = { id: Date.now(), name, email, phone, service, message, createdAt: new Date() };
  contacts.push(newContact);
  console.log('New contact form submission:', newContact);
  res.json({ success: true, message: 'Your message has been received!' });
});

app.get('/api/projects', (req, res) => {
  const { category } = req.query;
  if (category && category !== 'All') {
    return res.json(projects.filter(p => p.category === category));
  }
  res.json(projects);
});

app.get('/api/services', (req, res) => {
  res.json(services);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
