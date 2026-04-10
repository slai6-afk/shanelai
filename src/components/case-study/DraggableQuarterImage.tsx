import { Minus, Plus } from 'lucide-react';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

type DraggableQuarterImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** CSS height for the viewport */
  viewportHeight?: string;
  /** Initial zoom (1 = previous 4×-width behavior; 0.5 = half scale → see more of image) */
  defaultZoom?: number;
};

const BASE_WIDTH_MULT = 4;
const ZOOM_MIN = 0.25;
const ZOOM_MAX = 2;
const ZOOM_STEP = 0.1;

/**
 * Pannable image: base width = viewport × 4 × zoom. Default zoom 0.5 (~50%).
 * +/- controls bottom-right.
 */
export function DraggableQuarterImage({
  src,
  alt,
  className = '',
  viewportHeight = 'min(320px, 48vw)',
  defaultZoom = 0.5,
}: DraggableQuarterImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [cw, setCw] = useState(0);
  const [ch, setCh] = useState(0);
  const [nat, setNat] = useState({ w: 0, h: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(defaultZoom);
  const posRef = useRef(pos);
  useEffect(() => {
    posRef.current = pos;
  }, [pos]);
  const dragRef = useRef<{ pid: number; sx: number; sy: number; ox: number; oy: number } | null>(null);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setCw(el.clientWidth);
      setCh(el.clientHeight);
    });
    ro.observe(el);
    setCw(el.clientWidth);
    setCh(el.clientHeight);
    return () => ro.disconnect();
  }, []);

  const imgW = cw > 0 ? cw * BASE_WIDTH_MULT * zoom : 0;
  const imgH = nat.w > 0 && cw > 0 ? (nat.h / nat.w) * imgW : 0;

  const minX = cw > 0 && imgW > cw ? cw - imgW : 0;
  const maxX = 0;
  const minY = ch > 0 && imgH > ch ? ch - imgH : 0;
  const maxY = 0;

  const clamp = useCallback(
    (x: number, y: number) => ({
      x: Math.max(minX, Math.min(maxX, x)),
      y: Math.max(minY, Math.min(maxY, y)),
    }),
    [minX, maxX, minY, maxY]
  );

  useLayoutEffect(() => {
    setPos((p) => clamp(p.x, p.y));
  }, [clamp, zoom, minX, minY, cw, ch, imgW, imgH]);

  const zoomIn = () => {
    setZoom((z) => Math.min(ZOOM_MAX, Math.round((z + ZOOM_STEP) * 100) / 100));
  };

  const zoomOut = () => {
    setZoom((z) => Math.max(ZOOM_MIN, Math.round((z - ZOOM_STEP) * 100) / 100));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    const p = posRef.current;
    dragRef.current = {
      pid: e.pointerId,
      sx: e.clientX,
      sy: e.clientY,
      ox: p.x,
      oy: p.y,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d || e.pointerId !== d.pid) return;
    const dx = e.clientX - d.sx;
    const dy = e.clientY - d.sy;
    setPos(clamp(d.ox + dx, d.oy + dy));
  };

  const endDrag = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d || e.pointerId !== d.pid) return;
    dragRef.current = null;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className={`relative w-full ${className}`.trim()}>
      <div
        ref={wrapRef}
        className="relative w-full cursor-grab touch-none overflow-hidden rounded-[20px] border-0 bg-[#0a0a0a] active:cursor-grabbing"
        style={{ height: viewportHeight }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        role="presentation"
      >
        <div
          className="absolute bottom-2 right-2 z-20 flex shrink-0 flex-col gap-1 rounded-lg border border-white/20 bg-black/40 p-1 shadow-lg backdrop-blur-sm"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/95 text-neutral-900 shadow-sm transition hover:bg-white disabled:pointer-events-none disabled:opacity-40"
            aria-label="Zoom in"
            disabled={zoom >= ZOOM_MAX - 0.001}
            onClick={zoomIn}
          >
            <Plus size={18} strokeWidth={2} className="text-neutral-900" />
          </button>
          <button
            type="button"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/95 text-neutral-900 shadow-sm transition hover:bg-white disabled:pointer-events-none disabled:opacity-40"
            aria-label="Zoom out"
            disabled={zoom <= ZOOM_MIN + 0.001}
            onClick={zoomOut}
          >
            <Minus size={18} strokeWidth={2} className="text-neutral-900" />
          </button>
        </div>

        <div
          className="absolute left-0 top-0 select-none"
          style={{
            transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
            willChange: 'transform',
          }}
        >
          <img
            src={src}
            alt={alt}
            draggable={false}
            className="block h-auto max-w-none"
            style={cw > 0 ? { width: `${cw * BASE_WIDTH_MULT * zoom}px` } : { width: '100%', opacity: 0 }}
            onLoad={(e) => {
              const im = e.currentTarget;
              setNat({ w: im.naturalWidth, h: im.naturalHeight });
            }}
          />
        </div>
      </div>
    </div>
  );
}
