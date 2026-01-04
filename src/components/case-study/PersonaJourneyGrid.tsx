import { motion } from 'motion/react';

interface JourneyStage {
  goalAction: string;
  painPoint: string;
  touchpoint: string;
  opportunity: string;
}

interface PersonaJourneyData {
  name: string;
  role: string;
  age: number;
  avatarSrc: string;
  accentColor: string;
  backgroundColor: string;
  journey: JourneyStage;
}

interface PersonaJourneyGridProps {
  personas: PersonaJourneyData[];
}

export function PersonaJourneyGrid({ personas }: PersonaJourneyGridProps) {
  return (
    <div style={{ 
      marginBottom: '60px',
      position: 'relative'
    }}>
      {/* Three column grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '32px',
        position: 'relative'
      }}>
        {personas.map((persona, index) => (
          <motion.div
            key={persona.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
          >
            {/* Persona Header Card */}
            <div style={{
              backgroundColor: persona.backgroundColor,
              border: `2px solid ${persona.accentColor}20`,
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '24px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Top accent bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                backgroundColor: persona.accentColor
              }} />

              {/* Avatar illustration */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px',
                marginTop: '8px'
              }}>
                <div style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: `2px solid ${persona.accentColor}30`,
                  backgroundColor: '#FFFFFF'
                }}>
                  <img
                    src={persona.avatarSrc}
                    alt={persona.name}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>

              {/* Name and role */}
              <div style={{ textAlign: 'center' }}>
                <h3 style={{
                  color: persona.accentColor,
                  fontSize: '18px',
                  fontFamily: 'MuseoModerno, sans-serif',
                  fontWeight: 600,
                  marginBottom: '8px'
                }}>
                  {persona.name}
                </h3>
                <p style={{
                  color: '#666666',
                  fontSize: '13px',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  {persona.role} • Age {persona.age}
                </p>
              </div>
            </div>

            {/* Journey stages - vertically stacked */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              flex: 1
            }}>
              {/* Goal/Action */}
              <JourneyStageBlock
                label="Goal / Action"
                content={persona.journey.goalAction}
                accentColor={persona.accentColor}
                index={0}
              />

              {/* Pain Point */}
              <JourneyStageBlock
                label="Pain Point"
                content={persona.journey.painPoint}
                accentColor={persona.accentColor}
                index={1}
              />

              {/* Touchpoint */}
              <JourneyStageBlock
                label="Touchpoint"
                content={persona.journey.touchpoint}
                accentColor={persona.accentColor}
                index={2}
              />

              {/* Opportunity */}
              <JourneyStageBlock
                label="Opportunity"
                content={persona.journey.opportunity}
                accentColor={persona.accentColor}
                index={3}
              />
            </div>

            {/* Connecting arrow to next persona (not on last column) */}
            {index < personas.length - 1 && (
              <svg
                style={{
                  position: 'absolute',
                  right: '-32px',
                  top: '50%',
                  width: '32px',
                  height: '200px',
                  pointerEvents: 'none',
                  opacity: 0.3,
                  transform: 'translateY(-50%)'
                }}
                viewBox="0 0 32 200"
              >
                <defs>
                  <marker
                    id={`arrow-${index}`}
                    markerWidth="10"
                    markerHeight="10"
                    refX="5"
                    refY="3"
                    orient="auto"
                    markerUnits="strokeWidth"
                  >
                    <path d="M0,0 L0,6 L9,3 z" fill={persona.accentColor} />
                  </marker>
                </defs>
                <path
                  d="M 2 100 Q 16 100 30 100"
                  stroke={persona.accentColor}
                  strokeWidth="1.5"
                  strokeDasharray="4,4"
                  fill="none"
                  markerEnd={`url(#arrow-${index})`}
                />
              </svg>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Journey stage block component
function JourneyStageBlock({ 
  label, 
  content, 
  accentColor,
  index 
}: { 
  label: string; 
  content: string; 
  accentColor: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      style={{
        backgroundColor: '#FFFFFF',
        border: `1px solid ${accentColor}15`,
        borderRadius: '12px',
        padding: '16px',
        position: 'relative',
        borderLeft: `3px solid ${accentColor}`,
        minHeight: '90px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <p style={{
        color: accentColor,
        fontSize: '11px',
        fontFamily: 'MuseoModerno, sans-serif',
        fontWeight: 600,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        marginBottom: '10px'
      }}>
        {label}
      </p>
      <p style={{
        color: '#3B2E24',
        fontSize: '13px',
        lineHeight: '1.6',
        margin: 0,
        flex: 1
      }}>
        {content}
      </p>
    </motion.div>
  );
}
