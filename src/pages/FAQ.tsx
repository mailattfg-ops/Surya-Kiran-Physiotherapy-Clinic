import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is physiotherapy?",
    answer: "Physiotherapy is a healthcare profession that uses physical methods such as exercise, massage, and manipulation to restore movement and function affected by injury, illness, or disability. Our physiotherapists assess, diagnose, and treat a wide range of conditions affecting the muscles, bones, joints, and nervous system."
  },
  {
    question: "How many sessions will I need?",
    answer: "The number of sessions varies depending on your condition, its severity, and your recovery goals. After your initial assessment, our physiotherapist will provide a personalized treatment plan with an estimated number of sessions. Typically, acute conditions may need 4-6 sessions, while chronic conditions may require 8-12 or more sessions."
  },
  {
    question: "Is physiotherapy painful?",
    answer: "Physiotherapy should not be painful, though you may experience some discomfort during certain treatments, especially when working on tight muscles or stiff joints. Our therapists always work within your comfort level and adjust techniques accordingly. Any mild soreness after treatment typically resolves within 24-48 hours."
  },
  {
    question: "Do I need a doctor's referral?",
    answer: "No, you don't need a doctor's referral to see a physiotherapist at our clinic. You can directly book an appointment. However, if you have health insurance that covers physiotherapy, you may want to check if your policy requires a referral for reimbursement."
  },
  {
    question: "What conditions can be treated with physiotherapy?",
    answer: "Physiotherapy can treat a wide range of conditions including back pain, neck pain, sports injuries, post-surgical rehabilitation, arthritis, stroke recovery, neurological conditions, pediatric developmental issues, and many more. If you're unsure whether physiotherapy can help your condition, please contact us for a consultation."
  },
  {
    question: "How long does each session last?",
    answer: "A typical treatment session lasts 30-45 minutes. Your first visit may take longer (up to 60 minutes) as it includes a comprehensive assessment and discussion of your treatment plan."
  },
  {
    question: "What should I wear to my physiotherapy appointment?",
    answer: "Wear comfortable, loose-fitting clothing that allows easy access to the area being treated. For lower back or leg treatment, shorts or loose pants are recommended. For shoulder or upper back issues, a sleeveless top or loose t-shirt works well."
  },
  {
    question: "What equipment do you use for treatment?",
    answer: "Our clinic is equipped with modern physiotherapy equipment including electrotherapy devices (TENS, ultrasound, IFT), heat and cold therapy tools, exercise equipment, resistance bands, balance boards, and manual therapy beds. We select the appropriate tools based on your specific condition and treatment plan."
  },
  {
    question: "Can I claim physiotherapy on health insurance?",
    answer: "Many health insurance policies cover physiotherapy treatments. The coverage and reimbursement process varies by insurance provider. We recommend checking with your insurance company about their physiotherapy coverage policy. We can provide all necessary documentation for your claim."
  },
  {
    question: "What makes Surya Kiran Clinic different?",
    answer: "With over 10 years of experience and 10000+ patients treated, we combine clinical expertise with genuine compassion. Our personalized treatment approach, modern equipment, hygienic environment, and high success rate set us apart. We focus on not just treating symptoms but addressing root causes for lasting recovery."
  },
];

const WHATSAPP_NUMBER = "919048030977";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I would like to enquire about physiotherapy services at Surya Kiran Clinic."
);

export default function FAQ() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6 tracking-wide shadow-sm">
              FAQ
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Frequently Asked <br />
              <span className="text-primary-500 relative inline-block">
                Questions
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-black -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Find answers to common questions about our physiotherapy services,
              treatments, and what to expect during your visit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-5">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-2xl border border-transparent shadow-sm hover:shadow-md transition-all duration-300 px-6 data-[state=open]:border-primary-200 data-[state=open]:ring-2 data-[state=open]:ring-primary-50"
                  >
                    <AccordionTrigger className="text-left font-heading font-semibold text-lg text-foreground hover:no-underline py-6 [&[data-state=open]]:text-primary-700">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 relative overflow-hidden bg-background border border-primary-100/50 rounded-[2.5rem] p-10 md:p-14 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6">
                  <HelpCircle className="w-8 h-8 text-primary-600" />
                </div>

                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Still Have Questions?
                </h2>
                <p className="text-muted-foreground mb-10 text-lg max-w-xl mx-auto leading-relaxed">
                  Can't find the answer you're looking for? Reach out to us directly on WhatsApp
                  and our team will be happy to assist you.
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="h-14 px-8 text-lg font-bold bg-accent hover:bg-white hover:text-accent-foreground text-primary-950 shadow-lg shadow-black/20 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <MessageCircle className="mr-3 w-6 h-6" />
                  Chat on WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
