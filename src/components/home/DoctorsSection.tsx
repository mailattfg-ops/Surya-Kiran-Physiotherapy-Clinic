import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    position: "Senior Physiotherapist",
    description: "With over 15 years of experience in sports medicine and rehabilitation, Dr. Johnson specializes in treating complex musculoskeletal conditions.",
    image: "/images/doctor/doctor1.jpg",
    expertise: ["Sports Medicine", "Rehabilitation", "Manual Therapy"]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    position: "Orthopedic Specialist",
    description: "Dr. Chen is a board-certified orthopedic specialist with expertise in joint replacement surgery and minimally invasive procedures for chronic pain.",
    image: "/images/doctor/doctor2.jpg",
    expertise: ["Joint Replacement", "Minimally Invasive Surgery", "Pain Management"]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    position: "Neurological Physiotherapist",
    description: "Specializing in neurological rehabilitation, Dr. Rodriguez helps patients with stroke recovery, spinal cord injuries, and movement disorders.",
    image: "/images/doctor/doctor3.webp",
    expertise: ["Neurological Rehab", "Stroke Recovery", "Movement Disorders"]
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    position: "Pediatric Physiotherapist",
    description: "Dr. Wilson specializes in pediatric physiotherapy, helping children with developmental delays, injuries, and congenital conditions.",
    image: "/images/doctor/doctor4.jpg",
    expertise: ["Pediatric Care", "Developmental Therapy", "Child Rehabilitation"]
  },
  {
    id: 5,
    name: "Dr. Maria Garcia",
    position: "Women's Health Specialist",
    description: "Dr. Garcia focuses on women's health physiotherapy, providing specialized care for prenatal, postnatal, and pelvic floor conditions.",
    image: "/images/doctor/doctor5.jpg",
    expertise: ["Women's Health", "Pelvic Floor", "Prenatal Care"]
  },
  {
    id: 6,
    name: "Dr. Robert Taylor",
    position: "Sports Medicine Director",
    description: "Dr. Taylor leads our sports medicine department with extensive experience in treating professional athletes and sports-related injuries.",
    image: "/images/doctor/dctor6.jpg",
    expertise: ["Sports Medicine", "Athletic Training", "Injury Prevention"]
  }
];

export default function DoctorsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#E6F2FF] mx-4 md:mx-8 rounded-[3rem]">
      {/* Decorative Background Flower */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <svg width="600" height="600" viewBox="0 0 200 200" fill="currentColor" className="text-blue-600">
          <path d="M100,10 C120,40 150,70 180,80 C150,90 120,120 100,150 C80,120 50,90 20,80 C50,70 80,40 100,10 Z M100,80 C110,95 125,100 135,100 C125,100 110,105 100,120 C90,105 75,100 65,100 C75,100 90,95 100,80 Z" />
          <path d="M100,20 C115,45 140,65 170,75 M100,140 C85,115 60,95 30,85 M30,75 C60,65 115,20 100,20 M170,85 C140,95 115,140 100,140" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="100" cy="100" r="5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Meet Our Experts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Dedicated professionals bringing decades of combined experience to your recovery
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div
                className="
                  bg-white rounded-3xl p-6 h-full flex flex-col max-w-xs mx-auto
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                "
              >
                {/* Doctor Image */}
                <div className="relative h-56 rounded-2xl overflow-hidden mb-6 flex-shrink-0 shadow-md">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23dbeafe'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='20' fill='%233b82f6'%3EDoctor Photo%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>

                {/* Doctor Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 transition-colors duration-300">
                    {doctor.name}
                  </h3>
                  <p className="font-semibold mb-4 text-sm text-blue-600 transition-colors duration-300">
                    {doctor.position}
                  </p>

                  <p className="mb-6 text-sm leading-relaxed flex-1 text-gray-600 transition-colors duration-300">
                    {doctor.description}
                  </p>

                  {/* Button Removed */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
