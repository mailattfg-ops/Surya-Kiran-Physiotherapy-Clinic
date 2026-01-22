import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bone, Activity, Brain, Heart, Baby, UserRound, Zap, Hand } from "lucide-react";

const services = [
  {
    id: "back-pain",
    icon: Bone,
    title: "Back Pain Treatment",
    description: "Comprehensive treatment for chronic and acute back pain using advanced techniques.",
    benefits: [
      "Relief from chronic lower back pain",
      "Improved spinal mobility and flexibility",
      "Posture correction and education",
      "Prevention of future back problems",
    ],
    conditions: ["Herniated disc", "Sciatica", "Muscle strain", "Spinal stenosis"],
  },
  {
    id: "sports-injury",
    icon: Activity,
    title: "Sports Injury Rehabilitation",
    description: "Specialized recovery programs designed to get athletes back to peak performance.",
    benefits: [
      "Faster return to sports activities",
      "Strength and conditioning programs",
      "Injury prevention strategies",
      "Performance enhancement",
    ],
    conditions: ["ACL injuries", "Tennis elbow", "Runner's knee", "Ankle sprains"],
  },
  {
    id: "neurological",
    icon: Brain,
    title: "Neurological Physiotherapy",
    description: "Expert rehabilitation for neurological conditions to restore function and independence.",
    benefits: [
      "Improved motor function",
      "Balance and coordination training",
      "Gait re-education",
      "Daily living skills recovery",
    ],
    conditions: ["Stroke recovery", "Parkinson's disease", "Multiple sclerosis", "Brain injury"],
  },
  {
    id: "post-surgery",
    icon: Heart,
    title: "Post-Surgery Rehabilitation",
    description: "Structured recovery programs to help you heal faster and regain full function after surgery.",
    benefits: [
      "Accelerated healing process",
      "Reduced scar tissue formation",
      "Restored range of motion",
      "Safe return to daily activities",
    ],
    conditions: ["Joint replacement", "Spinal surgery", "Knee surgery", "Shoulder surgery"],
  },
  {
    id: "geriatric",
    icon: UserRound,
    title: "Geriatric Physiotherapy",
    description: "Gentle, effective treatments tailored for elderly patients to maintain independence.",
    benefits: [
      "Fall prevention strategies",
      "Improved balance and stability",
      "Pain management for arthritis",
      "Maintained mobility and strength",
    ],
    conditions: ["Arthritis", "Osteoporosis", "Balance disorders", "General weakness"],
  },
  {
    id: "pediatric",
    icon: Baby,
    title: "Pediatric Physiotherapy",
    description: "Child-friendly therapy for developmental delays and pediatric conditions.",
    benefits: [
      "Improved motor development",
      "Enhanced coordination skills",
      "Fun, engaging therapy sessions",
      "Parent education and involvement",
    ],
    conditions: ["Developmental delays", "Cerebral palsy", "Muscular dystrophy", "Torticollis"],
  },
  {
    id: "neck-pain",
    icon: Hand,
    title: "Neck Pain Therapy",
    description: "Targeted treatment for neck pain and related headaches using manual therapy techniques.",
    benefits: [
      "Relief from chronic neck pain",
      "Reduced tension headaches",
      "Improved neck mobility",
      "Ergonomic advice for prevention",
    ],
    conditions: ["Cervical spondylosis", "Whiplash", "Tension headaches", "Stiff neck"],
  },
  {
    id: "electrotherapy",
    icon: Zap,
    title: "Electrotherapy & Modalities",
    description: "Advanced electrotherapy treatments for pain relief and tissue healing.",
    benefits: [
      "Non-invasive pain relief",
      "Accelerated tissue healing",
      "Reduced inflammation",
      "Muscle stimulation",
    ],
    conditions: ["Chronic pain", "Muscle spasms", "Swelling", "Tissue injuries"],
  },
];

const WHATSAPP_NUMBER = "919876543210";

export default function Services() {
  const handleEnquire = (serviceName: string) => {
    const message = encodeURIComponent(
      `Hello, I would like to enquire about ${serviceName} at Surya Kiran Physiotherapy Clinic.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
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
              <span className="text-primary-700">Physiotherapy Services</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer a wide range of specialized treatments to address your unique needs 
              and help you achieve optimal physical health and wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
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
                className="bg-surface rounded-2xl p-6 md:p-8 border border-border"
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
    </Layout>
  );
}
