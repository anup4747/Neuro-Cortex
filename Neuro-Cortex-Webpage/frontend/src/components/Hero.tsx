import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useCountUp } from "../hooks/useCountUp";
import { ParticleCanvas } from "./ParticleCanvas";

export const Hero: React.FC = () => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 300);
    }, 8000);

    return () => clearInterval(glitchInterval);
  }, []);

  const threatCount = useCountUp(99700, 2000, 99000, true);
  const iocCount = useCountUp(500, 2000, 0, true);
  const coverageCount = useCountUp(100, 2000, 90, true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <ParticleCanvas />

      {/* Scanline overlay */}
      <div className="hero-scanlines absolute inset-0 pointer-events-none z-10" />

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-nc-teal/5 to-transparent pointer-events-none z-5" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="px-4 py-2 border-2 border-nc-teal rounded-full text-nc-teal font-mono text-xs font-bold tracking-widest neon-glow">
            ◈ AI-POWERED SECURITY PLATFORM
          </div>
        </motion.div>

        {/* Main Headline with Glitch */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1
            className={`text-6xl sm:text-7xl lg:text-8xl font-mono font-bold leading-tight ${
              glitch ? "animate-glitch" : ""
            }`}
            style={{
              color: "#e2e8f0",
              textShadow: glitch
                ? "3px 3px #ef4444, -3px -3px #00d4aa"
                : "none",
            }}
          >
            <span className="block">&gt; IDENTIFY.</span>
            <span className="block">&gt; ANALYZE.</span>
            <span className="inline-block">
              &gt; NEUTRALIZE.
              <span className="animate-blink ml-2">▋</span>
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-nc-text-muted max-w-2xl mx-auto mb-12 font-body leading-relaxed"
        >
          Neuro Cortex combines autonomous threat intelligence with hands-on
          ethical pentesting training — giving security teams the cognitive edge
          over adversaries.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px rgba(0,212,170,0.6)",
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-nc-teal text-nc-base font-mono font-bold text-lg hover:bg-nc-border-active transition-all duration-300 flex items-center justify-center gap-2"
          >
            ▶ LAUNCH PLATFORM
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.02,
              borderColor: "#00d4aa",
              boxShadow: "0 0 20px rgba(0,212,170,0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 border-2 border-nc-teal text-nc-teal font-mono font-bold text-lg hover:bg-nc-teal/10 transition-all duration-300"
          >
            ⬡ EXPLORE LAB
          </motion.button>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8"
        >
          <div className="flex flex-col items-center">
            <div className="text-4xl font-mono font-bold text-nc-teal mb-2">
              {threatCount.toLocaleString()}%
            </div>
            <div className="text-sm font-body text-nc-text-muted">
              Threat Detection
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-mono font-bold text-nc-teal mb-2">
              {iocCount.toLocaleString()}+
            </div>
            <div className="text-sm font-body text-nc-text-muted">
              0-Day IoC Correlation
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-mono font-bold text-nc-teal mb-2">
              {coverageCount}%
            </div>
            <div className="text-sm font-body text-nc-text-muted">
              OWASP Coverage
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-nc-text-muted font-mono text-xs"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};
