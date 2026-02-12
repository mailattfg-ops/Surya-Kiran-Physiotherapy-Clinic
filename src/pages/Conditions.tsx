import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/layout/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { conditions } from "@/data/conditions";
import { CONTACT_INFO } from "@/data/constants";

export default function Conditions() {
  const handleEnquire = (conditionName: string) => {
    const message = encodeURIComponent(
      `Hello, I would like to enquire about treatment for ${conditionName} at Surya Kiran Physiotherapy Clinic.`
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <Layout>
      <SEO
        title="Conditions We Treat | Specialized Rehabilitation"
        description="Expert treatment for back pain, neck pain, arthritis, sports injuries, and neurological conditions in Kadakkal, Kerala."
      />
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Conditions We Treat
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Expert Care for{" "}
              <span className="text-primary-700">Your Condition</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in treating a wide range of conditions. Learn about how
              physiotherapy can help your specific situation and when to seek treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conditions List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {conditions.map((condition, index) => (
              <motion.div
                key={condition.id}
                id={condition.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-surface rounded-2xl p-6 md:p-8 border border-border"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Info */}
                  <div className="lg:col-span-2">
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                      {condition.name}
                    </h2>
                    <p className="text-muted-foreground mb-6">{condition.description}</p>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-3">
                          Common Symptoms
                        </h3>
                        <ul className="space-y-2">
                          {condition.symptoms.map((symptom, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-3">
                          How Physiotherapy Helps
                        </h3>
                        <p className="text-sm text-muted-foreground">{condition.howWeHelp}</p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-primary-100 rounded-xl">
                      <h3 className="font-heading font-semibold text-primary-700 mb-1">
                        When to Consult
                      </h3>
                      <p className="text-sm text-primary-700/80">{condition.whenToConsult}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col justify-center items-start lg:items-end">
                    <Button
                      onClick={() => handleEnquire(condition.name)}
                      className="gradient-accent text-accent-foreground shadow-accent"
                    >
                      Get Treatment Help
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
