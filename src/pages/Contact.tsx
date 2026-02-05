import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15, "Phone number is too long"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

const services = [
  "Back Pain Treatment",
  "Neck Pain Therapy",
  "Sports Injury Rehabilitation",
  "Post-Surgery Physiotherapy",
  "Neurological Physiotherapy",
  "Geriatric Physiotherapy",
  "Pediatric Physiotherapy",
  "General Consultation",
];

const WHATSAPP_NUMBER = "919048030977";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // Create WhatsApp message
    const message = `Hello, I would like to book an appointment at Surya Kiran Physiotherapy Clinic.

Name: ${formData.name}
Phone: ${formData.phone}
Service Required: ${formData.service}
${formData.message ? `Message: ${formData.message}` : ""}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");

    toast.success("Redirecting to WhatsApp...");

    // Reset form
    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero Content */}
      <section className="pt-32 pb-16 gradient-hero relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-10 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4 tracking-wide">
              Reach Out To Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Contact Us
            </h1>
            <h2 className="text-2xl md:text-3xl font-heading text-primary-600 mb-6 font-medium">
              Start Your Recovery Today
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ready to move better and live pain-free? Book your appointment instantly via WhatsApp or visit our clinic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 bg-background relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Left Column: Contact Info & Map */}
            <div className="lg:w-5/12 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6 border-l-4 border-primary-500 pl-4">
                  Clinic Information
                </h3>

                {/* Info Cards */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-primary-100/50 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-600 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">Visit Us</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Surya Kiran Physiotherapy<br />
                        Pallimukku, Kadakkal, Kollam - 691536
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-primary-100/50 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-600 mt-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">Call Us</h4>
                      <a href="tel:+919048030977" className="text-muted-foreground text-sm hover:text-primary-600 transition-colors block">
                        +91 90480 30977
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-primary-100/50 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-600 mt-1">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">Email Us</h4>
                      <a href="mailto:wellness.kdl@gmail.com" className="text-muted-foreground text-sm hover:text-primary-600 transition-colors block">
                        wellness.kdl@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-primary-100/50 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-600 mt-1">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading font-semibold text-foreground mb-2">Opening Hours</h4>
                      <div className="flex justify-between text-sm text-muted-foreground mb-1">
                        <span>Mon - Sat</span>
                        <span className="font-medium text-foreground">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Sunday</span>
                        <span className="font-medium text-destructive">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl overflow-hidden shadow-lg border-4 border-white h-64 md:h-80 relative"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.584324811232!2d76.9272103!3d8.8250627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05db886c81b35f%3A0xdf475105eeeb0f9e!2sSuryakiran%20Physiotherapy!5e0!3m2!1sen!2sin!4v1769755087777!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:w-7/12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] shadow-xl shadow-primary-900/5 border border-primary-100 p-8 md:p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-100/50 to-transparent rounded-bl-[100%] pointer-events-none" />

                <div className="relative z-10">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Request an Appointment
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below. We will respond promptly via WhatsApp to confirm your slot.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-foreground ml-1">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Ex: David John"
                          className={`h-12 bg-surface hover:bg-surface-elevated focus:bg-white border-transparent focus:border-primary-300 focus:ring-4 focus:ring-primary-100 rounded-xl transition-all duration-300 ${errors.name ? "border-destructive focus:ring-destructive/20" : ""}`}
                        />
                        {errors.name && (
                          <p className="text-xs text-destructive font-medium ml-1">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-foreground ml-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+91 9666..."
                          className={`h-12 bg-surface hover:bg-surface-elevated focus:bg-white border-transparent focus:border-primary-300 focus:ring-4 focus:ring-primary-100 rounded-xl transition-all duration-300 ${errors.phone ? "border-destructive focus:ring-destructive/20" : ""}`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-destructive font-medium ml-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-semibold text-foreground ml-1">
                        Treatment Needed
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger className={`h-12 bg-surface hover:bg-surface-elevated focus:bg-white border-transparent focus:border-primary-300 focus:ring-4 focus:ring-primary-100 rounded-xl transition-all duration-300 ${errors.service ? "border-destructive focus:ring-destructive/20" : ""}`}>
                          <SelectValue placeholder="Select a service..." />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-primary-100 shadow-xl">
                          {services.map((service) => (
                            <SelectItem key={service} value={service} className="cursor-pointer py-3 focus:bg-primary-50">
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-xs text-destructive font-medium ml-1">{errors.service}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-foreground ml-1">
                        Any Specific Details? <span className="text-muted-foreground font-normal">(Optional)</span>
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your pain area or preferred timing..."
                        rows={4}
                        className="resize-none bg-surface hover:bg-surface-elevated focus:bg-white border-transparent focus:border-primary-300 focus:ring-4 focus:ring-primary-100 rounded-xl transition-all duration-300"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 text-base font-bold tracking-wide uppercase gradient-accent text-accent-foreground shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.01] hover:shadow-accent/30 rounded-xl transition-all duration-300 group mt-2"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Book via WhatsApp
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
