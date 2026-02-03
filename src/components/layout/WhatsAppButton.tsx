import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919048030977";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I would like to enquire about physiotherapy services at Surya Kiran Clinic."
);

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      "_blank"
    );
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-accent shadow-accent flex items-center justify-center hover:scale-110 transition-transform"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-accent-foreground fill-accent-foreground" />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full gradient-accent animate-ping opacity-30" />
    </motion.button>
  );
}
