import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    // Detect interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.hasAttribute('data-interactive') ||
        target.classList.contains('cursor-pointer') ||
        target.style.cursor === 'pointer';
      
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[10000] transition-all duration-200 ease-out"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Cursor dot - black by default, orange on hover */}
        <div
          className={`absolute w-3 h-3 rounded-full transition-all duration-200 ${
            isHovering ? 'bg-orange-500 scale-125' : 'bg-black'
          }`}
          style={{
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
          }}
        />
      </div>
    </>
  );
}
