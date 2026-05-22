import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export const Footer: React.FC = () => {
  const links = {
    product: ["Features", "Lab", "Architecture", "Pricing"],
    company: ["About", "Blog", "Careers", "Contact"],
    legal: ["Privacy", "Terms", "Security", "License"],
  };

  return (
    <footer className="relative border-t border-nc-border bg-nc-base px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Shield size={24} className="text-nc-teal" />
              <span className="font-mono font-bold text-nc-teal">
                NEURO_CORTEX
              </span>
            </div>
            <p className="font-body text-sm text-nc-text-muted">
              Cognitive Security Intelligence platform for modern threat
              landscape.
            </p>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-mono font-bold text-nc-text-primary mb-4 text-sm">
              PRODUCT
            </h4>
            <ul className="space-y-2">
              {links.product.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="font-body text-sm text-nc-text-muted hover:text-nc-teal transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-mono font-bold text-nc-text-primary mb-4 text-sm">
              COMPANY
            </h4>
            <ul className="space-y-2">
              {links.company.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="font-body text-sm text-nc-text-muted hover:text-nc-teal transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-mono font-bold text-nc-text-primary mb-4 text-sm">
              LEGAL
            </h4>
            <ul className="space-y-2">
              {links.legal.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="font-body text-sm text-nc-text-muted hover:text-nc-teal transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-nc-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-nc-text-muted">
              © 2024 NEURO_CORTEX. All rights reserved.
            </p>
            <p className="font-mono text-sm text-nc-text-muted">
              Built for defenders. Designed for the edge.
            </p>
          </div>

          {/* Gradient Line */}
          <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-nc-teal to-transparent opacity-50" />
        </div>
      </div>
    </footer>
  );
};
