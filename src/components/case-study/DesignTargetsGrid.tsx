import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface DesignTarget {
  name: string;
  role: string;
  imageUrl: string;
  accentColor: string;
}

interface DesignTargetsGridProps {
  title?: string;
  subtitle?: string;
  targets: DesignTarget[];
}

export function DesignTargetsGrid({ 
  title = "Design Target Breakdown",
  subtitle,
  targets
}: DesignTargetsGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ marginTop: '48px', marginBottom: '48px' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h3 style={{
          color: '#AE8EFF',
          fontSize: '24px',
          fontFamily: 'MuseoModerno, sans-serif',
          fontWeight: 600,
          marginBottom: '12px'
        }}>
          {title}
        </h3>
        {subtitle && (
          <p style={{
            color: '#666666',
            fontSize: '14px',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {subtitle}
          </p>
        )}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '32px',
        justifyItems: 'center'
      }}>
        {targets.map((target, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ textAlign: 'center', maxWidth: '220px' }}
          >
            <div style={{
              width: '140px',
              height: '140px',
              margin: '0 auto 16px',
              position: 'relative'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                border: `3px solid ${target.accentColor}`,
                boxShadow: `0 4px 12px ${target.accentColor}40`,
                backgroundColor: 'white'
              }}>
                <ImageWithFallback
                  src={target.imageUrl}
                  alt={target.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
            
            <h4 style={{
              color: '#482D18',
              fontSize: '16px',
              fontFamily: 'MuseoModerno, sans-serif',
              fontWeight: 600,
              marginBottom: '4px',
              lineHeight: '1.4'
            }}>
              {target.name}
            </h4>
            
            <p style={{
              color: '#AE8EFF',
              fontSize: '13px',
              fontFamily: 'MuseoModerno, sans-serif',
              fontWeight: 600,
              margin: 0
            }}>
              {target.role}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
