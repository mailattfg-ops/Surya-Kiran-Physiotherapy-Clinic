import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Stethoscope, Check, Activity } from "lucide-react";
import { useState, useEffect } from "react";
import DetailedServiceModal from "@/components/services/DetailedServiceModal";
import DetailedConditionModal from "@/components/services/DetailedConditionModal";
import SEO from "@/components/layout/SEO";

import { useLocation } from "react-router-dom";
import { services } from "@/data/services";
import { conditions } from "@/data/conditions";
import { CONTACT_INFO } from "@/data/constants";

export default function Services() {
  const [selectedServiceData, setSelectedServiceData] = useState<any>(null);
  const [selectedConditionData, setSelectedConditionData] = useState<any>(null);
  const [activeConditionCategory, setActiveConditionCategory] = useState("All");
  const [activeServiceCategory, setActiveServiceCategory] = useState("All");

  const conditionCategories = ["All", ...Array.from(new Set(conditions.map(c => c.category || "Other")))];
  const serviceCategories = ["All", ...Array.from(new Set(services.map(s => s.category || "Other")))];

  // Filter conditions
  const filteredConditions = activeConditionCategory === "All"
    ? conditions
    : conditions.filter(c => c.category === activeConditionCategory);

  // Filter services
  const filteredServices = activeServiceCategory === "All"
    ? services
    : services.filter(s => s.category === activeServiceCategory);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      // First, try to find the service and open its modal
      const serviceMatch = services.find(s => s.id === id);
      if (serviceMatch) {
        setSelectedServiceData(serviceMatch);
      } else {
        // Otherwise, try to find a condition
        const conditionMatch = conditions.find(c => c.id === id);
        if (conditionMatch) {
          setSelectedConditionData(conditionMatch);
        }
      }

      // Scroll to the element
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, services, conditions]);

  const handleEnquire = (serviceName: string) => {
    const message = encodeURIComponent(`Hello, I would like to enquire about ${serviceName} at Surya Kiran Physiotherapy Clinic.`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <Layout>
      <SEO
        title="Our Services | Comprehensive Physiotherapy Care"
        description="Explore our range of specialized physiotherapy services, including orthopedic, pediatric, geriatric, and neurological rehabilitation."
      />
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6 tracking-wide shadow-sm">
              Our Services
            </span>
            <h1 className="font-heading text-2xl sm:text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Comprehensive <br />
              <span className="text-primary-500 relative inline-block">
                <span className="hidden sm:inline">Physiotherapy Care</span>
                <span className="sm:hidden">Physio Care</span>
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-black -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We offer a wide range of specialized treatments to address your unique needs
              and help you achieve optimal physical health and wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List - Redesigned Grid */}
      <section className="pt-4 pb-20 md:pb-24 bg-background">
        <div className="container mx-auto px-4">

          {/* Services Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-start">
            {serviceCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveServiceCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm
                  ${activeServiceCategory === category
                    ? "bg-black text-white shadow-lg scale-105"
                    : "bg-white text-muted-foreground hover:bg-primary-50 hover:text-primary-700 border border-transparent hover:border-primary-100"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={service.id}
                id={service.id}
                onClick={() => setSelectedServiceData(service)} // Open modal on click
                className="group bg-white rounded-[2rem] overflow-hidden border border-primary-50 hover:border-primary-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                {/* Image Placeholder Area */}
                <div className="h-48 bg-primary-50 relative overflow-hidden group-hover:bg-primary-100/50 transition-colors">
                  {/* Service Image or Fallback */}
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <service.icon className="w-24 h-24 text-primary-300" />
                    </div>
                  )}

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-700 uppercase tracking-wider shadow-sm z-10">
                    Premium Care
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-muted-foreground group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary-600 group-hover:underline decoration-2 underline-offset-4">
                      Read More
                    </span>
                    <span className="text-xs font-medium text-muted-foreground bg-surface px-2 py-1 rounded-md border border-border/50">
                      {service.conditions.length} Conditions
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Conditions We Treat Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Decorative bg */}
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-primary-50/30 to-transparent -skew-y-3 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-primary-100 text-primary-700 text-sm font-medium mb-4 shadow-sm">
              Specialized Care
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              Conditions
              <span className="text-primary-500 relative">
                {" "}We Treat
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our expert team provides specialized care for a wide spectrum of physical conditions using evidence-based treatments.
            </p>
          </div>

          {/* Conditions Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {conditionCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveConditionCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm
                  ${activeConditionCategory === category
                    ? "bg-black text-white shadow-lg scale-105"
                    : "bg-white text-muted-foreground hover:bg-primary-50 hover:text-primary-700 border border-transparent hover:border-primary-100"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredConditions.map((condition, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={condition.id}
                id={condition.id}
                onClick={() => setSelectedConditionData(condition)}
                className="group bg-white rounded-[2rem] overflow-hidden border border-transparent hover:border-accent-200 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full ring-1 ring-border/50"
              >
                <div className="p-8 flex flex-col flex-1 relative">
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-accent-400 to-accent-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center text-foreground shadow-sm">
                      {condition.icon ? <condition.icon className="w-7 h-7" /> : <Stethoscope className="w-7 h-7" />}
                    </div>
                    <div className="bg-surface px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-muted-foreground border border-border/50">
                      {condition.category}
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-accent-700 transition-colors line-clamp-2">
                    {condition.name}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {condition.description}
                  </p>

                  <div className="flex items-center text-sm font-bold text-accent-600 group-hover:translate-x-1 transition-transform">
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Detailed Service Modal */}
      <DetailedServiceModal
        isOpen={!!selectedServiceData}
        onClose={() => setSelectedServiceData(null)}
        service={selectedServiceData}
        onBook={(serviceName) => {
          setSelectedServiceData(null); // Close detail modal
          handleEnquire(serviceName);   // Open inquiry modal
        }}
      />
      <DetailedConditionModal
        isOpen={!!selectedConditionData}
        onClose={() => setSelectedConditionData(null)}
        condition={selectedConditionData}
        onBook={(conditionName) => {
          setSelectedConditionData(null);
          handleEnquire(conditionName);
        }}
      />

    </Layout >
  );
}
