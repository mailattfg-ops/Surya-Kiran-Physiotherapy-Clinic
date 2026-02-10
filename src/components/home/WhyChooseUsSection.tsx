import { motion } from "framer-motion";
import { Award, Users, Heart, Sparkles, Clock, Shield } from "lucide-react";

// Feature data
const features = [
  {
    icon: Award,
    title: "Expert Professionals",
    description: "20+ years of clinical excellence.",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Bespoke plans for your unique healing.",
    color: "text-rose-600",
    bgColor: "bg-rose-50"
  },
  {
    icon: Sparkles,
    title: "Advanced Tech",
    description: "State-of-the-art results.",
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Weekends included.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  }
];

const stats = [
  { label: "Years Experience", value: "20+", color: "bg-primary-700 text-white" },
  { label: "Happy Patients", value: "10k+", color: "bg-white text-primary-700 border border-primary-100" },
  { label: "Success Rate", value: "98%", color: "bg-white text-primary-700 border border-primary-100" },
  { label: "Specialists", value: "12+", color: "bg-white text-primary-700 border border-primary-100" },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-50/50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">

          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            {/* Header Matching 'Our Expertise' */}
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-bold tracking-wider uppercase mb-4 shadow-sm">
              Why Choose Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">
              Redefining Care for <br />
              <span className="text-primary-500">Better Living</span>
            </h2>
            <p className="text-muted-foreground text-lg italic mb-10">
              "Healing hands, compassionate hearts" - dedicated to your complete recovery.
            </p>

            {/* Redesigned Features List - Cleaner, Less Cluttered */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 group p-3 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100"
                >
                  <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} ${feature.color} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Stats (Fixed Layout) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex-1 w-full max-w-md md:max-w-full"
          >
            {/* Clean Grid Layout - No Overlap */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded-3xl flex flex-col items-center justify-center text-center p-4 shadow-xl ${stat.color} 
                  ${index === 1 || index === 3 ? 'mt-8' : ''}`}
                >
                  <span className="font-heading font-black text-4xl md:text-5xl mb-1 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wide opacity-80">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Decorative blob behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-50/50 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
