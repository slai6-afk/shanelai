import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  BarChart2,
  BookOpen,
  Brain,
  CheckCircle2,
  Compass,
  Heart,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { TLDRCard } from '../../components/case-study/TLDRCard';
import { StickyTOC } from '../../components/case-study/StickyTOC';
import { MobileTOC } from '../../components/case-study/MobileTOC';
import { CardCornerVector, WordBackdropDecor } from '../../components/vector-decor';

import pennyHero from '../../assets/penny_hero.png';
import pennyIndustryContext from '../../assets/penny_industry_context.png';
import pennyOldJourney from '../../assets/penny_oldjourney.png';
import pennyNewJourney from '../../assets/penny_newjourney.png';
import pennyScamper from '../../assets/penny_scamper.png';
import pennySketch from '../../assets/penny_sketch.png';
import pennyLowfiToHifi from '../../assets/penny_lowfi_to_hifi.png';
import pennyHifi1 from '../../assets/hifi1.png';
import pennyHifi2 from '../../assets/hifi3.png';
import pennyHifi3 from '../../assets/higi2.png';
import pennyInsight1 from '../../assets/penny_insight1.png';
import pennyInsight2 from '../../assets/penny_insight2.png';
import pennyInsight3 from '../../assets/penny_insight3.png';

const PENNY_GREEN = '#1E4A35';
const PENNY_GREEN_MID = '#2D6A4F';
const PENNY_PINK = '#F4A7B9';
const PENNY_PINK_SOFT = 'rgba(244, 167, 185, 0.13)';
const PENNY_HERO_BG = '#F8B2BD';
const DECK_HREF = 'https://www.figma.com/deck/TzcL6qRNJW7QPtfPX0txzA/final-ppt?node-id=8-1239&t=TysJzw79LMEjIeky-1';
const PROTOTYPE_HREF = 'https://slai6-afk.github.io/finteck/Penny%20Prototype.html';

// ─── Animated counting stat ───────────────────────────────────────────────────

function AnimatedPercent({ value, suffix = '%', duration = 1.4 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const animate = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [inView, value, duration]);

  return <span ref={ref}>{display}{suffix}</span>;
}

// ─── Ring progress ────────────────────────────────────────────────────────────

function RingProgress({ value, color, size = 120, stroke = 10 }: { value: number; color: string; size?: number; stroke?: number }) {
  const ref = useRef<SVGCircleElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.5 });
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const [offset, setOffset] = useState(circ);

  useEffect(() => {
    if (!inView) return;
    const target = circ * (1 - value / 100);
    const dur = 1400;
    const start = performance.now();
    const animate = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setOffset(circ - eased * (circ - target));
      if (t < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, circ, value]);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth={stroke} />
      <circle ref={ref} cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset} style={{ transition: 'none' }} />
    </svg>
  );
}

// ─── Bar progress ─────────────────────────────────────────────────────────────

function BarProgress({ value, color }: { value: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.5 });
  return (
    <div ref={ref} className="penny-bar-track">
      <motion.div className="penny-bar-fill" style={{ backgroundColor: color }}
        initial={{ width: '0%' }}
        animate={inView ? { width: `${value}%` } : { width: '0%' }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} />
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function PennyCaseStudy() {
  const tocTriggerRef = useRef<HTMLDivElement>(null);
  const [tocFixed, setTocFixed] = useState(false);

  const tocItems = [
    { id: 'tldr', label: 'Overview (TL;DR)' },
    { id: 'problem', label: 'The Systemic Mess' },
    { id: 'research', label: 'User Research' },
    { id: 'paradigm', label: 'Flipping the Paradigm' },
    { id: 'process', label: 'Design Process' },
    { id: 'design-system', label: 'Design Pillars' },
    { id: 'features', label: 'Product Experience' },
    { id: 'testing', label: 'User Testing' },
    { id: 'reflection', label: 'Reflection' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!tocTriggerRef.current) return;
      setTocFixed(tocTriggerRef.current.getBoundingClientRect().top <= 120);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="penny-page min-h-screen bg-[var(--ds-bg-page)]">
      <Navigation />

      {/* ── Custom full-bleed hero ─────────────────────────────────────── */}
      <section className="penny-hero-custom">
        {/* Image band — full width, pink background, image centered + not stretched */}
        <div className="penny-hero-custom__img-band" style={{ background: PENNY_HERO_BG }}>
          <motion.img
            src={pennyHero}
            alt="penny. — mindful money app"
            className="penny-hero-custom__img"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          />
        </div>

        {/* Content band — padded like the rest of the page */}
        <div className="penny-hero-custom__content px-4 sm:px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <h1 className="case-hero-title">penny. — Mindful Money for the Non-Accountant Generation</h1>
            <p className="case-hero-description-text">
              Flipping the paradigm from{' '}
              <WordBackdropDecor vector="highlight2">financial shame</WordBackdropDecor> to intentional lifestyle design — using behavioral science to turn a stressful chore into{' '}
              <WordBackdropDecor vector="highlight2">joy you can pace</WordBackdropDecor>.
            </p>
            <div className="case-hero-tag-list mt-4">
              {['Product Design', 'Behavioral Design', 'FinTech', 'Gen Z', 'End-to-End UX/UI'].map((tag, i) => (
                <span key={tag} className={`case-hero-tag ${i === 0 ? 'case-hero-tag--primary' : 'case-hero-tag--secondary'}`}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA block ─────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="penny-cta-block">
          <a href={PROTOTYPE_HREF} target="_blank" rel="noopener noreferrer" className="penny-cta-btn penny-cta-btn--primary">
            <Smartphone className="h-4 w-4 shrink-0" strokeWidth={2.2} aria-hidden />
            <span>Open Interactive Prototype</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.2} aria-hidden />
          </a>
          <a href={DECK_HREF} target="_blank" rel="noopener noreferrer" className="penny-cta-btn penny-cta-btn--secondary">
            <BookOpen className="h-4 w-4 shrink-0" strokeWidth={2.2} aria-hidden />
            <span>View Full Presentation Deck</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.2} aria-hidden />
          </a>
        </div>
        <p className="penny-cta-hint">Interactive prototype · Figma presentation deck</p>
      </section>

      <MobileTOC items={tocItems} />

      <section className="pb-32 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 lg:gap-4">
            <div className="hidden lg:block">
              <div style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
                <StickyTOC items={tocItems} isFixed={tocFixed} />
              </div>
            </div>

            <div className="case-study-content-wrapper w-full max-w-none min-w-0 flex flex-col">
              <div ref={tocTriggerRef} style={{ height: 1 }} />

              {/* ── TLDR ─────────────────────────────────────────────────── */}
              <div id="tldr" className="funfit-section">
                <div className="funfit-overview-meta-card penny-meta-card relative">
                  <CardCornerVector name="highlight1" />
                  <div className="grid gap-6 md:grid-cols-3">
                    <div>
                      <h3 className="funfit-meta-heading">Role</h3>
                      <p className="funfit-meta-text">Product Designer — End-to-End UX/UI, Behavioral Design</p>
                    </div>
                    <div>
                      <h3 className="funfit-meta-heading">Type</h3>
                      <p className="funfit-meta-text">Academic Project · NYC Research Sprint</p>
                    </div>
                    <div>
                      <h3 className="funfit-meta-heading">Focus</h3>
                      <p className="funfit-meta-text">Gen Z · FinTech · Behavioral Science · Gamification</p>
                    </div>
                  </div>
                </div>

                <div className="penny-mission-callout">
                  <div className="penny-mission-callout__bar" />
                  <blockquote className="penny-mission-callout__text">
                    "We wanted to fill the gap between cold financial tracking and the way Gen Z actually lives, turning a stressful chore into an intentional lifestyle choice."
                  </blockquote>
                </div>

                <div className="vibesync-tldr-layout">
                  <div className="vibesync-tldr-row">
                    <TLDRCard icon={Target} emoji="🎯" title="The Problem" index={0}>
                      Traditional budgeting apps treat finance as a{' '}
                      <WordBackdropDecor vector="highlight2">math problem</WordBackdropDecor>, ignoring human psychology — triggering anxiety and avoidance in an entire generation.
                    </TLDRCard>
                    <TLDRCard icon={Compass} emoji="🧭" title="The Mission" index={1}>
                      Flip the paradigm using behavioral science — translate abstract digits into{' '}
                      <WordBackdropDecor vector="highlight2">gamified "lifestyle credits"</WordBackdropDecor> that protect your joy instead of restricting it.
                    </TLDRCard>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="penny-tldr-impact-card"
                  >
                    <div className="vibesync-tldr-impact-card__head">
                      <div className="tldr-card-top">
                        <span className="tldr-emoji" aria-hidden>🏆</span>
                        <div className="tldr-icon-circle">
                          <TrendingUp size={20} className="tldr-icon" />
                        </div>
                      </div>
                      <h3 className="tldr-title">The Scale of the Problem</h3>
                    </div>
                    <div className="penny-tldr-outcome-grid">
                      {[
                        { value: 75, color: PENNY_PINK, title: 'Churn Crisis', desc: 'of Gen Z quit finance apps within 3 months' },
                        { value: 73, color: PENNY_GREEN_MID, title: 'Paycheck to Paycheck', desc: 'of Gen Z live with no financial buffer' },
                        { value: 27, color: PENNY_PINK, title: 'Doom Spending', desc: 'admit to impulse purchasing as emotional coping' },
                      ].map(({ value, color, title, desc }) => (
                        <div key={title} className="penny-outcome-stat">
                          <div className="penny-outcome-stat__ring">
                            <RingProgress value={value} color={color} size={100} stroke={9} />
                            <span className="penny-outcome-stat__ring-label"><AnimatedPercent value={value} /></span>
                          </div>
                          <p className="penny-outcome-stat__title">{title}</p>
                          <p className="penny-outcome-stat__desc">{desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="vibesync-tldr-impact-card__expand mt-6">
                      <p className="vibesync-tldr-impact-card__expand-text">
                        penny. redesigns the vocabulary of finance — from accounting to behavior change — so users feel empowered rather than policed.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* ── 01 THE SYSTEMIC MESS ────────────────────────────────── */}
              <div id="problem" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">01. The Systemic Mess</h2>
                <div className="penny-callout">
                  <div className="penny-callout__label-row">
                    <span className="penny-callout__dot" />
                    <p className="penny-callout__label">Industry Context</p>
                  </div>
                  <p className="penny-callout__text">
                    Traditional personal finance tools are suffering from a systemic failure of empathy. They treat budgeting as a math problem, completely ignoring human psychology.
                  </p>
                </div>

                <div className="penny-stats-grid">
                  {[
                    { value: 75, color: PENNY_PINK, iconColor: PENNY_PINK, bg: PENNY_PINK_SOFT, Icon: Users, title: 'The Churn Crisis', desc: 'North American Gen Z & Millennials quit financial management apps within just 3 months, or regress to "Passive Tracking."' },
                    { value: 73, color: PENNY_GREEN, iconColor: PENNY_GREEN, bg: 'rgba(30,74,53,0.08)', Icon: BarChart2, title: 'The Reality', desc: 'of Gen Z live paycheck to paycheck, yet financial apps offer zero emotional context — just cold red bars and negative alerts.' },
                    { value: 27, color: PENNY_PINK, iconColor: PENNY_PINK, bg: PENNY_PINK_SOFT, Icon: Zap, title: 'Doom Spending', desc: 'admit to using impulse purchases as an emotional coping mechanism for economic anxiety — the Ostrich Effect in action.' },
                  ].map(({ value, color, iconColor, bg, Icon, title, desc }, i) => (
                    <motion.div key={title} className="penny-stat-card"
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                      <div className="penny-stat-card__top">
                        <div className="penny-stat-card__number" style={{ color }}><AnimatedPercent value={value} /></div>
                        <div className="penny-stat-card__icon-wrap" style={{ background: bg }}>
                          <Icon className="h-5 w-5" style={{ color: iconColor }} strokeWidth={2} />
                        </div>
                      </div>
                      <h4 className="penny-stat-card__title">{title}</h4>
                      <p className="penny-stat-card__desc">{desc}</p>
                      <BarProgress value={value} color={color} />
                    </motion.div>
                  ))}
                </div>

                <div className="penny-insight-banner">
                  <span className="penny-insight-banner__icon" aria-hidden>
                    <Brain className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <p className="penny-insight-banner__text">
                    <strong>The Insight:</strong> When every app shames users with red bars and negative alerts, they trigger the{' '}
                    <span style={{ color: PENNY_PINK, fontWeight: 600 }}>Ostrich Effect</span>. Young adults delete the apps because facing their balance hurts their mental health.
                  </p>
                </div>
              </div>

              {/* ── 02 USER RESEARCH ───────────────────────────────────── */}
              <div id="research" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">02. Talking to Real People</h2>
                <p className="funfit-body-text funfit-body-text--spaced-md">
                  To anchor our design in reality rather than assumptions, we conducted deep-dive user interviews with{' '}
                  <strong>10 young adults (ages 18–30) in New York City</strong>. The qualitative data revealed a clear pattern of transactional guilt and cognitive overload.
                </p>

                <div className="penny-research-badge-row">
                  {[
                    { num: 10, suffix: '', label: 'NYC Interviews', color: PENNY_GREEN },
                    { num: 3, suffix: '', label: 'Core Insights', color: PENNY_PINK },
                    { num: 18, suffix: '–30', label: 'Age Range', color: PENNY_GREEN },
                  ].map(({ num, suffix, label, color }) => (
                    <div key={label} className="penny-research-badge">
                      <span className="penny-research-badge__num" style={{ color }}>
                        <AnimatedPercent value={num} suffix={suffix} />
                      </span>
                      <span className="penny-research-badge__label">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="penny-insight-cards">
                  {[
                    { num: '01', color: PENNY_GREEN, border: 'rgba(30,74,53,0.2)', title: 'Passive Defense Mechanics', body: 'Users lack real-time awareness of minor, recurring daily expenses. They only reflect on spending when looking at a dropping bank balance — leading to passive anxiety and financial avoidance.' },
                    { num: '02', color: PENNY_PINK, border: 'rgba(244,167,185,0.4)', title: 'The Impulse Loop', body: 'Impulse spending is heavily triggered by emotional states — late-night boredom, social media scrolling, peer pressure — and is almost always followed by immediate post-purchase regret.' },
                    { num: '03', color: PENNY_GREEN, border: 'rgba(30,74,53,0.2)', title: 'The Disconnected Horizon', body: 'There is a massive cognitive disconnect between daily micro-actions and macro-aspirations. Missing a coffee today doesn\'t feel like it gets you closer to a vacation — traditional tools fail to bridge the temporal gap.' },
                  ].map(({ num, color, border, title, body }, i) => (
                    <motion.div key={num} className="penny-insight-card"
                      initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                      <div className="penny-insight-card__num" style={{ color, borderColor: border }}>{num}</div>
                      <h3 className="penny-insight-card__title">{title}</h3>
                      <p className="penny-insight-card__body">{body}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ── 03 FLIPPING THE PARADIGM ───────────────────────────── */}
              <div id="paradigm" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">03. Flipping the Paradigm</h2>

                <h3 className="funfit-section-subtitle-neutral">The Core Challenge (HMW)</h3>
                <div className="penny-callout penny-hmw-block">
                  <div className="penny-callout__label-row">
                    <span className="penny-callout__dot" />
                    <p className="penny-callout__label">How Might We</p>
                  </div>
                  <p className="penny-callout__text penny-callout__text--lg">
                    "How might we assist young adults who struggle with impulsive purchases to have more awareness and reflection on their behaviors?"
                  </p>
                </div>

                <h3 className="funfit-section-subtitle-neutral">The Behavioral Shift</h3>

                {/* Old journey */}
                <div className="mt-10 overflow-hidden rounded-[20px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                  <img src={pennyOldJourney} alt="Current user journey: Planning → Considering → Purchasing → Reflection (with emotional low)"
                    className="block h-auto w-full object-contain" loading="lazy" decoding="async" />
                </div>

                {/* Arrow connecting old → new */}
                <div className="flex flex-col items-center gap-1 py-4" aria-hidden>
                  <div style={{ width: 2, height: 28, background: PENNY_GREEN, opacity: 0.5 }} />
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                    <path d="M10 12L0 0h20L10 12z" fill={PENNY_GREEN} opacity="0.5" />
                  </svg>
                </div>

                {/* New (purposed) journey */}
                <div className="overflow-hidden rounded-[20px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                  <img src={pennyNewJourney} alt="Purposed user journey: Know my priorities → Be consistent → Achieve my goals"
                    className="block h-auto w-full object-contain" loading="lazy" decoding="async" />
                </div>
              </div>

              {/* ── 04 DESIGN PROCESS ──────────────────────────────────── */}
              <div id="process" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">04. Design Process</h2>

                <h3 className="funfit-section-subtitle-neutral">Ideation — SCAMPER</h3>
                <div className="overflow-hidden rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                  <img src={pennyScamper} alt="SCAMPER ideation map"
                    className="block h-auto w-full object-contain" loading="lazy" decoding="async" />
                </div>

                <h3 className="funfit-section-subtitle-neutral mt-10">Sketching</h3>
                <div className="overflow-hidden rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                  <img src={pennySketch} alt="Early design sketches and sticky-note ideation"
                    className="block h-auto w-full object-contain" loading="lazy" decoding="async" />
                </div>

                <h3 className="funfit-section-subtitle-neutral mt-10">Lo-fi → Hi-fi</h3>
                <div className="overflow-hidden rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                  <img src={pennyLowfiToHifi} alt="Design progression: wireframe to high-fidelity screens"
                    className="block h-auto w-full object-contain" loading="lazy" decoding="async" />
                </div>
              </div>

              {/* ── 05 DESIGN SYSTEM ───────────────────────────────────── */}
              <div id="design-system" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">05. The Design System</h2>
                <p className="funfit-body-text funfit-body-text--spaced-md">
                  We built penny. on a single, non-negotiable philosophy:{' '}
                  <strong style={{ color: PENNY_GREEN }}>"Pace Your Joy, Don't Restrict It."</strong>{' '}
                  We productized this philosophy into three interactive pillars:
                </p>

                <div className="penny-pillars-grid">
                  {[
                    { icon: Target, color: PENNY_GREEN, bg: 'rgba(30,74,53,0.08)', title: 'Know Your Priority', body: 'Filtering out the financial noise to protect what you actually love. A binary "This or That" onboarding forces users to define their non-negotiables.' },
                    { icon: CheckCircle2, color: PENNY_PINK, bg: PENNY_PINK_SOFT, title: 'Be Consistent', body: 'Pacing your lifestyle frequencies smoothly across categories. Tokenized passes replace dollar amounts — turning restriction into a game worth winning.' },
                    { icon: TrendingUp, color: PENNY_GREEN, bg: 'rgba(30,74,53,0.08)', title: 'Achieve Your Goal', body: 'Tangibilizing daily micro-sacrifices into real-world milestones. Every pass saved fuels a macro-goal — Broadway ticket, new camera, Cancun.' },
                  ].map(({ icon: Icon, color, bg, title, body }, i) => (
                    <motion.div key={title} className="penny-pillar-card"
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                      style={{ borderTop: `3px solid ${color}` }}>
                      <div className="penny-pillar-card__icon-wrap" style={{ background: bg }}>
                        <Icon className="h-6 w-6" style={{ color }} strokeWidth={2} />
                      </div>
                      <h3 className="penny-pillar-card__title">{title}</h3>
                      <p className="penny-pillar-card__body">{body}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ── 06 PRODUCT EXPERIENCE ──────────────────────────────── */}
              <div id="features" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">06. The Product Experience</h2>

                {/* Feature 1 */}
                <div className="funfit-subsection">
                  <div className="penny-feature-header">
                    <div className="penny-feature-header__tag" style={{ background: 'rgba(30,74,53,0.08)', color: PENNY_GREEN }}>Feature 01</div>
                    <h3 className="penny-feature-header__title">The "This or That" Vibe Check</h3>
                    <p className="penny-feature-header__sub">Onboarding</p>
                  </div>
                  <div className="penny-hifi-frame">
                    <img src={pennyHifi1} alt="Onboarding flow: category selection, A-or-B ranking, and priority summary screens"
                      className="block h-auto w-full object-contain" loading="lazy" decoding="async" />
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="funfit-subsection">
                  <div className="penny-feature-header">
                    <div className="penny-feature-header__tag" style={{ background: PENNY_PINK_SOFT, color: '#c05070' }}>Feature 02</div>
                    <h3 className="penny-feature-header__title">Gamified Restraint</h3>
                    <p className="penny-feature-header__sub">Core Loop & Challenges</p>
                  </div>
                  <div className="penny-hifi-frame">
                    <img src={pennyHifi2} alt="Core loop: daily challenge, category passes, budget split/merge/trade, and goals screens"
                      className="block h-auto w-full object-contain" loading="lazy" decoding="async" />
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="funfit-subsection">
                  <div className="penny-feature-header">
                    <div className="penny-feature-header__tag" style={{ background: 'rgba(30,74,53,0.08)', color: PENNY_GREEN }}>Feature 03</div>
                    <h3 className="penny-feature-header__title">Visualized Ambition</h3>
                    <p className="penny-feature-header__sub">Achievements & Feedback</p>
                  </div>
                  <div className="penny-hifi-frame">
                    <img src={pennyHifi3} alt="Account creation, bank linking, challenge tracking, and profile overview screens"
                      className="block h-auto w-full object-contain" loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>

              {/* ── 07 USER TESTING ────────────────────────────────────── */}
              <div id="testing" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">07. Facing the Music</h2>
                <p className="funfit-body-text funfit-body-text--spaced-md">
                  We put our high-fidelity prototypes in front of real users, and the feedback was <strong>beautifully brutal</strong>. We didn't just look for praise; we hunted for friction.
                </p>

                <div className="penny-insight-slides">
                  {[
                    { img: pennyInsight1, alt: 'Insight 1: Define the Split, Merge, and Trade concept with greater clarity' },
                    { img: pennyInsight2, alt: 'Insight 2: Redesign the badge visuals and define the meaning of the numbers' },
                    { img: pennyInsight3, alt: 'Insight 3: Define the Spending Alignment section and add supporting information' },
                  ].map(({ img, alt }, i) => (
                    <motion.div key={i} className="penny-insight-slide"
                      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                      <div className="penny-insight-slide__img-wrap">
                        <img src={img} alt={alt} className="block h-auto w-full object-contain rounded-[16px]" loading="lazy" decoding="async" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ── 08 REFLECTION ──────────────────────────────────────── */}
              <div id="reflection" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">08. The Future of penny.</h2>

                <div className="penny-callout">
                  <div className="penny-callout__label-row">
                    <span className="penny-callout__dot" />
                    <p className="penny-callout__label">Key Takeaway</p>
                  </div>
                  <p className="penny-callout__text">
                    penny. proved that young adults don't hate financial discipline — they just hate the current <em>vocabulary</em> of finance. By shifting the design focus from accounting to behavior change, we designed an experience where users feel <strong>empowered rather than policed</strong>.
                  </p>
                </div>

                <div className="funfit-reflection-block">
                  <h3 className="funfit-reflection-heading">Next Steps</h3>
                  <ul className="penny-reflection-list">
                    {[
                      { icon: Target, color: PENNY_GREEN, bg: 'rgba(30,74,53,0.08)', text: 'Iterate deeply on friction points uncovered during user testing, focusing on making advanced budgeting mechanics intuitive through progressive disclosure.' },
                      { icon: Smartphone, color: '#c05070', bg: PENNY_PINK_SOFT, text: 'Explore deep integration with digital wallets to capture spending intent before the transaction completes, maximizing the behavioral intervention window.' },
                      { icon: Heart, color: PENNY_GREEN, bg: 'rgba(30,74,53,0.08)', text: 'Run longitudinal studies on badge-collectable behavior to validate the gamification retention hypothesis at real scale.' },
                    ].map(({ icon: Icon, color, bg, text }, i) => (
                      <li key={i} className="penny-reflection-item">
                        <span className="penny-reflection-item__icon" style={{ background: bg, color }} aria-hidden>
                          <Icon className="h-4 w-4" strokeWidth={2} />
                        </span>
                        <p className="funfit-reflection-text !mb-0">{text}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="penny-final-cta-row">
                  <a href={PROTOTYPE_HREF} target="_blank" rel="noopener noreferrer" className="penny-cta-btn penny-cta-btn--primary">
                    <Smartphone className="h-4 w-4 shrink-0" strokeWidth={2.2} aria-hidden />
                    <span>Try the Prototype</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.2} aria-hidden />
                  </a>
                  <a href={DECK_HREF} target="_blank" rel="noopener noreferrer" className="penny-cta-btn penny-cta-btn--secondary">
                    <BookOpen className="h-4 w-4 shrink-0" strokeWidth={2.2} aria-hidden />
                    <span>View Presentation Deck</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.2} aria-hidden />
                  </a>
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
