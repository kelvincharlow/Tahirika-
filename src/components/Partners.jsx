import { useState } from 'react';
import { motion } from 'framer-motion';
import { getActivePartners } from '../assets/partnerLogos';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Partners = () => {
  const partners = getActivePartners();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Client testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "Tahirika Afrotech transformed our agricultural marketplace vision into reality. The Mavuno Market platform they developed has connected over 500 farmers to direct markets, increasing their profits by 40%. Their understanding of African market dynamics is exceptional.",
      name: "Samuel Kiprotich",
      position: "Director of Operations",
      company: "Mavuno Market",
      avatar: "SK",
      rating: 5
    },
    {
      id: 2,
      quote: "Working with Tahirika has been a game-changer for our startup ecosystem. Their technical expertise combined with deep understanding of African entrepreneurship challenges made them the perfect development partner for our innovation programs.",
      name: "Grace Wanjiku",
      position: "Innovation Manager",
      company: "JHub Africa",
      avatar: "GW",
      rating: 5
    },
    {
      id: 3,
      quote: "The team's professionalism and technical excellence exceeded our expectations. They delivered a robust healthcare management system that streamlined our operations and improved patient care across our network of clinics.",
      name: "Dr. Michael Ochieng",
      position: "Chief Medical Officer",
      company: "Afya Healthcare Network",
      avatar: "MO",
      rating: 5
    },
    {
      id: 4,
      quote: "Tahirika's fintech solution revolutionized our payment processing. Their secure, mobile-first approach perfectly suited our African customer base, resulting in 300% growth in transaction volume.",
      name: "Amina Hassan",
      position: "CEO",
      company: "PesaPay Solutions",
      avatar: "AH",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-neutral-sand/30 via-white to-primary-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2 block">
            Client Success & Partners
          </span>
          <h2 className="text-3xl font-bold text-neutral-charcoal mb-3">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Leading African Organizations
            </span>
          </h2>
          <p className="text-neutral-charcoal/70 max-w-2xl mx-auto">
            From successful project deliveries to strategic partnerships, 
            discover why clients choose Tahirika for their digital transformation journey.
          </p>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Carousel */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-primary-100">
              <Quote className="text-primary-500 mb-6 mx-auto" size={48} />
              
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-neutral-charcoal/90 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonials[currentTestimonial].avatar}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-neutral-charcoal">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-neutral-charcoal/70">
                      {testimonials[currentTestimonial].position}
                    </div>
                    <div className="text-sm text-primary-600 font-medium">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-primary-50 transition-colors"
            >
              <ChevronLeft size={24} className="text-neutral-charcoal" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-primary-50 transition-colors"
            >
              <ChevronRight size={24} className="text-neutral-charcoal" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentTestimonial === index
                      ? 'bg-primary-500 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h3 className="text-xl font-semibold text-neutral-charcoal mb-3">
              Our Strategic Partners
            </h3>
            <p className="text-neutral-charcoal/60 text-sm">
              Collaborating with innovation leaders across Africa
            </p>
          </div>

          {/* Partner Logos Grid */}
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 mb-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 w-36 h-24 flex items-center justify-center border border-primary-100/50">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Partner with Us CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-neutral-charcoal/70 text-sm mb-6">
              Join our network of innovation partners and shape Africa's digital future together
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:shadow-primary-500/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              Partner with Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;