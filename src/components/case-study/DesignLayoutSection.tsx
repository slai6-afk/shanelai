import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface DesignLayoutSectionProps {
  conceptImageUrl: string;
  prototypeImageUrl: string;
  conceptTitle?: string;
  prototypeTitle?: string;
  conceptAnnotation?: string;
  prototypeAnnotation?: string;
  contextNote?: string;
}

export function DesignLayoutSection({ 
  conceptImageUrl,
  prototypeImageUrl,
  conceptTitle = "1. Early Concept Mapping",
  prototypeTitle = "2. Testing Cognitive Path Interaction",
  conceptAnnotation,
  prototypeAnnotation,
  contextNote
}: DesignLayoutSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ marginTop: '64px', marginBottom: '64px' }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2 style={{
          color: '#000000',
          fontSize: '32px',
          fontWeight: 400,
          marginBottom: '16px'
        }}>
          Design Layout: From Concept to Prototype
        </h2>
        <p style={{
          color: '#666666',
          fontSize: '16px',
          lineHeight: '1.8',
          maxWidth: '720px',
          margin: '0 auto'
        }}>
          This stage explores how user insights were translated into spatial interaction design — from early sketches to mixed reality implementation.
        </p>
      </div>

      {/* Visual Flow Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '40px',
        marginBottom: '40px',
        position: 'relative'
      }}>
        {/* Concept Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative' }}
        >
          <div style={{
            backgroundColor: 'rgba(248, 246, 255, 0.6)',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(172, 139, 255, 0.15)',
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.06)',
            position: 'relative'
          }}>
            {/* Floating Label */}
            <div style={{
              position: 'absolute',
              top: '-12px',
              left: '24px',
              backgroundColor: '#AC8BFF',
              color: 'white',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontFamily: 'MuseoModerno, sans-serif',
              fontWeight: 600,
              boxShadow: '0px 2px 8px rgba(172, 139, 255, 0.4)',
              zIndex: 1
            }}>
              {conceptTitle}
            </div>

            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: 'white',
              marginTop: '12px'
            }}>
              <ImageWithFallback
                src={conceptImageUrl}
                alt="Early concept sketch showing system architecture and user journey"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>

            {conceptAnnotation && (
              <p style={{
                color: '#AC8BFF',
                fontSize: '13px',
                lineHeight: '1.6',
                marginTop: '16px',
                fontStyle: 'italic',
                textAlign: 'center',
                margin: '16px 0 0'
              }}>
                {conceptAnnotation}
              </p>
            )}
          </div>
        </motion.div>

        {/* Arrow Connector - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            display: 'none'
          }}
          className="arrow-connector"
        >
        </motion.div>

        {/* Prototype Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          <div style={{
            backgroundColor: 'rgba(255, 249, 245, 0.6)',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(229, 102, 65, 0.15)',
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.06)',
            position: 'relative'
          }}>
            {/* Floating Label */}
            <div style={{
              position: 'absolute',
              top: '-12px',
              left: '24px',
              backgroundColor: '#E56641',
              color: 'white',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontFamily: 'MuseoModerno, sans-serif',
              fontWeight: 600,
              boxShadow: '0px 2px 8px rgba(229, 102, 65, 0.4)',
              zIndex: 1
            }}>
              {prototypeTitle}
            </div>

            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: 'white',
              marginTop: '12px'
            }}>
              <ImageWithFallback
                src={prototypeImageUrl}
                alt="HoloLens interface showing three game activities: Scanning, Friend Hunt, and Essential Explorer"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>

            {prototypeAnnotation && (
              <p style={{
                color: '#E56641',
                fontSize: '13px',
                lineHeight: '1.6',
                marginTop: '16px',
                fontStyle: 'italic',
                textAlign: 'center',
                margin: '16px 0 0'
              }}>
                {prototypeAnnotation}
              </p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Contextual Note */}
      {contextNote && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            backgroundColor: 'rgba(172, 139, 255, 0.08)',
            border: '1px solid rgba(172, 139, 255, 0.2)',
            borderRadius: '12px',
            padding: '24px 32px',
            marginTop: '48px'
          }}
        >
          <p style={{
            color: '#482D18',
            fontSize: '15px',
            lineHeight: '1.8',
            textAlign: 'center',
            margin: 0
          }}>
            {contextNote}
          </p>
        </motion.div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .arrow-connector {
            display: flex !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
