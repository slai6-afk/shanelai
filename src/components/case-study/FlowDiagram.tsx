import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface FlowDiagramProps {
  steps: string[];
  accentColor?: string;
}

export function FlowDiagram({ steps, accentColor = '#B3B2FF' }: FlowDiagramProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        marginTop: '40px',
        marginBottom: '40px',
        padding: '32px',
        backgroundColor: 'rgba(255, 248, 242, 0.4)',
        borderRadius: '16px'
      }}
    >
      {steps.map((step, index) => (
        <div
          key={step}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            style={{
              padding: '16px 28px',
              backgroundColor: '#FFFFFF',
              borderRadius: '32px',
              border: `2px solid ${accentColor}40`,
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
              fontSize: '16px',
              fontWeight: 600,
              color: '#000000',
              whiteSpace: 'nowrap'
            }}
          >
            {step}
          </motion.div>

          {index < steps.length - 1 && (
            <ArrowRight
              size={24}
              color={accentColor}
              strokeWidth={2.5}
              style={{ flexShrink: 0 }}
            />
          )}
        </div>
      ))}
    </motion.div>
  );
}
