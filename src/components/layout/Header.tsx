import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_INFO } from "@/data/constants";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll to hash if present in URL on load
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.includes("#")) {
      e.preventDefault();
      const [route, hash] = path.split("#");

      if (location.pathname !== route) {
        navigate(path);
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-md py-3"
        : isHome
          ? "bg-transparent py-6"
          : "bg-white/95 backdrop-blur-sm shadow-sm py-4"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left Side: Logo + Nav */}
          <div className="flex items-center gap-8 md:gap-12">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="h-14 w-auto flex-shrink-0">
                <img src="/logo.jpeg" alt="Surya Kiran Logo" className="h-full w-auto object-contain shadow-sm" />
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-heading font-bold text-xl leading-tight transition-colors ${!isScrolled && isHome ? "text-white" : "text-black"}`}>
                  suryakiran
                </h1>
                <p className={`text-[13px] font-medium tracking-wide transition-colors ${!isScrolled && isHome ? "text-white/80" : "text-muted-foreground/80"}`}>
                  PHYSIOTHERAPY
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${location.pathname === link.path && !link.path.includes("#")
                    ? "text-primary-700 bg-primary-50 shadow-sm" // Active state (unchanged for internal pages)
                    : !isScrolled && isHome
                      ? "text-white/90 hover:text-white hover:bg-white/10" // Transparent Home state
                      : "text-gray-600 hover:text-primary-700 hover:bg-gray-50" // Standard state
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side: CTA (Phone) & Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white font-semibold shadow-none hover:bg-black/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{CONTACT_INFO.phone}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 rounded-md transition-colors ${!isScrolled && isHome
                ? "text-white hover:bg-white/10"
                : "text-primary-700 hover:bg-primary-50"
                }`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu Overlay - Portal to Body */}
      {createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] bg-background flex flex-col"
            >
              {/* Mobile Menu Header */}
              <div className="container mx-auto px-4 py-4 flex items-center justify-between border-b border-border/50">
                {/* Logo */}
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3"
                >
                  <div className="h-12 w-auto flex-shrink-0">
                    <img src="/logo.jpeg" alt="Surya Kiran Logo" className="h-full w-auto object-contain" />
                  </div>
                  <div>
                    <h1 className="font-heading font-bold text-lg leading-tight text-black">
                      suryakiran
                    </h1>
                    <p className="text-xs font-medium tracking-wide text-muted-foreground/80">
                      PHYSIOTHERAPY
                    </p>
                  </div>
                </Link>

                {/* Close Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7 text-black" />
                </button>
              </div>

              {/* Mobile Menu Links */}
              <nav className="container mx-auto px-4 py-8 flex flex-col gap-4 overflow-y-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={`px-4 py-4 rounded-xl text-lg font-bold transition-all ${location.pathname === link.path && !link.path.includes("#")
                      ? "text-primary-700 bg-primary-50"
                      : "text-foreground/80 hover:text-primary-700 hover:bg-gray-50"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="mt-4 pt-4 border-t border-border/50">
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="w-full flex items-center justify-center gap-3 bg-black hover:bg-black/90 text-white rounded-xl font-bold uppercase tracking-wider h-14 shadow-lg transition-transform active:scale-95"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{CONTACT_INFO.phone}</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </header>
  );
}
