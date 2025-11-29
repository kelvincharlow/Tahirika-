import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, Users, Zap } from 'lucide-react';
import heroImageWebP from '../assets/images/partners/hero-optimized.webp';
import heroImageFallback from '../assets/images/partners/hero 2.png';

const Hero = () => {
  const stats = [
    { icon: Globe, value: '50+', label: 'Projects Delivered' },
    { icon: Users, value: '100+', label: 'Happy Clients' },
    { icon: Zap, value: '5+', label: 'Years Experience' },
  ];

  return (
    <section id="home" className="relative flex items-start justify-center overflow-hidden bg-gradient-to-br from-neutral-sand via-white to-neutral-gray pt-16 pb-8">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-red/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]">
          {/* Left Content */}
          <div className="text-center order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-charcoal mb-4 lg:mb-6 mt-4 sm:mt-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Pioneering Africa's Digital Future
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-neutral-charcoal/80 mb-8 lg:mb-12 max-w-xs sm:max-w-md lg:max-w-xl mx-auto px-4 sm:px-0">
              Rooted in Africa, engineered for the world — we build intelligent digital systems that deliver global impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-sm sm:max-w-md mx-auto">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                    <stat.icon size={16} className="text-white sm:w-5 sm:h-5" />
                  </div>
                  <div className="font-poppins font-bold text-xl sm:text-2xl text-neutral-charcoal">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-charcoal/70 font-inter">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Space */}
          <div className="relative mt-4 lg:mt-4 order-2">
            <div className="aspect-square max-w-xs sm:max-w-sm lg:max-w-lg mx-auto rounded-xl lg:rounded-2xl overflow-hidden shadow-lg lg:shadow-2xl relative group" style={{minHeight: '250px'}}>
              {/* Professional Hero Image - WebP Optimized */}
              <picture>
                <source srcSet={heroImageWebP} type="image/webp" />
                <img
                  src={heroImageFallback}
                  alt="Tahirika Afrotech - Where African Innovation Meets Global Excellence"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  decoding="async"
                />
              </picture>
              
              {/* Elegant overlay for brand integration */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 via-transparent to-secondary-500/10 group-hover:from-primary-500/20 group-hover:to-secondary-500/20 transition-all duration-700"></div>
              
              {/* Optional overlay content */}
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-white text-sm font-medium">
                    Digital Innovation Hub
                  </p>
                  <p className="text-white/80 text-xs mt-1">
                    Connecting Africa to Global Tech Excellence
                  </p>
                </div>
              </div>
              

            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-secondary-500/20 to-primary-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;