import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Briefcase, Star, MessageCircle } from "lucide-react";
import doctorImage from "@/assets/doctor-profile.jpg";

const qualifications = [
  "Bachelor of Physiotherapy (BPT)",
  "Master of Physiotherapy in Orthopedics (MPT)",
  "Certified Manual Therapist",
  "Sports Physiotherapy Specialist",
];

const certifications = [
  "Member, Indian Association of Physiotherapists (IAP)",
  "Certified in Dry Needling Therapy",
  "Advanced Training in Neurological Rehabilitation",
  "Workshop on Electrotherapy & Ultrasound Therapy",
];

const specializations = [
  "Orthopedic Physiotherapy",
  "Sports Injury Rehabilitation",
  "Manual Therapy & Manipulation",
  "Post-Surgical Rehabilitation",
  "Chronic Pain Management",
  "Geriatric Care",
];

const WHATSAPP_NUMBER = "919048030977";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I would like to enquire about physiotherapy services at Surya Kiran Clinic."
);

export default function Doctor() {
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
              Our Expert
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Meet Your{" "}
              <span className="text-primary-700">Physiotherapist</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With extensive experience and specialized training, our lead physiotherapist
              is dedicated to helping you achieve optimal recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className=" bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 gradient-primary rounded-3xl opacity-20 blur-2xl" />
                <img
                  src={doctorImage}
                  alt="Dr. Shibu D - Lead Physiotherapist"
                  className="relative rounded-3xl shadow-xl w-full h-auto object-cover"
                />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-accent rounded-2xl p-6 text-accent-foreground"
              >
                <span className="font-heading font-bold text-3xl">10+</span>
                <p className="text-sm">Years Experience</p>
              </motion.div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
                  Dr. Shibu D
                </h2>
                <p className="text-primary-700 font-medium text-lg mb-4">
                  Lead Physiotherapist & Founder
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Dr. Shibu D is a highly experienced physiotherapist with over 10 years of
                  clinical practice. His patient-centered approach, combined with expertise
                  in manual therapy and evidence-based treatments, has helped thousands of
                  patients recover from pain and regain their quality of life.
                </p>
              </div>

              {/* Qualifications */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-primary-700" />
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    Qualifications
                  </h3>
                </div>
                <ul className="space-y-2">
                  {qualifications.map((qual, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {qual}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specializations */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-primary-700" />
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    Areas of Expertise
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {specializations.map((spec, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="gradient-accent text-accent-foreground shadow-accent"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Book Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-6 h-6 text-accent" />
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Certifications & Achievements
              </h2>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-background rounded-xl p-4 border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-primary-700" />
                </div>
                <span className="text-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
