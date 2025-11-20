import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface NextStepsProps {
  steps: string[];
}

export function NextSteps({ steps }: NextStepsProps) {
  return (
    <div style={{ marginTop: '24px' }}>
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            marginBottom: '16px'
          }}
        >
          <CheckCircle2 
            size={20} 
            style={{ 
              color: '#22c55e', 
              flexShrink: 0,
              marginTop: '2px'
            }} 
          />
          <p style={{
            color: '#000000',
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: '1.6',
            margin: 0
          }}>
            {step}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
