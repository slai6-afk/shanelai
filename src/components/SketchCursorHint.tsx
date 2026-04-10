import { useCallback, useEffect, useState, type MouseEvent, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { motion, useReducedMotion } from 'motion/react';
import { PenLine } from 'lucide-react';

type SketchCursorHintProps = {
  /** Short handwritten line; keep under ~72 chars for layout. */
  label: string;
  children: ReactNode;
  /** When false, renders children only (no listeners, no portal). */
  enabled?: boolean;
  offset?: { x: number; y: number };
  /** Used to keep the bubble on-screen horizontally. */
  maxWidth?: number;
  className?: string;
};

/**
 * Cursor-adjacent sketch label (portal to body so it works inside transformed parents).
 * Pointer-events stay on children only; label does not capture hover.
 */
export function SketchCursorHint({
  label,
  children,
  enabled = true,
  offset = { x: 22, y: 20 },
  maxWidth = 268,
  className = ''
}: SketchCursorHintProps) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  const move = useCallback(
    (clientX: number, clientY: number) => {
      if (typeof window === 'undefined') return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const pad = 14;
      const lineH = 44;
      let left = clientX + offset.x;
      let top = clientY + offset.y;
      left = Math.min(left, vw - maxWidth - pad);
      left = Math.max(pad, left);
      top = Math.min(top, vh - lineH - pad);
      top = Math.max(pad, top);
      setPos({ x: left, y: top });
    },
    [offset.x, offset.y, maxWidth]
  );

  const onMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      move(e.clientX, e.clientY);
    },
    [move]
  );

  useEffect(() => {
    if (!visible) return;
    const onScroll = () => setVisible(false);
    window.addEventListener('scroll', onScroll, true);
    return () => window.removeEventListener('scroll', onScroll, true);
  }, [visible]);

  if (!enabled) {
    return <>{children}</>;
  }

  const bubble = visible ? (
    <motion.div
      role="tooltip"
      aria-hidden
      className="sketch-cursor-hint sketch-cursor-hint--top pointer-events-none fixed"
      style={{
        left: pos.x,
        top: pos.y,
        maxWidth
      }}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94, rotate: -2 }}
      animate={reduceMotion ? {} : { opacity: 1, scale: 1, rotate: 0.4 }}
      transition={{ type: 'spring', stiffness: 520, damping: 28 }}
    >
      <span className="sketch-cursor-hint__inner flex items-start gap-2">
        <PenLine
          className="mt-0.5 shrink-0 opacity-[0.85]"
          size={16}
          strokeWidth={1.75}
          aria-hidden
        />
        <span className="sketch-cursor-hint__text">{label}</span>
      </span>
    </motion.div>
  ) : null;

  return (
    <div
      className={className}
      onMouseEnter={(e) => {
        setVisible(true);
        move(e.clientX, e.clientY);
      }}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={onMove}
    >
      {children}
      {typeof document !== 'undefined' && bubble ? createPortal(bubble, document.body) : null}
    </div>
  );
}
