import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareHeart } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Suresh Menon",
    role: "IT Professional",
    rating: 5,
    text: "I had severe back pain for months because of my IT job. After 3 weeks of treatment here, I'm completely relieved.",
    initial: "S",
    gradient: "from-orange-400 to-pink-500"
  },
  {
    name: "Lakshmi Nair",
    role: "Retired Teacher",
    rating: 5,
    text: "Post-surgery physiotherapy was excellent. The Lady doctors were very supportive and made me feel comfortable.",
    initial: "L",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    name: "Abdul Khader",
    role: "Business Owner",
    rating: 5,
    text: "നടുവേദന കാരണം എനിക്ക് നടക്കാൻ പോലും ബുദ്ധിമുട്ടായിരുന്നു. ഇവിടുത്തെ ചികിത്സയ്ക്ക് ശേഷം ഇപ്പോൾ നല്ല മാറ്റമുണ്ട്.",
    initial: "A",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    name: "Thomas George",
    role: "Engineer",
    rating: 5,
    text: "Best physiotherapy centre in Kerala. The improvement we saw in my father's condition in just one month is miraculous.",
    initial: "T",
    gradient: "from-purple-400 to-indigo-500"
  },
  {
    name: "Deepa Pillai",
    role: "Homemaker",
    rating: 5,
    text: "Dr. Reeja was very patient in listening to my issues and the treatment was very effective. Highly recommended.",
    initial: "D",
    gradient: "from-rose-400 to-red-500"
  },
  {
    name: "Mohammed Fayaz",
    role: "Athlete",
    rating: 5,
    text: "Clean environment and modern equipment. The approach to treatment is very scientific. Helped me recover quickly.",
    initial: "M",
    gradient: "from-amber-400 to-orange-500"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-100/30 rounded-full blur-3xl -z-10 opacity-60" />

      <div className="container mx-auto px-4">
        {/* Header - Matching Previous Sections */}
        <div className="text-left mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-bold tracking-wider uppercase mb-4 shadow-sm"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight"
          >
            Stories of <br />
            <span className="text-primary-500 relative inline-block">
              Recovery
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl"
          >
            Real people, real results. Hear from those who have walked the path to healing with us.
          </motion.p>
        </div>

        {/* Modern Testimonial Slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="relative h-[460px] sm:h-[400px] md:h-[320px]">
            {testimonials.map((testimonial, index) => {
              // Calculate position relative to active index
              const offset = (index - activeIndex + testimonials.length) % testimonials.length;
              const isActive = offset === 0;
              const isNext = offset === 1;
              const isPrev = offset === testimonials.length - 1;

              let x = "100%";
              let scale = 0.8;
              let opacity = 0;
              let zIndex = 0;

              if (isActive) {
                x = "0%";
                scale = 1;
                opacity = 1;
                zIndex = 10;
              } else if (isNext) {
                x = "50%"; // Shift right
                scale = 0.85;
                opacity = 0.4;
                zIndex = 5;
              } else if (isPrev) {
                x = "-50%"; // Shift left
                scale = 0.85;
                opacity = 0.4;
                zIndex = 5;
              }

              return (
                <motion.div
                  key={index}
                  className="absolute top-0 left-0 right-0 w-full md:w-[700px] mx-auto"
                  initial={false}
                  animate={{
                    x: isActive ? "0%" : isNext ? "30%" : isPrev ? "-30%" : "0%", // Simplified movement for stability
                    scale,
                    opacity: isActive ? 1 : 0, // Hide non-adjacent cards
                    zIndex
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                >
                  <div className={`bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-border relative overflow-hidden backdrop-blur-sm
                    ${isActive ? 'ring-2 ring-primary-100' : ''}
                  `}>
                    {/* Decorative Quote Mark */}
                    <div className="absolute top-4 right-8 text-primary-100/50">
                      <Quote className="w-24 h-24 transform rotate-12" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                      {/* Avatar Side */}
                      <div className="flex-shrink-0">
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${testimonial.gradient} p-1 shadow-lg`}>
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-2xl font-bold text-gray-700">
                            {testimonial.initial}
                          </div>
                        </div>
                        <div className="flex justify-center gap-1 mt-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="text-center md:text-left flex-1">
                        <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed italic font-heading">
                          "{testimonial.text}"
                        </p>
                        <div>
                          <h4 className="font-bold text-lg text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-primary-600 font-semibold uppercase tracking-wide">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-foreground hover:bg-primary-50 hover:text-primary-600 transition-all hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-8 bg-primary-500" : "w-2 bg-gray-300 hover:bg-primary-300"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-foreground hover:bg-primary-50 hover:text-primary-600 transition-all hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
