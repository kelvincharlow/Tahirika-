import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Brain, Cloud, Shield, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Enterprise-grade solutions tailored to your business needs. From concept to deployment, we build scalable, secure applications.',
      technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
      benefits: ['Scalable Architecture', 'API-First Design', 'Cloud-Ready'],
      clientExample: 'Mavuno Market - Agricultural marketplace serving 500+ farmers',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile apps that work seamlessly on iOS and Android. Native performance with React Native and Flutter.',
      technologies: ['React Native', 'Flutter', 'Firebase', 'iOS', 'Android'],
      benefits: ['Cross-Platform', 'Native Performance', 'App Store Ready'],
      clientExample: 'AgriTech Mobile - Smart farming app with 95% user satisfaction',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Fast, responsive web applications with exceptional user experiences. Modern frameworks for optimal performance.',
      technologies: ['React', 'Vue.js', 'Next.js', 'TailwindCSS', 'Vercel'],
      benefits: ['Mobile-First', 'SEO Optimized', 'Lightning Fast'],
      clientExample: 'EduTech Platform - Learning management system for 1K+ students',
      color: 'from-accent-red to-red-500'
    },
    {
      icon: Brain,
      title: 'AI Automation Solutions',
      description: 'Transform processes with AI-powered automation, machine learning models, and intelligent workflows.',
      technologies: ['Python', 'TensorFlow', 'OpenAI', 'LangChain', 'Docker'],
      benefits: ['Process Automation', 'Predictive Analytics', 'Cost Reduction'],
      clientExample: 'Smart Analytics - AI system improving efficiency by 40%',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud migration and optimization for better performance, security, and cost-effectiveness.',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
      benefits: ['99.9% Uptime', 'Auto-Scaling', 'Cost Optimization'],
      clientExample: 'Healthcare System - Cloud migration reducing costs by 30%',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions, audits, and compliance management for digital asset protection.',
      technologies: ['Security Audits', 'Penetration Testing', 'GDPR', 'ISO 27001'],
      benefits: ['Risk Assessment', 'Compliance Ready', '24/7 Monitoring'],
      clientExample: 'FinTech Security - Zero security incidents in 2+ years',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  // Show first 2 services initially, all when expanded
  const visibleServices = showAllServices ? services : services.slice(0, 2);

  return (
    <section id="services" className="section-padding-sm bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2 block">
            Our Services
          </span>
          <h2 className="heading-2 text-neutral-charcoal mb-6">
            Digital Solutions for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              African Businesses
            </span>
          </h2>
          <p className="text-body text-neutral-charcoal/70 max-w-3xl mx-auto">
            Comprehensive software development services that drive digital transformation 
            and deliver measurable business results
          </p>
        </motion.div>

        {/* Services Grid - Show 2 initially, expand to show all */}
        <div className="max-w-6xl mx-auto">
          <div className={`grid gap-6 ${showAllServices ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
            {visibleServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                {/* Service Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-neutral-charcoal">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-neutral-charcoal/80 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Technologies - Compact */}
                <div>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-neutral-charcoal text-xs rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 text-neutral-charcoal/70 text-xs rounded-full">
                        +{service.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* See More / See Less Button */}
          {services.length > 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowAllServices(!showAllServices)}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>
                  {showAllServices ? 'Show Less Services' : `See All ${services.length} Services`}
                </span>
                <motion.div
                  animate={{ rotate: showAllServices ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </motion.button>

              {/* Additional Services Preview */}
              {!showAllServices && (
                <div className="mt-4 flex flex-wrap justify-center gap-4">
                  {services.slice(2).map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200"
                    >
                      <div className={`w-6 h-6 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center`}>
                        <service.icon size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-neutral-charcoal font-medium">{service.title}</span>
                    </motion.div>
                  ))}
                </div>
              )}

              <p className="text-xs text-neutral-charcoal/60 mt-4">
                {showAllServices 
                  ? 'Showing all our services • Click to minimize' 
                  : `${services.length - 2} more services available • Click to explore`
                }
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;