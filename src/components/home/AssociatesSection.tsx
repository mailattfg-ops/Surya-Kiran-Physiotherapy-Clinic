import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const associates = [
    {
        title: "Ladies Fitness Center",
        subtitle: "Empowering Women's Health",
        description: "A premier destination designed exclusively for women, offering personalized fitness programs, modern equipment, and a supportive environment to help you reach your peak wellness.",
        brandImage: "/images/fitness.webp",
        color: "text-rose-600",
        bgColor: "bg-rose-50",
        borderColor: "border-rose-100",
        imageAlt: "Ladies Fitness Center Poster"
    },
    {
        title: "Suryakanthi Naturals",
        subtitle: "Healthy Food Store",
        description: "Bringing nature's bounty to your table. We offer a curated selection of organic, natural, and wholesome food products to support your journey towards a healthier lifestyle.",
        brandImage: "/images/suryakanthilogo.webp",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-100",
        imageAlt: "Suryakanthi Naturals Logo"
    }
];

export default function AssociatesSection() {
    return (
        <section className="relative overflow-hidden bg-background">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-left mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-bold tracking-wider uppercase mb-4 shadow-sm"
                    >
                        Wellness Partners
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 font-heading"
                    >
                        Our <span className="text-primary-500">Associates</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-2xl"
                    >
                        Expanding our commitment to your health through our specialized sister concerns.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {associates.map((associate, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="group relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col h-full"
                        >
                            {/* Card Background Pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[5rem] -z-0 transition-all duration-500 group-hover:w-40 group-hover:h-40" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-8">
                                    {associate.brandImage && (
                                        <div className="w-full overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white p-3 inline-flex items-center justify-center min-h-[140px]">
                                            <img
                                                src={associate.brandImage}
                                                alt={associate.imageAlt}
                                                className={`object-contain transition-transform duration-700 group-hover:scale-105 ${associate.title.includes("Fitness")
                                                    ? "h-28 md:h-24 w-auto"
                                                    : "h-24 md:h-20 w-auto"
                                                    }`}
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading group-hover:text-primary-600 transition-colors">
                                        {associate.title}
                                    </h3>
                                    <p className={`text-sm font-bold uppercase tracking-widest ${associate.color}`}>
                                        {associate.subtitle}
                                    </p>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-8 text-lg flex-grow">
                                    {associate.description}
                                </p>

                                <Link
                                    to={`/?service=${encodeURIComponent(associate.title)}#contact`}
                                    className="inline-flex items-center gap-2 text-primary-600 font-bold group/btn cursor-pointer mt-auto"
                                >
                                    <span>Learn More</span>
                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
                                </Link>
                            </div>

                            {/* Decorative accent line */}
                            <div className={`absolute bottom-0 left-0 h-1.5 w-0 bg-primary-500 transition-all duration-700 group-hover:w-full`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
