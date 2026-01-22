import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const painConditions = [
  {
    id: 1,
    title: "Back Pain Treatment",
    image: "/images/pain/Back Pain Treatment.png",
    description: "Specialized treatment for chronic and acute back pain conditions"
  },
  {
    id: 2,
    title: "Sports Injury Rehabilitation",
    image: "/images/pain/Sports Injury Rehabilitation.png",
    description: "Comprehensive recovery programs for sports-related injuries"
  },
  {
    id: 3,
    title: "Neurological Physiotherapy",
    image: "/images/pain/Neurological Physiotherapy.png",
    description: "Advanced therapy for neurological conditions and disorders"
  },
  {
    id: 4,
    title: "Geriatric Physiotherapy",
    image: "/images/pain/Geriatric Physiotherapy .png",
    description: "Specialized care for elderly patients and age-related conditions"
  },
  {
    id: 5,
    title: "Pediatric Physiotherapy",
    image: "/images/pain/Pediatric Physiotherapy.png",
    description: "Gentle and effective therapy for children and adolescents"
  }
];

export default function SlidingPainCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === painConditions.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Auto-slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleLearnMore = () => {
    navigate("/services");
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

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Physiotherapy Care
          </h2>
          <p className="text-xl text-gray-600">Our Services</p>
        </motion.div>

        {/* Sliding Cards Container */}
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center">
            <div className="relative max-w-[90%] w-full">
              {/* Cards Display */}
              <div className="flex justify-center items-center gap-8">
                {/* Previous Card (partially visible) */}
                <motion.div
                  key={`prev-${painConditions[(currentIndex - 1 + painConditions.length) % painConditions.length].id}`}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 0.5, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="hidden lg:block w-96 h-96 bg-white rounded-xl shadow-lg overflow-hidden transform scale-90"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={painConditions[(currentIndex - 1 + painConditions.length) % painConditions.length].image}
                      alt={painConditions[(currentIndex - 1 + painConditions.length) % painConditions.length].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {painConditions[(currentIndex - 1 + painConditions.length) % painConditions.length].title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {painConditions[(currentIndex - 1 + painConditions.length) % painConditions.length].description}
                    </p>
                  </div>
                </motion.div>

                {/* Current Card (main focus) */}
                <motion.div
                  key={painConditions[currentIndex].id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-96 h-96 bg-white rounded-xl shadow-xl overflow-hidden z-10"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={painConditions[currentIndex].image}
                      alt={painConditions[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {painConditions[currentIndex].title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {painConditions[currentIndex].description}
                    </p>
                    <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white" onClick={handleLearnMore}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>

                {/* Next Card (partially visible) */}
                <motion.div
                  key={`next-${painConditions[(currentIndex + 1) % painConditions.length].id}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 0.5, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="hidden lg:block w-96 h-96 bg-white rounded-xl shadow-lg overflow-hidden transform scale-90"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={painConditions[(currentIndex + 1) % painConditions.length].image}
                      alt={painConditions[(currentIndex + 1) % painConditions.length].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {painConditions[(currentIndex + 1) % painConditions.length].title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {painConditions[(currentIndex + 1) % painConditions.length].description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Cards (show all on small screens) */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {painConditions.map((condition, index) => (
            <motion.div
              key={condition.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={condition.image}
                  alt={condition.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{condition.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{condition.description}</p>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white" onClick={handleLearnMore}>
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {painConditions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
