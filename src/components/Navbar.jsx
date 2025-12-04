import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceItems = [
    { name: 'Custom Software Development', href: '#services', desc: 'Tailored solutions for your business' },
    { name: 'Mobile App Development', href: '#services', desc: 'iOS and Android applications' },
    { name: 'Web Development', href: '#services', desc: 'Responsive websites and web apps' },
    { name: 'AI Automation Solutions', href: '#services', desc: 'Intelligent process automation' },
    { name: 'Cloud Services', href: '#services', desc: 'Scalable cloud infrastructure' },
    { name: 'Cybersecurity', href: '#services', desc: 'Comprehensive security solutions' },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-16">
          
          {/* Responsive Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3 sm:space-x-3 max-w-[350px] sm:max-w-none"
          >
            <div className="w-9 h-9 sm:w-8 sm:h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg sm:text-lg">T</span>
            </div>
            {/* Full name on all screens with responsive sizing */}
            <div className="font-semibold text-gray-900 tracking-tight leading-tight">
              <span className="text-lg sm:text-xl">Tahirika Afrotech Solutions</span>
            </div>
          </motion.div>

          {/* Clean Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                    className="relative"
                  >
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-50 group flex items-center space-x-1"
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${servicesDropdown ? 'rotate-180' : ''}`}
                      />
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full"></span>
                    </motion.button>
                    
                    {/* Services Dropdown */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: servicesDropdown ? 1 : 0,
                        y: servicesDropdown ? 0 : 10,
                        pointerEvents: servicesDropdown ? 'auto' : 'none'
                      }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-100 rounded-xl shadow-xl backdrop-blur-xl z-50"
                    >
                      <div className="p-4 space-y-1">
                        {serviceItems.map((service, serviceIndex) => (
                          <motion.a
                            key={service.name}
                            href={service.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ 
                              opacity: servicesDropdown ? 1 : 0,
                              x: servicesDropdown ? 0 : -10
                            }}
                            transition={{ delay: serviceIndex * 0.05, duration: 0.2 }}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                          >
                            <div className="font-medium text-sm text-gray-900 group-hover:text-black">
                              {service.name}
                            </div>
                            <div className="text-xs text-gray-600 mt-1">
                              {service.desc}
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <motion.a
                    href={item.href}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-50 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full"></span>
                  </motion.a>
                )}
              </div>
            ))}
          </div>

          {/* Minimal Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu with Services Accordion */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl"
        >
          <div className="py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setServicesDropdown(!servicesDropdown)}
                      className="w-full flex items-center justify-between px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium text-sm transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${servicesDropdown ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: servicesDropdown ? 'auto' : 0,
                        opacity: servicesDropdown ? 1 : 0
                      }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden bg-gray-50/50"
                    >
                      {serviceItems.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          onClick={() => {
                            setIsOpen(false);
                            setServicesDropdown(false);
                          }}
                          className="block px-8 py-3 text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                        >
                          {service.name}
                        </a>
                      ))}
                    </motion.div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;