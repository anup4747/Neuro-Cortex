import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = ["Features", "Lab", "Threat Intel", "Architecture", "Contact"];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-nc-base/80 backdrop-blur-sm border-b border-nc-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <img
              src="/favicon.svg"
              alt="Neuro Cortex logo"
              className="w-8 h-8 rounded-full bg-nc-base p-1 group-hover:animate-pulse-glow"
            />
            <span className="font-mono font-bold text-nc-teal text-lg hidden sm:inline">
              NEURO_CORTEX
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link font-mono text-sm text-nc-text-primary hover:text-nc-teal transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2 border-2 border-nc-teal text-nc-teal font-mono font-bold text-sm hover:bg-nc-teal hover:text-nc-base transition-all duration-300 neon-glow"
            >
              REQUEST ACCESS
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-nc-teal hover:text-nc-border-active transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden border-b border-nc-border bg-nc-surface/50 backdrop-blur-sm"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block font-mono text-sm text-nc-text-primary hover:text-nc-teal transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full mt-4 px-4 py-2 border-2 border-nc-teal text-nc-teal font-mono font-bold text-sm hover:bg-nc-teal hover:text-nc-base transition-all"
            >
              REQUEST ACCESS
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
