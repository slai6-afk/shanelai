import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface TakeoutMapSectionProps {
  mainImageUrl: string;
  title?: string;
  introText?: string;
  closingText?: string;
}

export function TakeoutMapSection({
  mainImageUrl,
  title = "Take-out Map",
  introText = "Transforming cognitive navigation data into a tangible, everyday tool — the take-out map bridges digital insights with physical wayfinding, helping elderly users maintain independence through familiar spatial landmarks.",
  closingText = "By externalizing memory into a physical artifact, we reduce cognitive load while preserving dignity and autonomy."
}: TakeoutMapSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        marginTop: '80px',
        marginBottom: '80px'
      }}
    >
      {/* Section Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h3 style={{
          color: '#000000',
          fontSize: '32px',
          marginBottom: '20px'
        }}>
          {title}
        </h3>
        <p style={{
          color: '#666666',
          fontSize: '15px',
          lineHeight: '1.8',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          {introText}
        </p>
      </div>

      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          marginBottom: '40px',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0px 6px 24px rgba(0, 0, 0, 0.1)',
          maxWidth: '1000px',
          width: '100%'
        }}>
          <ImageWithFallback
            src={mainImageUrl}
            alt="Take-out map showing physical navigation aid with dot stickers, institutions, and reminder cards"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '8px'
            }}
          />
        </div>
      </motion.div>

      {/* Closing Reflection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          backgroundColor: 'rgba(172, 139, 255, 0.06)',
          border: '1px solid rgba(172, 139, 255, 0.15)',
          borderRadius: '12px',
          padding: '24px 32px',
          maxWidth: '800px',
          margin: '0 auto'
        }}
      >
        <p style={{
          color: '#482D18',
          fontSize: '15px',
          lineHeight: '1.8',
          textAlign: 'center',
          margin: 0,
          fontStyle: 'italic'
        }}>
          {closingText}
        </p>
      </motion.div>
    </motion.div>
  );
}
