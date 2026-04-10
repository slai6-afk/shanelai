import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Cursor behavior (fine pointer only, respects prefers-reduced-motion):
 * - Default: native OS cursor (arrow) — no overlay, no cursor:none.
 * - Interactive (links, buttons, pointer/grab, etc.): 👀 follows the pointer; body gets `site-cursor-eyes` to hide the system cursor only in this state.
 * - Text fields / contenteditable: native text cursor; no 👀.
 */

const TEXT_INPUT_TYPES = new Set([
  'text',
  'search',
  'email',
  'password',
  'url',
  'tel',
  'number',
  '',
]);

function isTextInputElement(el: Element | null): boolean {
  if (!el || !(el instanceof HTMLElement)) return false;
  if (el.isContentEditable) return true;
  const tag = el.tagName;
  if (tag === 'TEXTAREA' || tag === 'SELECT') return true;
  if (tag !== 'INPUT') return false;
  const type = ((el as HTMLInputElement).type || 'text').toLowerCase();
  return TEXT_INPUT_TYPES.has(type);
}

function isInteractiveElement(el: Element | null): boolean {
  if (!el || !(el instanceof HTMLElement)) return false;
  let node: HTMLElement | null = el;
  while (node) {
    const tag = node.tagName;
    if (tag === 'A' && node.getAttribute('href')) return true;
    if (tag === 'BUTTON') return true;
    if (tag === 'SUMMARY') return true;
    if (node.getAttribute('role') === 'button') return true;
    if (node.getAttribute('data-interactive') !== null) return true;
    if (node.classList.contains('cursor-pointer')) return true;
    const cursor = window.getComputedStyle(node).cursor;
    if (cursor === 'pointer' || cursor === 'grab') return true;
    node = node.parentElement;
  }
  return false;
}

function useFinePointer() {
  const [fine, setFine] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(pointer: fine)').matches : false
  );
  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    const onChange = () => setFine(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return fine;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

export function CustomCursor() {
  const finePointer = useFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [textMode, setTextMode] = useState(false);
  const [pointerMode, setPointerMode] = useState(false);
  const rafRef = useRef<number>(0);

  const onPointerMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (isTextInputElement(el)) {
        setTextMode(true);
        setPointerMode(false);
        return;
      }
      setTextMode(false);
      setPointerMode(isInteractiveElement(el));
    });
  }, []);

  useEffect(() => {
    if (!finePointer || reducedMotion) return;
    window.addEventListener('mousemove', onPointerMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onPointerMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [finePointer, reducedMotion, onPointerMove]);

  /** Only while 👀 is shown — hide system cursor; otherwise browser default arrow. */
  useEffect(() => {
    if (!finePointer || reducedMotion) {
      document.body.classList.remove('site-cursor-eyes');
      return;
    }
    const showEyes = pointerMode && !textMode;
    document.body.classList.toggle('site-cursor-eyes', showEyes);
    return () => document.body.classList.remove('site-cursor-eyes');
  }, [finePointer, reducedMotion, pointerMode, textMode]);

  if (!finePointer || reducedMotion) return null;

  const showEyes = pointerMode && !textMode;

  if (!showEyes) return null;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[10000] select-none"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
      }}
      aria-hidden
    >
      <span
        className="block text-[1.75rem] leading-none"
        style={{ filter: 'drop-shadow(0 1px 0 rgba(255,255,255,0.85))' }}
      >
        👀
      </span>
    </div>
  );
}
