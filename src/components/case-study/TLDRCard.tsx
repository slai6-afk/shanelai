import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface TLDRCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  index?: number;
}

export function TLDRCard({ icon: Icon, title, content, index = 0 }: TLDRCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        padding: '28px',
        borderRadius: '20px',
        height: '100%',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      <div style={{
        width: '40px',
        height: '40px',
        backgroundColor: '#000000',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px'
      }}>
        <Icon size={20} style={{ color: '#FFFFFF' }} />
      </div>

      <h3 style={{
        color: '#000000',
        fontSize: '16px',
        fontWeight: 500,
        marginBottom: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.02em'
      }}>
        {title}
      </h3>

      <p style={{
        color: '#666666',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '1.7'
      }}>
        {content}
      </p>
    </motion.div>
  );
}
