const mongoose = require('mongoose');
const Project = require('./models/Project');
const Service = require('./models/Service');
require('dotenv').config();

const seedServices = [
  { title: 'SEO', category: 'Digital Marketing', description: 'Optimize your website to rank higher on search engines and drive organic traffic.', icon: '🔍' },
  { title: 'Social Media Marketing', category: 'Digital Marketing', description: 'Engage your audience and build brand presence across all social platforms.', icon: '📱' },
  { title: 'Google Ads', category: 'Digital Marketing', description: 'Targeted advertising campaigns to reach potential customers effectively.', icon: '🎯' },
  { title: 'Content Marketing', category: 'Digital Marketing', description: 'Create valuable content to attract, engage, and retain your target audience.', icon: '✍️' },
  { title: 'Website Development', category: 'Digital Marketing', description: 'Build responsive, modern websites that convert visitors into customers.', icon: '💻' },
  { title: 'Branding Services', category: 'Digital Marketing', description: 'Create a unique and memorable brand identity for your business.', icon: '🎨' },
  { title: 'AI Chatbots', category: 'AI Solutions', description: 'Implement intelligent chatbots to provide 24/7 customer support.', icon: '🤖' },
  { title: 'Business Automation', category: 'AI Solutions', description: 'Automate repetitive tasks and streamline your business operations.', icon: '⚡' },
  { title: 'Lead Management Systems', category: 'AI Solutions', description: 'Efficiently track and manage your leads through the sales funnel.', icon: '📊' },
  { title: 'Data Analytics', category: 'AI Solutions', description: 'Transform raw data into actionable insights for better decision-making.', icon: '📈' },
  { title: 'Software Installation', category: 'Software Maintenance', description: 'Professional installation and setup of all business software.', icon: '🔧' },
  { title: 'System Updates', category: 'Software Maintenance', description: 'Keep your systems up-to-date with the latest security patches.', icon: '🔄' },
  { title: 'Performance Optimization', category: 'Software Maintenance', description: 'Optimize your systems for maximum speed and efficiency.', icon: '🚀' },
  { title: 'Database Management', category: 'Software Maintenance', description: 'Secure and efficient management of your business databases.', icon: '🗄️' },
  { title: 'Security Monitoring', category: 'Software Maintenance', description: 'Continuous monitoring to protect your systems from threats.', icon: '🛡️' },
  { title: 'Technical Support', category: 'Software Maintenance', description: 'Reliable technical support for all your IT needs.', icon: '💬' },
  { title: 'IT Support Services', category: 'Software Maintenance', description: 'Comprehensive IT support to keep your business running smoothly.', icon: '🔌' }
];

const seedProjects = [
  { title: 'E-Commerce SEO Campaign', category: 'Digital Marketing', description: 'SEO optimization for a leading e-commerce brand', challenge: 'Low organic traffic and poor search rankings', solution: 'Comprehensive SEO strategy including keyword research and on-page optimization', result: '150% increase in organic traffic in 6 months', thumbnail: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=ecommerce%20website%20seo%20dashboard&image_size=square' },
  { title: 'School Management Portal', category: 'Educational Websites', description: 'Complete portal for school administration', challenge: 'Manual processes and lack of centralized system', solution: 'Custom web application with all school management features', result: '90% reduction in administrative work', thumbnail: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=school%20management%20portal%20dashboard&image_size=square' },
  { title: 'Corporate Business Website', category: 'Business Websites', description: 'Modern website for a corporate client', challenge: 'Outdated website not reflecting brand identity', solution: 'Complete redesign with modern UI/UX', result: '200% increase in lead generation', thumbnail: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20corporate%20business%20website&image_size=square' },
  { title: 'Social Media Rebrand', category: 'Social Media Branding', description: 'Complete social media brand overhaul', challenge: 'Inconsistent branding across platforms', solution: 'Unified brand strategy and content calendar', result: '300% increase in engagement', thumbnail: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=social%20media%20branding%20strategy&image_size=square' },
  { title: 'Lead Gen Automation', category: 'Lead Generation', description: 'Automated lead generation system', challenge: 'Time-consuming manual lead follow-up', solution: 'AI-powered lead nurturing system', result: '5x more qualified leads', thumbnail: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=lead%20generation%20automation%20dashboard&image_size=square' },
  { title: 'Customer Service Chatbot', category: 'AI Automation', description: 'AI chatbot for 24/7 customer support', challenge: 'Limited support hours and high response time', solution: 'Custom AI chatbot with natural language processing', result: '80% of queries resolved automatically', thumbnail: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=ai%20chatbot%20customer%20service&image_size=square' },
  { title: 'Legacy System Upgrade', category: 'Software Maintenance', description: 'Complete system modernization', challenge: 'Outdated legacy system with performance issues', solution: 'System migration and performance optimization', result: '10x faster system performance', thumbnail: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=software%20system%20upgrade%20maintenance&image_size=square' },
  { title: 'Startup Brand Identity', category: 'Branding', description: 'Complete brand identity design', challenge: 'No established brand presence', solution: 'Full brand kit including logo, colors, and guidelines', result: 'Strong brand recognition in market', thumbnail: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=brand%20identity%20design%20logo%20guidelines&image_size=square' }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Service.deleteMany({});
    await Project.deleteMany({});
    await Service.insertMany(seedServices);
    await Project.insertMany(seedProjects);
    console.log('Database seeded!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
