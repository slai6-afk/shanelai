import type { CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { VECTOR, VECTOR_VIEWBOX, type VectorName } from '../vector-decor';

export type AboutStickerMotion = {
  /** Hidden / idle rotation (deg), signed */
  restRotateDeg?: number;
  /** Shown rotation (deg) — use mixed signs across stickers for 错落 */
  hoverRotateDeg?: number;
  /** Vertical offset before pop (px) */
  restOffsetY?: number;
  /** Horizontal nudge vs center (px), rest state */
  restNudgeX?: number;
  /** Horizontal nudge when shown (px) */
  hoverNudgeX?: number;
};

type AboutStickerSpanProps = {
  children: React.ReactNode;
  stickerSrc: string;
  stickerLabel: string;
  motion?: AboutStickerMotion;
  /** SVG scribble behind text — same as WordBackdropDecor */
  highlightVector?: VectorName;
  /** When false, label is plain text only (no scribble mask). */
  vectorHighlight?: boolean;
  /** Width of the floating PNG sticker — passed to `--about-sticker-pop-width` */
  stickerWidth?: string;
  /** When set, the sticker acts as an in-app link (e.g. portfolio case study). */
  linkTo?: string;
};

const defaultMotion: Required<AboutStickerMotion> = {
  restRotateDeg: 4,
  hoverRotateDeg: -14,
  restOffsetY: 11,
  restNudgeX: 0,
  hoverNudgeX: 0,
};

function motionVars(m?: AboutStickerMotion): CSSProperties {
  const m0 = { ...defaultMotion, ...m };
  return {
    '--about-sticker-r0': `${m0.restRotateDeg}deg`,
    '--about-sticker-r1': `${m0.hoverRotateDeg}deg`,
    '--about-sticker-y0': `${m0.restOffsetY}px`,
    '--about-sticker-x0': `${m0.restNudgeX}px`,
    '--about-sticker-x1': `${m0.hoverNudgeX}px`,
  } as CSSProperties;
}

/**
 * Hover / focus sticker above the phrase — optional vector highlight + PNG; rotation via `motion` for variety.
 */
export function AboutStickerSpan({
  children,
  stickerSrc,
  stickerLabel,
  motion,
  highlightVector = 'highlight2',
  vectorHighlight = true,
  stickerWidth,
  linkTo,
}: AboutStickerSpanProps) {
  const rootStyle = {
    ...motionVars(motion),
    ...(stickerWidth ? ({ '--about-sticker-pop-width': stickerWidth } as CSSProperties) : {}),
  };

  let label: ReactNode;
  if (vectorHighlight) {
    const [vw, vh] = VECTOR_VIEWBOX[highlightVector];
    const src = VECTOR[highlightVector];
    label = (
      <span className="about-sticker-span__text vector-word-backdrop relative inline-block align-baseline">
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
  } else {
    label = (
      <span className="about-sticker-span__text about-sticker-span__label relative inline-block align-baseline">
        <span className="relative z-[1]">{children}</span>
      </span>
    );
  }

  const sticker = (
    <span className="about-sticker-span__sticker" aria-hidden>
      <img src={stickerSrc} alt="" className="about-sticker-span__sticker-img" loading="lazy" decoding="async" />
    </span>
  );

  const className = `about-sticker-span${vectorHighlight ? '' : ' about-sticker-span--no-vector'}`.trim();

  if (linkTo) {
    return (
      <Link to={linkTo} className={className} style={rootStyle} aria-label={stickerLabel}>
        {label}
        {sticker}
      </Link>
    );
  }

  return (
    <span className={className} style={rootStyle} tabIndex={0} aria-label={stickerLabel}>
      {label}
      {sticker}
    </span>
  );
}
