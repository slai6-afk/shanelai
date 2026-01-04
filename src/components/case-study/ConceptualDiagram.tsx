import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ConceptualDiagramProps {
  title: string;
  description?: string;
  imageUrl: string;
  caption?: string;
  highlightText?: string;
}

export function ConceptualDiagram({ 
  title, 
  description, 
  imageUrl, 
  caption,
  highlightText
}: ConceptualDiagramProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ marginTop: '56px', marginBottom: '48px' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h3 style={{
          color: '#AE8EFF',
          fontSize: '24px',
          fontFamily: 'MuseoModerno, sans-serif',
          fontWeight: 600,
          marginBottom: '12px'
        }}>
          {title}
        </h3>
        {description && (
          <p style={{
            color: '#666666',
            fontSize: '15px',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            {description}
          </p>
        )}
      </div>

      {highlightText && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: 'rgba(172, 139, 255, 0.08)',
            border: '1px solid rgba(172, 139, 255, 0.2)',
            borderRadius: '12px',
            padding: '16px 24px',
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}
        >
          <p style={{
            color: '#AC8BFF',
            fontSize: '14px',
            fontStyle: 'italic',
            textAlign: 'center',
            lineHeight: '1.6',
            margin: 0
          }}>
            {highlightText}
          </p>
        </motion.div>
      )}

      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '32px',
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.06)',
        border: '1px solid rgba(172, 139, 255, 0.1)'
      }}>
        <div style={{
          maxWidth: '100%',
          overflow: 'hidden',
          borderRadius: '12px',
          backgroundColor: '#fafafa'
        }}>
          <ImageWithFallback
            src={imageUrl}
            alt={title}
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
