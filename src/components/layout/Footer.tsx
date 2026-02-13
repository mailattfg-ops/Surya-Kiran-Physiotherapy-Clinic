import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { services as allServices } from "@/data/services";

// Get top 6 services for the footer
const services = allServices.slice(0, 6).map(s => ({
  title: s.title,
  id: s.id
}));

import { CONTACT_INFO, OPENING_HOURS } from "@/data/constants";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact Us", path: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-14 w-14 flex items-center justify-center">
                <img src="/logo.jpeg" alt="Surya Kiran Logo" className="h-full w-full object-contain" width="56" height="56" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl tracking-tight text-white">Suryakiran</h3>
                <p className="text-xs text-primary-300 uppercase tracking-widest font-medium">Physiotherapy</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-sm">
              Back to life- our tagline reflects our commitment to restoring mobility and enhancing quality of life through expert, women-led physiotherapy care.
            </p>

            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/17wFrN61gj/" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/Suryakiran_physiotherapy_?igsh=MXR5cmRncHkzYXFrNg==" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-300 group border border-slate-700 hover:border-primary-500"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold text-lg text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-primary-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-primary-500 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-semibold text-lg text-white mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-slate-300 hover:text-primary-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-primary-500 transition-colors"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-primary-300 hover:text-primary-200 text-xs font-semibold uppercase tracking-wider mt-2 inline-block">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-semibold text-lg text-white mb-6 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-500 rounded-full"></span>
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                  <MapPin className="w-5 h-5 text-primary-400" />
                </div>
                <span className="text-slate-300 text-sm leading-relaxed">
                  {CONTACT_INFO.addressLine1}<br />{CONTACT_INFO.addressLine2}
                </span>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                  <Phone className="w-5 h-5 text-primary-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Call Us</span>
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="text-slate-300 hover:text-primary-300 text-sm font-medium transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                  <Mail className="w-5 h-5 text-primary-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Email Us</span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-slate-300 hover:text-primary-300 text-sm font-medium transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                  <Clock className="w-5 h-5 text-primary-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Working Hours</span>
                  <span className="text-slate-300 text-sm">
                    {OPENING_HOURS.map((oh, idx) => (
                      <span key={idx}>
                        {oh.days}: {oh.hours}<br />
                      </span>
                    ))}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm font-medium">
              <span className="hidden sm:inline">© {new Date().getFullYear()} Suryakiran Physiotherapy. All rights reserved.</span>
              <span className="sm:hidden text-xs">© {new Date().getFullYear()} Suryakiran Physiotherapy</span>
            </p>
            <div className="flex gap-8">
              <Link
                to="/privacy"
                className="text-slate-400 hover:text-primary-300 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-slate-400 hover:text-primary-300 text-sm transition-colors"
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
