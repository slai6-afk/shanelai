import { motion } from 'motion/react';

interface DecisionPillProps {
  text: string;
  index?: number;
}

export function DecisionPill({ text, index = 0 }: DecisionPillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      style={{
        display: 'inline-block',
        padding: '8px 16px',
        backgroundColor: 'var(--ds-text-primary)',
        color: 'var(--ds-bg-surface)',
        fontSize: 'var(--type-l2)',
        fontWeight: 500,
        letterSpacing: '0.01em',
        borderRadius: '8px',
        border: '1px solid var(--ds-text-primary)',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      {text}
    </motion.div>
  );
}
