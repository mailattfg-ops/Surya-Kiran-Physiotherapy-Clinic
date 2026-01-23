import { motion } from "framer-motion";
import heroImage from "@/assets/hero-physio.jpg";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I would like to enquire about physiotherapy services at Surya Kiran Clinic."
);

export default function HeroSection() {

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 1024px)" srcSet="/images/hero-bg-mobile.png" />
          <img
            src={heroImage}
            alt="Physical therapy rehabilitation"
            className="w-full h-full object-cover object-top"
          />
        </picture>
      </div>

      {/* Dark Blue Diagonal Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/95 to-transparent"
        style={{
          clipPath: 'polygon(0 0, 65% 0, 40% 100%, 0% 100%)'
        }}>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            {/* Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="lg:pr-12"
            >
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}
                className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
              >
                Restoring Mobility, <br />Enhancing Lives
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}
                className="font-sans text-2xl sm:text-3xl text-white/90 mb-2"
              >
                The Institute of Physical Medicine and Rehabilitation
              </motion.h2>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
