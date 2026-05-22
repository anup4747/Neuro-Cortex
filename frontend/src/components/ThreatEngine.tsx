import { motion } from "framer-motion";
import {
  AlertTriangle,
  Code2,
  Cpu,
  FileSearch,
  Network,
  Search,
  Shield,
} from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export const ThreatEngine: React.FC = () => {
  const features = [
    {
      icon: FileSearch,
      title: "Multi-Format Ingestion",
      description:
        "Accepts logs, raw emails, PDFs, and live URLs. Automated parsing pipeline normalizes any input format.",
    },
    {
      icon: Search,
      title: "IoC Extraction Engine",
      description:
        "Extracts IPs, domains, hashes, CVEs, registry keys, and MITRE TTPs from unstructured data.",
    },
    {
      icon: Cpu,
      title: "RAG-Powered Classification",
      description:
        "Internal knowledge base powered by retrieval-augmented generation classifies threats with contextual precision.",
    },
    {
      icon: Network,
      title: "External Threat Enrichment",
      description:
        "Cross-references findings against VirusTotal, Shodan, AbuseIPDB, and MITRE ATT&CK in real time.",
    },
    {
      icon: AlertTriangle,
      title: "Intelligent Risk Triage",
      description:
        "Severity scoring engine evaluates confidence, impact, and exploitability to prioritize analyst workflow.",
    },
    {
      icon: Shield,
      title: "Automated Report Generation",
      description:
        "High-risk findings trigger detailed markdown reports with executive summaries and remediation playbooks.",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-nc-base overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-mono text-4xl sm:text-5xl font-bold text-nc-text-primary mb-4">
            <span className="text-nc-teal">$ </span>neuro_cortex --capabilities
          </h2>
          <p className="text-nc-text-muted font-body max-w-2xl">
            Comprehensive threat analysis engine combining AI classification,
            external enrichment, and intelligent triage.
          </p>
        </motion.div>

        {/* Pipeline Diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 p-8 glass-card border-2 border-nc-border overflow-x-auto"
        >
          <div className="min-w-max flex items-center gap-4 font-mono text-sm">
            {[
              "INPUT\n(LOG/EMAIL/PDF)",
              "INGESTION &\nNORMALIZATION",
              "IoC\nEXTRACTION",
              "RAG\nCLASSIFICATION",
              "EXTERNAL\nENRICHMENT",
              "INTELLIGENT\nTRIAGE",
              "RISK SEVERITY\nOUTPUT",
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="px-4 py-3 border-2 border-nc-teal rounded-lg bg-nc-surface/50 text-nc-text-primary text-center min-w-fit whitespace-pre-line">
                  {step}
                </div>
                {idx < 6 && <div className="text-nc-teal text-2xl">→</div>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
