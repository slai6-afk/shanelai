import { useInView, motion } from 'motion/react';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  BarChart3,
  ExternalLink,
  Headphones,
  Layers,
  MessageCircle,
  MessageSquare,
  Presentation,
  Rocket,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
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
import homeVideo from '../../assets/0420.mp4';
import temuPainQuotes from '../../assets/temupainquotes.png';
import temuDiagramBefore from '../../assets/temudiagram-before.png';
import temuDiagramAfter from '../../assets/temudiagram-after.png';
import temuWireframe from '../../assets/temuwireframe.png';
import temuAbTest from '../../assets/temuabtest.png';
import temuKpi1 from '../../assets/temukpi1.png';
import temuKpi2 from '../../assets/temukpi2.png';
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

/** Keep headings on the shared site heading family */
const TEMU_EMBER_BOLD = 'font-bold';
const TEMU_KICKER_SIZE = 'text-[length:var(--type-l4)] leading-[var(--type-l4-lh)]';
const TEMU_KICKER_CAPS = `tracking-[var(--type-track-caps)] ${TEMU_KICKER_SIZE}`;
const TEMU_KICKER_STYLE = {
  fontFamily: 'var(--font-heading)',
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

function TemuOrangeCallout({
  label,
  text,
  inline = false,
}: {
  label?: string;
  text: string;
  inline?: boolean;
}) {
  return (
    <div className={`temu-orange-callout${inline ? ' temu-orange-callout--inline' : ''}`}>
      {inline ? (
        <div className="temu-orange-callout__inline-row">
          <span className="temu-orange-callout__dot" />
          <p className="temu-orange-callout__inline-text">{text}</p>
        </div>
      ) : (
        <>
          <div className="temu-orange-callout__label-row">
            <span className="temu-orange-callout__dot" />
            {label ? <p className="temu-orange-callout__label">{label}</p> : null}
          </div>
          <p className="temu-orange-callout__text">{text}</p>
        </>
      )}
    </div>
  );
}

/** Solid card shell: no stroke — soft shadow like Vibe Sync / FunFit zones */
function TemuSoftSurface({
  children,
  className = '',
  interactive = true,
  noPadding = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  noPadding?: boolean;
}) {
  const paddingClasses = noPadding ? 'p-0 md:p-0 lg:p-0' : 'p-12 md:p-14 lg:px-16 lg:py-16';
  return (
    <div
      className={`rounded-[var(--temu-radius-card)] bg-[var(--ds-bg-surface)] ${paddingClasses} shadow-[0_4px_28px_rgba(0,0,0,0.07)] ${interactive ? TEMU_HOVER_SOFT : ''} ${className}`.trim()}
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
      className={`rounded-[var(--temu-radius-card)] ${noFill ? 'border-0 bg-transparent px-0 py-5 shadow-none' : 'p-12 md:p-14 lg:px-16 lg:py-16'} ${noFill ? '' : `${TEMU_ACCENT_CARD_FILL_CLASS} shadow-[0_4px_32px_rgba(251,119,1,0.14)] ${interactive ? TEMU_HOVER_ACCENT : ''}`} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function TemuLoopAndResearchViz() {
  return (
    <div className="flex w-full flex-col items-center gap-6">
      <p className="temu-outcome-stat__label text-center">What do users tell us?</p>
      <div
        className="overflow-hidden rounded-[var(--temu-radius-card)]"
        style={{ width: '60%', maxWidth: '60%', marginInline: 'auto' }}
      >
        <img
          src={temuPainQuotes}
          alt="User pain points: speech bubbles showing reasons users left the bot"
          className="h-auto w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

function TemuBentoMetrics() {
  const metrics = ['Human Handoff Rate', 'Average Resolution Time', 'Customer Satisfaction Score'];
  return (
    <div className="temu-metrics-banner">
      <p className="temu-metrics-banner__label">Metrics</p>
      <div className="temu-metrics-banner__grid">
        {metrics.map(m => <p key={m} className="temu-metrics-banner__item">{m}</p>)}
      </div>
    </div>
  );
}

/** Triage map: clean surfaces, single orange accent per path */
function TemuTriageArchitectureMap() {
  const [revealed, setRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const revealedRef = useRef(false);
  const animatingRef = useRef(false);
  const accDeltaRef = useRef(0);
  const touchStartYRef = useRef(0);

  useEffect(() => {
    const isInFocus = () => {
      const el = containerRef.current;
      if (!el) return false;
      const { top, bottom } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      return top < vh * 0.75 && bottom > vh * 0.25;
    };

    const triggerReveal = () => {
      animatingRef.current = true;
      revealedRef.current = true;
      setRevealed(true);
      accDeltaRef.current = 0;
      setTimeout(() => { animatingRef.current = false; }, 700);
    };

    const triggerHide = () => {
      animatingRef.current = true;
      revealedRef.current = false;
      setRevealed(false);
      accDeltaRef.current = 0;
      setTimeout(() => { animatingRef.current = false; }, 700);
    };

    const onWheel = (e: WheelEvent) => {
      if (animatingRef.current) { e.preventDefault(); return; }
      if (!isInFocus()) { accDeltaRef.current = 0; return; }
      if (!revealedRef.current && e.deltaY > 0) {
        e.preventDefault();
        accDeltaRef.current += e.deltaY;
        if (accDeltaRef.current > 80) triggerReveal();
      } else if (revealedRef.current && e.deltaY < 0) {
        e.preventDefault();
        accDeltaRef.current += e.deltaY;
        if (accDeltaRef.current < -80) triggerHide();
      } else {
        accDeltaRef.current = 0;
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isInFocus()) return;
      if (animatingRef.current) { e.preventDefault(); return; }
      const dy = touchStartYRef.current - e.touches[0].clientY;
      if (!revealedRef.current && dy > 40) {
        e.preventDefault();
        triggerReveal();
        touchStartYRef.current = e.touches[0].clientY;
      } else if (revealedRef.current && dy < -40) {
        e.preventDefault();
        triggerHide();
        touchStartYRef.current = e.touches[0].clientY;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden rounded-[28px] bg-[var(--ds-bg-surface)] shadow-[0_8px_48px_rgba(0,0,0,0.13),0_2px_12px_rgba(0,0,0,0.06)]">
      {/* Bottom layer: proposed structure */}
      <img
        src={temuDiagramAfter}
        alt="Proposed 3-layer structure: Pre-Agent self service, AI ChatBot, Human Agent"
        className="h-auto w-full object-contain"
        loading="lazy"
        decoding="async"
      />
      {/* Top card: original structure — flies away on scroll */}
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[28px] bg-white"
        animate={revealed
          ? { y: '-115%', rotate: -4, opacity: 0 }
          : { y: '0%', rotate: 0, opacity: 1 }
        }
        transition={{ duration: 0.6, ease: [0.55, 0, 1, 0.45] }}
        style={{ transformOrigin: '50% 0%' }}
      >
        <img
          src={temuDiagramBefore}
          alt="Original 2-layer structure: AI Chatbot → 18%, Human Agent → 82%"
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
      {/* Scroll hint */}
      <motion.div
        className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2"
        animate={{ opacity: revealed ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <p className="flex items-center gap-1.5 rounded-full bg-black/10 px-3 py-1 text-[length:var(--type-l1)] text-[var(--ds-text-secondary)] backdrop-blur-sm">
          <span>↓</span>
          <span>Scroll to reveal proposed structure</span>
        </p>
      </motion.div>
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
      className="relative w-full overflow-hidden rounded-[12px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] [contain:layout]"
    >
      <video
        ref={videoRef}
        className="mx-auto block h-auto w-auto max-w-full max-h-[min(56vh,420px)] object-contain"
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
    version: string;
    icon: typeof Layers;
    image: string;
    imageAlt: string;
    video: string;
  }[] = [
    {
      tier: 'P0 · Pre-Chat Triage',
      version: 'Version 1',
      icon: Layers,
      image: temuCase1,
      imageAlt: 'Pre-chat triage screen',
      video: temuVideo1,
    },
    {
      tier: 'P1.1 · Hybrid Cui',
      version: 'Version 1',
      icon: MessageSquare,
      image: temuCase2,
      imageAlt: 'Hybrid CUI screen',
      video: temuVideo2,
    },
    {
      tier: 'P1.2 · Semantic Handoff',
      version: 'Version 1',
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
            className="group/mockcap w-full !max-w-none !rounded-[var(--temu-radius-inner)] !p-0"
            noPadding
          >
            <div className="mb-0 flex items-baseline gap-3">
              <p className="temu-tldr-subhead max-w-[40ch]">
                {c.tier}
              </p>
              <p className="temu-tldr-subhead text-[var(--ds-text-tertiary)]">
                {c.version}
              </p>
            </div>

            {/* 两列固定 70% : 30%，始终左图右视频（inline style 强制，避免样式缓存影响） */}
            <div
              className="w-full min-w-0"
              style={{ display: 'flex', width: '100%', gap: 0, alignItems: 'stretch' }}
            >
              <div
                className="flex min-h-0 min-w-0 items-stretch justify-start"
                style={{ width: '70%', maxWidth: '70%', flex: '0 0 70%' }}
              >
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  className="block h-auto w-full max-h-[min(64vh,480px)] rounded-[12px] object-contain shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div
                className="flex min-h-0 min-w-0 items-stretch justify-start"
                style={{ width: '30%', maxWidth: '30%', flex: '0 0 30%' }}
              >
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
      <p className="funfit-body-text mt-12 text-[var(--ds-text-secondary)]">
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
            <p className="temu-impact-metric-card__formula">Time from entry to "Issue Resolved"</p>
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

const UPSTREAM_BARS = [
  { pct: 100, color: '#FB7701', label: '23% users returned the product in 3 days' },
  { pct: 65,  color: '#111111', label: '' },
  { pct: 50,  color: '#FB7701', label: '' },
  { pct: 30,  color: '#FB7701', label: '' },
  { pct: 15,  color: '#111111', label: '' },
];
const LOW_RISK_PCT = 83;

function TemuFutureVision() {
  return (
    <div className="temu-fvision-wrap">
      {/* Row 1 — Upstream Impact */}
      <div className="temu-fvision-row">
        <div className="temu-fvision-text">
          <p className="temu-fvision-heading"><strong>Upstream Impact:</strong></p>
          <p className="temu-fvision-sub">Transforming customer friction into actionable product insights for suppliers.</p>
        </div>
        <div className="temu-fvision-bars">
          {UPSTREAM_BARS.map((bar, i) => (
            <div key={i} className="temu-fvision-bar-row">
              <span className="temu-fvision-bar-num">{i + 1}</span>
              <div className="temu-fvision-bar-track">
                <div className="temu-fvision-bar-fill" style={{ width: `${bar.pct}%`, background: bar.color }}>
                  {bar.label && <span className="temu-fvision-bar-inner-label">{bar.label}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — Dynamic Trust Logic */}
      <div className="temu-fvision-row temu-fvision-row--mt">
        <div className="temu-fvision-text">
          <p className="temu-fvision-heading"><strong>Dynamic Trust Logic:</strong></p>
          <p className="temu-fvision-sub">Personalizing the &quot;Human Handoff&quot; threshold using behavioral analytics and risk scores.</p>
        </div>
        <div className="temu-fvision-gauge-wrap">
          {/* Annotation arrow */}
          <div className="temu-fvision-gauge-anno-row">
            <div className="temu-fvision-gauge-anno" style={{ left: `${LOW_RISK_PCT}%` }}>
              <span className="temu-fvision-gauge-anno-text">More access to refund and replace</span>
              <div className="temu-fvision-gauge-anno-line" />
              <div className="temu-fvision-gauge-anno-head" />
            </div>
          </div>
          {/* Bar */}
          <div className="temu-fvision-gauge-bar">
            <div style={{ flex: `0 0 ${LOW_RISK_PCT}%`, background: '#FB7701', height: '100%' }} />
            <div style={{ flex: `0 0 ${100 - LOW_RISK_PCT}%`, background: '#111111', height: '100%' }} />
          </div>
          {/* Bracket labels */}
          <div className="temu-fvision-gauge-brackets">
            <div className="temu-fvision-gauge-bracket" style={{ flex: `0 0 ${LOW_RISK_PCT}%` }}>
              <span className="temu-fvision-gauge-label">Low-risk user</span>
            </div>
            <div className="temu-fvision-gauge-bracket temu-fvision-gauge-bracket--r" style={{ flex: `0 0 ${100 - LOW_RISK_PCT}%` }}>
              <span className="temu-fvision-gauge-label">high-risk user</span>
            </div>
          </div>
        </div>
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
    { id: 'prototype', label: '6. Prototype Demo' },
    { id: 'impact', label: '7. Impact' },
    { id: 'vision', label: '8. Future Vision' },
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
        tags={[
          { label: 'Product Design', variant: 'primary' },
          { label: 'AI & NLP', variant: 'secondary' },
          { label: 'Support deflection', variant: 'secondary' },
          { label: 'Data visualization', variant: 'secondary' },
        ]}
      />

      <MobileTOC items={tocItems} />

      {/* ── Block B: 2-col grid — TOC left, content right ── */}
      <section className="temu-body-section">
        <div className="w-full">
          {/* Grid: mobile=1col · iPad(≥768)=30/70 · Desktop(≥1024)=20/80 */}
          <div className="temu-body-grid">

            {/* Left col — hidden on mobile, shown md+ */}
            <aside className="temu-toc-col">
              <div className="temu-toc-sticky">
                <StickyTOC items={tocItems} isFixed={tocFixed} />
              </div>
            </aside>

            <div className="case-study-content-wrapper min-w-0 flex w-full max-w-none flex-col">
              <div ref={tocTriggerRef} style={{ height: 1 }} />

              <div id="tldr" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">TL;DR</h2>
                <TemuSoftSurface className="!px-0 !py-2 md:!py-[10px]" interactive={false} noPadding>
                  <div className="temu-tldr-info">
                    <div className="temu-tldr-cta-row">
                      <a
                        href="https://www.figma.com/deck/VsACf6NpwHBxybYrijgZfp/Temu?node-id=85-150&t=y0lma2qKoeikQQqC-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="temu-tldr-cta temu-tldr-cta--slides"
                      >
                        <span className="temu-tldr-cta__left">
                          <Presentation size={20} strokeWidth={1.9} aria-hidden />
                          <span className="temu-tldr-cta__text">View Slides</span>
                        </span>
                        <ExternalLink size={18} strokeWidth={1.9} aria-hidden />
                      </a>
                      <a
                        href="https://slai6-afk.github.io/temu-customer-service/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="temu-tldr-cta temu-tldr-cta--prototype"
                      >
                        <span className="temu-tldr-cta__left">
                          <Rocket size={20} strokeWidth={1.9} aria-hidden />
                          <span className="temu-tldr-cta__text">View Prototype</span>
                        </span>
                        <ExternalLink size={18} strokeWidth={1.9} aria-hidden />
                      </a>
                    </div>
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
                      inline
                      text="Users didn't want to chat, they wanted resolution instead. Shift from Conversational UI to Actionable UI."
                    />
                  </div>

                  <div className="temu-tldr-outcome">
                    <h3 className="temu-tldr-subhead">The Outcome at a Glance</h3>
                    <div className="temu-outcome-stats">
                      <div className="temu-outcome-stat">
                        <p className="temu-outcome-stat__value">
                          <TrendingDown size={28} strokeWidth={2.5} aria-hidden />
                          <span>61%</span>
                        </p>
                        <p className="temu-outcome-stat__label">Agent Escalation</p>
                        <p className="temu-outcome-stat__detail">81% → 20%</p>
                      </div>
                      <div className="temu-outcome-stat">
                        <p className="temu-outcome-stat__value">
                          <TrendingDown size={28} strokeWidth={2.5} aria-hidden />
                          <span>50%</span>
                        </p>
                        <p className="temu-outcome-stat__label">Resolution Time</p>
                        <p className="temu-outcome-stat__detail">280s → 140s</p>
                      </div>
                      <div className="temu-outcome-stat">
                        <p className="temu-outcome-stat__value">
                          <TrendingUp size={28} strokeWidth={2.5} aria-hidden />
                          <span>24%</span>
                        </p>
                        <p className="temu-outcome-stat__label">User CSAT</p>
                        <p className="temu-outcome-stat__detail">Baseline → Significant Lift</p>
                      </div>
                    </div>
                  </div>
                </TemuSoftSurface>
              </div>

              <div id="leaky" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">1 · Business Problem: The &quot;Leaky&quot; Bot</h2>
                <p className="funfit-body-text funfit-body-text--spaced-md w-full">
                  Temu&apos;s legacy AI bot was failing deflection. <span className="marker-highlight marker-highlight--temu">81%</span> of users
                  bypassed the AI and clicked &quot;Talk to Human&quot; — unsustainable ops and bottlenecked agents.
                </p>
                <div className="mt-8 w-full overflow-hidden rounded-[var(--temu-radius-inner)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
                  <img
                    src={temu1}
                    alt="Legacy bot deflection and escalation context"
                    className="block h-auto w-full max-w-full object-contain"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 1024px) 100vw, 1000px"
                  />
                </div>
              </div>

              <div id="loop" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">2 · User Problem: The &quot;Dumb Bot&quot; Trap</h2>
                <TemuOrangeCallout
                  inline
                  text="From chat-heavy recovery to tap-first resolution, with semantic handoff only when confidence and sentiment fail."
                />
                <div className="mt-8 w-full overflow-hidden rounded-[var(--temu-radius-inner)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
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
                <h2 className="funfit-section-title funfit-section-title--standard">5 · Design: Sketch, Build &amp; Validate</h2>

                {/* Hi-Fi Mockups */}
                <div className={TEMU_SECTION_BLOCK_MT}>
                  <TemuPhoneMockups />
                </div>

                {/* A/B Testing */}
                <div className={TEMU_SECTION_BLOCK_MT}>
                  <p
                    className="temu-tldr-subhead"
                  >
                    A/B Testing
                  </p>
                  <p className="mt-2 text-[length:var(--type-l2)] leading-[var(--type-l2-lh)] text-[var(--ds-text-secondary)]">
                    Tap-first model tested against the existing chat interface on task resolution rate.
                  </p>
                  <div className="mt-6 w-full overflow-hidden rounded-[var(--temu-radius-inner)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
                    <img
                      src={temuAbTest}
                      alt="A/B test comparing tap-first vs. chat interface"
                      className="h-auto w-full max-w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* Performance Results */}
                <div className={TEMU_SECTION_BLOCK_MT}>
                  <p
                    className="temu-tldr-subhead"
                  >
                    Performance Results
                  </p>
                  <p className="mt-2 text-[length:var(--type-l2)] leading-[var(--type-l2-lh)] text-[var(--ds-text-secondary)]">
                    Post-launch KPIs confirmed the deflection hypothesis at scale.
                  </p>
                  <div className="mt-6 grid grid-cols-1 gap-4">
                    <div className="overflow-hidden rounded-[var(--temu-radius-inner)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
                      <img
                        src={temuKpi1}
                        alt="KPI: agent escalation rate and deflection results"
                        className="h-auto w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="overflow-hidden rounded-[var(--temu-radius-inner)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
                      <img
                        src={temuKpi2}
                        alt="KPI: task completion and satisfaction metrics"
                        className="h-auto w-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div id="prototype" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">6 · Prototype: Semantic Handoff In Action</h2>
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

              <div id="impact" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">7 · Impact: Quantifying Intelligence</h2>
                <div className={TEMU_SECTION_BLOCK_MT}>
                  <TemuImpactQuantification />
                </div>
              </div>

              <div id="vision" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">8 · Future Vision</h2>
                <div className={TEMU_SECTION_BLOCK_MT}>
                  <TemuFutureVision />
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
