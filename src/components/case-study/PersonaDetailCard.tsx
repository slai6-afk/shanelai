import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface PersonaDetailCardProps {
  name: string;
  age: number;
  role: string;
  imageUrl: string;
  quote: string;
  context: string;
  goals: string[];
  tasks: string[];
  needs: string[];
  frustrations: string[];
  index?: number;
}

export function PersonaDetailCard({
  name,
  age,
  role,
  imageUrl,
  quote,
  context,
  goals,
  tasks,
  needs,
  frustrations,
  index = 0
}: PersonaDetailCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(2.5px)',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        borderRadius: '16px',
        padding: '28px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
        height: '100%'
      }}
    >
      {/* Header with image and basic info */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '12px',
          overflow: 'hidden',
          flexShrink: 0,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
        }}>
          <ImageWithFallback
            src={imageUrl}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{
            color: '#333333',
            fontSize: '18px',
            fontFamily: 'MuseoModerno, sans-serif',
            fontWeight: 600,
            marginBottom: '4px'
          }}>
            {name}
          </h3>
          <p style={{
            color: '#E56641',
            fontSize: '13px',
            fontFamily: 'MuseoModerno, sans-serif',
            fontWeight: 500,
            marginBottom: '2px'
          }}>
            {role} · Age {age}
          </p>
          <p style={{
            color: '#666666',
            fontSize: '12px',
            lineHeight: '1.5',
            margin: 0
          }}>
            {context}
          </p>
        </div>
      </div>

      {/* Quote */}
      <div style={{
        backgroundColor: 'rgba(229, 102, 65, 0.05)',
        borderLeft: '3px solid #E56641',
        borderRadius: '4px',
        padding: '12px 16px',
        marginBottom: '20px'
      }}>
        <p style={{
          color: '#482D18',
          fontSize: '13px',
          fontStyle: 'italic',
          lineHeight: '1.6',
          margin: 0
        }}>
          "{quote}"
        </p>
      </div>

      {/* Details sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <DetailSection title="Goals" items={goals} color="#E56641" />
        <DetailSection title="Tasks" items={tasks} color="#ED964F" />
        <DetailSection title="Needs" items={needs} color="#AE8EFF" />
        <DetailSection title="Frustrations" items={frustrations} color="#795337" />
      </div>
    </motion.div>
  );
}

function DetailSection({ title, items, color }: { title: string; items: string[]; color: string }) {
  return (
    <div>
      <p style={{
        color: color,
        fontSize: '11px',
        fontFamily: 'MuseoModerno, sans-serif',
        fontWeight: 600,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        marginBottom: '8px'
      }}>
        {title}
      </p>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      }}>
        {items.map((item, idx) => (
          <li
            key={idx}
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
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: color,
              opacity: 0.5
            }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
