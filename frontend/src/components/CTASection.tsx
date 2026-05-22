import { motion } from "framer-motion";
import { useState } from "react";

export const CTASection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 3000);
    }
  };

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
          {/* Glitching Heading */}
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-mono font-bold text-nc-text-primary"
            style={{
              textShadow:
                "2px 2px 0 rgba(239,68,68,0.3), -2px -2px 0 rgba(0,212,170,0.2)",
            }}
          >
            READY TO SECURE
            <br />
            YOUR PERIMETER?
          </h2>

          <p className="text-lg text-nc-text-muted font-body max-w-2xl mx-auto leading-relaxed">
            Request early access to Neuro Cortex and join the next generation of
            cybersecurity professionals.
          </p>

          {/* Email Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="analyst@company.com█"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 terminal-input"
            />
            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(0,212,170,0.6)",
              }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-8 py-2 bg-nc-teal text-nc-base font-mono font-bold hover:bg-nc-border-active transition-all duration-300"
            >
              REQUEST ACCESS
            </motion.button>
          </motion.form>

          {/* Submission Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-nc-teal font-mono text-sm"
            >
              ✓ Access request submitted. Check your email for next steps.
            </motion.div>
          )}

          {/* Footer Text */}
          <p className="text-sm text-nc-text-muted font-body">
            No spam. Built for security professionals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
