import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Star, Quote, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Rajesh Kumar",
    age: 45,
    condition: "Chronic Back Pain",
    rating: 5,
    text: "I suffered from chronic back pain for over 5 years. After trying various treatments without success, I visited Surya Kiran Clinic. Within 10 sessions, my pain reduced by 80%. The doctor's expertise and personalized approach made all the difference. I can now sit comfortably at work and play with my kids without any discomfort.",
    avatar: "RK",
  },
  {
    name: "Priya Sharma",
    age: 38,
    condition: "Post-Knee Surgery",
    rating: 5,
    text: "The rehabilitation after my ACL surgery was exceptional. The physiotherapist created a detailed recovery plan and was incredibly patient with me. I regained full mobility faster than my surgeon expected. The clinic's modern equipment and clean environment added to the positive experience.",
    avatar: "PS",
  },
  {
    name: "Anand Krishnan",
    age: 32,
    condition: "Sports Injury - Marathon Runner",
    rating: 5,
    text: "As a competitive marathon runner, getting back on track after my ankle injury was crucial for me. The sports injury rehabilitation program here is world-class. The therapist understood my goals and pushed me safely. I'm now back to running and even set a personal best last month!",
    avatar: "AK",
  },
  {
    name: "Lakshmi Devi",
    age: 67,
    condition: "Arthritis & Joint Pain",
    rating: 5,
    text: "At my age, I had almost given up on living without joint pain. The geriatric physiotherapy program here has been a blessing. The gentle exercises and therapies have significantly improved my mobility. The staff is so patient and caring. I can now walk to the temple every day!",
    avatar: "LD",
  },
  {
    name: "Vikram Rao",
    age: 52,
    condition: "Neck Pain & Headaches",
    rating: 5,
    text: "Years of desk work left me with severe neck pain and frequent headaches. The neck pain therapy combined with posture correction advice has been transformative. My headaches have almost disappeared and I've learned exercises to prevent future issues. Highly recommend!",
    avatar: "VR",
  },
  {
    name: "Meera Nair",
    age: 28,
    condition: "Shoulder Injury",
    rating: 5,
    text: "I injured my shoulder during a badminton match and couldn't lift my arm properly. The treatment here was thorough and effective. The therapist explained everything clearly and made me feel comfortable throughout. In just 6 weeks, I was back on the court. Thank you, Surya Kiran!",
    avatar: "MN",
  },
];

const WHATSAPP_NUMBER = "919048030977";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I would like to enquire about physiotherapy services at Surya Kiran Clinic."
);

export default function Reviews() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Patient Reviews
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Stories of{" "}
              <span className="text-primary-700">Recovery & Hope</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Read how our patients overcame pain and regained their quality of life
              with personalized physiotherapy care at Surya Kiran Clinic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="font-heading font-bold text-4xl text-primary-foreground">5000+</span>
              <p className="text-primary-foreground/70 mt-1">Happy Patients</p>
            </div>
            <div>
              <span className="font-heading font-bold text-4xl text-primary-foreground">4.9/5</span>
              <p className="text-primary-foreground/70 mt-1">Average Rating</p>
            </div>
            <div>
              <span className="font-heading font-bold text-4xl text-primary-foreground">95%</span>
              <p className="text-primary-foreground/70 mt-1">Success Rate</p>
            </div>
            <div>
              <span className="font-heading font-bold text-4xl text-primary-foreground">20+</span>
              <p className="text-primary-foreground/70 mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface rounded-2xl p-6 border border-border relative"
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

                {/* Condition Tag */}
                <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm mb-4">
                  {testimonial.condition}
                </span>

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
                      Age {testimonial.age}
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
            className="mt-16 bg-accent/10 rounded-2xl p-8 text-center"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of patients who have transformed their lives with our expert care.
              Book your consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="gradient-accent text-accent-foreground shadow-accent"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Book on WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-700 text-primary-700 hover:bg-primary-100"
                asChild
              >
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
