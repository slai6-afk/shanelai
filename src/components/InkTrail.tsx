import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface InkDot {
  id: number;
  x: number;
  y: number;
}

export function InkTrail() {
  const [dots, setDots] = useState<InkDot[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newDot: InkDot = {
        id: idRef.current++,
        x: e.clientX,
        y: e.clientY,
      };

      setDots((prev) => [...prev, newDot]);

      // Remove dot after 1 second
      setTimeout(() => {
        setDots((prev) => prev.filter((dot) => dot.id !== newDot.id));
      }, 1000);
    };

    // Throttle mouse events to avoid too many dots
    let lastTime = 0;
    const throttledMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime > 50) {
        lastTime = now;
        handleMouseMove(e);
      }
    };

    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            initial={{ 
              opacity: 0.3, 
              scale: 1,
              x: dot.x - 4,
              y: dot.y - 4
            }}
            animate={{ 
              opacity: 0, 
              scale: 1.5,
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            style={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 167, 137, 0.6) 0%, rgba(255, 167, 137, 0) 70%)',
              pointerEvents: 'none',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
