import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Stethoscope, Award } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    position: "Senior Physiotherapist",
    description: "With over 15 years of experience in sports medicine and rehabilitation, Dr. Johnson specializes in treating complex musculoskeletal conditions and helping athletes return to peak performance.",
    image: "/images/doctor/doctor1.jpg",
    expertise: ["Sports Medicine", "Rehabilitation", "Manual Therapy"]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    position: "Orthopedic Specialist",
    description: "Dr. Chen is a board-certified orthopedic specialist with expertise in joint replacement surgery and minimally invasive procedures for chronic pain management.",
    image: "/images/doctor/doctor2.jpg",
    expertise: ["Joint Replacement", "Minimally Invasive Surgery", "Pain Management"]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    position: "Neurological Physiotherapist",
    description: "Specializing in neurological rehabilitation, Dr. Rodriguez helps patients with stroke recovery, spinal cord injuries, and movement disorders regain independence.",
    image: "/images/doctor/doctor3.webp",
    expertise: ["Neurological Rehab", "Stroke Recovery", "Movement Disorders"]
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    position: "Pediatric Physiotherapist",
    description: "Dr. Wilson specializes in pediatric physiotherapy, helping children with developmental delays, injuries, and congenital conditions achieve their full potential.",
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated professionals bring decades of combined experience to provide you with the highest quality care
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Doctor Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23dbeafe'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='20' fill='%233b82f6'%3EDoctor Photo%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-blue-600">Available</span>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{doctor.position}</p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {doctor.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {doctor.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Profile Button */}
                  <Button variant="outline" className="w-full group/btn">
                    View Profile
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Schedule a Consultation Today
            </h3>
            <p className="text-lg mb-6 text-blue-100">
              Take the first step towards your recovery journey with our expert team
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full">
              Book Appointment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
