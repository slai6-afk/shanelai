import { motion } from 'motion/react';

export function AccessibilityDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        backgroundColor: '#f5f4f2',
        padding: '64px 40px',
        borderRadius: '8px',
        margin: '32px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* Headline */}
      <div style={{ 
        maxWidth: '600px', 
        width: '100%', 
        marginBottom: '48px',
        textAlign: 'left'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#000000'
          }} />
          <h4 style={{ 
            color: '#333333', 
            fontSize: '15px', 
            fontWeight: 500,
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif',
            letterSpacing: '-0.01em'
          }}>
            Commitment to Accessibility → Enablement through Inclusive Design
          </h4>
        </div>
      </div>

      {/* Diagram */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: '48px',
        padding: '40px 20px'
      }}>
        <svg width="500" height="360" viewBox="0 0 500 360" style={{ maxWidth: '100%', height: 'auto' }}>
          {/* Mobility Circle - Left */}
          <circle
            cx="180"
            cy="180"
            r="100"
            fill="rgba(0, 0, 0, 0.02)"
            stroke="#999999"
            strokeWidth="1"
          />
          <text
            x="120"
            y="130"
            fontSize="15"
            fontWeight="400"
            fill="#333333"
            textAnchor="middle"
            fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif"
          >
            Mobility
          </text>

          {/* Age Circle - Right */}
          <circle
            cx="320"
            cy="180"
            r="100"
            fill="rgba(0, 0, 0, 0.02)"
            stroke="#999999"
            strokeWidth="1"
          />
          <text
            x="380"
            y="130"
            fontSize="15"
            fontWeight="400"
            fill="#333333"
            textAnchor="middle"
            fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif"
          >
            Age
          </text>

          {/* Disability Circle - Top */}
          <circle
            cx="250"
            cy="130"
            r="100"
            fill="rgba(0, 0, 0, 0.02)"
            stroke="#999999"
            strokeWidth="1"
          />
          <text
            x="250"
            y="60"
            fontSize="15"
            fontWeight="400"
            fill="#333333"
            textAnchor="middle"
            fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif"
          >
            Disability
          </text>

          {/* Center intersection - Enablement */}
          <circle
            cx="250"
            cy="170"
            r="40"
            fill="rgba(0, 0, 0, 0.04)"
          />
          <text
            x="250"
            y="177"
            fontSize="17"
            fontWeight="600"
            fill="#000000"
            textAnchor="middle"
            fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif"
            letterSpacing="-0.02em"
          >
            Enablement
          </text>
        </svg>
      </div>

      {/* Caption */}
      <div style={{ 
        maxWidth: '560px', 
        width: '100%',
        textAlign: 'center'
      }}>
        <p style={{ 
          color: '#666666', 
          fontSize: '14px', 
          fontWeight: 400, 
          lineHeight: '1.7',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif',
          letterSpacing: '-0.005em'
        }}>
          "Accessibility is not a one-time checklist—it's an ongoing commitment to ensuring that technology serves everyone, regardless of mobility, disability, age, or capability."
        </p>
      </div>
    </motion.div>
  );
}
