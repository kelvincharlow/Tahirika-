import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X
} from 'lucide-react';

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254757277754?text=Hello! I\'d like to discuss a project with Tahirika Afrotech Solutions.', '_blank');
    setIsOpen(false); // Close the widget after action
  };

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Contact Options */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="absolute bottom-20 right-0 space-y-3 w-64"
            >
              {/* WhatsApp Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg shadow-lg border overflow-hidden"
              >
                {/* Header */}
                <div className="bg-green-500 p-3 text-center">
                  <MessageCircle size={24} className="text-white mx-auto mb-1" />
                  <h3 className="font-semibold text-white text-sm">WhatsApp Chat</h3>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <p className="text-sm text-neutral-charcoal/70 mb-4 text-center">
                    Get instant responses and quick support via WhatsApp
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg p-3 font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    Start WhatsApp Chat
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          onClick={toggleWidget}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
            isOpen 
              ? 'bg-neutral-charcoal text-white rotate-45' 
              : 'bg-green-500 hover:bg-green-600 text-white hover:shadow-xl'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            rotate: isOpen ? 45 : 0,
          }}
          transition={{ type: "spring", duration: 0.3 }}
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <MessageCircle size={24} />
          )}
        </motion.button>

        {/* Notification Badge */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </motion.div>
        )}

        {/* Floating Label (shows when closed) */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
            className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-neutral-charcoal text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
          >
            Need help? Let's chat!
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-neutral-charcoal border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ContactWidget;