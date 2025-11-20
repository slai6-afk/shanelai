import { motion } from 'motion/react';

const skillsData = {
  topRight: [
    { name: 'Automation of User Testing', x: 75, y: 75 },
    { name: 'Design System Implementation', x: 65, y: 85 },
    { name: 'Commitment to Accessibility', x: 85, y: 70 }
  ],
  bottomRight: [
    { name: 'Python', x: 55, y: 25 },
    { name: 'TouchDesigner', x: 75, y: 30 },
    { name: 'Data Visualization', x: 65, y: 15 },
    { name: 'UX Analytics & AI', x: 85, y: 20 }
  ],
  topLeft: [
    { name: 'Ethical Design Practices', x: 25, y: 75 },
    { name: 'Accessibility Design', x: 15, y: 85 }
  ],
  bottomLeft: [
    { name: 'Figma', x: 20, y: 30 },
    { name: 'User-Centered Design', x: 30, y: 20 },
    { name: 'Cross-Functional Collaboration', x: 15, y: 15 }
  ]
};

const allSkills = [
  ...skillsData.topRight,
  ...skillsData.bottomRight,
  ...skillsData.topLeft,
  ...skillsData.bottomLeft
];

export function SkillChart() {
  const width = 800;
  const height = 600;
  const padding = 80;
  
  // Convert percentage to SVG coordinates
  const toSvgX = (percent: number) => padding + (percent / 100) * (width - padding * 2);
  const toSvgY = (percent: number) => height - padding - (percent / 100) * (height - padding * 2);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        backgroundColor: '#f5f4f2',
        padding: '48px 32px',
        borderRadius: '8px',
        margin: '32px 0'
      }}
    >
      <h4 style={{ 
        color: '#d7a163', 
        fontSize: '14px', 
        fontWeight: 500, 
        marginBottom: '32px',
        textAlign: 'center',
        letterSpacing: '0.05em',
        textTransform: 'uppercase'
      }}>
        Personal Growth Map
      </h4>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        width: '100%',
        overflowX: 'auto'
      }}>
        <svg 
          width={width} 
          height={height} 
          viewBox={`0 0 ${width} ${height}`}
          style={{ maxWidth: '100%', height: 'auto' }}
        >
          {/* Subtle grid lines */}
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(215, 161, 99, 0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          
          {/* Background grid */}
          <rect 
            x={padding} 
            y={padding} 
            width={width - padding * 2} 
            height={height - padding * 2} 
            fill="url(#grid)"
          />

          {/* Center dividing lines */}
          <line 
            x1={width / 2} 
            y1={padding} 
            x2={width / 2} 
            y2={height - padding} 
            stroke="rgba(215, 161, 99, 0.25)" 
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <line 
            x1={padding} 
            y1={height / 2} 
            x2={width - padding} 
            y2={height / 2} 
            stroke="rgba(215, 161, 99, 0.25)" 
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* X-axis */}
          <line 
            x1={padding} 
            y1={height - padding} 
            x2={width - padding} 
            y2={height - padding} 
            stroke="rgba(215, 161, 99, 0.4)" 
            strokeWidth="2"
          />
          
          {/* Y-axis */}
          <line 
            x1={padding} 
            y1={padding} 
            x2={padding} 
            y2={height - padding} 
            stroke="rgba(215, 161, 99, 0.4)" 
            strokeWidth="2"
          />

          {/* Quadrant labels */}
          <text 
            x={padding + (width - padding * 2) * 0.25} 
            y={padding + 30}
            fill="rgba(215, 161, 99, 0.5)"
            fontSize="11"
            fontWeight="500"
            textAnchor="middle"
            letterSpacing="0.5"
            style={{ textTransform: 'uppercase' }}
          >
            Research + Tech
          </text>
          
          <text 
            x={padding + (width - padding * 2) * 0.75} 
            y={padding + 30}
            fill="rgba(215, 161, 99, 0.5)"
            fontSize="11"
            fontWeight="500"
            textAnchor="middle"
            letterSpacing="0.5"
            style={{ textTransform: 'uppercase' }}
          >
            Design + Research + Tech
          </text>
          
          <text 
            x={padding + (width - padding * 2) * 0.25} 
            y={height - padding - 20}
            fill="rgba(215, 161, 99, 0.5)"
            fontSize="11"
            fontWeight="500"
            textAnchor="middle"
            letterSpacing="0.5"
            style={{ textTransform: 'uppercase' }}
          >
            Core Design
          </text>
          
          <text 
            x={padding + (width - padding * 2) * 0.75} 
            y={height - padding - 20}
            fill="rgba(215, 161, 99, 0.5)"
            fontSize="11"
            fontWeight="500"
            textAnchor="middle"
            letterSpacing="0.5"
            style={{ textTransform: 'uppercase' }}
          >
            Tech-Focused
          </text>

          {/* Axis labels */}
          <text 
            x={width / 2} 
            y={height - 30}
            fill="#d7a163"
            fontSize="13"
            fontWeight="500"
            textAnchor="middle"
            letterSpacing="1"
            style={{ textTransform: 'uppercase' }}
          >
            Design → Research
          </text>
          
          <text 
            x={30} 
            y={height / 2}
            fill="#d7a163"
            fontSize="13"
            fontWeight="500"
            textAnchor="middle"
            letterSpacing="1"
            transform={`rotate(-90 30 ${height / 2})`}
            style={{ textTransform: 'uppercase' }}
          >
            Design → Technology
          </text>

          {/* Skills as labeled nodes */}
          {allSkills.map((skill, index) => {
            const cx = toSvgX(skill.x);
            const cy = toSvgY(skill.y);
            
            return (
              <g key={index}>
                {/* Dot */}
                <circle 
                  cx={cx} 
                  cy={cy} 
                  r="4" 
                  fill="#d7a163"
                  opacity="0.8"
                />
                
                {/* Background for text */}
                <rect
                  x={cx - 65}
                  y={cy - 24}
                  width="130"
                  height="20"
                  rx="4"
                  fill="rgba(255, 255, 255, 0.85)"
                  stroke="rgba(215, 161, 99, 0.2)"
                  strokeWidth="1"
                />
                
                {/* Label */}
                <text 
                  x={cx} 
                  y={cy - 10}
                  fill="#6b5d4f"
                  fontSize="12"
                  fontWeight="400"
                  textAnchor="middle"
                  style={{ 
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif'
                  }}
                >
                  {skill.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <p style={{ 
        color: 'rgba(107, 93, 79, 0.6)', 
        fontSize: '12px', 
        fontWeight: 400,
        textAlign: 'center',
        marginTop: '24px',
        fontStyle: 'italic'
      }}>
        Skills mapped across design, research, and technology dimensions
      </p>
    </motion.div>
  );
}
