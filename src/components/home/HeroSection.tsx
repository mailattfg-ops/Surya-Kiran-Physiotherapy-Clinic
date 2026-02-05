import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      // Use a small timeout to ensure behavior is consistent on mobile
      setTimeout(() => {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 10);
    }
  };

  return (
    <section className="relative min-h-[100svh] lg:h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/physioapplication.jpg"
          alt="Suryakiran Physiotherapy Clinic"
          className="w-full h-full object-cover object-right lg:object-center scale-x-[-1]"
        />
        {/* Lighter, more transparent gradient for maximum image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent lg:from-black/70 lg:via-black/40 lg:to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-28 pb-16 lg:pt-40 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl drop-shadow-md"
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-primary-300 mb-4 tracking-wide"
            >
              Back to life -
            </motion.h2>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 font-heading tracking-tight">
              Suryakiran <br />
              <span className="text-primary-500">
                Physiotherapy
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg font-medium">
              The Institute of Physical Medicine. <br />
              <span className="text-white font-semibold">Expert women-led care</span> tailored to your recovery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="h-12 px-8 text-sm bg-white hover:bg-gray-100 text-black border border-white rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300 font-bold uppercase tracking-wider"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                onClick={() => window.location.assign("/services")}
                variant="outline"
                size="lg"
                className="h-12 px-8 text-sm border-white/30 text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl transition-all duration-300 font-bold uppercase tracking-wider"
              >
                Explore Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-300 flex items-center justify-center text-primary-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-none">20+</p>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-none">5000+</p>
                  <p className="text-gray-400 text-sm">Happy Patients</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:block relative h-full min-h-[500px]">
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
