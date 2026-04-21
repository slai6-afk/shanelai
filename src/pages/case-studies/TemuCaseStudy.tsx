import { useInView } from 'motion/react';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  BarChart3,
  Headphones,
  Layers,
  MessageCircle,
  MessageSquare,
  Route,
  Sparkles,
  Target,
  TrendingDown,
  UserRound,
  Zap,
} from 'lucide-react';
import temu1 from '../../assets/temu1.png';
import temu2 from '../../assets/temu2.png';
import temuCase1 from '../../assets/temucase1.png';
import temuCase2 from '../../assets/temucase2.png';
import temuCase3 from '../../assets/temucase3.png';
import temuVideo1 from '../../assets/temuvideo1.mp4';
import temuVideo2 from '../../assets/temuvideo2.mp4';
import temuVideo3 from '../../assets/temuvideo3.mp4';
import homeVideo from '../../assets/home video.mp4';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { StickyTOC } from '../../components/case-study/StickyTOC';
import { MobileTOC } from '../../components/case-study/MobileTOC';
import { CaseStudyHero } from '../../components/case-study/CaseStudyHero';
import { VideoWhiteEdgeMask } from '../../components/case-study/MediaBox';
import { WordBackdropDecor } from '../../components/vector-decor';

/** Brand + UI — light surfaces, orange accents, dark type (aligned with site DS) */
const TEMU_ORANGE = '#FB7701';
const TEMU_ORANGE_SOFT = 'color-mix(in srgb, #FB7701 14%, white)';
const TEMU_TRACK = 'color-mix(in srgb, var(--ds-text-primary) 8%, transparent)';
const TEMU_SECTION_BLOCK_MT = 'mt-10 md:mt-10';

/** Ember @font-face only registers 400 + 700; use real Bold + this stack so caps match zone titles */
const TEMU_EMBER_BOLD =
  "font-['Ember_Modern_Display_Standard','Inter',sans-serif] font-bold";
const TEMU_KICKER_SIZE = 'text-[length:var(--type-l4)] leading-[var(--type-l4-lh)]';
const TEMU_KICKER_CAPS = `tracking-[var(--type-track-caps)] ${TEMU_KICKER_SIZE}`;
const TEMU_KICKER_STYLE = {
  fontFamily: "'Ember Modern Display Standard', 'Inter', sans-serif",
  fontSize: 'var(--type-l4)',
  fontWeight: 700,
  lineHeight: 'var(--type-l4-lh)',
  letterSpacing: 'var(--type-track-caps)',
};

const TEMU_HOVER_SOFT =
  'motion-safe:transition-[transform,box-shadow,background-color] motion-safe:duration-300 motion-safe:ease-out ' +
  'motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_20px_52px_rgba(0,0,0,0.1)] ' +
  'motion-safe:hover:bg-[color-mix(in_srgb,var(--ds-bg-surface)_94%,#FB7701)] ' +
  'motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-[0_4px_28px_rgba(0,0,0,0.07)]';

const TEMU_HOVER_ACCENT =
  'motion-safe:transition-[transform,box-shadow] motion-safe:duration-300 motion-safe:ease-out ' +
  'motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_22px_56px_rgba(251,119,1,0.22)] ' +
  'motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-[0_4px_32px_rgba(251,119,1,0.14)]';

function TemuVizTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h3
      className={`mt-5 ${TEMU_KICKER_SIZE} ${TEMU_EMBER_BOLD} tracking-[var(--type-track-tight)] text-[var(--ds-text-primary)] ${className}`.trim()}
      style={TEMU_KICKER_STYLE}
    >
      {children}
    </h3>
  );
}

function TemuOrangeCallout({ label, text }: { label: string; text: string }) {
  return (
    <div className="temu-orange-callout">
      <div className="temu-orange-callout__label-row">
        <span className="temu-orange-callout__dot" />
        <p className="temu-orange-callout__label">{label}</p>
      </div>
      <p className="temu-orange-callout__text">{text}</p>
    </div>
  );
}

/** Solid card shell: no stroke — soft shadow like Vibe Sync / FunFit zones */
function TemuSoftSurface({
  children,
  className = '',
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={`rounded-[var(--temu-radius-card)] bg-[var(--ds-bg-surface)] p-12 shadow-[0_4px_28px_rgba(0,0,0,0.07)] md:p-14 lg:px-16 lg:py-16 ${interactive ? TEMU_HOVER_SOFT : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

/** Accent card fill — class-based so `className` can override with `!bg-*` (inline style was blocking devtools/preview edits) */
const TEMU_ACCENT_CARD_FILL_CLASS = 'bg-[color-mix(in_srgb,#FB7701_14%,white)]';

function TemuAccentCard({
  children,
  className = '',
  interactive = true,
  noFill = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  /** Transparent shell — no orange fill, shadow, or border (preview: ghost card) */
  noFill?: boolean;
}) {
  return (
    <div
      className={`rounded-[var(--temu-radius-card)] ${noFill ? 'border-0 bg-transparent px-12 py-5 shadow-none md:px-14 lg:px-16' : 'p-12 md:p-14 lg:px-16 lg:py-16'} ${noFill ? '' : `${TEMU_ACCENT_CARD_FILL_CLASS} shadow-[0_4px_32px_rgba(251,119,1,0.14)] ${interactive ? TEMU_HOVER_ACCENT : ''}`} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function TemuLoopAndResearchViz() {
  const researchBars: { label: string; value: number }[] = [
    { label: '“Doesn’t understand my question”', value: 64 },
    { label: 'Repeated “try again” with no progress', value: 51 },
    { label: 'Wanted order status without typing', value: 47 },
  ];

  return (
    <div className="flex flex-col gap-14 md:gap-20">
      <TemuAccentCard noFill className="!ml-[30px] !flex !flex-col !items-center !justify-start">
        <div className="mb-12 flex flex-col items-center justify-start gap-8 text-center md:mb-14 md:flex-row md:text-left">
          <div className="flex max-w-[42ch] flex-col items-center justify-start">
            <TemuVizTitle className="!mt-5">Why People Left The Bot</TemuVizTitle>
          </div>
        </div>
        <div className="mb-2.5 mt-2.5 grid gap-6 md:grid-cols-2 md:gap-8">
          {researchBars.map((r) => (
            <figure key={r.label} className="temu-research-quote-card">
              <blockquote className="temu-research-quote-card__bubble">&quot;{r.label}&quot;</blockquote>
              <div className="temu-research-quote-card__meta">
                <span className="temu-research-quote-card__value">{r.value}%</span>
              </div>
              <div className="h-[12px] w-full overflow-hidden rounded-full bg-white/70">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${r.value}%`, background: `linear-gradient(90deg, ${TEMU_ORANGE} 0%, #ffb04d 100%)` }}
                />
              </div>
            </figure>
          ))}
        </div>
      </TemuAccentCard>
    </div>
  );
}

function TemuBentoMetrics() {
  const items: {
    icon: typeof TrendingDown;
    label: string;
    value: string;
    sub: string;
    tint: 'white' | 'orange';
  }[] = [
    {
      icon: TrendingDown,
      label: 'Agent Escalation',
      value: '<25%',
      sub: 'Target vs. 81% baseline — primary deflection KPI.',
      tint: 'orange',
    },
    {
      icon: Target,
      label: 'Drop-Off In Complex Flows',
      value: '−18%',
      sub: 'Structured hybrid CUI vs. text-wall baseline (prototype).',
      tint: 'white',
    },
    {
      icon: Zap,
      label: 'Engineering Speed',
      value: '+28%',
      sub: 'Reusable interaction primitives shipped per sprint.',
      tint: 'white',
    },
  ];

  return (
    <div className="grid gap-10 md:grid-cols-3 md:gap-12">
      {items.map(({ icon: Icon, label, value, sub, tint }) =>
        tint === 'orange' ? (
          <TemuAccentCard key={label} className="!flex min-h-[260px] flex-col justify-between">
            <div className="flex items-start justify-between gap-3">
              <Icon className="h-7 w-7 shrink-0" strokeWidth={1.5} style={{ color: TEMU_ORANGE }} />
            </div>
            <div>
              <p
                className={`text-[length:var(--type-l4)] leading-[var(--type-l4-lh)] tracking-[0.2em] text-[var(--ds-text-tertiary)] ${TEMU_EMBER_BOLD}`}
              >
                {label}
              </p>
              <p
                className="mt-4 tabular-nums font-normal leading-none tracking-[var(--type-track-tight)] text-[var(--ds-text-primary)]"
                style={{ fontSize: 'clamp(2rem, 4.5vw, var(--type-l5))' }}
              >
                {value}
              </p>
              <p className="mt-6 text-[length:var(--type-l2)] font-normal leading-[var(--type-l2-lh)] text-[var(--ds-text-secondary)]">{sub}</p>
            </div>
          </TemuAccentCard>
        ) : (
          <TemuSoftSurface key={label} className="!flex min-h-[260px] flex-col justify-between">
            <div className="flex items-start justify-between gap-3">
              <Icon className="h-7 w-7 shrink-0 text-[var(--ds-text-tertiary)]" strokeWidth={1.5} />
            </div>
            <div>
              <p
                className={`text-[length:var(--type-l4)] leading-[var(--type-l4-lh)] tracking-[0.2em] text-[var(--ds-text-tertiary)] ${TEMU_EMBER_BOLD}`}
              >
                {label}
              </p>
              <p
                className="mt-4 tabular-nums font-normal leading-none tracking-[var(--type-track-tight)]"
                style={{ color: TEMU_ORANGE, fontSize: 'clamp(2rem, 4.5vw, var(--type-l5))' }}
              >
                {value}
              </p>
              <p className="mt-6 text-[length:var(--type-l2)] font-normal leading-[var(--type-l2-lh)] text-[var(--ds-text-secondary)]">{sub}</p>
            </div>
          </TemuSoftSurface>
        )
      )}
    </div>
  );
}

/** Modular triage map: white field, orange dashed paths, obsidian-bordered bento nodes */
function TemuTriageArchitectureMap() {
  const node =
    'temu-triage-node rounded-2xl bg-white border-2 border-[#0a0a0a] shadow-[0_10px_36px_rgba(0,0,0,0.09)] transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_18px_48px_rgba(0,0,0,0.12)]';

  return (
    <div className="relative overflow-hidden rounded-[28px] border-2 border-[#0a0a0a] bg-white p-6 shadow-[0_16px_52px_rgba(0,0,0,0.08)] md:p-10">
      <div className="relative z-[1] mx-auto grid max-w-4xl grid-cols-1 gap-8 pb-10 lg:grid-cols-2 lg:gap-x-0 lg:gap-y-10">
        {/* Path A — 65% */}
        <article className="temu-triage-path-card flex flex-col gap-6 py-[30px]">
          <div className="flex items-center justify-between gap-3">
            <div className="temu-triage-path-label flex items-center gap-2 text-[var(--ds-text-tertiary)]">
              <Route className="h-4 w-4 shrink-0" strokeWidth={1.65} aria-hidden />
              <span className={`${TEMU_KICKER_CAPS} ${TEMU_EMBER_BOLD}`} style={TEMU_KICKER_STYLE}>
                Path A
              </span>
            </div>
            <span className="temu-triage-traffic-badge ml-0 rounded-full border border-black bg-[#ff6f07] px-5 py-0.5 text-[11px] font-medium tabular-nums text-[var(--ds-text-primary)]">
              <span>65%</span>
              <span>traffic</span>
            </span>
          </div>
          <div className={`${node} temu-triage-node--p0 flex flex-1 flex-col p-6 md:p-7`}>
            <div className="flex items-start gap-4">
              <div className="temu-triage-icon-shell flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-[#0a0a0a] bg-white">
                <Layers className="h-5 w-5 text-[var(--ds-text-primary)]" strokeWidth={1.65} aria-hidden />
              </div>
              <div className="min-w-0">
                <p className={`${TEMU_KICKER_CAPS} text-[var(--ds-text-tertiary)] ${TEMU_EMBER_BOLD}`} style={TEMU_KICKER_STYLE}>
                  P0
                </p>
                <p className="mt-1 text-[length:var(--type-l3)] font-normal leading-[var(--type-l3-lh)] text-[var(--ds-text-primary)]">
                  Self-service dashboard
                </p>
                <p className="mt-3 text-[length:var(--type-l2)] font-normal leading-[var(--type-l2-lh)] text-[var(--ds-text-secondary)]">
                  Redirects quick fixers to a tap-first menu — <span className="text-[var(--ds-text-primary)]">Return / Refund</span> and{' '}
                  <span className="text-[var(--ds-text-primary)]">Logistics</span>.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Path B — 35% + P1.2 stack */}
        <article className="temu-triage-path-card my-5 flex flex-col gap-6">
          <div className="flex items-center justify-between gap-3">
            <div className="temu-triage-path-label flex items-center gap-2 text-[var(--ds-text-tertiary)]">
              <Route className="h-4 w-4 shrink-0" strokeWidth={1.65} aria-hidden />
              <span className={`${TEMU_KICKER_CAPS} ${TEMU_EMBER_BOLD}`} style={TEMU_KICKER_STYLE}>
                Path B
              </span>
            </div>
            <span className="temu-triage-traffic-badge ml-0 rounded-full border border-black bg-[#ff6f07] px-5 py-0.5 text-[11px] font-medium tabular-nums text-[var(--ds-text-primary)]">
              <span>35%</span>
              <span>traffic</span>
            </span>
          </div>
          <div className={`${node} temu-triage-node--p11 p-6 md:p-7`}>
            <div className="flex items-start gap-4">
              <div className="temu-triage-icon-shell flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-[#0a0a0a] bg-white">
                <MessageSquare className="h-5 w-5 text-[var(--ds-text-primary)]" strokeWidth={1.65} aria-hidden />
              </div>
              <div className="min-w-0">
                <p className={`${TEMU_KICKER_CAPS} text-[var(--ds-text-tertiary)] ${TEMU_EMBER_BOLD}`} style={TEMU_KICKER_STYLE}>
                  P1.1
                </p>
                <p className="mt-1 text-[length:var(--type-l3)] font-normal leading-[var(--type-l3-lh)] text-[var(--ds-text-primary)]">
                  Hybrid CUI
                </p>
                <p className="mt-3 text-[length:var(--type-l2)] font-normal leading-[var(--type-l2-lh)] text-[var(--ds-text-secondary)]">
                  For complex utterances — trigger the <span className="text-[var(--ds-text-primary)]">Order Selector</span> bottom sheet.
                </p>
              </div>
            </div>
          </div>

          <div className={`${node} temu-triage-node--p12 border-dashed p-6 md:p-7`}>
            <div className="flex items-start gap-4">
              <div className="temu-triage-icon-shell temu-triage-icon-shell--dark flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-[#0a0a0a] bg-[color-mix(in_srgb,var(--ds-bg-page)_92%,#0a0a0a)]">
                <Headphones className="h-5 w-5 text-[var(--ds-text-primary)]" strokeWidth={1.65} aria-hidden />
              </div>
              <div className="min-w-0">
                <p className={`${TEMU_KICKER_CAPS} text-[var(--ds-text-tertiary)] ${TEMU_EMBER_BOLD}`} style={TEMU_KICKER_STYLE}>
                  Safety Net · P1.2
                </p>
                <p className="mt-1 text-[length:var(--type-l3)] font-normal leading-[var(--type-l3-lh)] text-[var(--ds-text-primary)]">
                  Semantic handoff
                </p>
                <p className="mt-3 text-[length:var(--type-l2)] font-normal leading-[var(--type-l2-lh)] text-[var(--ds-text-secondary)]">
                  Hidden agent link — only when{' '}
                  <span className="text-[var(--ds-text-primary)]">sentiment score {'<'} 0.4</span>.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

/** Muted loop clips: no native controls (clean frame), play when in view */
function TemuMockupLoopVideo({ src, ariaLabel }: { src: string; ariaLabel: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { amount: 0.2, margin: '0px 0px -10% 0px' });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    if (isInView) {
      void v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [isInView, src]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-[12px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] [contain:layout]"
    >
      <video
        ref={videoRef}
        className="block h-auto w-full max-h-[min(70vh,520px)] object-contain"
        src={src}
        muted
        playsInline
        loop
        autoPlay
        preload="auto"
        disablePictureInPicture
        aria-label={ariaLabel}
      />
    </div>
  );
}

function TemuPhoneMockups() {
  const items: {
    tier: string;
    icon: typeof Layers;
    image: string;
    imageAlt: string;
    video: string;
  }[] = [
    {
      tier: 'P0 · Pre-Chat Triage',
      icon: Layers,
      image: temuCase1,
      imageAlt: 'Pre-chat triage screen',
      video: temuVideo1,
    },
    {
      tier: 'P1.1 · Hybrid Cui',
      icon: MessageSquare,
      image: temuCase2,
      imageAlt: 'Hybrid CUI screen',
      video: temuVideo2,
    },
    {
      tier: 'P1.2 · Semantic Handoff',
      icon: Headphones,
      image: temuCase3,
      imageAlt: 'Semantic handoff screen',
      video: temuVideo3,
    },
  ];

  return (
    <div className="flex w-full flex-col gap-0">
      {items.map((c) => {
        const TierIcon = c.icon;
        return (
          <TemuSoftSurface
            key={c.tier}
            className="group/mockcap w-full !max-w-none !rounded-[var(--temu-radius-inner)] !p-0 text-center"
          >
            <div className="mb-0 flex flex-col items-center gap-2 md:gap-4">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--temu-radius-pill)] transition-transform duration-300 motion-safe:group-hover/mockcap:scale-105"
                style={{ background: TEMU_ORANGE_SOFT }}
              >
                <TierIcon className="h-5 w-5" strokeWidth={1.65} style={{ color: TEMU_ORANGE }} aria-hidden />
              </div>
              <p
                className={`${TEMU_KICKER_CAPS} ${TEMU_EMBER_BOLD} max-w-[40ch]`}
                style={{ ...TEMU_KICKER_STYLE, color: TEMU_ORANGE }}
              >
                {c.tier}
              </p>
            </div>

            {/* 两列固定 70% : 30%（flex 7:3 在扣掉 gap 后按比例分配） */}
            <div className="flex w-full min-w-0 flex-col items-center gap-3 sm:gap-4 md:flex-row md:gap-6">
              <div className="flex w-full min-h-0 min-w-0 items-center justify-center md:flex-[7]">
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  className="h-auto w-full max-h-[min(70vh,520px)] rounded-[12px] object-contain shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex w-full min-h-0 min-w-0 items-center justify-center md:flex-[3]">
                <TemuMockupLoopVideo src={c.video} ariaLabel={`${c.tier} — motion clip`} />
              </div>
            </div>
          </TemuSoftSurface>
        );
      })}
    </div>
  );
}

function TemuImpactBars() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const [before, setBefore] = useState(0);
  const [after, setAfter] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const e = easeOutCubic(t);
      setBefore(Math.round(81 * e));
      setAfter(Math.round(20 * e));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView]);

  return (
    <div ref={ref} className="temu-impact-bars">
      <article className="temu-impact-bar-card">
        <div className="temu-impact-bar-card__head">
          <p className="temu-impact-bar-card__phase">Before</p>
          <p className="temu-impact-bar-card__metric">AER · Agent Escalation Rate</p>
        </div>
        <p className="temu-impact-bar-card__value">{before}%</p>
        <div className="temu-impact-bar-card__track" aria-hidden>
          <div className="temu-impact-bar-card__fill temu-impact-bar-card__fill--before" style={{ width: `${Math.max(8, before)}%` }} />
        </div>
        <p className="temu-impact-bar-card__desc">Escalation share to live agents before intent-tiered routing.</p>
      </article>

      <div className="temu-impact-bars__arrow" aria-hidden>
        <span className="temu-impact-bars__arrow-mobile">↓</span>
        <span className="temu-impact-bars__arrow-desktop">→</span>
      </div>

      <article className="temu-impact-bar-card temu-impact-bar-card--after">
        <div className="temu-impact-bar-card__head">
          <p className="temu-impact-bar-card__phase">After</p>
          <p className="temu-impact-bar-card__metric">AER · Agent Escalation Rate</p>
        </div>
        <p className="temu-impact-bar-card__value">{after}%</p>
        <div className="temu-impact-bar-card__track" aria-hidden>
          <div className="temu-impact-bar-card__fill temu-impact-bar-card__fill--after" style={{ width: `${Math.max(8, after)}%` }} />
        </div>
        <p className="temu-impact-bar-card__desc">Same metric after tiered deflection and sentiment-governed handoff.</p>
      </article>
    </div>
  );
}

function TemuVisionTimeline() {
  const phases: { t: string; label: string; body: string; icon: typeof Sparkles }[] = [
    { t: 'Now', label: 'Reactive CUI', body: 'User pulls Support; we respond to stated intent.', icon: MessageCircle },
    { t: 'Next', label: 'Intent prediction', body: 'Signals from browse + orders flag risk before chat.', icon: BarChart3 },
    { t: 'Future', label: '', body: 'Proactive credits & fixes — problem solved before the tab opens.', icon: Sparkles },
  ];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-[8%] right-[8%] top-8 hidden h-px border-t border-dashed md:block" style={{ borderColor: `${TEMU_ORANGE}55` }} aria-hidden />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
        {phases.map((p) => (
          <TemuSoftSurface key={p.t} className="group/vis relative !flex !flex-col !gap-6 !rounded-[var(--temu-radius-inner)] text-center md:!text-left">
            <div
              className="mx-auto mt-5 flex h-12 w-12 items-center justify-center rounded-[var(--temu-radius-pill)] pb-5 pt-5 transition-transform duration-300 md:mx-0 motion-safe:group-hover/vis:scale-105 motion-safe:group-hover/vis:shadow-[0_6px_20px_rgba(251,119,1,0.18)]"
              style={{ background: TEMU_ORANGE_SOFT }}
            >
              <p.icon className="h-5 w-5" strokeWidth={1.65} style={{ color: TEMU_ORANGE }} />
            </div>
            <p className="text-[length:var(--type-l1)] font-normal uppercase tracking-[0.22em]" style={{ color: TEMU_ORANGE }}>
              {p.t}
            </p>
            {p.label ? (
              <p className="text-[length:var(--type-l3)] font-normal leading-[var(--type-l3-lh)] text-[var(--ds-text-primary)]">{p.label}</p>
            ) : null}
            <p className="text-[length:var(--type-l2)] font-normal leading-[var(--type-l2-lh)] text-[var(--ds-text-secondary)]">{p.body}</p>
          </TemuSoftSurface>
        ))}
      </div>
      <p className="funfit-body-text mx-auto mt-12 max-w-[52ch] text-center text-[var(--ds-text-secondary)] md:text-left">
        Behavioral signals flag delayed logistics; compensation credits can surface before Support is opened — anticipatory resolution.
      </p>
    </div>
  );
}

function TemuImpactNotes() {
  const notes = [
    {
      kicker: 'Flow Retention',
      value: '−18%',
      body: 'Drop-off fell as users stayed in structured hybrid CUI paths.',
    },
    {
      kicker: 'Delivery Speed',
      value: '+28%',
      body: 'Reusable interaction primitives increased rollout speed for engineering.',
    },
  ];

  return (
    <div className="mt-[80px] grid gap-6 pt-[50px] md:grid-cols-2 md:gap-8">
      {notes.map((n) => (
        <div key={n.kicker} className="temu-impact-note-card">
          <p className="temu-impact-note-card__kicker">{n.kicker}</p>
          <p className="temu-impact-note-card__value">{n.value}</p>
          <p className="temu-impact-note-card__body">{n.body}</p>
        </div>
      ))}
    </div>
  );
}

function TemuImpactQuantification() {
  const instrumentation = [
    {
      tier: 'P0 Entry',
      title: 'Self-Service Initiation',
      body: 'Tracked dashboard tap entry rate to quantify how often users choose structured self-service first.',
      icon: Layers,
    },
    {
      tier: 'P1.1 CUI Tool',
      title: 'Task Completion Rate (TCR)',
      body: 'Measured completion inside the Order Selector to locate friction within tap-first conversational flows.',
      icon: MessageSquare,
    },
    {
      tier: 'P1.2 Trigger',
      title: 'Sentiment ↔ Handoff Visibility',
      body: 'Monitored sentiment score below 0.4 against handoff exposure to ensure escalation is intentional, not default.',
      icon: Headphones,
    },
  ] as const;

  return (
    <div className="temu-impact-quant">
      <div className="temu-impact-block">
        <p className="temu-impact-block__eyebrow">I. Data Instrumentation</p>
        <div className="temu-impact-instrument-grid">
          {instrumentation.map((item) => (
            <article key={item.tier} className="temu-impact-instrument-card">
              <div className="temu-impact-instrument-card__head">
                <div className="temu-impact-instrument-card__icon">
                  <item.icon className="h-4 w-4" strokeWidth={1.65} />
                </div>
                <p className="temu-impact-instrument-card__tier">{item.tier}</p>
              </div>
              <h3 className="temu-impact-instrument-card__title">{item.title}</h3>
              <p className="temu-impact-instrument-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="temu-impact-block">
        <p className="temu-impact-block__eyebrow">II. North Star Metrics</p>
        <div className="temu-impact-metric-grid">
          <article className="temu-impact-metric-card">
            <p className="temu-impact-metric-card__name">AER · Agent Escalation Rate</p>
            <p className="temu-impact-metric-card__formula">(Total Handoffs / Total Sessions)</p>
            <p className="temu-impact-metric-card__desc">Primary measure of AI deflection performance.</p>
          </article>
          <article className="temu-impact-metric-card">
            <p className="temu-impact-metric-card__name">ART · Average Resolution Time</p>
            <p className="temu-impact-metric-card__formula">Time from entry to “Issue Resolved”</p>
            <p className="temu-impact-metric-card__desc">Validates &quot;Tap &gt; Type&quot; operational efficiency.</p>
          </article>
        </div>
      </div>

      <div className="temu-impact-block">
        <p className="temu-impact-block__eyebrow">III. Results · High-Octane Deflection</p>
        <TemuImpactBars />
        <TemuImpactNotes />
      </div>
    </div>
  );
}

function TemuAgileRibbonViz() {
  return (
    <div className="temu-ribbon-card">
      <div className="temu-ribbon-svg-wrap">
        <svg viewBox="0 0 1000 240" role="img" aria-label="15-day sprint ribbon with three connected loops">
          <path className="temu-ribbon-path temu-ribbon-path--base" d="M40 132 C140 40, 280 40, 380 132 S620 224, 760 132 S900 40, 960 132" />
          <path className="temu-ribbon-path temu-ribbon-path--active" d="M40 132 C140 40, 280 40, 380 132" />
          <circle className="temu-ribbon-node temu-ribbon-node--active" cx="210" cy="86" r="54" />
          <circle className="temu-ribbon-node temu-ribbon-node--muted" cx="548" cy="178" r="54" />
          <circle className="temu-ribbon-node temu-ribbon-node--muted" cx="856" cy="86" r="54" />
          <text className="temu-ribbon-node-label temu-ribbon-node-label--active" x="210" y="93" textAnchor="middle">
            Sprint 1
          </text>
          <text className="temu-ribbon-node-label" x="548" y="185" textAnchor="middle">
            Sprint 2
          </text>
          <text className="temu-ribbon-node-label" x="856" y="93" textAnchor="middle">
            Sprint 3
          </text>
        </svg>
      </div>
      <div className="temu-ribbon-legend">
        <p className="temu-ribbon-legend__item temu-ribbon-legend__item--active">Intern Ownership: Strategic Mapping &amp; Core Logic</p>
        <p className="temu-ribbon-legend__item">Loop 2 and 3 continue into execution and learning cycles</p>
      </div>
    </div>
  );
}

function TemuAnticipatoryRadar() {
  return (
    <div className="temu-radar-card">
      <div className="temu-radar-stage">
        <div className="temu-radar-ring temu-radar-ring--outer" />
        <div className="temu-radar-ring temu-radar-ring--inner" />

        <div className="temu-radar-label temu-radar-label--outer">Logistics Signals</div>
        <div className="temu-radar-label temu-radar-label--inner">AI Detection</div>

        <div className="temu-radar-chip temu-radar-chip--delay">Delay</div>
        <div className="temu-radar-chip temu-radar-chip--damage">Damage</div>
        <div className="temu-radar-chip temu-radar-chip--stuck">Stuck &gt; 48h</div>

        <div className="temu-radar-user">
          <UserRound className="temu-radar-user__icon" />
          <span>User</span>
        </div>
      </div>

      <div className="temu-radar-result">
        <p className="temu-radar-result__kicker">System Action</p>
        <p className="temu-radar-result__title">System proactively issued $5.00 credit</p>
      </div>
    </div>
  );
}

export function TemuCaseStudy() {
  const tocTriggerRef = useRef<HTMLDivElement>(null);
  const [tocFixed, setTocFixed] = useState(false);

  const tocItems = [
    { id: 'tldr', label: 'TL;DR Overview' },
    { id: 'leaky', label: '1. Business Problem' },
    { id: 'loop', label: '2. User Problem' },
    { id: 'metrics', label: '3. Success Metrics' },
    { id: 'process', label: '4. AI Triage Brain' },
    { id: 'mockups', label: '5. 3-Tier Engine' },
    { id: 'impact', label: '6. Impact' },
    { id: 'prototype', label: '7. Prototype Demo' },
    { id: 'sprint', label: '8. 15-Day Sprint' },
    { id: 'vision', label: '9. Future Vision' },
  ];

  useEffect(() => {
    const onScroll = () => {
      if (!tocTriggerRef.current) return;
      setTocFixed(tocTriggerRef.current.getBoundingClientRect().top <= 120);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="temu-page min-h-screen bg-[var(--ds-bg-page)]">
      <Navigation />

      <CaseStudyHero
        title='Temu: Fixing the "Leaky Bucket" of AI Support'
        description={
          <>
            As a UX Design Intern mentored by Jessica Lin (Sr. UX Designer), and in close collaboration with Hao Liang (PM), I
            reimagined Temu&apos;s AI support ecosystem. Replacing a generic bot with a 3-tier intent-driven framework cut manual
            escalation from <WordBackdropDecor vector="highlight2">81%</WordBackdropDecor> to{' '}
            <WordBackdropDecor vector="highlight2">20%</WordBackdropDecor>.
          </>
        }
        mediaType="video"
        mediaSrc={homeVideo}
        showVideoCaption={false}
        videoSurfaceMask
        tags={[
          { label: 'Product Design', variant: 'primary' },
          { label: 'AI & NLP', variant: 'secondary' },
          { label: 'Support deflection', variant: 'secondary' },
          { label: 'Data visualization', variant: 'secondary' },
        ]}
      />

      <MobileTOC items={tocItems} />

      <section className="pb-32 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr]">
            <div className="hidden lg:block">
              <StickyTOC items={tocItems} isFixed={tocFixed} />
            </div>

            <div className="case-study-content-wrapper flex max-w-[848px] w-full flex-col">
              <div ref={tocTriggerRef} style={{ height: 1 }} />

              <div id="tldr" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">TL;DR</h2>
                <TemuSoftSurface className="!px-3 !py-2 sm:!px-4 md:!px-10 md:!py-[10px]" interactive={false}>
                  <div className="temu-tldr-info">
                    <h3 className="temu-tldr-subhead">Project Information</h3>
                    <div className="temu-tldr-info-grid">
                      <div className="temu-tldr-info-item">
                        <p className="temu-tldr-info-item__label">Role</p>
                        <p className="temu-tldr-info-item__value">UX Design Intern (Strategic Lead for Support Experience)</p>
                      </div>
                      <div className="temu-tldr-info-item">
                        <p className="temu-tldr-info-item__label">Mentor</p>
                        <p className="temu-tldr-info-item__value">Jessica Lin, Sr. UX Designer</p>
                      </div>
                      <div className="temu-tldr-info-item">
                        <p className="temu-tldr-info-item__label">Collaborators</p>
                        <p className="temu-tldr-info-item__value">Hao Liang (PM), AI Engineering Team</p>
                      </div>
                      <div className="temu-tldr-info-item">
                        <p className="temu-tldr-info-item__label">Timeline</p>
                        <p className="temu-tldr-info-item__value">15 Days (3 Accelerated Sprints)</p>
                      </div>
                    </div>
                  </div>

                  <div className="temu-tldr-why">
                    <h3 className="temu-tldr-subhead">The Why (Strategic Alignment)</h3>
                    <TemuOrangeCallout
                      label="Strategic thesis"
                      text="Users didn’t want to chat — they wanted resolution. Shift from Conversational UI to Actionable UI."
                    />
                  </div>

                  <div className="temu-tldr-outcome">
                    <h3 className="temu-tldr-subhead">The Outcome at a Glance</h3>
                    <div className="temu-outcome-table-wrap">
                      <table className="temu-outcome-table">
                        <thead>
                          <tr>
                            <th scope="col">Metric</th>
                            <th scope="col">Before</th>
                            <th scope="col">After</th>
                            <th scope="col">Delta</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Agent Escalation</th>
                            <td>81%</td>
                            <td>20%</td>
                            <td className="temu-outcome-table__delta">-61%</td>
                          </tr>
                          <tr>
                            <th scope="row">Resolution Time</th>
                            <td>280s</td>
                            <td>140s</td>
                            <td className="temu-outcome-table__delta">-50%</td>
                          </tr>
                          <tr>
                            <th scope="row">User CSAT</th>
                            <td>Baseline</td>
                            <td>+24%</td>
                            <td className="temu-outcome-table__delta">Significant Lift</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TemuSoftSurface>
              </div>

              <div id="leaky" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">1 · Business Problem: The &quot;Leaky&quot; Bot</h2>
                <p className="funfit-body-text funfit-body-text--spaced-md max-w-[820px]">
                  Temu&apos;s legacy AI bot was failing deflection. <span className="marker-highlight marker-highlight--temu">81%</span> of users
                  bypassed the AI and clicked &quot;Talk to Human&quot; — unsustainable ops and bottlenecked agents.
                </p>
                <div className="mt-8 w-full max-w-[820px] overflow-hidden rounded-[var(--temu-radius-inner)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
                  <img
                    src={temu1}
                    alt="Legacy bot deflection and escalation context"
                    className="h-auto w-full max-w-full object-contain"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 848px) 100vw, 820px"
                  />
                </div>
                <div className="funfit-zone-grid mt-10">
                  <div className="funfit-zone-card temu-hover-tile">
                    <h4 className="funfit-zone-title">Support intent</h4>
                    <p className="funfit-zone-text">Most sessions were simple asks (refund ETA, logistics, return status), not complex support tickets.</p>
                  </div>
                  <div className="funfit-zone-card temu-hover-tile">
                    <h4 className="funfit-zone-title">Experience mismatch</h4>
                    <p className="funfit-zone-text">Text-first chat forced users to type through deterministic paths better handled by structured UI.</p>
                  </div>
                  <div className="funfit-zone-card temu-hover-tile">
                    <h4 className="funfit-zone-title">Operational impact</h4>
                    <p className="funfit-zone-text">Escalation overloaded live agents and slowed resolution for truly complex support issues.</p>
                  </div>
                </div>
              </div>

              <div id="loop" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">2 · User Problem: The &quot;Dumb Bot&quot; Trap</h2>
                <TemuOrangeCallout
                  label="Design intent"
                  text="From chat-heavy recovery to tap-first resolution, with semantic handoff only when confidence and sentiment fail."
                />
                <div className="mt-8 w-full max-w-[min(100%,820px)] overflow-hidden rounded-[var(--temu-radius-inner)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
                  <img
                    src={temu2}
                    alt="Tap-first resolution and semantic handoff design direction"
                    className="h-auto w-full max-w-full object-contain"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 848px) 100vw, 820px"
                  />
                </div>
                <div className={TEMU_SECTION_BLOCK_MT}>
                  <TemuLoopAndResearchViz />
                </div>
              </div>

              <div id="metrics" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">3 · Success Metrics: Defining The Win</h2>
                <TemuBentoMetrics />
              </div>

              <div id="process" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">
                  4 · The Brain: 200K Logs → One Sorting Machine
                </h2>
                <div className={TEMU_SECTION_BLOCK_MT}>
                  <TemuTriageArchitectureMap />
                </div>
              </div>

              <div id="mockups" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">5 · Mockup: The 3-Tiered Deflection Engine</h2>
                <div className={TEMU_SECTION_BLOCK_MT}>
                  <TemuPhoneMockups />
                </div>
              </div>

              <div id="impact" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">6 · Impact: Quantifying Intelligence</h2>
                <div className={TEMU_SECTION_BLOCK_MT}>
                  <TemuSoftSurface className="!px-6 !py-5 md:!px-10 md:!py-5">
                    <div className="mt-10">
                      <TemuImpactQuantification />
                    </div>
                  </TemuSoftSurface>
                </div>
              </div>

              <div id="prototype" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">7 · Prototype: Semantic Handoff In Action</h2>
                <div className="temu-prototype-video-shell mt-10">
                  <video
                    className="absolute inset-0 z-[1] w-full"
                    src={homeVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <VideoWhiteEdgeMask />
                </div>
              </div>

              <div id="sprint" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">8 · Design at the Speed of Business: The 15-Day Sprint</h2>
                <p className="funfit-body-text funfit-body-text--spaced-md max-w-[820px]">
                  We didn&apos;t just design; we iterated at a relentless pace. Operating in 5-day sprints, I was integrated into the core team
                  from Sprint 1 and took immediate ownership of the P0/P1 architecture.
                </p>
                <div className={TEMU_SECTION_BLOCK_MT}>
                  <TemuAgileRibbonViz />
                </div>
                <div className="temu-sprint-step-grid">
                  <article className="temu-sprint-step-card">
                    <p className="temu-sprint-step-card__day">Days 1-2</p>
                    <h3 className="temu-sprint-step-card__title">Strategic Ideation</h3>
                    <p className="temu-sprint-step-card__body">Intent mapping and user flow stratification based on 200K logs.</p>
                  </article>
                  <article className="temu-sprint-step-card">
                    <p className="temu-sprint-step-card__day">Day 3</p>
                    <h3 className="temu-sprint-step-card__title">AI Prototyping</h3>
                    <p className="temu-sprint-step-card__body">
                      Claude Code prototypes pressure-tested conversational logic with real variables static Figma couldn&apos;t simulate.
                    </p>
                  </article>
                  <article className="temu-sprint-step-card">
                    <p className="temu-sprint-step-card__day">Day 4</p>
                    <h3 className="temu-sprint-step-card__title">High-Fi &amp; DS Compliance</h3>
                    <p className="temu-sprint-step-card__body">
                      iOS-native UI polish in Figma with full adherence to Temu&apos;s Design System and Apple HIG.
                    </p>
                  </article>
                  <article className="temu-sprint-step-card">
                    <p className="temu-sprint-step-card__day">Day 5</p>
                    <h3 className="temu-sprint-step-card__title">Launch &amp; Data Loop</h3>
                    <p className="temu-sprint-step-card__body">
                      Hand-off to engineering for release, then immediate analytics review to feed the next sprint.
                    </p>
                  </article>
                </div>
              </div>

              <div id="vision" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">9 · Vision: From Reactive Support to Anticipatory Delight</h2>
                <div className={TEMU_SECTION_BLOCK_MT}>
                  <TemuAnticipatoryRadar />
                </div>
                <p className="funfit-body-text funfit-body-text--spaced-md max-w-[820px]">
                  The ultimate support experience is the one the user never has to start. The long-term direction is to flip the
                  script from reactive support to proactive resolution.
                </p>
                <div className="temu-vision-pillars">
                  <article className="temu-vision-pillar">
                    <h3 className="temu-vision-pillar__title">The Logic</h3>
                    <p className="temu-vision-pillar__body">
                      Behavioral logs + live logistics APIs flag anomalies early, such as a package stuck for more than 48 hours.
                    </p>
                  </article>
                  <article className="temu-vision-pillar">
                    <h3 className="temu-vision-pillar__title">The Resolution</h3>
                    <p className="temu-vision-pillar__body">
                      The system proactively sends compensation credit or a one-tap &quot;Reship&quot; option before users open Support.
                    </p>
                  </article>
                  <article className="temu-vision-pillar">
                    <h3 className="temu-vision-pillar__title">The Impact</h3>
                    <p className="temu-vision-pillar__body">
                      Potential complaints become trust moments, reducing support dependency and increasing loyalty.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
