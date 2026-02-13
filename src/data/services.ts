import { Activity, Brain, Heart, Baby, UserRound, Zap, Hand, Stethoscope, Syringe, Move, Smile, Home } from "lucide-react";

export const services = [
  {
    id: "dry-needling",
    icon: Syringe,
    title: "Dry Needling",
    description: "Therapeutic technique using thin needles to release muscle tension and reduce pain.",
    benefits: [
      "Rapid pain relief",
      "Improved muscle function",
      "Reduced muscle tension",
      "Accelerated recovery"
    ],
    conditions: ["Myofascial pain", "Trigger points", "Muscle strains", "Chronic pain"],
    category: "Manual Therapy",
    image: "/images/pain/Dry-Needling_11zon.webp"
  },
  {
    id: "kinesiology-taping",
    icon: Activity,
    title: "Kinesiology Taping",
    description: "Specialized taping method to support muscles and joints while allowing full range of motion.",
    benefits: [
      "Pain reduction",
      "Dynamic support",
      "Improved circulation",
      "Injury prevention"
    ],
    conditions: ["Sports injuries", "Joint instability", "Muscle weakness", "Postural issues"],
    category: "Specialized Care",
    image: "/images/pain/Kinesiology Taping.webp"
  },
  {
    id: "cupping-therapy",
    icon: Zap,
    title: "Cupping Therapy",
    description: "Ancient therapy using suction cups to improve blood flow and relieve muscle tightness.",
    benefits: [
      "Deep tissue release",
      "Detoxification",
      "Improved circulation",
      "Pain relief"
    ],
    conditions: ["Back pain", "Neck stiffness", "Muscle tension", "Respiratory issues"],
    category: "Manual Therapy",
    image: "/images/pain/What-Is-Cupping-Therapy-and-Does-It-Work_11zon.webp"
  },
  {
    id: "myofascial-release",
    icon: Hand,
    title: "Myo-fascial Release",
    description: "Manual therapy technique focusing on releasing restrictions in the connective tissue (fascia).",
    benefits: [
      "Restored mobility",
      "Pain reduction",
      "Stress relief",
      "Improved posture"
    ],
    conditions: ["Myofascial pain syndrome", "Fibromyalgia", "Chronic fatigue", "Stiffness"],
    category: "Manual Therapy",
    image: "/images/pain/Myofascial-Release-The-Deep-Tissue-Massage.webp"
  },
  {
    id: "spinal-manipulation",
    icon: Move,
    title: "Spinal Manipulation",
    description: "Adjustment techniques to improve spinal motion and physical function.",
    benefits: [
      "Immediate pain relief",
      "Increased range of motion",
      "Improved nervous system function",
      "Better spinal alignment"
    ],
    conditions: ["Back pain", "Neck pain", "Joint restrictions", "Headaches"],
    category: "Manual Therapy",
    image: "/images/pain/BackTreament.webp"
  },
  {
    id: "trigger-point-release",
    icon: Stethoscope,
    title: "Trigger Point Release",
    description: "Focused pressure on specific muscle points to alleviate pain and dysfunction.",
    benefits: [
      "Relief from referred pain",
      "Muscle relaxation",
      "Improved flexibility",
      "Restored muscle function"
    ],
    conditions: ["Chronic pain", "Muscle knots", "Tension headaches", "Repetitive strain"],
    category: "Manual Therapy",
    image: "/images/pain/depositphotos_157562204-stock-photo-female-therapist-doing-osteopathic-spine_11zon.webp"
  },
  {
    id: "sports-physiotherapy",
    icon: Activity,
    title: "Sports Physiotherapy",
    description: "Specialized care for athletes to recover from injuries and enhance performance.",
    benefits: [
      "Faster return to sport",
      "Injury prevention",
      "Performance enhancement",
      "Strength conditioning"
    ],
    conditions: ["ACL injuries", "Sprains and strains", "Tendinitis", "Running injuries"],
    category: "Specialized Care",
    image: "/images/pain/Sports Physiotherapy.webp"
  },
  {
    id: "pediatric-rehabilitation",
    icon: Baby,
    title: "Pediatric Rehabilitation",
    description: "Compassionate care for children with developmental delays and physical challenges.",
    benefits: [
      "Developmental support",
      "Improved motor skills",
      "Enhanced independence",
      "Family education"
    ],
    conditions: ["Cerebral palsy", "Developmental delays", "Torticollis", "Genetic disorders"],
    category: "Rehabilitation",
    image: "/images/pain/Pediatric Rehabilitation.webp"
  },
  {
    id: "pre-post-surgical-rehab",
    icon: Heart,
    title: "Pre and Post Surgical Rehab",
    description: "Comprehensive programs to prepare for surgery and ensure optimal recovery afterwards.",
    benefits: [
      "Faster post-op recovery",
      "Improved surgical outcomes",
      "Pain management",
      "Restored function"
    ],
    conditions: ["Joint replacements", "Ligament repairs", "Spinal surgeries", "Fractures"],
    category: "Rehabilitation",
    image: "/images/pain/Pre and Post Surgical Rehab.webp"
  },
  {
    id: "stroke-rehabilitation",
    icon: Brain,
    title: "Stroke Rehabilitation",
    description: "Dedicated neuro-rehabilitation to regain independence and quality of life after a stroke.",
    benefits: [
      "Motor recovery",
      "Balance improvement",
      "Cognitive support",
      "Functional independence"
    ],
    conditions: ["Stroke (CVA)", "Hemiplegia", "Balance disorders", "Coordination issues"],
    category: "Rehabilitation",
    image: "/images/pain/Stroke Rehabilitation.webp"
  },
  {
    id: "physio-at-home",
    icon: Home,
    title: "PHYSIO@HOME",
    description: "Expert physiotherapy services delivered in the comfort and convenience of your home.",
    benefits: [
      "Convenience and comfort",
      "Personalized attention",
      "Safety for immobile patients",
      "Functional training in home environment"
    ],
    conditions: ["Post-surgical recovery", "Geriatric care", "Mobility issues", "Chronic conditions"],
    category: "Specialized Care",
    image: "/images/pain/PHYSIO@HOME.webp"
  },
];
