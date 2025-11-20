import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ServiceBlueprintProps {
  title?: string;
  description?: string;
  imageUrl: string;
  caption?: string;
}

export function ServiceBlueprint({ 
  title = "Service Blueprint",
  description,
  imageUrl,
  caption
}: ServiceBlueprintProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ marginTop: '48px', marginBottom: '48px' }}
    >
      {title && (
        <h3 style={{
          color: '#AE8EFF',
          fontSize: '24px',
          fontFamily: 'MuseoModerno, sans-serif',
          fontWeight: 600,
          marginBottom: '16px'
        }}>
          {title}
        </h3>
      )}
      
      {description && (
        <p style={{
          color: '#3B2E24',
          fontSize: '15px',
          lineHeight: '1.8',
          marginBottom: '32px'
        }}>
          {description}
        </p>
      )}

      <div style={{
        backgroundColor: 'rgba(248, 246, 255, 0.6)',
        border: '1px solid rgba(172, 139, 255, 0.2)',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{
          backgroundColor: 'transparent',
          overflow: 'hidden',
          borderRadius: '8px'
        }}>
          <ImageWithFallback
            src={imageUrl}
            alt="Service blueprint showing user journey, front-stage, and back-stage interactions"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </div>
      </div>

      {caption && (
        <p style={{
          color: '#666666',
          fontSize: '13px',
          fontStyle: 'italic',
          marginTop: '16px',
          textAlign: 'center',
          lineHeight: '1.5'
        }}>
          {caption}
        </p>
      )}
    </motion.div>
  );
}
