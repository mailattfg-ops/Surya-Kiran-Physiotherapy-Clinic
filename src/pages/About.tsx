import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Target, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient with empathy, understanding, and respect.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in physiotherapy practice.",
  },
  {
    icon: Users,
    title: "Patient-Centered",
    description: "Your recovery goals guide everything we do.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on measurable outcomes and lasting recovery.",
  },
];

const milestones = [
  { year: "2014", title: "Clinic Founded", description: "Started with a vision to provide quality physiotherapy care" },
  { year: "2016", title: "1000 Patients", description: "Milestone of treating 1000+ happy patients" },
  { year: "2019", title: "Expanded Facilities", description: "Added advanced equipment and treatment rooms" },
  { year: "2024", title: "5000+ Patients", description: "Continuing to grow and serve our community" },
];

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I would like to learn more about Surya Kiran Physiotherapy Clinic."
);

export default function About() {
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
              About Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner in{" "}
              <span className="text-primary-700">Recovery & Wellness</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Surya Kiran Physiotherapy Clinic, we believe everyone deserves to live 
              a pain-free, active life. With over 10 years of experience and 5000+ patients 
              treated, we're committed to providing exceptional physiotherapy care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary-700 rounded-2xl p-8 text-primary-foreground"
            >
              <h2 className="font-heading text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-primary-foreground/90 leading-relaxed">
                To provide personalized, evidence-based physiotherapy treatments that 
                restore mobility, reduce pain, and improve quality of life for every 
                patient who walks through our doors.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-accent rounded-2xl p-8 text-accent-foreground"
            >
              <h2 className="font-heading text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-accent-foreground/90 leading-relaxed">
                To be the most trusted physiotherapy clinic in Bangalore, known for 
                our clinical excellence, compassionate care, and commitment to 
                patient outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Surya Kiran.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl p-6 text-center border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-700" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                What to Expect on Your First Visit
              </h2>
              <div className="space-y-4">
                {[
                  "Comprehensive assessment of your condition and medical history",
                  "Discussion of your symptoms, concerns, and recovery goals",
                  "Physical examination to understand your mobility and pain levels",
                  "Personalized treatment plan tailored to your needs",
                  "Clear explanation of recommended treatments and timeline",
                  "Comfortable, hygienic treatment environment",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button
                onClick={handleWhatsAppClick}
                className="mt-8 gradient-accent text-accent-foreground shadow-accent"
              >
                Book Your First Visit
              </Button>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-8">
                Our Journey
              </h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-primary-300 my-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h4 className="font-heading font-semibold text-foreground">
                        {milestone.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
