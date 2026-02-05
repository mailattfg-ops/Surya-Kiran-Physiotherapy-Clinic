import { motion, AnimatePresence } from "framer-motion";
import { X, Activity, ArrowRight, AlertCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface DetailedConditionModalProps {
    isOpen: boolean;
    onClose: () => void;
    condition: any;
    onBook: (conditionName: string) => void;
}

export default function DetailedConditionModal({
    isOpen,
    onClose,
    condition,
    onBook,
}: DetailedConditionModalProps) {
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

    if (!condition) return null;

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
                        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-black/5 text-foreground/50 hover:text-foreground transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Left Side: Header & Primary Info */}
                        <div className="md:w-5/12 bg-accent-50 relative overflow-hidden flex flex-col p-8 md:p-10 text-primary-950">
                            <div className="relative z-20 flex-1">
                                {condition.icon && (
                                    <div className="w-16 h-16 rounded-2xl bg-primary-100 shadow-sm flex items-center justify-center mb-6">
                                        <condition.icon className="w-8 h-8 text-foreground" />
                                    </div>
                                )}
                                <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-4 text-primary-900">
                                    {condition.name}
                                </h2>
                                <p className="text-primary-800/90 text-lg leading-relaxed mb-6">
                                    {condition.description}
                                </p>

                                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-accent-200">
                                    <div className="flex items-start gap-3">
                                        <AlertCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-bold text-accent-700 mb-1 uppercase tracking-wide">When to Consult</p>
                                            <p className="text-sm text-primary-800 leading-relaxed">
                                                {condition.whenToConsult}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent-100 rounded-full blur-3xl z-0 pointer-events-none" />
                        </div>

                        {/* Right Side: Detailed Details */}
                        <div className="md:w-7/12 p-8 md:p-10 flex flex-col overflow-y-auto bg-white">
                            <div className="flex-1 space-y-8">
                                {/* Symptoms Section */}
                                <div>
                                    <h3 className="flex items-center gap-2 font-heading font-bold text-xl text-foreground mb-4">
                                        <Activity className="w-5 h-5 text-destructive" />
                                        Common Symptoms
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {condition.symptoms.map((symptom: string, index: number) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1.5 rounded-lg bg-surface text-muted-foreground text-sm font-medium border border-border/50"
                                            >
                                                {symptom}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="h-px bg-border/50" />

                                {/* How We Help Section */}
                                <div>
                                    <h3 className="flex items-center gap-2 font-heading font-bold text-xl text-foreground mb-4">
                                        <HelpCircle className="w-5 h-5 text-primary-500" />
                                        How We Help
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                        {condition.howWeHelp}
                                    </p>
                                </div>
                            </div>

                            {/* Book Appointment Button - Moved to Right Side */}
                            <div className="mt-12 pt-6 border-t border-border/50 flex justify-end">
                                <Button
                                    onClick={() => {
                                        onClose();
                                        // Using window.location.assign for reliable redirect
                                        setTimeout(() => {
                                            window.location.assign("/?service=" + encodeURIComponent(condition.name) + "#contact");
                                        }, 100);
                                    }}
                                    className="bg-black text-white hover:bg-black/90 font-bold h-12 rounded-xl text-base shadow-lg transition-colors px-8"
                                >
                                    Book Appointment
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
