import { motion } from "framer-motion";

interface CTASectionProps {
  onRequestAccess: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onRequestAccess }) => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-nc-base overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-mono font-bold text-nc-text-primary"
            style={{
              textShadow:
                "2px 2px 0 rgba(239,68,68,0.3), -2px -2px 0 rgba(0,212,170,0.2)",
            }}
          >
            SECURE ACCESS FOR SECURITY TEAMS
          </h2>

          <p className="text-lg text-nc-text-muted font-body max-w-2xl mx-auto leading-relaxed">
            OPUS Desktop is enterprise-focused and access is approved through
            request. Click below to submit your access request in a secure
            overlay form.
          </p>

          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px rgba(0,212,170,0.6)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={onRequestAccess}
            className="mx-auto border-2 font-mono border-nc-teal bg-transparent px-10 py-4 text-sm font-bold uppercase tracking-[0.3em] text-nc-teal transition-all duration-300 hover:bg-nc-teal hover:text-nc-base"
          >
            Request Access
          </motion.button>

          <p className="text-sm text-nc-text-muted font-body">
            No request access form appears on the landing page; the workflow
            opens in a popup overlay.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
