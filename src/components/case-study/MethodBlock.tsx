import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface MethodBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details?: string[];
  index?: number;
}

export function MethodBlock({ icon: Icon, title, description, details, index = 0 }: MethodBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        padding: '32px',
        backgroundColor: 'var(--ds-bg-surface)',
        border: '1px solid var(--ds-border-subtle)',
        marginBottom: '16px',
        borderRadius: '20px',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        <div style={{
          width: '48px',
          height: '48px',
          backgroundColor: 'var(--ds-text-primary)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <Icon size={24} style={{ color: 'var(--ds-bg-surface)' }} />
        </div>

        <div style={{ flex: 1 }}>
          <h4 style={{
            color: 'var(--ds-text-primary)',
            fontSize: 'var(--type-l4)',
            fontWeight: 500,
            marginBottom: '8px'
          }}>
            {title}
          </h4>

          <p style={{
            color: 'var(--ds-text-secondary)',
            fontSize: 'var(--type-l2)',
            fontWeight: 400,
            lineHeight: '1.6',
            marginBottom: details ? '16px' : '0'
          }}>
            {description}
          </p>

          {details && details.length > 0 && (
            <ul style={{ 
              margin: 0, 
              paddingLeft: '20px',
              listStyleType: 'disc'
            }}>
              {details.map((detail, i) => (
                <li key={i} style={{
                  color: 'var(--ds-text-secondary)',
                  fontSize: 'var(--type-l2)',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  marginBottom: '6px'
                }}>
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}
