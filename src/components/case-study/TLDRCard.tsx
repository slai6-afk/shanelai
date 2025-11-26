import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface TLDRCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  index?: number;
}

export function TLDRCard({ icon: Icon, title, content, index = 0 }: TLDRCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="tldr-card tldr-card-surface"
    >
      <div className="tldr-icon-circle">
        <Icon size={20} className="tldr-icon" />
      </div>

      <h3 className="tldr-title">{title}</h3>

      <p
        className="tldr-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </motion.div>
  );
}
