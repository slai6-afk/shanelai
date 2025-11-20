import { motion } from 'motion/react';
import { Users, Eye, Palette, BookOpen } from 'lucide-react';

interface Method {
  icon: 'users' | 'eye' | 'palette' | 'book';
  title: string;
  description: string;
}

interface MethodsGridProps {
  methods: Method[];
  timeline?: string;
}

const iconMap = {
  users: Users,
  eye: Eye,
  palette: Palette,
  book: BookOpen
};

export function MethodsGrid({ methods, timeline }: MethodsGridProps) {
  return (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '16px',
        marginBottom: timeline ? '20px' : '0'
      }}>
        {methods.map((method, index) => {
          const IconComponent = iconMap[method.icon];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #ED964F 0%, #E56641 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '12px'
              }}>
                <IconComponent size={20} color="#FFFFFF" />
              </div>
              <h4 style={{
                color: '#333333',
                fontSize: '14px',
                fontFamily: 'MuseoModerno, sans-serif',
                fontWeight: 600,
                marginBottom: '8px'
              }}>
                {method.title}
              </h4>
              <p style={{
                color: '#666666',
                fontSize: '13px',
                lineHeight: '1.6',
                margin: 0
              }}>
                {method.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {timeline && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            backgroundColor: 'rgba(237, 150, 79, 0.1)',
            border: '1px solid rgba(229, 102, 65, 0.2)',
            borderRadius: '8px',
            padding: '12px 16px',
            display: 'inline-block'
          }}
        >
          <p style={{
            color: '#795337',
            fontSize: '13px',
            fontFamily: 'MuseoModerno, sans-serif',
            fontWeight: 500,
            margin: 0
          }}>
            <span style={{ color: '#E56641', fontWeight: 600 }}>Timeline:</span> {timeline}
          </p>
        </motion.div>
      )}
    </div>
  );
}
