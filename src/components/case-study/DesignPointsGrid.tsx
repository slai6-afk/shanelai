import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface DesignPoint {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

interface DesignPointsGridProps {
  title?: string;
  points?: DesignPoint[];
  imagesSrc?: string;
}

export function DesignPointsGrid({ 
  title = "Key Design Points",
  points,
  imagesSrc
}: DesignPointsGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ marginTop: '48px', marginBottom: '48px' }}
    >
      <h3 style={{
        color: '#AE8EFF',
        fontSize: '24px',
        fontFamily: 'MuseoModerno, sans-serif',
        fontWeight: 600,
        marginBottom: '32px'
      }}>
        {title}
      </h3>

      {imagesSrc && (
        <div style={{
          backgroundColor: 'transparent',
          overflow: 'hidden',
          borderRadius: '8px',
          marginBottom: '32px'
        }}>
          <ImageWithFallback
            src={imagesSrc}
            alt="Key design points"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </div>
      )}

      {points && points.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(2.5px)',
                border: '1px solid rgba(229, 102, 65, 0.1)',
                borderRadius: '12px',
                padding: '20px 24px',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)'
              }}
            >
              {point.icon && (
                <div style={{ marginBottom: '12px', color: '#E56641' }}>
                  {point.icon}
                </div>
              )}
              <h4 style={{
                color: '#482D18',
                fontSize: '16px',
                fontWeight: 600,
                marginBottom: point.description ? '8px' : 0,
                lineHeight: '1.4'
              }}>
                {point.title}
              </h4>
              {point.description && (
                <p style={{
                  color: '#666666',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {point.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
