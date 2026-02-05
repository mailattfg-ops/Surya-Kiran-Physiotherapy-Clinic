import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { services as allServices } from "@/data/services";

const services = allServices.slice(0, 6).map((service, index) => ({
  ...service,
  color: index % 2 === 0 ? "primary" : "accent",
}));

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-xl sm:text-4xl font-bold text-foreground mb-4">
            Comprehensive <br className="sm:hidden" />
            <span className="hidden sm:inline">Physiotherapy Care</span>
            <span className="sm:hidden">Physio Care</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a wide range of specialized treatments to address your unique needs
            and help you achieve optimal physical health.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-background rounded-2xl p-6 border border-border hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${service.color === "primary"
                  ? "bg-primary-100 text-primary-700"
                  : "bg-accent/10 text-accent"
                  } group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-primary-700 font-medium hover:text-primary-500 transition-colors group/link"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
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
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
