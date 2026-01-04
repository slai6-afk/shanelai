import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface GameStep {
  imageUrl: string;
  caption?: string;
}

interface GameActivityFlowProps {
  title: string;
  description: string;
  steps: GameStep[];
  flowDescription?: string;
  accentColor?: string;
}

export function GameActivityFlow({ 
  title, 
  description, 
  steps, 
  flowDescription,
  accentColor = '#AC8BFF'
}: GameActivityFlowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ marginBottom: '48px' }}
    >
      <div style={{
        backgroundColor: 'rgba(240, 235, 255, 0.4)',
        borderRadius: '14px',
        padding: '32px',
        border: '1px solid rgba(172, 139, 255, 0.15)'
      }}>
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{
            color: '#454950',
            fontSize: '18px',
            fontFamily: 'MuseoModerno, sans-serif',
            fontWeight: 600,
            marginBottom: '8px'
          }}>
            {title}
          </h4>
          <p style={{
            color: accentColor,
            fontSize: '13px',
            lineHeight: '1.6',
            margin: 0
          }}>
            {description}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
          gap: '16px',
          marginBottom: flowDescription ? '20px' : '0'
        }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.06)'
              }}
            >
              <div style={{
                aspectRatio: '4/3',
                overflow: 'hidden',
                backgroundColor: '#f5f5f5'
              }}>
                <ImageWithFallback
                  src={step.imageUrl}
                  alt={`${title} step ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              {step.caption && (
                <p style={{
                  color: '#666666',
                  fontSize: '11px',
                  padding: '8px 12px',
                  margin: 0,
                  textAlign: 'center',
                  lineHeight: '1.4'
                }}>
                  {step.caption}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {flowDescription && (
          <p style={{
            color: '#454950',
            fontSize: '12px',
            fontWeight: 600,
            textAlign: 'center',
            margin: 0,
            paddingTop: '12px',
            borderTop: '1px solid rgba(172, 139, 255, 0.1)'
          }}>
            {flowDescription}
          </p>
        )}
      </div>
    </motion.div>
  );
}
