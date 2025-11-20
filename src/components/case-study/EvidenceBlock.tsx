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
        backgroundColor: type === 'quote' ? '#f5f5f5' : '#FFFFFF',
        borderLeft: type === 'quote' ? '4px solid #000000' : 'none',
        border: type === 'chart' ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
        marginBottom: '24px'
      }}
    >
      {type === 'quote' && (
        <>
          <Quote size={24} style={{ color: '#000000', marginBottom: '12px' }} />
          <p style={{
            color: '#000000',
            fontSize: '16px',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: '1.7',
            marginBottom: source ? '12px' : '0'
          }}>
            "{content}"
          </p>
          {source && (
            <p style={{
              color: '#666666',
              fontSize: '13px',
              fontWeight: 400
            }}>
              — {source}
            </p>
          )}
        </>
      )}

      {type === 'chart' && (
        <div style={{
          color: '#000000',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '1.6',
          textAlign: 'center',
          padding: '32px'
        }}>
          <p style={{ color: '#666666', fontStyle: 'italic' }}>
            [Chart: {content}]
          </p>
          {source && (
            <p style={{ 
              color: '#999999', 
              fontSize: '12px',
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
