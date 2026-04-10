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
        className="project-card-vector"
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
          backgroundColor: 'var(--ds-bg-surface)',
          border: '1px solid var(--ds-border-subtle)',
          padding: '32px',
          borderRadius: '20px',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div style={{
          fontSize: 'var(--type-l6)',
          fontWeight: 600,
          color: 'var(--ds-accent-case)',
          marginBottom: '16px',
          lineHeight: '1'
        }}>
          {number}
        </div>

        <h3 style={{ 
          color: 'var(--ds-text-primary)',
          fontSize: 'var(--type-l4)',
          fontWeight: 500,
          marginBottom: '12px',
          lineHeight: '1.4'
        }}>
          {title}
        </h3>

        <p style={{
          color: 'var(--ds-text-secondary)',
          fontSize: 'var(--type-l3)',
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
      className="project-card-vector"
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
        backgroundColor: 'var(--ds-bg-surface)',
        border: '1px solid var(--ds-border-subtle)',
        padding: '32px',
        borderRadius: '20px',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      {/* Title */}
      <h3 style={{ 
        color: 'var(--ds-text-primary)',
        fontSize: 'var(--type-l4)',
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
          backgroundColor: 'var(--ds-bg-page)',
          borderLeft: '3px solid var(--ds-text-primary)',
          borderRadius: '8px'
        }}>
          <p style={{
            color: 'var(--ds-text-secondary)',
            fontSize: 'var(--type-l2)',
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
            color: 'var(--ds-text-primary)',
            fontSize: 'var(--type-l2)',
            fontWeight: 500,
            marginBottom: '8px'
          }}>
            Recommendation
          </p>
          <p style={{
            color: 'var(--ds-text-secondary)',
            fontSize: 'var(--type-l2)',
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
            color: 'var(--ds-text-primary)',
            fontSize: 'var(--type-l2)',
            fontWeight: 500,
            marginBottom: '8px'
          }}>
            Expected Impact
          </p>
          <p style={{
            color: 'var(--ds-text-secondary)',
            fontSize: 'var(--type-l2)',
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
            color: 'var(--ds-bg-surface)',
            fontSize: 'var(--type-l1)',
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
            color: 'var(--ds-bg-surface)',
            fontSize: 'var(--type-l1)',
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
            color: 'var(--ds-bg-surface)',
            fontSize: 'var(--type-l1)',
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
