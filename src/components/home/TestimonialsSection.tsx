import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Rajesh Kumar",
    condition: "Back Pain Recovery",
    rating: 5,
    text: "I suffered from chronic back pain for years. After just 8 sessions at Surya Kiran, I'm finally pain-free. The doctor's expertise and the caring staff made all the difference.",
    avatar: "RK",
  },
  {
    name: "Priya Sharma",
    condition: "Post-Surgery Rehabilitation",
    rating: 5,
    text: "The rehabilitation after my knee surgery was exceptional. The personalized treatment plan helped me recover faster than expected. Highly recommend!",
    avatar: "PS",
  },
  {
    name: "Anand Krishnan",
    condition: "Sports Injury",
    rating: 5,
    text: "As a marathon runner, getting back on track after my ankle injury was crucial. The sports injury program here is world-class. I'm back to running pain-free!",
    avatar: "AK",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 border border-border relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.condition}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary-700 text-primary-700 hover:bg-primary-100"
            asChild
          >
            <Link to="/reviews">Read More Reviews</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
