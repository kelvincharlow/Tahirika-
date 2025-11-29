import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Globe, X } from 'lucide-react';

// Team member photos
import issaPhoto from '../assets/images/team/issa saitemu.jpeg';
import eugenePhoto from '../assets/images/team/Eugene Obunde.jpeg';
import ruthPhoto from '../assets/images/team/Ruth Muthoni.jpg';
import carolinePhoto from '../assets/images/team/Caroline Thomas.jpeg';
import kelvinPhoto from '../assets/images/team/kelvin musyoki.jpg';

const About = () => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isStoryExpanded, setIsStoryExpanded] = useState(false);
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We leverage cutting-edge technology to create solutions that drive African digital transformation.'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Our solutions are designed with African communities in mind, addressing local challenges and opportunities.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in software development, design, and customer service.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'Every project we undertake aims to create meaningful positive change in African businesses and communities.'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Projects Completed', color: 'text-primary-500' },
    { number: '100+', label: 'Happy Clients', color: 'text-secondary-500' },
    { number: '5+', label: 'Years Experience', color: 'text-accent-red' },
    { number: '5', label: 'Expert Team Members', color: 'text-accent-brown' }
  ];

  return (
    <section id="about" className="section-padding-sm bg-white">
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
            About Tahirika Afrotech Solutions
          </span>
          <h2 className="heading-2 text-neutral-charcoal mb-6">
            Building the Future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              African Technology
            </span>
          </h2>
          <p className="text-body text-neutral-charcoal/80 max-w-3xl mx-auto">
            Founded with a vision to revolutionize the global digital landscape, Tahirika Afrotech Solutions 
            combines innovative technology with deep understanding of diverse business environments to create solutions 
            that truly make a difference across industries and continents.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-14">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="heading-3 text-neutral-charcoal mb-8">Our Story</h3>
            <div className="space-y-6 text-body text-neutral-charcoal/80 leading-relaxed">
              {/* First paragraph - always visible */}
              <p>
                Tahirika Afrotech Solutions was born from a simple yet powerful idea: Africa deserves 
                world-class digital solutions that understand and celebrate our unique context, 
                challenges, and opportunities.
              </p>
              
              {/* Expandable content for mobile */}
              <div className="block">
                {/* Desktop: Show full content */}
                <div className="hidden sm:block space-y-6">
                  <p>
                    Our journey began with Mavuno Market, addressing a critical challenge: despite existing agritech platforms, 
                    small-scale farmers still experience market inefficiencies, low profitability, and lack of transparency. 
                    From a computing perspective, this translates into creating a web-based digital marketplace connecting farmers, 
                    vendors, and transporters while leveraging modern computing technologies to improve efficiency, fairness, and trust. 
                    Partnering with <strong>JHub Africa</strong>, who supported us from start to finish, we successfully brought Mavuno Market to life. 
                    This collaborative success laid the foundation for our mission to create more impactful digital solutions.
                  </p>
                  <p>
                    Today, we're proud to be at the forefront of Africa's digital transformation, 
                    creating software solutions that empower businesses, connect communities, 
                    and drive economic growth across the continent.
                  </p>
                </div>

                {/* Mobile: Expandable content */}
                <div className="block sm:hidden">
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isStoryExpanded ? 'auto' : 0,
                      opacity: isStoryExpanded ? 1 : 0
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-6 pt-6">
                      <p>
                        Our journey began with Mavuno Market, addressing a critical challenge: despite existing agritech platforms, 
                        small-scale farmers still experience market inefficiencies, low profitability, and lack of transparency. 
                        From a computing perspective, this translates into creating a web-based digital marketplace connecting farmers, 
                        vendors, and transporters while leveraging modern computing technologies to improve efficiency, fairness, and trust.
                      </p>
                      <p>
                        Partnering with <strong>JHub Africa</strong>, who supported us from start to finish, we successfully brought Mavuno Market to life. 
                        This collaborative success laid the foundation for our mission to create more impactful digital solutions.
                      </p>
                      <p>
                        Today, we're proud to be at the forefront of Africa's digital transformation, 
                        creating software solutions that empower businesses, connect communities, 
                        and drive economic growth across the continent.
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* Read More / Read Less Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsStoryExpanded(!isStoryExpanded)}
                    className="mt-4 text-primary-500 font-medium text-sm flex items-center gap-2 hover:text-primary-600 transition-colors duration-200"
                  >
                    <span>{isStoryExpanded ? 'Read Less' : 'Read More'}</span>
                    <motion.div
                      animate={{ rotate: isStoryExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-primary-50 p-8 rounded-xl"
              >
                <Target className="text-primary-500 mb-4 mx-auto" size={40} />
                <h4 className="font-poppins font-semibold text-xl text-neutral-charcoal mb-4">
                  Our Mission
                </h4>
                <p className="text-neutral-charcoal/80 leading-relaxed">
                  To create innovative digital solutions that empower African businesses 
                  and communities to thrive in the global digital economy.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-secondary-50 p-8 rounded-xl"
              >
                <Eye className="text-secondary-500 mb-4 mx-auto" size={40} />
                <h4 className="font-poppins font-semibold text-xl text-neutral-charcoal mb-4">
                  Our Vision
                </h4>
                <p className="text-neutral-charcoal/80 leading-relaxed">
                  To be Africa's leading software solutions company, recognized for 
                  innovation, quality, and positive impact on communities.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h3 className="heading-3 text-center text-neutral-charcoal mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card p-6 text-center group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={28} className="text-white" />
                </div>
                <h4 className="font-poppins font-semibold text-lg text-neutral-charcoal mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-neutral-charcoal/80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Meet Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 p-8 lg:p-12 rounded-2xl border border-primary-100">
            <Users className="text-primary-500 mb-4 mx-auto" size={48} />
            <h3 className="heading-3 text-neutral-charcoal mb-4">
              Meet the Innovators Behind Our Success
            </h3>
            <p className="text-body text-neutral-charcoal/80 mb-8 max-w-2xl mx-auto">
              Our dedicated team of 5 specialists spans the complete technology spectrum—from UI/UX design and full-stack development 
              to backend architecture, DevOps, and cybersecurity. Each member brings unique expertise focused on African digital innovation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setIsTeamModalOpen(true)}
            >
              <Users size={20} />
              Meet Our Team
            </motion.button>
            <p className="text-xs text-neutral-charcoal/60 mt-3">
              Learn about our expertise, backgrounds, and passion for African tech innovation
            </p>
          </div>
        </motion.div>
      </div>

      {/* Team Modal */}
      {isTeamModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsTeamModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-neutral-charcoal">Our Team</h2>
                <p className="text-neutral-charcoal/70">Meet the innovators behind Tahirika Afrotech</p>
              </div>
              <button
                onClick={() => setIsTeamModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Team Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Kelvin Musyoki */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-primary-50 p-6 rounded-xl border border-primary-100"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 mx-auto border-3 border-primary-200 shadow-lg relative">
                    <img 
                      src={kelvinPhoto} 
                      alt="Kelvin Musyoki" 
                      className="w-full h-full object-cover object-center scale-110 hover:scale-125 transition-transform duration-300"
                      style={{ objectPosition: 'center center' }}
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-charcoal text-center mb-2">Kelvin Musyoki</h3>
                  <p className="text-primary-600 font-medium text-sm text-center mb-3">UI/UX Designer</p>
                  <p className="text-xs text-neutral-charcoal/70 text-center">
                    Crafting intuitive user experiences that bridge African user needs with global design standards
                  </p>
                </motion.div>

                {/* Issa Saitemu */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-green-50 to-secondary-50 p-6 rounded-xl border border-secondary-100"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 mx-auto border-3 border-secondary-200 shadow-lg">
                    <img 
                      src={issaPhoto} 
                      alt="Issa Saitemu" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-charcoal text-center mb-2">Issa Saitemu</h3>
                  <p className="text-secondary-600 font-medium text-sm text-center mb-3">Full Stack Developer</p>
                  <p className="text-xs text-neutral-charcoal/70 text-center">
                    Building end-to-end solutions from concept to deployment with modern web technologies
                  </p>
                </motion.div>

                {/* Eugene Obunde */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-purple-50 to-accent-red/10 p-6 rounded-xl border border-purple-200"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 mx-auto border-3 border-purple-200 shadow-lg">
                    <img 
                      src={eugenePhoto} 
                      alt="Eugene Obunde" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-charcoal text-center mb-2">Eugene Obunde</h3>
                  <p className="text-purple-600 font-medium text-sm text-center mb-3">Backend Developer</p>
                  <p className="text-xs text-neutral-charcoal/70 text-center">
                    Architecting robust server-side systems and APIs that power scalable African solutions
                  </p>
                </motion.div>

                {/* Ruth Muthoni */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-orange-50 to-accent-brown/10 p-6 rounded-xl border border-orange-200"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 mx-auto border-3 border-orange-200 shadow-lg">
                    <img 
                      src={ruthPhoto} 
                      alt="Ruth Muthoni" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-charcoal text-center mb-2">Ruth Muthoni</h3>
                  <p className="text-orange-600 font-medium text-sm text-center mb-3">DevOps Engineer</p>
                  <p className="text-xs text-neutral-charcoal/70 text-center">
                    Ensuring seamless deployment, monitoring, and scaling of applications across cloud platforms
                  </p>
                </motion.div>

                {/* Caroline Thomas */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-200 md:col-span-2 lg:col-span-1"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 mx-auto border-3 border-red-200 shadow-lg">
                    <img 
                      src={carolinePhoto} 
                      alt="Caroline Thomas" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-neutral-charcoal text-center mb-2">Caroline Thomas</h3>
                  <p className="text-red-600 font-medium text-sm text-center mb-3">Cybersecurity Engineer</p>
                  <p className="text-xs text-neutral-charcoal/70 text-center">
                    Protecting digital assets and ensuring secure, compliant solutions for African businesses
                  </p>
                </motion.div>
              </div>

              {/* Team Stats */}
              <div className="mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl text-center">
                <h4 className="font-semibold text-neutral-charcoal mb-3">Our Collective Expertise</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div>
                    <div className="font-bold text-primary-600">5+</div>
                    <div className="text-neutral-charcoal/70">Years Combined</div>
                  </div>
                  <div>
                    <div className="font-bold text-secondary-600">50+</div>
                    <div className="text-neutral-charcoal/70">Projects</div>
                  </div>
                  <div>
                    <div className="font-bold text-purple-600">10+</div>
                    <div className="text-neutral-charcoal/70">Technologies</div>
                  </div>
                  <div>
                    <div className="font-bold text-orange-600">100%</div>
                    <div className="text-neutral-charcoal/70">African-Focused</div>
                  </div>
                  <div>
                    <div className="font-bold text-red-600">24/7</div>
                    <div className="text-neutral-charcoal/70">Commitment</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default About;