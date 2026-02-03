import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { services as allServices } from "@/data/services";

// Get top 6 services for the footer
const services = allServices.slice(0, 6).map(s => ({
  title: s.title,
  id: s.id
}));

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Success Stories", path: "/reviews" }, // Changed name for premium feel
  { name: "FAQ", path: "/faq" },
  { name: "Contact Us", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-14 w-14 flex items-center justify-center">
                <img src="/logo.jpeg" alt="Surya Kiran Logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl tracking-tight text-white">Surya Kiran</h3>
                <p className="text-xs text-indigo-200 uppercase tracking-widest font-medium">Physiotherapy Clinic</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              Restoring mobility and enhancing quality of life through expert physiotherapy care.
              Your partner in efficient, evidence-based recovery.
            </p>

            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-300 group border border-slate-700 hover:border-primary-500"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-lg text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-primary-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary-500 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-lg text-white mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-slate-400 hover:text-primary-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary-500 transition-colors"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-primary-400 hover:text-primary-300 text-xs font-semibold uppercase tracking-wider mt-2 inline-block">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-lg text-white mb-6 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-500 rounded-full"></span>
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                  <MapPin className="w-5 h-5 text-primary-400" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  Surya Kiran Physiotherapy<br />Pallimukku, Kadakkal, <br />Kollam - 691536
                </span>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                  <Phone className="w-5 h-5 text-primary-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-semibold">Call Us</span>
                  <a
                    href="tel:+919048030977"
                    className="text-slate-400 hover:text-primary-400 text-sm font-medium transition-colors"
                  >
                    +91 90480 30977
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                  <Mail className="w-5 h-5 text-primary-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-semibold">Email Us</span>
                  <a
                    href="mailto:wellness.kdl@gmail.com"
                    className="text-slate-400 hover:text-primary-400 text-sm font-medium transition-colors"
                  >
                    wellness.kdl@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                  <Clock className="w-5 h-5 text-primary-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-semibold">Working Hours</span>
                  <span className="text-slate-400 text-sm">
                    Mon - Sat: 8:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} Surya Kiran Physiotherapy. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                to="/privacy"
                className="text-slate-500 hover:text-primary-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-slate-500 hover:text-primary-400 text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
