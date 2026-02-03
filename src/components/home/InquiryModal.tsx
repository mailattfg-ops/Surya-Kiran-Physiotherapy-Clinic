import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, Phone, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import physioBackground from "/images/physioapplication.jpg";
import physioOverlay from "/images/physioapplication2.jpg";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function InquiryModal({ isOpen, onClose, initialService }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: initialService ? `I am interested in ${initialService}` : ""
  });

  // Update message when initialService changes or modal opens
  useEffect(() => {
    if (isOpen && initialService) {
      setFormData(prev => ({ ...prev, message: `I am interested in ${initialService}` }));
    } else if (isOpen && !initialService) {
      // Optional: reset if generic inquiry, or keep previous state?
      // Let's just keep simple behavior: if service provided, overrides.
      // Actually, React state init only happens once without useEffect.
    }
  }, [isOpen, initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = encodeURIComponent(
      `New Inquiry Details:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );

    window.open(`https://wa.me/919048030977?text=${whatsappMessage}`, "_blank");

    // Reset form
    setFormData({ name: "", phone: "", message: "" });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col lg:flex-row h-full">
            {/* Left Side - Form */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
                    <p className="text-gray-600">We'll get back to you soon</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
                      placeholder="Tell us about your condition or what you need help with..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors"
                  >
                    Send Inquiry via WhatsApp
                  </Button>
                </form>

                <div className="mt-2 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-blue-800">
                    <Phone className="w-4 h-4" />
                    <span>Or call us directly at: +91 90480 30977</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Images */}
            <div className="lg:w-1/2 relative bg-gray-100 p-8">
              <div className="relative h-full min-h-[400px]">
                {/* Background Image (physioapplication.jpg) */}
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  src={physioBackground}
                  alt="Physiotherapy background"
                  className="absolute top-8 left-8 w-3/4 h-3/4 object-cover rounded-2xl shadow-lg"
                />

                {/* Overlay Image (physioapplication2.jpg) - positioned like X-ray overlapping */}
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  src={physioOverlay}
                  alt="Physiotherapy overlay"
                  className="absolute bottom-8 right-8 w-1/2 h-1/2 object-cover rounded-xl shadow-2xl border-4 border-white transform rotate-3"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
