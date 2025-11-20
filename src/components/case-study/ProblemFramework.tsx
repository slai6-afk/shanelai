import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProblemFrameworkProps {
  frameworkImageSrc: string;
  title?: string;
  description?: string;
}

export function ProblemFramework({ 
  frameworkImageSrc,
  title = "Core Issue",
  description
}: ProblemFrameworkProps) {
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
          marginBottom: '24px'
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
        backgroundColor: 'transparent',
        overflow: 'hidden',
        borderRadius: '8px'
      }}>
        <ImageWithFallback
          src={frameworkImageSrc}
          alt="Problem framework showing who, what, and why"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        />
      </div>
    </motion.div>
  );
}
