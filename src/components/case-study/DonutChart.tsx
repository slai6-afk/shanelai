import { motion } from 'motion/react';

interface DonutChartProps {
  percentage: number;
  title: string;
  subtitle: string;
  accentColor?: string;
}

export function DonutChart({ percentage, title, subtitle, accentColor = '#FF7A00' }: DonutChartProps) {
  const size = 200;
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{ position: 'relative', width: size, height: size, marginBottom: '24px' }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#e5e5e5"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={accentColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
          />
        </svg>
        {/* Center text */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '48px',
            fontWeight: 700,
            color: accentColor,
            lineHeight: '1'
          }}>
            {percentage}%
          </div>
        </div>
      </div>
      <h4 style={{
        color: '#000000',
        fontSize: '20px',
        fontWeight: 500,
        marginBottom: '8px',
        textAlign: 'center'
      }}>
        {title}
      </h4>
      <p style={{
        color: '#666666',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '1.6',
        textAlign: 'center',
        maxWidth: '300px'
      }}>
        {subtitle}
      </p>
    </motion.div>
  );
}

