import type { ReactNode } from 'react';
import highlight1 from '../../assets/vector/highlight1.svg';
import highlight2 from '../../assets/vector/highlight2.svg';
import highlight3 from '../../assets/vector/highlight3.svg';
import love from '../../assets/vector/love.svg';
import up1 from '../../assets/vector/up1.svg';
import down1 from '../../assets/vector/down1.svg';
import right1 from '../../assets/vector/right1.svg';
import right2 from '../../assets/vector/right2.svg';
import right3 from '../../assets/vector/right3.svg';
import right4 from '../../assets/vector/right4.svg';

export const VECTOR = {
  highlight1,
  highlight2,
  highlight3,
  love,
  up1,
  down1,
  right1,
  right2,
  right3,
  right4,
} as const;

/** viewBox width × height — used for `aspect-ratio` when painting via CSS mask */
export const VECTOR_VIEWBOX: Record<keyof typeof VECTOR, readonly [number, number]> = {
  highlight1: [323, 122],
  highlight2: [286, 129],
  highlight3: [311, 145],
  love: [138, 123],
  up1: [127, 101],
  down1: [178, 144],
  right1: [279, 37],
  right2: [265, 107],
  right3: [436, 91],
  right4: [355, 162],
};

export type VectorName = keyof typeof VECTOR;

/** Vertical-ish flow connectors — cycle for variety (same scale, different shapes). */
export const FLOW_VERTICAL_VARIANTS: readonly VectorName[] = ['down1', 'right4', 'highlight3'];

/** Horizontal flow between items */
export const FLOW_HORIZONTAL_VARIANTS: readonly VectorName[] = ['right3', 'right2', 'right1'];

const decorBase = 'pointer-events-none select-none vector-decor';

type VectorDecorProps = {
  name: VectorName;
  className?: string;
  alt?: string;
};

/** SVG accents — tinted via `--vector-tint`; size via `vector-decor--*` classes. */
export function VectorDecor({ name, className = '', alt = '' }: VectorDecorProps) {
  const [vw, vh] = VECTOR_VIEWBOX[name];
  const src = VECTOR[name];
  return (
    <span
      className={`${decorBase} vector-decor--paint ${className}`.trim()}
      style={{
        aspectRatio: `${vw} / ${vh}`,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
      }}
      role={alt ? 'img' : 'presentation'}
      aria-label={alt || undefined}
    />
  );
}

type TextVectorMarkProps = {
  vector: VectorName;
  children: string;
  variant?: 'tight' | 'comfortable';
  className?: string;
};

/**
 * Hand-drawn mark above the phrase — unified scale site-wide (~28–32px stroke band).
 */
export function TextVectorMark({ vector, children, variant = 'comfortable', className = '' }: TextVectorMarkProps) {
  const lift = variant === 'tight' ? '-translate-y-[90%]' : '-translate-y-[100%]';
  return (
    <span className={`relative inline-block ${className}`.trim()}>
      <VectorDecor
        name={vector}
        className={`vector-decor--mark absolute left-1/2 top-0 ${lift} w-auto max-w-[min(155%,10rem)] -translate-x-1/2`}
      />
      {children}
    </span>
  );
}

type WordBackdropDecorProps = {
  vector: VectorName;
  children: string;
  className?: string;
};

/**
 * Scribble sits **behind** the word (does not participate in flex/line order).
 */
export function WordBackdropDecor({ vector, children, className = '' }: WordBackdropDecorProps) {
  const [vw, vh] = VECTOR_VIEWBOX[vector];
  const src = VECTOR[vector];
  return (
    <span className={`vector-word-backdrop relative inline-block align-baseline ${className}`.trim()}>
      <span
        aria-hidden
        className="vector-word-backdrop__img vector-decor--paint pointer-events-none select-none"
        style={{
          aspectRatio: `${vw} / ${vh}`,
          WebkitMaskImage: `url(${src})`,
          maskImage: `url(${src})`,
        }}
      />
      <span className="relative z-[1]">{children}</span>
    </span>
  );
}

type CardCornerVectorProps = {
  name: VectorName;
  className?: string;
};

export function CardCornerVector({ name, className = '' }: CardCornerVectorProps) {
  return <VectorDecor name={name} className={`vector-decor--corner absolute right-2 top-2 z-[2] ${className}`.trim()} />;
}

type VectorCardScopeProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'aside';
};

/**
 * Sets `--vector-mult` for nested vector SVGs (+50% vs page) on any surface that is not already covered by global CSS (e.g. custom card wrappers).
 */
export function VectorCardScope({ children, className = '', as: Comp = 'div' }: VectorCardScopeProps) {
  return (
    <Comp className={`vector-decor-scope--card ${className}`.trim()} data-vector-card="">
      {children}
    </Comp>
  );
}

export function pickFlowVertical(index: number): VectorName {
  return FLOW_VERTICAL_VARIANTS[((index % FLOW_VERTICAL_VARIANTS.length) + FLOW_VERTICAL_VARIANTS.length) % FLOW_VERTICAL_VARIANTS.length];
}

export function pickFlowHorizontal(index: number): VectorName {
  return FLOW_HORIZONTAL_VARIANTS[index % FLOW_HORIZONTAL_VARIANTS.length];
}
