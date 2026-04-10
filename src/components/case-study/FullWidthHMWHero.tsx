import { motion } from 'motion/react';
import { forwardRef } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface FullWidthHMWHeroProps {
  imageSrc: string;
  imageAlt: string;
  heading?: string;
  question: string;
  overlayOpacity?: number;
}

export const FullWidthHMWHero = forwardRef<HTMLElement, FullWidthHMWHeroProps>(({
  imageSrc,
  imageAlt,
  heading = 'How Might We…',
  question,
  overlayOpacity = 0.4
}, ref) => {
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      style={{
        position: 'relative',
        height: '75vh',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginTop: '0',
        marginBottom: '0',
        width: '100%',
        margin: '0 auto',
        borderRadius: '16px'
      }}
    >
      {/* Background Image with Parallax */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      >
        <ImageWithFallback
          src={imageSrc}
          alt={imageAlt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: `rgba(0,0,0,${overlayOpacity})`,
            zIndex: 1
          }}
        />
      </div>

      {/* Gradient Overlay via CSS ::before */}

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        padding: '80px 24px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          <h3 style={{
            color: '#FFFFFF',
            fontSize: 'var(--type-l3)',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '24px',
            opacity: 0.9
          }}>
            {heading}
          </h3>
          <p style={{
            color: '#FFFFFF',
            fontSize: 'clamp(var(--type-l4), 3.5vw, var(--type-l5))',
            fontWeight: 400,
            lineHeight: '1.4',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            {question}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
});

