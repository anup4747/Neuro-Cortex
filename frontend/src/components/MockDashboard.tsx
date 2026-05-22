import { motion } from "framer-motion";

interface ThreatCard {
  severity: string;
  ip: string;
  type: string;
  source: string;
  confidence: number;
  tags: string[];
}

const threatData: ThreatCard[] = [
  {
    severity: "CRITICAL",
    ip: "185.220.101.47",
    type: "C2 Beacon",
    source: "Email Header",
    confidence: 94,
    tags: ["Ransomware", "TOR Exit Node", "APT29"],
  },
  {
    severity: "HIGH",
    ip: "104.21.73.95",
    type: "Phishing Domain",
    source: "Web Crawl",
    confidence: 87,
    tags: ["Phishing", "Credential Theft"],
  },
  {
    severity: "MEDIUM",
    ip: "91.199.30.86",
    type: "Malware Hosting",
    source: "OSINT Feed",
    confidence: 76,
    tags: ["Trojan", "Information Stealer"],
  },
];

export const MockDashboard: React.FC = () => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "CRITICAL":
        return "#ef4444";
      case "HIGH":
        return "#f59e0b";
      case "MEDIUM":
        return "#eab308";
      default:
        return "#10b981";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="glass-card border-2 border-nc-border p-8 space-y-6"
    >
      {/* Header Tabs */}
      <div className="flex gap-4 border-b border-nc-border pb-4 font-mono text-sm">
        {["Threat Feed", "IoC Map", "Reports", "Lab Results"].map(
          (tab, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 transition-colors ${
                idx === 0
                  ? "text-nc-teal border-b-2 border-nc-teal"
                  : "text-nc-text-muted hover:text-nc-text-primary"
              }`}
            >
              {tab}
            </button>
          ),
        )}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Threat Cards */}
        <div className="lg:col-span-2 space-y-4">
          {threatData.map((threat, idx) => (
            <motion.div
              key={idx}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-nc-elevated border border-nc-border p-4 hover:border-nc-teal transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="px-3 py-1 text-xs font-bold font-mono text-white"
                    style={{
                      backgroundColor: getSeverityColor(threat.severity),
                    }}
                  >
                    {threat.severity}
                  </div>
                  <div className="font-mono text-sm text-nc-text-code">
                    {threat.ip}
                  </div>
                </div>
                <button className="text-nc-teal hover:text-nc-border-active text-sm font-mono">
                  Investigate →
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-3 text-sm font-body text-nc-text-muted">
                <div>
                  <span className="text-nc-text-muted text-xs">Type:</span>
                  <div className="text-nc-text-primary">{threat.type}</div>
                </div>
                <div>
                  <span className="text-nc-text-muted text-xs">Source:</span>
                  <div className="text-nc-text-primary">{threat.source}</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xs font-mono text-nc-text-muted">
                  Confidence: {threat.confidence}%
                </div>
                <div className="flex gap-1">
                  {threat.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs px-2 py-1 bg-nc-border text-nc-text-code font-mono"
                    >
                      [{tag}]
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Panel: Stats */}
        <div className="space-y-6">
          {/* Severity Filter */}
          <div className="bg-nc-elevated border border-nc-border p-4">
            <h4 className="font-mono text-sm font-bold text-nc-text-primary mb-4">
              SEVERITY
            </h4>
            <div className="space-y-2 text-sm font-body">
              {[
                { label: "CRITICAL", color: "#ef4444", count: 12 },
                { label: "HIGH", color: "#f59e0b", count: 28 },
                { label: "MEDIUM", color: "#eab308", count: 47 },
                { label: "LOW", color: "#10b981", count: 156 },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-nc-text-muted"
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span>{item.label}</span>
                  <span className="ml-auto font-mono text-nc-text-primary">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart */}
          <div className="bg-nc-elevated border border-nc-border p-4">
            <h4 className="font-mono text-sm font-bold text-nc-text-primary mb-4">
              THREAT VOLUME — LAST 7 DAYS
            </h4>
            <div className="flex items-end justify-between h-20 gap-1">
              {[45, 52, 38, 61, 55, 48, 72].map((value, idx) => (
                <div
                  key={idx}
                  className="flex-1 bg-gradient-to-t from-nc-teal to-nc-teal/50"
                  style={{ height: `${(value / 72) * 100}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-nc-text-muted mt-2 font-mono">
              <span>Mon</span>
              <span>Sun</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
