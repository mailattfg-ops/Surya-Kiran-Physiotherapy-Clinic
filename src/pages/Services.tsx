import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope } from "lucide-react";
import { useState, useEffect } from "react";
import InquiryModal from "@/components/home/InquiryModal";

import { useLocation } from "react-router-dom";
import { services } from "@/data/services";
import { conditions } from "@/data/conditions";

const WHATSAPP_NUMBER = "919048030977";

export default function Services() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Small delay to ensure render
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleEnquire = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsInquiryOpen(true);
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
              Our Services
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Comprehensive{" "}
              <span className="text-primary-700 relative inline-block">
                Physiotherapy Services
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer a wide range of specialized treatments to address your unique needs
              and help you achieve optimal physical health and wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-surface rounded-2xl p-6 md:p-8 border border-border scroll-mt-24" // Added scroll-mt-24 for offset
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Service Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-7 h-7 text-primary-700" />
                      </div>
                      <div>
                        <h2 className="font-heading text-2xl font-bold text-foreground">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground mt-1">{service.description}</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-3">
                          Benefits
                        </h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-3">
                          Conditions Treated
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.conditions.map((condition, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm"
                            >
                              {condition}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col justify-center items-start lg:items-end">
                    <Button
                      onClick={() => handleEnquire(service.title)}
                      className="gradient-accent text-accent-foreground shadow-accent"
                    >
                      Enquire About This Service
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Conditions
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Conditions <span className="text-primary-700">We Treat</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our expert team provides specialized care for a wide spectrum of physical conditions using evidence-based treatments.
            </p>
          </div>

          <div className="space-y-8">
            {conditions.map((condition, index) => (
              <motion.div
                key={condition.id}
                id={condition.id} // Added ID for navigation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-surface rounded-2xl p-6 md:p-8 border border-border scroll-mt-24" // Added scroll-mt-24 for offset
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Condition Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <Stethoscope className="w-7 h-7 text-primary-700" />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-foreground">
                          {condition.name}
                        </h3>
                        <p className="text-muted-foreground mt-1">{condition.description}</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-3">
                          Symptoms
                        </h4>
                        <ul className="space-y-2">
                          {condition.symptoms.map((symptom, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-3">
                          How We Help
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {condition.howWeHelp}
                        </p>
                        <div className="mt-4 p-3 bg-secondary/50 rounded-lg">
                          <p className="text-xs font-medium text-foreground">
                            When to consult: <span className="text-muted-foreground font-normal">{condition.whenToConsult}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col justify-center items-start lg:items-end">
                    <Button
                      onClick={() => handleEnquire(condition.name)}
                      className="gradient-accent text-accent-foreground shadow-accent"
                    >
                      Context Us For Help
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialService={selectedService}
      />
    </Layout>
  );
}
