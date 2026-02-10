import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

import { services as servicesData } from "@/data/services";
import { conditions as conditionsData } from "@/data/conditions";

const contactSchema = z.object({
    name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
    phone: z.string().trim().min(10, "Please enter a valid phone number").max(15, "Phone number is too long"),
    service: z.string().min(1, "Please select a service"),
    message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

// Combine services and conditions for the dropdown, sorted alphabetically
const treatmentOptions = [
    ...servicesData.map(s => s.title),
    ...conditionsData.map(c => c.name),
    "Ladies Fitness Center",
    "Suryakanthi Naturals"
].sort((a, b) => a.localeCompare(b));
// Remove duplicates if any
const uniqueTreatmentOptions = Array.from(new Set(treatmentOptions));

const WHATSAPP_NUMBER = "919048030977";

export default function ContactSection() {
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

    const location = useLocation();

    useEffect(() => {
        if (location.hash.includes("contact") || location.search) {
            const params = new URLSearchParams(location.search);
            const serviceParam = params.get("service");

            if (serviceParam) {
                // Check if the service is in our predefined list
                const isPredefined = uniqueTreatmentOptions.includes(serviceParam);

                if (isPredefined) {
                    setFormData(prev => ({
                        ...prev,
                        service: serviceParam,
                        message: (serviceParam === "Ladies Fitness Center" || serviceParam === "Suryakanthi Naturals")
                            ? `I am interested in learning more about ${serviceParam}.`
                            : prev.message
                    }));
                } else {
                    // Try to find a close match or set as General Consultation
                    const match = uniqueTreatmentOptions.find(opt => opt.toLowerCase() === serviceParam.toLowerCase());
                    if (match) {
                        setFormData(prev => ({ ...prev, service: match }));
                    } else {
                        setFormData(prev => ({
                            ...prev,
                            service: "General Consultation",
                            message: `I am interested in treatment for: ${serviceParam}.`
                        }));
                    }
                }
            }
        }
    }, [location]);

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

        const message = `Hello, I would like to book an appointment at Surya Kiran Physiotherapy Clinic.

Name: ${formData.name}
Phone: ${formData.phone}
Service Required: ${formData.service}
${formData.message ? `Message: ${formData.message}` : ""}`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");

        toast.success("Redirecting to WhatsApp...");
        setFormData({ name: "", phone: "", service: "", message: "" });
    };

    return (
        <section id="contact" className="py-20 md:py-28 bg-primary-50/30 relative overflow-hidden scroll-mt-20">
            {/* Abstract background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Section Header */}
                <div className="text-left mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4 tracking-wide">
                            Get in Touch
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                            Start Your <br />
                            <span className="text-primary-500 relative inline-block">
                                Recovery Today
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                            Don't let pain hold you back. Book your appointment today and take the first step towards a healthier, pain-free life.
                        </p>
                    </motion.div>
                </div>

                {/* Main Content Flex Container - items-stretch aligns height */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

                    {/* Left Column: Contact Form */}
                    <div className="lg:w-7/12 order-2 lg:order-1 flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2rem] shadow-xl shadow-primary-900/5 border-2 border-primary-50 p-8 md:p-12 relative overflow-hidden flex-1 flex flex-col"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-100/50 to-transparent rounded-bl-[100%] pointer-events-none" />

                            <div className="relative z-10 flex flex-col flex-1">
                                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                                    Book an Appointment
                                </h3>
                                <p className="text-muted-foreground mb-8">
                                    Fill out the form below for a quick WhatsApp redirection.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-semibold text-foreground ml-1">
                                                Full Name
                                            </label>
                                            <Input
                                                id="name"
                                                value={formData.name}
                                                onChange={(e) => handleChange("name", e.target.value)}
                                                placeholder="John Doe"
                                                className={`h-12 bg-surface hover:bg-surface-elevated focus:bg-white border-transparent focus:border-gray-400 focus:ring-4 focus:ring-gray-100 rounded-xl transition-all duration-300 ${errors.name ? "border-destructive focus:ring-destructive/20" : ""}`}
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
                                                className={`h-12 bg-surface hover:bg-surface-elevated focus:bg-white border-transparent focus:border-gray-400 focus:ring-4 focus:ring-gray-100 rounded-xl transition-all duration-300 ${errors.phone ? "border-destructive focus:ring-destructive/20" : ""}`}
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
                                            <SelectTrigger className={`h-12 bg-surface hover:bg-surface-elevated focus:bg-white border-transparent focus:border-gray-400 focus:ring-4 focus:ring-gray-100 rounded-xl transition-all duration-300 ${errors.service ? "border-destructive focus:ring-destructive/20" : ""}`}>
                                                <SelectValue placeholder="Select a service..." />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-primary-100 shadow-xl max-h-[300px]">
                                                <SelectItem value="General Consultation" className="cursor-pointer py-3 focus:bg-primary-50 font-semibold">
                                                    General Consultation
                                                </SelectItem>
                                                {uniqueTreatmentOptions.map((option) => (
                                                    <SelectItem key={option} value={option} className="cursor-pointer py-3 focus:bg-primary-50">
                                                        {option}
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
                                            Message <span className="text-muted-foreground font-normal">(Optional)</span>
                                        </label>
                                        <Textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e) => handleChange("message", e.target.value)}
                                            placeholder="Tell us about your condition..."
                                            className="resize-none bg-surface hover:bg-surface-elevated focus:bg-white border-transparent focus:border-gray-400 focus:ring-4 focus:ring-gray-100 rounded-xl transition-all duration-300 min-h-[140px]"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full h-14 text-base font-bold tracking-wide uppercase bg-black text-white shadow-lg hover:bg-black/90 hover:shadow-xl hover:scale-[1.01] rounded-xl transition-all duration-300 group mt-4"
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            <span className="hidden sm:inline">Book via WhatsApp</span>
                                            <span className="sm:hidden">Book Now</span>
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        </span>
                                    </Button>
                                </form>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Info & Map */}
                    <div className="lg:w-5/12 order-1 lg:order-2 flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 flex flex-col h-full"
                        >
                            <h3 className="font-heading text-2xl font-bold text-foreground mb-0 pl-2">
                                Visit Our Clinic
                            </h3>

                            {/* Info Cards */}
                            <div className="space-y-4 shrink-0">
                                <div className="bg-white rounded-3xl p-5 shadow-sm border-2 border-primary-50 hover:border-primary-100 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-600 mt-1">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-semibold text-foreground mb-0.5">Our Location</h4>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                Surya Kiran Physiotherapy, Pallimukku,<br /> Kadakkal, Kollam - 691536
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-3xl p-5 shadow-sm border-2 border-primary-50 hover:border-primary-100 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-600 mt-1">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-semibold text-foreground mb-0.5">Phone</h4>
                                            <a href="tel:+919048030977" className="text-muted-foreground text-sm hover:text-primary-600 transition-colors block">
                                                +91 90480 30977
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-3xl p-5 shadow-sm border-2 border-primary-50 hover:border-primary-100 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-600 mt-1">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-heading font-semibold text-foreground mb-0.5">Hours</h4>
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
                            </div>

                            {/* Map - flex-1 pushes it to fill the rest of the height */}
                            <div className="flex-1 rounded-3xl overflow-hidden shadow-lg border-4 border-white relative min-h-[250px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.584324811232!2d76.9272103!3d8.8250627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05db886c81b35f%3A0xdf475105eeeb0f9e!2sSuryakiran%20Physiotherapy!5e0!3m2!1sen!2sin!4v1769755087777!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Clinic Location"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
