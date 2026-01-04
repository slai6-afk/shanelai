import { motion } from 'motion/react';
import { TrendingUp, Heart, Shield } from 'lucide-react';

interface Finding {
  category: 'behavioral' | 'emotional' | 'technical';
  items: string[];
}

interface KeyFindingsSectionProps {
  findings: Finding[];
}

const categoryConfig = {
  behavioral: {
    icon: TrendingUp,
    label: 'Behavioral Patterns',
    color: '#E56641'
  },
  emotional: {
    icon: Heart,
    label: 'Emotional Pain Points',
    color: '#ED964F'
  },
  technical: {
    icon: Shield,
    label: 'Technology Barriers',
    color: '#AE8EFF'
  }
};

export function KeyFindingsSection({ findings }: KeyFindingsSectionProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
      {findings.map((finding, index) => {
        const config = categoryConfig[finding.category];
        const IconComponent = config.icon;

        return (
          <motion.div
            key={finding.category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(2px)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: `${config.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <IconComponent size={18} color={config.color} />
              </div>
              <h4 style={{
                color: config.color,
                fontSize: '16px',
                fontFamily: 'MuseoModerno, sans-serif',
                fontWeight: 600,
                margin: 0
              }}>
                {config.label}
              </h4>
            </div>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {finding.items.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.1 }}
                  style={{
                    color: '#3B2E24',
                    fontSize: '14px',
                    lineHeight: '1.7',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}
                >
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    top: '8px',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: config.color,
                    opacity: 0.6
                  }} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}
