import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, AlertCircle, XCircle } from "lucide-react";

interface RiskCardProps {
  level: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  icon: React.ReactNode;
  color: string;
  description: string;
  example: string;
  action: string;
  index: number;
}

const RiskCard: React.FC<RiskCardProps> = ({
  level,
  icon,
  color,
  description,
  example,
  action,
  index,
}) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="glass-card cut-corner p-6 border-2 transition-all duration-300"
      style={{ borderColor: color }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div style={{ color }}>{icon}</div>
        <h3 className="font-mono font-bold text-lg" style={{ color }}>
          {level}
        </h3>
      </div>
      <p className="font-body text-sm text-nc-text-muted mb-4">{description}</p>
      <div className="mb-4 p-3 bg-nc-elevated border border-nc-border rounded text-xs font-mono text-nc-text-code">
        {example}
      </div>
      <div className="text-sm font-body text-nc-text-primary">
        <span className="text-nc-text-muted">Action: </span>
        {action}
      </div>
    </motion.div>
  );
};

export const RiskSeverity: React.FC = () => {
  const risks = [
    {
      level: "CRITICAL" as const,
      icon: <XCircle size={24} />,
      color: "#ef4444",
      description: "Immediate exploitation risk. Requires urgent remediation.",
      example: "CVE-2024-3094 active on exposed service",
      action: "Isolate system immediately",
    },
    {
      level: "HIGH" as const,
      icon: <AlertTriangle size={24} />,
      color: "#f59e0b",
      description: "Significant vulnerability. High likelihood of compromise.",
      example: "Weak credentials with admin privileges",
      action: "Prioritize for patching",
    },
    {
      level: "MEDIUM" as const,
      icon: <AlertCircle size={24} />,
      color: "#eab308",
      description: "Moderate risk. Could lead to data exposure.",
      example: "Missing security headers on web app",
      action: "Schedule remediation",
    },
    {
      level: "LOW" as const,
      icon: <CheckCircle size={24} />,
      color: "#10b981",
      description: "Minor issue. Low probability of impact.",
      example: "Outdated SSL cipher suites",
      action: "Monitor and track",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-nc-base overflow-hidden">
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
            RISK SEVERITY LEVELS
          </h2>
          <p className="text-nc-text-muted font-body max-w-2xl mx-auto">
            Standardized severity classification with recommended actions.
          </p>
        </motion.div>

        {/* Risk Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {risks.map((risk, idx) => (
            <RiskCard key={idx} {...risk} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
