import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Target, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/layout/SEO";

export default function SportsInjuryRehabilitation() {
  return (
    <Layout>
      <SEO
        title="Sports Injury Rehabilitation | Get Back to Peak Performance"
        description="Recover faster and stronger from sports injuries with our specialized rehabilitation programs designed for athletes of all levels."
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sports Injury Rehabilitation
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Specialized recovery programs for athletes to restore strength, flexibility,
              and peak performance after sports-related injuries.
            </p>
            <Button asChild className="gradient-accent text-accent-foreground px-8 py-4 rounded-lg">
              <Link to="/contact">
                Book Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sports Rehabilitation Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive treatment plans designed specifically for athletes and sports enthusiasts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Injury Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of sports injuries to develop targeted treatment plans
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Recovery</h3>
              <p className="text-gray-600">
                Advanced techniques to restore athletic performance and prevent future injuries
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Speed & Agility</h3>
              <p className="text-gray-600">
                Specialized training to improve speed, agility, and explosive power
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Injury Prevention</h3>
              <p className="text-gray-600">
                Education and training programs to minimize risk of future sports injuries
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Treatment Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to ensure complete recovery and optimal performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Initial Assessment</h3>
              <p className="text-gray-600">
                Thorough evaluation of injury, movement patterns, and functional limitations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customized Treatment</h3>
              <p className="text-gray-600">
                Personalized rehabilitation program with progressive exercises and therapies
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Return to Sport</h3>
              <p className="text-gray-600">
                Gradual progression back to sports activities with injury prevention strategies
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Back in the Game?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our expert sports rehabilitation team help you recover stronger and faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg">
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg">
                <Link to="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
