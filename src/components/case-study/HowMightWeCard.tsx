import { motion } from 'motion/react';

interface HowMightWeCardProps {
  question: string;
  accentColor?: string;
}

export function HowMightWeCard({ question, accentColor = '#B3B2FF' }: HowMightWeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        background: `linear-gradient(135deg, ${accentColor}15 0%, ${accentColor}05 100%)`,
        border: `2px solid ${accentColor}40`,
        borderRadius: '16px',
        padding: '48px 40px',
        marginTop: '32px',
        marginBottom: '32px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '24px',
          fontSize: '14px',
          fontWeight: 600,
          color: accentColor,
          letterSpacing: '0.08em',
          textTransform: 'uppercase'
        }}
      >
        How Might We
      </div>
      <p
        style={{
          fontSize: 'clamp(22px, 3vw, 32px)',
          fontWeight: 600,
          lineHeight: '1.5',
          color: '#000000',
          marginTop: '24px',
          fontStyle: 'italic'
        }}
      >
        "{question}"
      </p>
    </motion.div>
  );
}
