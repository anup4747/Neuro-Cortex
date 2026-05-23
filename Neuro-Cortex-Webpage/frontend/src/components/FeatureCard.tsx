import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, boxShadow: "0 0 30px rgba(0,212,170,0.3)" }}
      className="glass-card cut-corner p-6 border-2 border-nc-border hover:border-nc-teal transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <Icon className="w-8 h-8 text-nc-teal flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-mono font-bold text-lg text-nc-text-primary mb-2">
            {title}
          </h3>
          <p className="font-body text-sm text-nc-text-muted leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
