import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface PlatformMockup {
  title: string;
  description: string;
  imageUrl: string;
  accentColor?: string;
}

interface PlatformMockupsProps {
  platforms: PlatformMockup[];
}

export function PlatformMockups({ platforms }: PlatformMockupsProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
      marginTop: '48px',
      marginBottom: '48px'
    }}>
      {platforms.map((platform, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
            border: `1px solid ${platform.accentColor || '#AC8BFF'}20`
          }}>
            <div style={{
              padding: '24px 24px 20px',
              borderBottom: '1px solid rgba(172, 139, 255, 0.1)'
            }}>
              <h4 style={{
                color: platform.accentColor || '#AE8EFF',
                fontSize: '18px',
                fontFamily: 'MuseoModerno, sans-serif',
                fontWeight: 600,
                marginBottom: '8px'
              }}>
                {platform.title}
              </h4>
              <p style={{
                color: '#454950',
                fontSize: '12px',
                lineHeight: '1.6',
                margin: 0
              }}>
                {platform.description}
              </p>
            </div>
            
            <div style={{
              padding: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(248, 246, 255, 0.4)',
              minHeight: '280px'
            }}>
              <div style={{
                maxWidth: '100%',
                height: 'auto'
              }}>
                <ImageWithFallback
                  src={platform.imageUrl}
                  alt={`${platform.title} interface mockup`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    maxHeight: '400px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
