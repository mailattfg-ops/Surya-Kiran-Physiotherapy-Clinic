import { motion } from "framer-motion";


const doctors = [
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

export default function DoctorsSection() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-primary-100 mx-4 md:mx-8 rounded-[3rem]">
      {/* Decorative Background Flower */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <svg width="600" height="600" viewBox="0 0 200 200" fill="currentColor" className="text-primary-600">
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
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4 tracking-wide shadow-sm">
            Women-Run & Friendly
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 font-heading leading-tight">
            Meet Our <span className="text-primary-500">Experts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dedicated women professionals bringing decades of combined experience to your recovery.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 50 }}
              viewport={{ once: true }}
              className={`relative flex flex-col items-center ${index % 2 !== 0 ? 'lg:mt-8' : ''}`}
            >
              {/* String (Dashed Line) */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 h-16 w-px border-l-2 border-dashed border-gray-400 z-0 opacity-60" />

              {/* Card Container */}
              <div className="relative w-full max-w-[280px] bg-white rounded-3xl shadow-xl overflow-visible pt-12 pb-4 px-6 text-center z-10 group hover:-translate-y-2 transition-transform duration-300">

                {/* Ring Element */}
                <div className={`absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 ${doctor.ringColor} bg-white z-20 flex items-center justify-center shadow-sm`}>
                  <div className={`w-3 h-3 rounded-full ${doctor.ringBg}`} />
                </div>

                {/* Doctor Image */}
                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-inner">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='20' fill='%239ca3af'%3EDoctor%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-heading">
                  {doctor.name}
                </h3>

                {/* Decoration Line */}
                <div className={`w-8 h-1 ${doctor.ringBg} mx-auto mb-3 rounded-full opacity-50`} />

                <p className="text-sm font-semibold text-gray-500 mb-1">
                  {doctor.position}
                </p>
                <p className="text-xs text-gray-400 mb-6">
                  {doctor.experience}
                </p>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
