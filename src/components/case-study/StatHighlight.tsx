import { motion } from 'motion/react';

interface StatHighlightProps {
  stats: {
    value: string;
    label: string;
    color?: string;
  }[];
}

export function StatHighlight({ stats }: StatHighlightProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(${stats.length > 2 ? '150px' : '200px'}, 1fr))`,
      gap: '20px',
      marginBottom: '24px'
    }}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(2px)',
            border: `2px solid ${stat.color || '#E56641'}20`,
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center'
          }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            style={{
              fontSize: '36px',
              fontFamily: 'MuseoModerno, sans-serif',
              fontWeight: 700,
              color: stat.color || '#E56641',
              lineHeight: '1',
              marginBottom: '8px'
            }}
          >
            {stat.value}
          </motion.div>
          <p style={{
            color: '#3B2E24',
            fontSize: '13px',
            lineHeight: '1.4',
            margin: 0
          }}>
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
