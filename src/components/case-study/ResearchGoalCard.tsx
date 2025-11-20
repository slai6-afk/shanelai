import { motion } from 'motion/react';
import { Target } from 'lucide-react';

interface ResearchGoalCardProps {
  title: string;
  goal: string;
  hypothesis: string;
  index?: number;
}

export function ResearchGoalCard({ title, goal, hypothesis, index = 0 }: ResearchGoalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(2.5px)',
        border: '1px solid rgba(229, 102, 65, 0.1)',
        borderRadius: '16px',
        padding: '32px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
        marginBottom: '24px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <div style={{
          backgroundColor: '#E56641',
          borderRadius: '10px',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Target size={20} color="#FFFFFF" />
        </div>
        <h3 style={{
          color: '#AE8EFF',
          fontSize: '20px',
          fontFamily: 'MuseoModerno, sans-serif',
          fontWeight: 600,
          margin: 0
        }}>
          {title}
        </h3>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p style={{
          color: '#482D18',
          fontSize: '12px',
          fontFamily: 'MuseoModerno, sans-serif',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: '8px'
        }}>
          Research Goal
        </p>
        <p style={{
          color: '#3B2E24',
          fontSize: '15px',
          lineHeight: '1.8',
          margin: 0
        }}>
          {goal}
        </p>
      </div>

      <div>
        <p style={{
          color: '#482D18',
          fontSize: '12px',
          fontFamily: 'MuseoModerno, sans-serif',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: '8px'
        }}>
          Hypothesis
        </p>
        <p style={{
          color: '#3B2E24',
          fontSize: '15px',
          lineHeight: '1.8',
          margin: 0
        }}>
          {hypothesis}
        </p>
      </div>
    </motion.div>
  );
}
