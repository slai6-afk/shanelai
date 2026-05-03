import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface PremiumCursorProps {
  /** Only show cursor when hovering over elements with this class */
  targetSelector?: string;
}

export function PremiumCursor({ targetSelector = '.home-selected-work' }: PremiumCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over target elements
      const target = e.target as HTMLElement;
      const isOverTarget = target.closest(targetSelector) !== null;
      setIsHovering(isOverTarget);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [targetSelector]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="premium-cursor-ring"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          border: '2px solid rgba(255, 109, 0, 0.8)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          mixBlendMode: 'difference',
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="premium-cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 35,
          mass: 0.3,
        }}
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          backgroundColor: isHovering ? '#FF6D00' : '#00D5DD',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10001,
          boxShadow: isHovering
            ? '0 0 20px rgba(255, 109, 0, 0.6), 0 0 40px rgba(255, 109, 0, 0.3)'
            : '0 0 15px rgba(0, 213, 221, 0.5)',
        }}
      />
    </>
  );
}
