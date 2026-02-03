import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import { conditions } from "@/data/conditions";

// Map condition IDs to available images
const imageMap: Record<string, string> = {
  "back-neck-shoulder-pain": "/images/pain/Back Pain Treatment.png",
  "sports-injuries": "/images/pain/Sports Injury Rehabilitation.png",
  "work-related-injuries": "/images/pain/Back Pain Treatment.png",
  "myofascial-pain-syndrome": "/images/pain/Sports Injury Rehabilitation.png",
  "repetitive-strain-injuries": "/images/pain/Back Pain Treatment.png",
  "sciatica-disc-diseases": "/images/pain/Neurological Physiotherapy.png",
  "soft-tissue-injuries": "/images/pain/Sports Injury Rehabilitation.png",
  "postural-dysfunction": "/images/pain/Back Pain Treatment.png",
  "arthritic-conditions": "/images/pain/Geriatric Physiotherapy .png",
  "pre-post-operative-conditions": "/images/pain/Neurological Physiotherapy.png",
};

const painConditions = conditions.map((condition) => ({
  id: condition.id,
  title: condition.name,
  image: imageMap[condition.id] || "/images/pain/Back Pain Treatment.png", // Fallback
  description: condition.description,
  linkHash: condition.id, // Direct link to condition section
}));

export default function SlidingPainCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === painConditions.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Slower auto-slide for better readability

    return () => clearInterval(interval);
  }, []);

  const handleLearnMore = () => {
    const activeCondition = painConditions[currentIndex];
    if (activeCondition.linkHash) {
      navigate(`/services#${activeCondition.linkHash}`);
    } else {
      navigate("/services");
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === painConditions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? painConditions.length - 1 : prevIndex - 1
    );
  };

  const activeReview = painConditions[currentIndex];
  const prevIndex = (currentIndex - 1 + painConditions.length) % painConditions.length;
  const nextIndex = (currentIndex + 1) % painConditions.length;

  return (
    <section className="py-12 md:py-20 bg-background overflow-hidden relative">
      {/* Background decorations matching Services section */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100/80 text-primary-700 text-sm font-medium mb-4 border border-primary-200">
            Our Expertise
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Specialized Treatments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Targeted therapies for a wide range of conditions to help you recover faster and move better.
          </p>
        </motion.div>

        {/* Sliding Cards Container */}
        <div className="relative">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-7xl h-[500px] flex items-center justify-center">

              {/* Previous Card */}
              <motion.div
                key={`prev-${prevIndex}`}
                className="absolute left-0 lg:left-12 xl:left-24 hidden md:block w-80 lg:w-96 origin-bottom z-0 opacity-60 blur-[1px] grayscale-[30%] pointer-events-none"
                initial={{ scale: 0.9, x: -50 }}
                animate={{ scale: 0.9, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden h-[420px] flex flex-col">
                  <div className="h-48 overflow-hidden bg-muted">
                    <img
                      src={painConditions[prevIndex].image}
                      alt={painConditions[prevIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3 line-clamp-1">
                      {painConditions[prevIndex].title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-4">
                      {painConditions[prevIndex].description}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Current Card */}
              <motion.div
                key={currentIndex}
                className="relative z-20 w-full max-w-md md:w-[420px]"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-white rounded-2xl shadow-xl shadow-primary/5 border border-primary-100 overflow-hidden h-auto min-h-[460px] flex flex-col group hover:shadow-2xl transition-all duration-300">
                  <div className="h-56 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                    <img
                      src={activeReview.image}
                      alt={activeReview.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-primary-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                        Condition
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col relative bg-gradient-to-b from-white to-surface/50">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                      {activeReview.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                      {activeReview.description}
                    </p>
                    <Button
                      className="w-full gradient-accent text-accent-foreground shadow-md hover:shadow-lg transition-all group/btn"
                      onClick={handleLearnMore}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Next Card */}
              <motion.div
                key={`next-${nextIndex}`}
                className="absolute right-0 lg:right-12 xl:right-24 hidden md:block w-80 lg:w-96 origin-bottom z-0 opacity-60 blur-[1px] grayscale-[30%] pointer-events-none"
                initial={{ scale: 0.9, x: 50 }}
                animate={{ scale: 0.9, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden h-[420px] flex flex-col">
                  <div className="h-48 overflow-hidden bg-muted">
                    <img
                      src={painConditions[nextIndex].image}
                      alt={painConditions[nextIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3 line-clamp-1">
                      {painConditions[nextIndex].title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-4">
                      {painConditions[nextIndex].description}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:-left-4 lg:left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary-600 hover:scale-110 transition-all duration-300"
                aria-label="Previous condition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 md:-right-4 lg:right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary-600 hover:scale-110 transition-all duration-300"
                aria-label="Next condition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-2">
          {painConditions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-primary-600" : "w-2 bg-primary-200 hover:bg-primary-300"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
