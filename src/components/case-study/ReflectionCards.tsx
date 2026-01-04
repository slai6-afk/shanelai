import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ReflectionItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface ReflectionCardsProps {
  items: ReflectionItem[];
  accentColor?: string;
}

export function ReflectionCards({ items, accentColor = '#B3B2FF' }: ReflectionCardsProps) {
  return (
    <div
      style={{
        display: 'grid',
        gap: '20px',
        marginTop: '32px'
      }}
      className="md:grid-cols-3 grid-cols-1"
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '12px',
              padding: '28px 24px',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            whileHover={{
              boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.08)'
            }}
          >
            {Icon && (
              <div style={{ marginBottom: '16px' }}>
                <Icon size={28} color={accentColor} strokeWidth={1.5} />
              </div>
            )}
            <h4
              style={{
                fontSize: '17px',
                fontWeight: 600,
                color: '#000000',
                marginBottom: '12px',
                lineHeight: '1.4'
              }}
            >
              {item.title}
            </h4>
            <p
              style={{
                fontSize: '15px',
                color: '#666666',
                lineHeight: '1.7'
              }}
            >
              {item.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
