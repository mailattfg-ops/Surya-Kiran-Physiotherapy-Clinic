import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "raghuroopa sri",
    date: "a year ago",
    rating: 5,
    text: "I was suffering from tail bone pain for a long time, after one month of continuous treatment I am sitting properly without pain, thank you",
    avatar: "R",
    color: "bg-orange-600"
  },
  {
    name: "HARIPRIYA Kasbe",
    date: "a year ago",
    rating: 5,
    text: "unbearable. I could not sit for even 10 min. I was getting pricking pain in my tailbone which was highly painful & was frustrating me. I could",
    avatar: "H",
    color: "bg-red-700"
  },
  {
    name: "Aisha anjum",
    date: "a year ago",
    rating: 5,
    text: "I had tail bone issue since 5 yrs .i couldn't travel for long time .I was having lower back ache too .I was looking for lady dr for my problem.",
    avatar: "A",
    color: "bg-gray-500"
  },
  {
    name: "Sathya Viju",
    date: "a year ago",
    rating: 5,
    text: "I was having Tailbone pain for very long time for 8 months. I was not able to travel even in car for 30 minutes even since it was very much",
    avatar: "S",
    color: "bg-teal-600"
  },
  {
    name: "Rajesh Kumar",
    date: "2 months ago",
    rating: 5,
    text: "Excellent treatment for back pain. The doctors are very professional and the facility is well equipped.",
    avatar: "R",
    color: "bg-blue-600"
  },
  {
    name: "Priya Sharma",
    date: "3 months ago",
    rating: 5,
    text: "Very happy with the post surgery rehab. Staff is very supportive and knowledgeable.",
    avatar: "P",
    color: "bg-purple-600"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setCurrentIndex((prev) =>
      prev + 1 > testimonials.length - itemsPerPage ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - itemsPerPage : prev - 1
    );
  };

  return (
    <section className="py-10 md:py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Patient Stories
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real experiences from patients who trusted us with their recovery journey.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-1 md:left-0 top-1/2 -translate-y-1/2 translate-x-0 md:-translate-x-12 z-10 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
          </button>

          <button
            onClick={next}
            className="absolute right-1 md:right-0 top-1/2 -translate-y-1/2 translate-x-0 md:translate-x-12 z-10 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
          </button>

          {/* Cards Window */}
          <div className="overflow-hidden py-4 -mx-4 px-4">
            <motion.div
              className="flex gap-0 md:gap-6"
              animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                >
                  <div className="bg-white rounded-2xl px-8 py-8 md:p-8 border border-gray-100 relative h-full flex flex-col mt-4">
                    {/* Quote Icon */}
                    <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center shadow-md z-10">
                      <Quote className="w-4 h-4 text-white" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4 mt-2 ml-10">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-600 mb-6 leading-relaxed flex-1 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                      <div className={`w-12 h-12 rounded-full ${testimonial.color || 'bg-blue-600'} flex items-center justify-center text-white font-semibold text-lg shadow-sm`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 leading-tight">
                          {testimonial.name}
                        </h4>
                        <span className="text-xs text-gray-500 font-medium">
                          {testimonial.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots - keeping simplified logic for now as user just wants style revert */}
          <div className="flex justify-center gap-2 mt-4">
            <div className={`w-2 h-2 rounded-full ${currentIndex === 0 ? 'bg-orange-500' : 'bg-gray-300'}`} />
            <div className={`w-2 h-2 rounded-full ${currentIndex > 0 ? 'bg-orange-500' : 'bg-gray-300'}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
