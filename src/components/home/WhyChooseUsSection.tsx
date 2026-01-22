import { motion } from "framer-motion";
import { Award, Users, Heart, Sparkles, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Professionals",
    description: "Qualified physiotherapists with 10+ years of experience and advanced certifications.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Customized treatment plans designed for your specific condition and recovery goals.",
  },
  {
    icon: Sparkles,
    title: "Modern Equipment",
    description: "State-of-the-art physiotherapy equipment for effective and comfortable treatments.",
  },
  {
    icon: Users,
    title: "Patient-Centered",
    description: "We listen, understand, and work with you every step of your recovery journey.",
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    description: "Convenient appointment slots to fit your busy schedule, including weekends.",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Clean, hygienic clinic with strict safety protocols for your well-being.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-700 text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Your Recovery Is Our{" "}
              <span className="text-primary-700">Top Priority</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Surya Kiran Physiotherapy Clinic, we combine clinical expertise with 
              genuine compassion. Our team is dedicated to helping you overcome pain, 
              restore function, and return to the activities you love.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-primary-700 text-primary-foreground rounded-2xl p-6 text-center"
              >
                <span className="font-heading font-bold text-4xl">10+</span>
                <p className="text-primary-foreground/80 mt-1">Years Experience</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-accent rounded-2xl p-6 text-center text-accent-foreground"
              >
                <span className="font-heading font-bold text-4xl">5000+</span>
                <p className="text-accent-foreground/80 mt-1">Happy Patients</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-surface border border-border rounded-2xl p-6 text-center"
              >
                <span className="font-heading font-bold text-4xl text-primary-700">95%</span>
                <p className="text-muted-foreground mt-1">Success Rate</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-surface border border-border rounded-2xl p-6 text-center"
              >
                <span className="font-heading font-bold text-4xl text-primary-700">20+</span>
                <p className="text-muted-foreground mt-1">Treatments Offered</p>
              </motion.div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 bg-primary-100 rounded-full blur-2xl opacity-50" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
