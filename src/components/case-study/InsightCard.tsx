import { motion } from 'motion/react';
import { TrendingUp, Zap } from 'lucide-react';

interface InsightCardProps {
  number?: string;
  title: string;
  content?: string;
  evidence?: string;
  recommendation?: string;
  impact?: string;
  confidence?: 'High' | 'Medium' | 'Low';
  effort?: 'Low' | 'Medium' | 'High';
  impactLevel?: 'High' | 'Medium' | 'Low';
  index?: number;
}

export function InsightCard({
  number,
  title,
  content,
  evidence,
  recommendation,
  impact,
  confidence = 'High',
  effort = 'Medium',
  impactLevel = 'High',
  index = 0
}: InsightCardProps) {
  const confidenceColors = {
    High: '#22c55e',
    Medium: '#eab308',
    Low: '#ef4444'
  };

  const effortColors = {
    Low: '#22c55e',
    Medium: '#eab308',
    High: '#ef4444'
  };

  const impactColors = {
    High: '#22c55e',
    Medium: '#eab308',
    Low: '#ef4444'
  };

  // Simple card variant (with number and content)
  if (number && content) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ 
          y: -4,
          boxShadow: 'var(--shadow-lg)',
          transition: { duration: 0.3 }
        }}
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          padding: '32px',
          borderRadius: '20px',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div style={{
          fontSize: '48px',
          fontWeight: 600,
          color: '#ED964F',
          marginBottom: '16px',
          lineHeight: '1'
        }}>
          {number}
        </div>

        <h3 style={{ 
          color: '#000000',
          fontSize: '20px',
          fontWeight: 500,
          marginBottom: '12px',
          lineHeight: '1.4'
        }}>
          {title}
        </h3>

        <p style={{
          color: '#666666',
          fontSize: '15px',
          fontWeight: 400,
          lineHeight: '1.7'
        }}>
          {content}
        </p>
      </motion.div>
    );
  }

  // Full card variant (with evidence, recommendation, impact)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -4,
        boxShadow: 'var(--shadow-lg)',
        transition: { duration: 0.3 }
      }}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        padding: '32px',
        borderRadius: '20px',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      {/* Title */}
      <h3 style={{ 
        color: '#000000',
        fontSize: '20px',
        fontWeight: 500,
        marginBottom: '20px',
        lineHeight: '1.4'
      }}>
        {title}
      </h3>

      {/* Evidence */}
      {evidence && (
        <div style={{ 
          marginBottom: '24px',
          padding: '16px',
          backgroundColor: '#f5f5f5',
          borderLeft: '3px solid #000000',
          borderRadius: '8px'
        }}>
          <p style={{
            color: '#666666',
            fontSize: '14px',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: '1.6'
          }}>
            "{evidence}"
          </p>
        </div>
      )}

      {/* Recommendation */}
      {recommendation && (
        <div style={{ marginBottom: '20px' }}>
          <p style={{
            color: '#000000',
            fontSize: '14px',
            fontWeight: 500,
            marginBottom: '8px'
          }}>
            Recommendation
          </p>
          <p style={{
            color: '#666666',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '1.6'
          }}>
            {recommendation}
          </p>
        </div>
      )}

      {/* Expected Impact */}
      {impact && (
        <div style={{ marginBottom: '20px' }}>
          <p style={{
            color: '#000000',
            fontSize: '14px',
            fontWeight: 500,
            marginBottom: '8px'
          }}>
            Expected Impact
          </p>
          <p style={{
            color: '#666666',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '1.6'
          }}>
            {impact}
          </p>
        </div>
      )}

      {/* Tags */}
      {(evidence || recommendation || impact) && (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 12px',
            backgroundColor: confidenceColors[confidence],
            color: '#FFFFFF',
            fontSize: '11px',
            fontWeight: 500,
            borderRadius: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            <TrendingUp size={12} />
            {confidence} Confidence
          </span>
          
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 12px',
            backgroundColor: effortColors[effort],
            color: '#FFFFFF',
            fontSize: '11px',
            fontWeight: 500,
            borderRadius: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {effort} Effort
          </span>

          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 12px',
            backgroundColor: impactColors[impactLevel],
            color: '#FFFFFF',
            fontSize: '11px',
            fontWeight: 500,
            borderRadius: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            <Zap size={12} />
            {impactLevel} Impact
          </span>
        </div>
      )}
    </motion.div>
  );
}
