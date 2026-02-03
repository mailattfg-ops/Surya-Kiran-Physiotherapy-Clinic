import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional physiotherapy care that restores mobility,
                reduces pain, and enhances the quality of life for every patient
                through personalized treatment plans and advanced therapeutic techniques.
              </p>
            </div>

            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed mb-4">
                At Surya Kiran Physiotherapy Clinic, we believe in creating individualized
                treatment plans that address your specific needs and goals. Our approach combines
                evidence-based practices with compassionate care to ensure optimal recovery outcomes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We understand that each patient's journey is unique, which is why our team
                takes the time to thoroughly assess your condition, listen to your concerns,
                and develop a comprehensive treatment strategy that works for you.
              </p>
            </div>

            <Button asChild className="gradient-accent text-accent-foreground px-6 py-3 rounded-lg">
              <Link to="/about">
                Read More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="space-y-6"
          >
            {/* Services List */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h3>

              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Residential Rehab</h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive residential rehabilitation programs for extended recovery care
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">One on One Treatment</h4>
                  <p className="text-gray-600 text-sm">
                    Personalized therapist to patient treatment sessions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Expert Team</h4>
                  <p className="text-gray-600 text-sm">
                    Highly qualified and experienced rehab specialists
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Advanced Treatment</h4>
                  <p className="text-gray-600 text-sm">
                    Latest and world-class treatment techniques
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Opening Hours
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Saturday</span>
                  <span className="font-semibold text-gray-900">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-red-600">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
