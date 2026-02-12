import { Award, Heart, Users, Target } from "lucide-react";

export const CONTACT_INFO = {
  phone: "+91 90480 30977",
  phoneRaw: "+919048030977",
  email: "wellness.kdl@gmail.com",
  address: "Surya Kiran Physiotherapy, Pallimukku, Kadakkal, Kollam - 691536",
  addressLine1: "Surya Kiran Physiotherapy, Pallimukku,",
  addressLine2: "Kadakkal, Kollam - 691536",
  whatsappNumber: "919048030977",
};

export const OPENING_HOURS = [
  { days: "Mon - Sat", hours: "8:00 AM - 6:00 PM" },
  { days: "Sunday", hours: "Closed", isClosed: true },
];

export const MILESTONES = [
  { year: "2006", title: "Started at Anchal", description: "The beginning of our journey in physiotherapy care" },
  { year: "2007", title: "Started at Kadakkal", description: "Expanded our services to reach more patients" },
  { year: "2009", title: "1000 Patients", description: "Reached a milestone of treating 1000 patients" },
  { year: "2017", title: "Ladies Fitness Center", description: "Launched a specialized fitness center for women" },
  { year: "2022", title: "3000 Patients", description: "Growing community trust with 3000 patients treated" },
  { year: "2026", title: "10000+ Patients", description: "Continuing our legacy with over 10000 Happy Patients" },
];

export const CORE_VALUES = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient with empathy, understanding, and respect.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in physiotherapy practice.",
  },
  {
    icon: Users,
    title: "Patient-Centered",
    description: "Your recovery goals guide everything we do.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on measurable outcomes and lasting recovery.",
  },
];

export const DOCTORS = [
  {
    id: 4,
    name: "Dr. K R Krishna PT",
    position: "Chief Physiotherapist, BPT, DNT",
    experience: "22 Years Experience",
    image: "/images/doctor/doctorFour.webp",
    ringColor: "border-orange-500",
    ringBg: "bg-orange-500"
  },
  {
    id: 1,
    name: "Dr. Reeja John PT",
    position: "BPT, Physiotherapist",
    experience: "6 Years Experience",
    image: "/images/doctor/doctorOne_11zon.webp",
    ringColor: "border-red-500",
    ringBg: "bg-red-500"
  },
  {
    id: 2,
    name: "Dr. M S Jassera Begam PT",
    position: "BPT",
    experience: "3 Years Experience",
    image: "/images/doctor/doctorTwo_11zon.webp",
    ringColor: "border-blue-500",
    ringBg: "bg-blue-500"
  },
  {
    id: 3,
    name: "Dr. J. S. Evangeline Nissy PT",
    position: "BPT, Physiotherapist",
    experience: "2.5 Years Experience",
    image: "/images/doctor/doctorThree.webp",
    ringColor: "border-green-500",
    ringBg: "bg-green-500"
  }
];
