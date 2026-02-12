import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, MapPin, Clock, Phone, Calendar, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const chatOptions = [
  {
    id: "location",
    label: "Location & Address",
    icon: MapPin,
    response: {
      text: "We are located at:",
      details:
        "3rd Floor, Zealand Tower, M. M 23/367, Valliyoorkaav Road, near Vaderi Shiva Temple Road, Mananthavady, Kerala 670645",
      action: {
        type: "link",
        label: "Open in Google Maps",
        url: "https://maps.google.com/?q=Mananthavady+Valliyoorkkavu+Road+Near+Vaderi+Siva+Temple",
      },
    },
  },
  {
    id: "timing",
    label: "Working Hours",
    icon: Clock,
    response: {
      text: "Our working hours are:",
      details:
        "Monday to Friday: 9:30 AM - 4:30 PM\nSaturday: 9:30 AM - 1:00 PM\nSunday: Closed",
      action: null,
    },
  },
  {
    id: "contact",
    label: "Contact Numbers",
    icon: Phone,
    response: {
      text: "You can reach us at:",
      details: "Phone 1: +91 9061 64 91 01\nPhone 2: +91 7907 56 13 69",
      action: {
        type: "call",
        label: "Call Now",
        url: "tel:+919061649101",
      },
    },
  },
  {
    id: "booking",
    label: "Book Consultation",
    icon: Calendar,
    response: {
      text: "To book a consultation:",
      details:
        "Please contact us via WhatsApp or phone to schedule your appointment. Advance booking is recommended.",
      action: {
        type: "whatsapp",
        label: "Book via WhatsApp",
        url: "https://wa.me/919061649101?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Adhiveda.",
      },
    },
  },
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleBack = () => {
    setSelectedOption(null);
  };

  const handleActionClick = (action) => {
    if (action?.url) {
      window.open(action.url, '_blank');
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        data-testid="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 bg-saffron text-cream p-4 rounded-full shadow-lg hover:bg-saffron-hover transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat assistant"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chatbot Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-testid="chatbot-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-40 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gold/20 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-saffron to-saffron-hover p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cream/20 flex items-center justify-center">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_8657cdcb-5845-4b6f-94df-482e56460fc1/artifacts/fg0kf7of_WhatsApp%20Image%202026-01-28%20at%2014.55.03.jpeg" 
                    alt="Adhiveda"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-cormorant text-lg font-semibold text-cream">Adhiveda Assistant</h3>
                  <p className="text-xs text-cream/80 font-manrope">How can we help you?</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 min-h-[250px] max-h-[350px] overflow-y-auto">
              <AnimatePresence mode="wait">
                {!selectedOption ? (
                  <motion.div
                    key="options"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2"
                  >
                    <p className="text-sm text-gray-600 mb-4 font-manrope">
                      Namaste! Please select an option below:
                    </p>
                    {chatOptions.map((option, index) => (
                      <motion.button
                        key={option.id}
                        data-testid={`chat-option-${option.id}`}
                        onClick={() => handleOptionClick(option)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="w-full flex items-center gap-3 p-3 rounded-xl border border-gold/20 hover:border-gold hover:bg-gold/5 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-saffron group-hover:bg-gold group-hover:text-white transition-colors">
                          <option.icon className="w-5 h-5" />
                        </div>
                        <span className="flex-1 text-left font-manrope text-sm text-gray-700">
                          {option.label}
                        </span>
                        <ChevronRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.button>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="response"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="chatbot-bubble"
                  >
                    <button
                      data-testid="chatbot-back"
                      onClick={handleBack}
                      className="flex items-center gap-1 text-sm text-gold hover:text-saffron mb-4 font-manrope"
                    >
                      <ChevronRight className="w-4 h-4 rotate-180" />
                      Back to options
                    </button>
                    
                    <div className="bg-cream rounded-xl p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <selectedOption.icon className="w-5 h-5 text-gold" />
                        <span className="font-semibold text-saffron font-cormorant text-lg">
                          {selectedOption.label}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 font-manrope">
                        {selectedOption.response.text}
                      </p>
                      <p className="text-sm text-gray-800 font-medium whitespace-pre-line font-manrope">
                        {selectedOption.response.details}
                      </p>
                      
                      {selectedOption.response.action && (
                        <Button
                          data-testid={`chatbot-action-${selectedOption.id}`}
                          onClick={() => handleActionClick(selectedOption.response.action)}
                          className="w-full mt-3 bg-saffron hover:bg-saffron-hover text-cream font-manrope text-sm"
                        >
                          {selectedOption.response.action.label}
                        </Button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="border-t border-gold/10 p-3 bg-cream/50">
              <p className="text-xs text-center text-gray-500 font-manrope">
                For detailed inquiries, please call or WhatsApp us
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
