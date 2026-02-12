import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Activity, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface DetailedServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: any; // Using any for flexibility with your data structure, or define a specific interface
    onBook: (serviceName: string) => void;
}

export default function DetailedServiceModal({
    isOpen,
    onClose,
    service,
    onBook,
}: DetailedServiceModalProps) {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!service) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto md:overflow-hidden flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-black/5 text-foreground/50 hover:text-foreground transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Left Side: Header & Basic Info */}
                        <div className="md:w-5/12 bg-primary-50 relative overflow-hidden flex flex-col p-8 md:p-10 text-primary-950">
                            {service.image && (
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                                />
                            )}

                            <div className="relative z-20 flex-1">
                                <div className="w-16 h-16 rounded-2xl bg-black shadow-sm flex items-center justify-center mb-6">
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-4 text-primary-900">
                                    {service.title}
                                </h2>
                                <p className="text-primary-800/90 text-lg leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-100 rounded-full blur-2xl z-0" />
                        </div>

                        {/* Right Side: Detailed Details */}
                        <div className="md:w-7/12 p-8 md:p-10 flex flex-col md:overflow-y-auto bg-white">
                            <div className="flex-1 space-y-8">
                                {/* Benefits Section */}
                                <div>
                                    <h3 className="flex items-center gap-2 font-heading font-bold text-xl text-foreground mb-4">
                                        <Check className="w-5 h-5 text-accent-600" />
                                        Key Benefits
                                    </h3>
                                    <ul className="grid gap-3">
                                        {service.benefits.map((benefit: string, index: number) => (
                                            <li key={index} className="flex items-start gap-3 text-muted-foreground">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0" />
                                                <span className="text-sm md:text-base">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="h-px bg-border/50" />

                                {/* Conditions Section */}
                                <div>
                                    <h3 className="flex items-center gap-2 font-heading font-bold text-xl text-foreground mb-4">
                                        <Activity className="w-5 h-5 text-primary-500" />
                                        Common Conditions Treated
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {service.conditions.map((condition: string, index: number) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-sm font-medium border border-primary-100"
                                            >
                                                {condition}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Book Appointment Button - Moved to Right Side */}
                            <div className="mt-12 pt-6 border-t border-border/50 flex justify-end">
                                <Button
                                    onClick={() => {
                                        onClose();
                                        // Start navigation to contact form with prepopulated service
                                        setTimeout(() => {
                                            window.location.assign("/?service=" + encodeURIComponent(service.title) + "#contact");
                                        }, 100);
                                    }}
                                    className="bg-black text-white hover:bg-black/90 font-bold h-12 rounded-xl text-base shadow-lg transition-colors px-8"
                                >
                                    Book Appointment
                                    <Calendar className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
