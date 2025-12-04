import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Github, ArrowUp, Heart } from 'lucide-react';

// Custom TikTok Icon Component
const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Custom Software Development',
    'Mobile App Development',
    'Web Development',
    'E-commerce Solutions',
    'Cloud Services',
    'IT Consulting'
  ];

  const products = [
    'Mavuno Market',
    'AgriConnect Pro',
    'EduTech Africa',
    'Transport Logistics',
    'Healthcare Management',
    'FinTech Solutions'
  ];

  const socialLinks = [
    { icon: TikTokIcon, href: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Github, href: '#', color: 'hover:text-gray-800' }
  ];

  return (
    <footer className="bg-neutral-charcoal text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border border-white rounded-lg rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-poppins">T</span>
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-lg">
                    Tahirika Afrotech Solutions
                  </h3>
                  <p className="text-xs text-white/70">
                    Innovating Africa's Digital Future
                  </p>
                </div>
              </div>
              
              <p className="text-white/80 mb-4 text-sm leading-relaxed">
                Creating AI-powered digital solutions that empower businesses and communities globally.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail size={16} className="text-primary-400" />
                  <span>MAVUNOMARKET254@GMAIL.COM</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={16} className="text-primary-400" />
                  <span>+254757277524</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin size={16} className="text-primary-400 mt-0.5" />
                  <div>
                    <div>Juja, JKUAT Main Campus</div>
                    <div className="text-white/80">Science Complex Building</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/70 transition-colors ${social.color}`}
                  >
                    <social.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-base mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-primary-400 transition-all text-sm inline-block hover:translate-x-1"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-base mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#services"
                      className="text-white/80 hover:text-secondary-400 transition-all text-sm inline-block hover:translate-x-1"
                    >
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-base mb-4">Products</h4>
              <ul className="space-y-2">
                {products.map((product, index) => (
                  <motion.li
                    key={product}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#products"
                      className="text-white/80 hover:text-secondary-400 transition-all text-sm inline-block hover:translate-x-1"
                    >
                      {product}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm text-white/70"
            >
              <span>© 2024 Tahirika Afrotech Solutions. Made with</span>
              <Heart size={12} className="text-red-500 fill-current" />
              <span>in Africa</span>
            </motion.div>

            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-50"
      >
        <ArrowUp size={20} className="text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;