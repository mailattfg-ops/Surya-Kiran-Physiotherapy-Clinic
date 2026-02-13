import { motion } from "framer-motion";
import { ArrowRight, Activity, Heart, Shield, Sparkles, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { conditions } from "@/data/conditions";

// Map condition IDs to icons for a more diverse look
const iconMap: Record<string, any> = {
  "back-neck-shoulder-pain": Activity,
  "sports-injuries": Activity,
  "work-related-injuries": Shield,
  "myofascial-pain-syndrome": Sparkles,
  "repetitive-strain-injuries": Activity,
  "sciatica-disc-diseases": Shield,
  "soft-tissue-injuries": Heart,
  "postural-dysfunction": UserCheck,
  "arthritic-conditions": Heart,
  "pre-post-operative-conditions": Shield,
};

const imageMap: Record<string, string> = {
  "back-neck-shoulder-pain": "/images/pain/BackTreament.webp",
  "sports-injuries": "/images/pain/Sports Injury Rehabilitation.webp",
  "work-related-injuries": "/images/pain/work_related_injuries.webp",
  "soft-tissue-injuries": "/images/pain/soft_tissue_injury_women.webp",
  "myofascial-pain-syndrome": "/images/pain/Myofascial-Release-The-Deep-Tissue-Massage.webp",
  "sciatica-disc-diseases": "/images/pain/Sciatica & Disc Diseases.webp",
  "repetitive-strain-injuries": "/images/pain/Sports Physiotherapy.webp",
};

export default function SlidingPainCards() {
  const navigate = useNavigate();

  const handleLearnMore = (id: string) => {
    navigate(`/services#${id}`);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-bold tracking-wider uppercase mb-4 shadow-sm">
              Our Expertise
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">
              Specialized Care for <br />
              <span className="text-primary-500">Faster Recovery</span>
            </h2>
            <p className="text-muted-foreground text-lg italic">
              "Back to life" with targeted therapies tailored for your unique needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              className="border-primary-200 text-primary-700 hover:bg-primary-50 rounded-full px-8"
              onClick={() => navigate("/services")}
            >
              View All Treatments
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* Bento Grid layout - Optimized to fill exactly 12 cells (4x3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[240px] md:grid-flow-dense">
          {conditions.slice(0, 7).map((condition, index) => {
            const Icon = iconMap[condition.id] || Activity;
            const hasImage = !!imageMap[condition.id];

            // Mathematically balanced spans for 7 items in 12 cells
            const isLarge = index === 0;
            const isWide = index === 3;
            const isTall = index === 1;

            let gridClasses = "";
            if (isLarge) gridClasses = "md:col-span-2 md:row-span-2"; // 4 cells
            else if (isTall) gridClasses = "md:row-span-2";          // 2 cells
            else if (index === 2) gridClasses = "md:col-span-1";          // 1 cell
            else if (isWide) gridClasses = "md:col-span-2";          // 2 cells
            else if (index === 4) gridClasses = "md:col-span-1";          // 1 cell
            else if (index === 5) gridClasses = "md:col-span-1";          // 1 cell
            else if (index === 6) gridClasses = "md:col-span-1";          // 1 cell

            return (
              <motion.div
                key={condition.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleLearnMore(condition.id)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/40 ${gridClasses}`}
              >
                {/* Background (Image or Gradient) */}
                {hasImage ? (
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                    <img
                      src={imageMap[condition.id]}
                      alt={condition.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                ) : (
                  <div className={`absolute inset-0 z-0 bg-gradient-to-br transition-all duration-500
                    ${index % 3 === 0 ? 'from-orange-50 to-orange-100' : ''}
                    ${index % 3 === 1 ? 'from-yellow-50 to-yellow-100' : ''}
                    ${index % 3 === 2 ? 'from-primary-50 to-primary-100' : ''}
                  `} />
                )}

                {/* Content */}
                <div className={`relative z-20 h-full p-8 flex flex-col justify-end
                  ${hasImage ? 'text-white' : 'text-foreground'}
                `}>
                  {/* Glassmorphism Icon Container - High Visibility */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-white/90 backdrop-blur-xl shadow-lg transition-transform group-hover:-translate-y-2 border border-white/50">
                    <Icon className="w-7 h-7 text-primary-700" />
                  </div>

                  <h3 className={`font-heading font-bold mb-2 leading-tight drop-shadow-md
                    ${isLarge ? 'text-3xl' : 'text-xl'}
                  `}>
                    {condition.name}
                  </h3>

                  {(isLarge || isWide || !hasImage) && (
                    <p className={`text-sm opacity-90 line-clamp-3 mb-4 font-medium drop-shadow-sm
                      ${hasImage ? 'text-white/90' : 'text-muted-foreground'}
                    `}>
                      {condition.description}
                    </p>
                  )}

                  <div className="flex items-center text-sm font-bold uppercase tracking-wider gap-2 drop-shadow-sm">
                    <span className="group-hover:mr-2 transition-all">Details</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>

                  {/* Subtle Glass Gradient behind text for readability */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/30 to-transparent -z-10 pointer-events-none rounded-b-3xl" />
                </div>

                {/* Glass highlight effect on hover */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
