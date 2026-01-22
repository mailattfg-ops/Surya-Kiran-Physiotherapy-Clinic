import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-physio.jpg";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I would like to enquire about physiotherapy services at Surya Kiran Clinic."
);

const stats = [
  { icon: Star, value: "10+", label: "Years Experience" },
  { icon: Shield, value: "5000+", label: "Patients Treated" },
  { icon: Clock, value: "95%", label: "Recovery Rate" },
];

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-700 text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 fill-accent" />
              Trusted by 5000+ Patients
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Expert{" "}
              <span className="text-primary-700">Physiotherapy</span>
              <br />
              For Your Recovery
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              At Surya Kiran Physiotherapy Clinic, we combine advanced treatment 
              techniques with personalized care to help you regain mobility, 
              reduce pain, and live life to the fullest.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="gradient-accent text-accent-foreground shadow-accent hover:opacity-90 transition-opacity text-base px-8 py-6"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-700 text-primary-700 hover:bg-primary-100 text-base px-8 py-6"
                asChild
              >
                <a href="#services">Explore Services</a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-accent" />
                    <span className="font-heading font-bold text-2xl sm:text-3xl text-primary-700">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 gradient-primary rounded-3xl opacity-20 blur-2xl" />
              <img
                src={heroImage}
                alt="Professional physiotherapy treatment session"
                className="relative rounded-3xl shadow-xl w-full h-auto object-cover"
              />
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-background rounded-2xl shadow-lg p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">Certified Experts</p>
                    <p className="text-sm text-muted-foreground">AIPT Qualified</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
