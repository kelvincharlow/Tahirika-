import { motion } from 'framer-motion';
import { ShoppingCart, Users, BarChart3, Smartphone, ExternalLink, Github, PlayCircle } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Mavuno Market',
      tagline: 'Connecting Farmers to Consumers',
      description: 'A revolutionary marketplace platform that eliminates middlemen, ensuring farmers get fair prices while consumers access fresh, quality produce directly from the source.',
      features: [
        'Direct farmer-to-consumer sales',
        'Real-time inventory management',
        'Secure payment processing',
        'Quality assurance system',
        'Logistics coordination',
        'Mobile-responsive design'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Stripe'],
      status: 'Live',
      image: '/api/placeholder/600/400',
      color: 'from-primary-500 to-primary-600',
      accentColor: 'primary-500',
      demoUrl: '#',
      githubUrl: '#',
      stats: {
        users: '500+',
        transactions: '2K+',
        farmers: '100+'
      }
    },
    {
      id: 2,
      name: 'AgriConnect Pro',
      tagline: 'Smart Agriculture Management',
      description: 'An advanced agricultural management system that helps farmers optimize their operations through data-driven insights, weather forecasting, and crop management tools.',
      features: [
        'Crop planning and scheduling',
        'Weather forecasting integration',
        'Pest and disease alerts',
        'Yield prediction analytics',
        'Resource optimization',
        'Community networking'
      ],
      technologies: ['React Native', 'Python', 'Django', 'PostgreSQL', 'AWS'],
      status: 'Development',
      image: '/api/placeholder/600/400',
      color: 'from-secondary-500 to-secondary-600',
      accentColor: 'secondary-500',
      demoUrl: '#',
      githubUrl: '#',
      stats: {
        beta_users: '50+',
        features: '25+',
        accuracy: '95%'
      }
    },
    {
      id: 3,
      name: 'EduTech Africa',
      tagline: 'Digital Learning Platform',
      description: 'A comprehensive e-learning platform designed for African educational institutions, featuring offline capabilities, local language support, and affordable pricing.',
      features: [
        'Interactive course content',
        'Offline learning capabilities',
        'Progress tracking',
        'Multilingual support',
        'Collaborative tools',
        'Assessment system'
      ],
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'Docker'],
      status: 'Planning',
      image: '/api/placeholder/600/400',
      color: 'from-accent-red to-red-500',
      accentColor: 'accent-red',
      demoUrl: '#',
      githubUrl: '#',
      stats: {
        institutions: '10+',
        students: '1K+',
        courses: '100+'
      }
    }
  ];

  const getStatusBadge = (status) => {
    const statusStyles = {
      'Live': 'bg-green-100 text-green-800 border-green-200',
      'Development': 'bg-blue-100 text-blue-800 border-blue-200',
      'Planning': 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    
    return statusStyles[status] || statusStyles['Planning'];
  };

  return (
    <section id="products" className="section-padding bg-gradient-to-br from-neutral-sand/30 to-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2">
            Our Products
          </span>
          <h2 className="heading-2 text-neutral-charcoal mb-6">
            Innovative Solutions{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Built for Africa
            </span>
          </h2>
          <p className="text-body text-neutral-charcoal/80 max-w-3xl mx-auto">
            We develop cutting-edge digital products that address real African challenges, 
            from agriculture to education, creating sustainable impact across communities.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="space-y-20">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Product Info */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(product.status)}`}>
                    {product.status}
                  </span>
                  <div className="flex items-center gap-2">
                    {product.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-neutral-gray text-neutral-charcoal px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="heading-3 text-neutral-charcoal mb-2">
                  {product.name}
                </h3>
                <p className={`text-lg font-medium text-${product.accentColor} mb-4`}>
                  {product.tagline}
                </p>
                <p className="text-body text-neutral-charcoal/80 mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-poppins font-semibold text-neutral-charcoal mb-3">
                    Key Features:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {product.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-sm text-neutral-charcoal/80"
                      >
                        <div className={`w-2 h-2 bg-${product.accentColor} rounded-full`}></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(product.stats).map(([key, value], statIndex) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: statIndex * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-center p-3 bg-white rounded-lg shadow-sm"
                    >
                      <div className={`font-poppins font-bold text-xl text-${product.accentColor}`}>
                        {value}
                      </div>
                      <div className="text-xs text-neutral-charcoal/70 capitalize">
                        {key.replace('_', ' ')}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`btn-primary bg-gradient-to-r ${product.color} flex items-center gap-2`}
                    disabled={product.status === 'Planning'}
                  >
                    <PlayCircle size={18} />
                    {product.status === 'Live' ? 'View Live' : product.status === 'Development' ? 'View Demo' : 'Coming Soon'}
                  </motion.button>
                  
                  {product.status !== 'Planning' && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-outline flex items-center gap-2"
                    >
                      <ExternalLink size={18} />
                      Learn More
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Product Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:col-start-1' : ''}
              >
                <div className="relative group">
                  {/* Main product showcase */}
                  <div className={`aspect-video bg-gradient-to-br ${product.color} rounded-2xl p-8 relative overflow-hidden`}>
                    {/* Mockup content */}
                    <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="p-6 h-full flex flex-col">
                        {/* Mock header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                            <div className="text-white font-semibold">
                              {product.name}
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                            <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                            <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                          </div>
                        </div>

                        {/* Mock content area */}
                        <div className="flex-1 space-y-3">
                          <div className="h-4 bg-white/20 rounded w-3/4"></div>
                          <div className="h-4 bg-white/20 rounded w-1/2"></div>
                          
                          <div className="grid grid-cols-2 gap-3 mt-4">
                            <div className="h-16 bg-white/10 rounded-lg"></div>
                            <div className="h-16 bg-white/10 rounded-lg"></div>
                          </div>
                          
                          <div className="h-8 bg-white/20 rounded w-2/3 mt-4"></div>
                        </div>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-4 -right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                    ></motion.div>

                    <motion.div
                      animate={{ y: [10, -10, 10], rotate: [0, 5, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -bottom-4 -left-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30"
                    ></motion.div>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-neutral-charcoal px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg"
                    >
                      <PlayCircle size={20} />
                      View Demo
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12">
            <h3 className="heading-3 text-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can create a custom digital solution that addresses 
              your specific needs and challenges.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-500 font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-shadow"
            >
              Start a Conversation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;