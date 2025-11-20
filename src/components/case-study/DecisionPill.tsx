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
        backgroundColor: '#000000',
        color: '#FFFFFF',
        fontSize: '13px',
        fontWeight: 500,
        letterSpacing: '0.01em',
        borderRadius: '8px',
        border: '1px solid #000000',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      {text}
    </motion.div>
  );
}
