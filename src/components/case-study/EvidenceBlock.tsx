import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

interface EvidenceBlockProps {
  type: 'quote' | 'chart';
  content: string;
  source?: string;
  index?: number;
}

export function EvidenceBlock({ type, content, source, index = 0 }: EvidenceBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        padding: '24px',
        backgroundColor: type === 'quote' ? 'var(--ds-bg-page)' : 'var(--ds-bg-surface)',
        borderLeft: type === 'quote' ? '4px solid var(--ds-text-primary)' : 'none',
        border: type === 'chart' ? '1px solid var(--ds-border-subtle)' : 'none',
        marginBottom: '24px'
      }}
    >
      {type === 'quote' && (
        <>
          <Quote size={24} style={{ color: 'var(--ds-text-primary)', marginBottom: '12px' }} />
          <p style={{
            color: 'var(--ds-text-primary)',
            fontSize: 'var(--type-l3)',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: '1.7',
            marginBottom: source ? '12px' : '0'
          }}>
            "{content}"
          </p>
          {source && (
            <p style={{
              color: 'var(--ds-text-secondary)',
              fontSize: 'var(--type-l2)',
              fontWeight: 400
            }}>
              — {source}
            </p>
          )}
        </>
      )}

      {type === 'chart' && (
        <div style={{
          color: 'var(--ds-text-primary)',
          fontSize: 'var(--type-l2)',
          fontWeight: 400,
          lineHeight: '1.6',
          textAlign: 'center',
          padding: '32px'
        }}>
          <p style={{ color: 'var(--ds-text-secondary)', fontStyle: 'italic' }}>
            [Chart: {content}]
          </p>
          {source && (
            <p style={{ 
              color: 'var(--ds-footer-text-muted)', 
              fontSize: 'var(--type-l1)',
              marginTop: '12px'
            }}>
              {source}
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
}
