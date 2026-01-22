import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const conditions = [
  {
    id: "back-pain",
    name: "Back Pain & Spinal Issues",
    description: "One of the most common conditions we treat, back pain can significantly impact your daily life and mobility.",
    symptoms: ["Lower back pain", "Stiffness", "Radiating pain to legs", "Difficulty bending or standing"],
    howWeHelp: "Our treatment combines manual therapy, targeted exercises, and electrotherapy to reduce pain, strengthen supporting muscles, and improve spinal mobility.",
    whenToConsult: "If pain persists for more than a few days, affects your sleep, or limits your daily activities.",
  },
  {
    id: "neck-pain",
    name: "Neck Pain & Cervical Issues",
    description: "Neck pain often results from poor posture, desk work, or underlying conditions, causing significant discomfort.",
    symptoms: ["Neck stiffness", "Headaches", "Shoulder pain", "Limited neck movement"],
    howWeHelp: "We use gentle manual techniques, posture correction, and targeted exercises to relieve tension and restore neck mobility.",
    whenToConsult: "If you experience persistent neck pain, frequent headaches, or numbness in your arms.",
  },
  {
    id: "knee-pain",
    name: "Knee Pain & Injuries",
    description: "Knee problems can arise from injuries, arthritis, or overuse, affecting walking and daily activities.",
    symptoms: ["Swelling", "Difficulty walking", "Clicking sounds", "Instability"],
    howWeHelp: "Treatment includes strengthening exercises, manual therapy, and sometimes electrotherapy to reduce inflammation and improve knee function.",
    whenToConsult: "If your knee pain affects walking, climbing stairs, or daily activities.",
  },
  {
    id: "frozen-shoulder",
    name: "Frozen Shoulder",
    description: "Adhesive capsulitis causes stiffness and pain in the shoulder, severely limiting arm movement.",
    symptoms: ["Severe shoulder pain", "Limited arm movement", "Difficulty reaching overhead", "Sleep disturbance due to pain"],
    howWeHelp: "We use a combination of gentle stretching, manual mobilization, and exercises to gradually restore shoulder movement.",
    whenToConsult: "If you notice increasing shoulder stiffness and difficulty with everyday activities like dressing.",
  },
  {
    id: "slip-disc",
    name: "Slip Disc / Herniated Disc",
    description: "A slipped disc can cause severe pain and nerve-related symptoms that require specialized treatment.",
    symptoms: ["Sharp back pain", "Pain radiating to legs", "Numbness or tingling", "Muscle weakness"],
    howWeHelp: "Our treatment focuses on reducing nerve compression through specific exercises, manual therapy, and pain management techniques.",
    whenToConsult: "If you experience radiating leg pain, numbness, or weakness along with back pain.",
  },
  {
    id: "arthritis",
    name: "Arthritis",
    description: "Arthritis causes joint inflammation and pain, commonly affecting knees, hips, and hands.",
    symptoms: ["Joint pain and stiffness", "Swelling", "Reduced range of motion", "Morning stiffness"],
    howWeHelp: "We focus on maintaining joint mobility, strengthening supporting muscles, and managing pain through gentle exercises and therapies.",
    whenToConsult: "If joint pain and stiffness are affecting your quality of life and daily activities.",
  },
  {
    id: "stroke-recovery",
    name: "Stroke Rehabilitation",
    description: "Stroke recovery requires specialized physiotherapy to regain lost motor functions and independence.",
    symptoms: ["Weakness on one side", "Balance problems", "Difficulty walking", "Arm/hand weakness"],
    howWeHelp: "Our neurological rehabilitation program includes exercises to retrain movement patterns, improve balance, and restore daily function.",
    whenToConsult: "As soon as medically stable after stroke, early intervention leads to better outcomes.",
  },
  {
    id: "sports-injuries",
    name: "Sports Injuries",
    description: "Athletic activities can lead to various injuries that need specialized rehabilitation for safe return to sport.",
    symptoms: ["Acute pain after injury", "Swelling", "Limited movement", "Inability to perform sport"],
    howWeHelp: "We provide sport-specific rehabilitation, strengthening programs, and injury prevention strategies for optimal recovery.",
    whenToConsult: "After any sports injury that affects your ability to play or causes persistent pain.",
  },
];

const WHATSAPP_NUMBER = "919876543210";

export default function Conditions() {
  const handleEnquire = (conditionName: string) => {
    const message = encodeURIComponent(
      `Hello, I would like to enquire about treatment for ${conditionName} at Surya Kiran Physiotherapy Clinic.`
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
