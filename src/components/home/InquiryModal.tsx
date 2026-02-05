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
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
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
                    className="w-full bg-primary-700 hover:bg-primary-800 text-white font-semibold py-4 rounded-lg transition-colors"
                  >
                    Send Inquiry via WhatsApp
                  </Button>
                </form>

                <div className="mt-2 p-4 bg-primary-50 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-primary-800">
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
