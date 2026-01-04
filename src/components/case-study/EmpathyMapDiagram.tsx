import { motion } from 'motion/react';
import { MessageCircle, Brain, Heart, TrendingUp } from 'lucide-react';

interface EmpathyMapData {
  says: string[];
  thinks: string[];
  feels: string[];
  does: string[];
}

interface EmpathyMapDiagramProps {
  personaName: string;
  data: EmpathyMapData;
}

export function EmpathyMapDiagram({ personaName, data }: EmpathyMapDiagramProps) {
  const quadrants = [
    { key: 'says', label: 'Says', icon: MessageCircle, color: '#E56641', data: data.says },
    { key: 'thinks', label: 'Thinks', icon: Brain, color: '#ED964F', data: data.thinks },
    { key: 'feels', label: 'Feels', icon: Heart, color: '#AE8EFF', data: data.feels },
    { key: 'does', label: 'Does', icon: TrendingUp, color: '#795337', data: data.does }
  ];

  return (
    <div style={{ marginBottom: '40px' }}>
      <motion.h4
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          color: '#AE8EFF',
          fontSize: '18px',
          fontFamily: 'MuseoModerno, sans-serif',
          fontWeight: 600,
          textAlign: 'center',
          marginBottom: '24px'
        }}
      >
        Empathy Map: {personaName}
      </motion.h4>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px'
      }}>
        {quadrants.map((quadrant, index) => {
          const IconComponent = quadrant.icon;
          return (
            <motion.div
              key={quadrant.key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundColor: '#FFFFFF',
                border: `2px solid ${quadrant.color}20`,
                borderRadius: '12px',
                padding: '20px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top colored bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                backgroundColor: quadrant.color
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: `${quadrant.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <IconComponent size={16} color={quadrant.color} />
                </div>
                <h5 style={{
                  color: quadrant.color,
                  fontSize: '14px',
                  fontFamily: 'MuseoModerno, sans-serif',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  margin: 0
                }}>
                  {quadrant.label}
                </h5>
              </div>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                {quadrant.data.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                    style={{
                      color: '#3B2E24',
                      fontSize: '13px',
                      lineHeight: '1.6',
                      paddingLeft: '16px',
                      position: 'relative'
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '7px',
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      backgroundColor: quadrant.color,
                      opacity: 0.6
                    }} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
