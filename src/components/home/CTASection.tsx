import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "919048030977";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I would like to book an appointment at Surya Kiran Physiotherapy Clinic."
);

export default function CTASection() {
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary-foreground"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Your
              <br />
              Recovery Journey?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg">
              Don't let pain hold you back. Book your consultation today and take 
              the first step towards a healthier, pain-free life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-accent hover:bg-accent-700 text-accent-foreground shadow-accent text-base px-8 py-6"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Book on WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6"
                asChild
              >
                <a href="tel:+919048030977">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <MapPin className="w-8 h-8 text-accent-300 mb-4" />
              <h3 className="font-heading font-semibold text-primary-foreground mb-2">
                Visit Our Clinic
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                123 Health Street, Medical Complex,<br />
                Bangalore - 560001
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <Clock className="w-8 h-8 text-accent-300 mb-4" />
              <h3 className="font-heading font-semibold text-primary-foreground mb-2">
                Working Hours
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                Mon - Sat: 9:00 AM - 7:00 PM<br />
                Sunday: Closed
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <Phone className="w-8 h-8 text-accent-300 mb-4" />
              <h3 className="font-heading font-semibold text-primary-foreground mb-2">
                Phone Number
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                +91 90480 30977
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <MessageCircle className="w-8 h-8 text-accent-300 mb-4" />
              <h3 className="font-heading font-semibold text-primary-foreground mb-2">
                WhatsApp
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                Quick Response<br />
                Within 30 minutes
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
