import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Award, Heart, Users, Target, CheckCircle, ArrowRight } from "lucide-react";

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
  { year: "2006", title: "Started at Anchal", description: "The beginning of our journey in physiotherapy care" },
  { year: "2007", title: "Started at Kadakkal", description: "Expanded our services to reach more patients" },
  { year: "2009", title: "1000 Patients", description: "Reached a milestone of treating 1000 patients" },
  { year: "2017", title: "Ladies Fitness Center", description: "Launched a specialized fitness center for women" },
  { year: "2022", title: "3000 Patients", description: "Growing community trust with 3000 patients treated" },
  { year: "2026", title: "5000+ Patients", description: "Continuing our legacy with over 5000 happy patients" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6 tracking-wide shadow-sm">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Your Trusted Partner in <br />
              <span className="text-primary-500 relative inline-block">
                Recovery & Wellness
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              At Surya Kiran Physiotherapy Clinic, we believe everyone deserves to live
              a pain-free, active life. With over 20 years of experience and 5000+ patients
              treated, we're committed to providing exceptional care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-primary-900/5 border border-primary-50 hover:border-primary-100 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To provide personalized, evidence-based physiotherapy treatments that
                  restore mobility, reduce pain, and improve quality of life for every
                  patient who walks through our doors.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-accent-900/5 border border-accent-100/50 hover:border-accent-200 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent-100 flex items-center justify-center text-accent-700 mb-6">
                  <Award className="w-7 h-7" />
                </div>
                <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the most trusted physiotherapy clinic in Kerala, known for
                  our clinical excellence, compassionate care, and unwavering commitment to
                  patient outcomes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4 tracking-wide shadow-sm">
              Our Foundations
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core <br />
              <span className="text-primary-500 relative inline-block">
                Values
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              These principles guide every interaction and treatment plan at Surya Kiran.
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
                className="bg-white rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary-100 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary-600 group-hover:text-primary-700" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed font-medium text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect & Timeline */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Col: Expectations */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4 tracking-wide shadow-sm">
                Patient Experience
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
                What to Expect <br />
                <span className="text-primary-500 relative inline-block">
                  On Your First Visit
                </span>
              </h2>
              <div className="space-y-6">
                {[
                  "Comprehensive assessment of your condition and medical history",
                  "Discussion of your symptoms, concerns, and recovery goals",
                  "Physical examination to understand your mobility and pain levels",
                  "Personalized treatment plan tailored to your needs",
                  "Clear explanation of recommended treatments and timeline",
                  "Comfortable, hygienic treatment environment",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-colors duration-200">
                    <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center mt-0.5 shrink-0">
                      <CheckCircle className="w-4 h-4 text-accent-700" />
                    </div>
                    <span className="text-foreground/80 font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 font-bold text-primary-700 hover:text-primary-800 transition-colors">
                  Book your first consultation <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </motion.div>

            {/* Right Col: Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-white/50 p-8 rounded-[3rem] border border-primary-50/50"
            >
              {/* Decorative bg for timeline */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-primary-50/20 rounded-[3rem] -z-10" />

              <h3 className="font-heading text-3xl font-bold mb-10 pl-4 text-foreground leading-[1.1]">
                Our Journey <br />
                <span className="text-primary-500">of Healing</span>
              </h3>

              <div className="space-y-0 relative pl-4">
                {/* Vertical Line */}
                <div className="absolute left-[21px] top-2 bottom-4 w-0.5 bg-primary-300" />

                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex gap-6 pb-10 last:pb-0 group">
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-primary-500 border-2 border-white ring-4 ring-primary-100 mt-2 group-hover:scale-125 transition-transform duration-300 shadow-md" />
                    </div>

                    <div className="flex-1 -mt-1 group-hover:translate-x-1 transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xl font-bold text-primary-600 font-heading">{milestone.year}</span>
                        <span className="h-px w-8 bg-primary-100" />
                      </div>
                      <h4 className="font-heading font-semibold text-foreground text-lg">
                        {milestone.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mt-1">
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
