import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Start at beginning
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Mavuno Market Platform',
      category: 'E-commerce',
      description: 'A comprehensive marketplace connecting farmers directly with consumers, featuring real-time inventory, secure payments, and logistics coordination.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'Live',
      year: '2024',
      color: 'from-primary-500 to-primary-600'
    },
    {
      id: 2,
      title: 'EduTech Learning Portal',
      category: 'Web Development',
      description: 'An interactive e-learning platform designed for African educational institutions with offline capabilities and multilingual support.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'PWA'],
      status: 'Development',
      year: '2024',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      id: 3,
      title: 'AgriTech Mobile App',
      category: 'Mobile Apps',
      description: 'Smart agriculture management app helping farmers optimize crops through weather forecasting and data analytics.',
      technologies: ['React Native', 'Python', 'Django', 'TensorFlow'],
      status: 'Live',
      year: '2023',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      title: 'FinTech Payment Gateway',
      category: 'Custom Software',
      description: 'Secure payment processing system designed for African mobile money and banking integrations.',
      technologies: ['Node.js', 'Express', 'Redis', 'PostgreSQL'],
      status: 'Live',
      year: '2023',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 5,
      title: 'Healthcare Management System',
      category: 'Web Development',
      description: 'Comprehensive hospital management system with patient records, appointments, and telemedicine capabilities.',
      technologies: ['React', 'Express', 'MongoDB', 'Socket.io'],
      status: 'Live',
      year: '2023',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 6,
      title: 'Transport Logistics App',
      category: 'Mobile Apps',
      description: 'Route optimization and fleet management solution for African transportation companies.',
      technologies: ['Flutter', 'Firebase', 'Google Maps', 'Node.js'],
      status: 'Live',
      year: '2024',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const cardsPerView = 3;
  const totalSlides = projects.length;  
  
  // Simple approach: just double the array and use only safe positions
  const extendedProjects = [...projects, ...projects];
  
  const maxValidSlides = 3; // Safe positions: 0,1,2



  // Auto-slide every 5 seconds with slow motion, pause on hover
  useEffect(() => {
    if (!isHovering && !isTransitioning) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => {
          const nextSlide = prev + 1;
          // Reset to 0 when we reach position 4 (which would be empty)
          return nextSlide >= maxValidSlides ? 0 : nextSlide;
        });
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovering, isTransitioning, maxValidSlides]);

  const goToNextSlide = () => {
    if (!isTransitioning) {
      setCurrentSlide(prev => {
        const nextSlide = prev + 1;
        return nextSlide >= maxValidSlides ? 0 : nextSlide;
      });
    }
  };

  const goToPrevSlide = () => {
    if (!isTransitioning) {
      setCurrentSlide(prev => {
        const prevSlide = prev - 1;
        return prevSlide < 0 ? maxValidSlides - 1 : prevSlide;
      });
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning) {
      setCurrentSlide(index);
    }
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      'Live': 'bg-green-100 text-green-800 border-green-200',
      'Development': 'bg-blue-100 text-blue-800 border-blue-200',
      'Planning': 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    return statusStyles[status] || statusStyles['Planning'];
  };

  return (
    <section id="products" className="section-padding-sm bg-gradient-to-br from-neutral-sand/30 to-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2">
            Our Products
          </span>
          <h2 className="heading-2 text-neutral-charcoal mb-6">
            Solutions That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Transform Africa
            </span>
          </h2>
          <p className="text-body text-neutral-charcoal/80 max-w-3xl mx-auto">
            Discover our innovative software products designed specifically for African businesses and communities, 
            driving digital transformation across the continent.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Auto-slide indicator */}
          <div className="absolute top-4 right-4 z-10 text-xs text-gray-500/70 bg-white/80 px-2 py-1 rounded">
            {isHovering ? 'Paused' : 'Auto-sliding (5s)'}
          </div>
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          
          <button
            onClick={goToNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden rounded-xl">
            <motion.div
              className="flex"
              animate={{ 
                x: `-${currentSlide * (100 / 3)}%` 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 60, 
                damping: 25,
                duration: 2.5,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              style={{ 
                width: `${(extendedProjects.length / 3) * 100}%` 
              }}
            >
              {extendedProjects.map((project, index) => (
                <motion.div
                  key={`${project.id}-${index}`}
                  className="w-1/3 px-4"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full border border-gray-100">
                    {/* Project Visual */}
                    <div className={`aspect-video bg-gradient-to-br ${project.color} relative`}>
                      <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                        <div className="p-4 h-full flex flex-col">
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-16 h-3 bg-white/30 rounded"></div>
                            <div className="flex gap-1">
                              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                            </div>
                          </div>
                          <div className="space-y-2 flex-1">
                            <div className="h-2 bg-white/30 rounded w-3/4"></div>
                            <div className="h-2 bg-white/30 rounded w-1/2"></div>
                            <div className="grid grid-cols-2 gap-2 mt-3">
                              <div className="h-6 bg-white/20 rounded"></div>
                              <div className="h-6 bg-white/20 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(project.status)}`}>
                          {project.status}
                        </span>
                        <span className="text-sm text-gray-500">{project.year}</span>
                      </div>
                      
                      <h3 className="font-bold text-xl text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                          <ExternalLink size={16} />
                          View Project
                        </button>
                        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          <Github size={16} className="text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxValidSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index
                    ? 'bg-primary-500 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;