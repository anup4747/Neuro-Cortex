import { motion } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";

const StatItem: React.FC<{
  label: string;
  value: number | string;
  suffix?: string;
}> = ({ label, value, suffix }) => {
  const displayValue =
    typeof value === "number" ? (
      <StatCounter value={value} suffix={suffix} />
    ) : (
      value
    );

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-mono font-bold text-nc-teal mb-2">
        {displayValue}
      </div>
      <div className="font-body text-sm text-nc-text-muted">{label}</div>
    </motion.div>
  );
};

const StatCounter: React.FC<{ value: number; suffix?: string }> = ({
  value,
  suffix = "",
}) => {
  const count = useCountUp(value, 2000, 0, true);
  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

export const StatsBar: React.FC = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-nc-elevated overflow-hidden border-y border-nc-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <StatItem label="Threats Analyzed" value={10000} suffix="+" />
          <StatItem label="IoCs Extracted Daily" value={500} suffix="+" />
          <StatItem label="Detection Rate" value={99} suffix=".7%" />
          <StatItem label="OWASP Coverage" value="Top 10" />
        </div>
      </div>
    </section>
  );
};
