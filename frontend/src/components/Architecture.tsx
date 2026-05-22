import { motion } from 'framer-motion';

const ArchitectureDiagram: React.FC = () => {
  const sections = [
    { title: 'DATA SOURCES', items: ['Logs', 'Emails', 'PDFs', 'URLs'] },
    {
      title: 'ENRICHMENT',
      items: ['VirusTotal', 'MITRE ATT&CK', 'Shodan', 'AbuseIPDB'],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
      {/* Left: Data Sources */}
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="font-mono font-bold text-nc-text-primary mb-4">
          {sections[0].title}
        </div>
        <div className="space-y-2">
          {sections[0].items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card border-2 border-nc-border p-3 font-body text-nc-text-muted text-center"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Center: Core Engine */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="glass-card border-2 border-nc-teal cut-corner p-8 text-center"
      >
        <div className="font-mono font-bold text-nc-text-primary mb-2">NEURO CORTEX CORE</div>
        <div className="space-y-2 text-sm font-body text-nc-text-muted">
          <div>Ingestion Layer</div>
          <div>IoC Extractor</div>
          <div>RAG Engine</div>
          <div>AI Triage</div>
          <div>Report Engine</div>
        </div>
      </motion.div>

      {/* Right: Outputs */}
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="font-mono font-bold text-nc-text-primary mb-4">OUTPUTS</div>
        <div className="space-y-2">
          {[
            'Security Reports',
            'Risk Scores',
            'Pentest Reports',
            'Threat Feeds',
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card border-2 border-nc-border p-3 font-body text-nc-text-muted text-center"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-nc-elevated overflow-hidden">
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
            <span className="text-nc-teal">&gt; </span>system --architecture
          </h2>
          <p className="text-nc-text-muted font-body max-w-2xl">
            Comprehensive data flow from input to analysis and output.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <ArchitectureDiagram />

        {/* Key Technologies */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="glass-card border-2 border-nc-border p-6">
            <h3 className="font-mono font-bold text-nc-teal mb-4">PROCESSING PIPELINE</h3>
            <ul className="space-y-2 font-body text-sm text-nc-text-muted">
              <li>• Parallel ingestion from multiple sources</li>
              <li>• Real-time IoC extraction & normalization</li>
              <li>• RAG-powered contextual classification</li>
              <li>• Asynchronous external enrichment</li>
              <li>• Intelligent severity scoring</li>
            </ul>
          </div>
          <div className="glass-card border-2 border-nc-border p-6">
            <h3 className="font-mono font-bold text-nc-teal mb-4">INTEGRATIONS</h3>
            <ul className="space-y-2 font-body text-sm text-nc-text-muted">
              <li>• VirusTotal Intelligence</li>
              <li>• Shodan Host Search API</li>
              <li>• MITRE ATT&CK Framework</li>
              <li>• AbuseIPDB Database</li>
              <li>• Custom Threat Feeds</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
