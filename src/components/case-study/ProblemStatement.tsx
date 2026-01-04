import { motion } from 'motion/react';

interface ProblemStatementProps {
  statement: string;
  context?: string;
  hmw?: string; // How Might We question
}

export function ProblemStatement({ statement, context, hmw }: ProblemStatementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(2.5px)',
        border: '2px solid rgba(174, 142, 255, 0.2)',
        borderRadius: '16px',
        padding: '36px 40px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.06)',
        marginTop: '32px',
        marginBottom: '48px'
      }}
    >
      {context && (
        <p style={{
          color: '#482D18',
          fontSize: '12px',
          fontFamily: 'MuseoModerno, sans-serif',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: '16px'
        }}>
          Problem Statement
        </p>
      )}
      
      <p style={{
        color: '#3B2E24',
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '1.8',
        marginBottom: hmw ? '24px' : 0
      }}>
        {statement}
      </p>

      {hmw && (
        <>
          <div style={{
            height: '1px',
            backgroundColor: 'rgba(174, 142, 255, 0.15)',
            margin: '24px 0'
          }} />
          
          <div>
            <p style={{
              color: '#AE8EFF',
              fontSize: '14px',
              fontFamily: 'MuseoModerno, sans-serif',
              fontWeight: 600,
              letterSpacing: '0.03em',
              marginBottom: '12px'
            }}>
              HOW MIGHT WE...
            </p>
            <p style={{
              color: '#482D18',
              fontSize: '17px',
              fontWeight: 500,
              lineHeight: '1.7',
              fontStyle: 'italic',
              margin: 0
            }}>
              {hmw}
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
}
