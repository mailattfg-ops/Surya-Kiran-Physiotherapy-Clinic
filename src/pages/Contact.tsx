import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ArrowRight } from "lucide-react";
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
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Get in Touch with <br />
              <span className="text-primary-700 relative inline-block">
                Our Team
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Ready to start your recovery journey? Book an appointment or ask us anything.
              We're here to help you move better and live better.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

            {/* Left Column: Contact Info & Map */}
            <div className="lg:w-5/12 flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col h-full"
              >
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-primary-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-foreground mb-0.5">Our Location</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Surya Kiran Physiotherapy<br />
                        Pallimukku, Kadakkal, Kollam - 691536
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-primary-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-foreground mb-0.5">Phone Number</h3>
                      <a href="tel:+919048030977" className="text-base font-semibold text-gray-700 hover:text-primary-700 transition-colors">
                        +91 90480 30977
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-primary-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-foreground mb-0.5">Email Address</h3>
                      <a href="mailto:wellness.kdl@gmail.com" className="text-base font-medium text-gray-700 hover:text-primary-700 transition-colors">
                        wellness.kdl@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-primary-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-foreground mb-0.5">Operating Hours</h3>
                      <div className="space-y-1 text-muted-foreground text-sm">
                        <div className="grid grid-cols-[80px_1fr] gap-4">
                          <span>Mon - Sat</span>
                          <span className="font-medium text-foreground">8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="grid grid-cols-[80px_1fr] gap-4">
                          <span>Sunday</span>
                          <span className="font-medium text-destructive">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Card */}
                <div className="flex-1 p-2 bg-white rounded-3xl shadow-lg border border-primary-50 flex flex-col min-h-[300px]">
                  <div className="rounded-2xl overflow-hidden relative group flex-1 w-full h-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.584324811232!2d76.9272103!3d8.8250627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05db886c81b35f%3A0xdf475105eeeb0f9e!2sSuryakiran%20Physiotherapy!5e0!3m2!1sen!2sin!4v1769755087777!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Clinic Location"
                      className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:w-7/12 flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl shadow-primary-500/5 border border-primary-100 p-8 md:p-10 relative overflow-hidden flex flex-col h-full"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-100 to-transparent rounded-bl-full opacity-50" />

                <div className="relative z-10">
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
                    Book an Appointment
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll instantly redirect you to WhatsApp to confirm your booking with our team.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-foreground">
                          Full Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="John Doe"
                          className={`h-12 bg-surface border-input focus:border-primary-500 focus:ring-primary-500/20 rounded-xl transition-all ${errors.name ? "border-destructive focus:ring-destructive/20" : ""}`}
                        />
                        {errors.name && (
                          <p className="text-xs text-destructive font-medium">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                          Phone Number <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+91 98765 43210"
                          className={`h-12 bg-surface border-input focus:border-primary-500 focus:ring-primary-500/20 rounded-xl transition-all ${errors.phone ? "border-destructive focus:ring-destructive/20" : ""}`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-destructive font-medium">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-semibold text-foreground">
                        Service Required <span className="text-destructive">*</span>
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger className={`h-12 bg-surface border-input focus:ring-primary-500/20 rounded-xl ${errors.service ? "border-destructive focus:ring-destructive/20" : ""}`}>
                          <SelectValue placeholder="Select a treatment" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-border shadow-lg">
                          {services.map((service) => (
                            <SelectItem key={service} value={service} className="cursor-pointer">
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-xs text-destructive font-medium">{errors.service}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-foreground">
                        Message (Optional)
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your condition, preferred time, or any specific concerns..."
                        rows={5}
                        className="resize-none bg-surface border-input focus:border-primary-500 focus:ring-primary-500/20 rounded-xl"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 text-base font-semibold gradient-accent text-accent-foreground shadow-lg shadow-accent/20 hover:shadow-accent/30 rounded-xl transition-all duration-300 group mt-4"
                    >
                      <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Book Appointment via WhatsApp
                    </Button>

                    <p className="text-xs text-center text-muted-foreground mt-4">
                      By submitting this form, you agree to start a WhatsApp conversation with Surya Kiran Physiotherapy.
                    </p>
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
