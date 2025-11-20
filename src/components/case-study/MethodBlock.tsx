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
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        marginBottom: '16px',
        borderRadius: '20px',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        <div style={{
          width: '48px',
          height: '48px',
          backgroundColor: '#000000',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <Icon size={24} style={{ color: '#FFFFFF' }} />
        </div>

        <div style={{ flex: 1 }}>
          <h4 style={{
            color: '#000000',
            fontSize: '18px',
            fontWeight: 500,
            marginBottom: '8px'
          }}>
            {title}
          </h4>

          <p style={{
            color: '#666666',
            fontSize: '14px',
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
                  color: '#666666',
                  fontSize: '13px',
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
