import { motion } from "framer-motion";
import { MockDashboard } from "./MockDashboard";

export const ThreatIntel: React.FC = () => {
  return (
    <section
      id="threat-intel"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-nc-base overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-mono text-4xl sm:text-5xl font-bold text-nc-text-primary mb-4">
            <span className="text-nc-teal">$ </span>threat_intel --dashboard
            --live
          </h2>
          <p className="text-nc-text-muted font-body max-w-3xl mx-auto text-lg">
            Real-time enrichment, severity classification, and triage — unified
            in one analyst-grade interface.
          </p>
        </motion.div>

        {/* Dashboard Mock */}
        <MockDashboard />

        {/* Subtext */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-nc-text-muted font-body text-sm">
            Intelligence automatically updates every 30 seconds from configured
            threat feeds.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
