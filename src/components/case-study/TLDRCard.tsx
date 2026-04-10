import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface TLDRCardProps {
  icon: LucideIcon;
  title: string;
  /** Raw HTML string (used when `children` is not provided). */
  content?: string;
  /** Rich content (e.g. WordBackdropDecor); takes precedence over `content`. */
  children?: ReactNode;
  index?: number;
  /** Optional emoji for scan-friendly visual hierarchy (e.g. Vibe Sync TL;DR). */
  emoji?: string;
}

export function TLDRCard({ icon: Icon, title, content = '', children, index = 0, emoji }: TLDRCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="tldr-card tldr-card-surface"
    >
      {emoji ? (
        <div className="tldr-card-top">
          <span className="tldr-emoji" aria-hidden>
            {emoji}
          </span>
          <div className="tldr-icon-circle">
            <Icon size={20} className="tldr-icon" />
          </div>
        </div>
      ) : (
        <div className="tldr-icon-circle">
          <Icon size={20} className="tldr-icon" />
        </div>
      )}

      <h3 className="tldr-title">{title}</h3>

      {children != null ? (
        <div className="tldr-content">{children}</div>
      ) : (
        <p className="tldr-content" dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </motion.div>
  );
}
