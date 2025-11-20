import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface JourneyStep {
  title: string;
  image: string;
  tempBefore: number;
  tempAfter: number;
  quote?: string;
}

interface JourneyScrollSectionProps {
  steps: JourneyStep[];
}

export function JourneyScrollSection({ steps }: JourneyScrollSectionProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '32px',
        overflowX: 'auto',
        paddingBottom: '24px',
        scrollSnapType: 'x mandatory'
      }}
      className="scrollbar-hide"
    >
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          style={{
            minWidth: '320px',
            maxWidth: '380px',
            flex: '0 0 auto',
            scrollSnapAlign: 'start',
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.06)'
          }}
        >
          <div style={{ position: 'relative', paddingTop: '75%', overflow: 'hidden' }}>
            <ImageWithFallback
              src={step.image}
              alt={step.title}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          <div style={{ padding: '24px' }}>
            <h4
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#000000',
                marginBottom: '16px'
              }}
            >
              {step.title}
            </h4>

            {/* Temperature Chart */}
            <div style={{ marginBottom: '16px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '8px'
                }}
              >
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#94C9FF'
                  }}
                />
                <span style={{ fontSize: '13px', color: '#666666' }}>Before: {step.tempBefore}°C</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#FFB394'
                  }}
                />
                <span style={{ fontSize: '13px', color: '#666666' }}>After: {step.tempAfter}°C</span>
              </div>
            </div>

            {step.quote && (
              <div
                style={{
                  marginTop: '16px',
                  padding: '12px 16px',
                  backgroundColor: 'rgba(179, 178, 255, 0.08)',
                  borderLeft: '3px solid #B3B2FF',
                  borderRadius: '4px'
                }}
              >
                <p
                  style={{
                    fontSize: '14px',
                    fontStyle: 'italic',
                    color: '#333333',
                    lineHeight: '1.6'
                  }}
                >
                  "{step.quote}"
                </p>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
