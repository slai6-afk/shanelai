import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import {
  AlertTriangle,
  ArrowUpRight,
  BarChart2,
  BookOpen,
  Brain,
  CheckCircle2,
  FileSearch,
  Layers,
  Search,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { TLDRCard } from '../../components/case-study/TLDRCard';
import { StickyTOC } from '../../components/case-study/StickyTOC';
import { MobileTOC } from '../../components/case-study/MobileTOC';
import { CardCornerVector } from '../../components/vector-decor';

import richmondHero from '../../assets/richmond_hero.png';
import richmondOverview from '../../assets/richmond_overview.png';
import richmondWhy from '../../assets/richmond_why.png';
import richmondMethods from '../../assets/richmond_methods.png';
import richmondTasks from '../../assets/richmond_tasks.png';

const RB_NAVY = '#0D1B36';
const RB_BLUE = '#1A4F9C';
const RB_LIGHT = '#C5D7F0';
const RB_LIGHT_SOFT = 'rgba(197,215,240,0.25)';
const RB_RED = '#C0392B';
const RB_GREEN = '#1E7A4A';
const RB_AMBER = '#D97706';
const DECK_HREF = 'https://www.figma.com/deck/88L6s053ifnw9OL1xyH35f/University-of-Richmond?node-id=1-580&t=Rn0U3pyibxU0jctV-1';

// ─── Animated counter ────────────────────────────────────────────────────────

function AnimatedNum({ value, suffix = '%', duration = 1.4 }: { value: number; suffix?: string; duration?: number }) {
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

// ─── Bar stat ─────────────────────────────────────────────────────────────────

function StatBar({ value, color, label }: { value: number; color: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.5 });
  return (
    <div ref={ref} className="rb-stat-bar-row">
      <span className="rb-stat-bar-label">{label}</span>
      <div className="rb-stat-bar-track">
        <motion.div className="rb-stat-bar-fill" style={{ backgroundColor: color }}
          initial={{ width: '0%' }}
          animate={inView ? { width: `${value}%` } : { width: '0%' }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} />
      </div>
      <span className="rb-stat-bar-val" style={{ color }}>{value}%</span>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export function RichmondLibraryCaseStudy() {
  const tocTriggerRef = useRef<HTMLDivElement>(null);
  const [tocFixed, setTocFixed] = useState(false);

  const tocItems = [
    { id: 'tldr', label: 'Overview (TL;DR)' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'diagnostics', label: 'Legacy IA Diagnostics' },
    { id: 'treetest', label: 'Tree Test Findings' },
    { id: 'pivot', label: 'Strategic Pivot' },
    { id: 'takeaway', label: 'Takeaway' },
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
    <div className="rb-page min-h-screen bg-[var(--ds-bg-page)]">
      <Navigation />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="rb-hero">
        <div className="rb-hero__img-band" style={{ background: RB_LIGHT }}>
          <motion.img src={richmondHero} alt="Boatwright Memorial Library Information Architecture Evaluation"
            className="rb-hero__img"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }} />
        </div>
        <div className="rb-hero__content px-4 sm:px-6 md:px-12 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
            <h1 className="case-hero-title">0% Direct Success: A Data-Driven Post-Mortem and Pivot of a Library Website Redesign</h1>
            <p className="case-hero-description-text">
              Boatwright Memorial Library · University of Richmond — A dual-track IA audit that exposed how a "redesign" traded legacy chaos for modern fragmentation.
            </p>
            <div className="case-hero-tag-list mt-4">
              {['UX Research', 'Information Architecture', 'Tree Testing', 'Usability Testing', 'Academic'].map((tag, i) => (
                <span key={tag} className={`case-hero-tag ${i === 0 ? 'case-hero-tag--primary' : 'case-hero-tag--secondary'}`}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="rb-cta-block">
          <a href={DECK_HREF} target="_blank" rel="noopener noreferrer" className="rb-cta-btn rb-cta-btn--primary">
            <BookOpen className="h-4 w-4 shrink-0" strokeWidth={2.2} aria-hidden />
            <span>View Full Presentation Deck</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.2} aria-hidden />
          </a>
        </div>
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

              {/* ── TL;DR ──────────────────────────────────────────────── */}
              <div id="tldr" className="funfit-section">
                <div className="funfit-overview-meta-card rb-meta-card relative">
                  <CardCornerVector name="highlight1" />
                  <div className="grid gap-6 md:grid-cols-3">
                    <div>
                      <h3 className="funfit-meta-heading">Role</h3>
                      <p className="funfit-meta-text">UX Researcher — Moderated Testing, Tree Testing, IA Analysis</p>
                    </div>
                    <div>
                      <h3 className="funfit-meta-heading">Type</h3>
                      <p className="funfit-meta-text">Academic Project · Dual-Track Audit</p>
                    </div>
                    <div>
                      <h3 className="funfit-meta-heading">Methods</h3>
                      <p className="funfit-meta-text">Moderated Usability Test (N=8) · Quantitative Tree Test (N=8)</p>
                    </div>
                  </div>
                </div>

                {/* Key stat callout */}
                <div className="rb-alert-banner">
                  <AlertTriangle className="h-5 w-5 shrink-0" style={{ color: RB_RED }} strokeWidth={2} />
                  <p className="rb-alert-banner__text">
                    The proposed redesign achieved <strong style={{ color: RB_RED }}>0% Direct Success</strong> on research discovery tasks — the core academic workflow of any university library.
                  </p>
                </div>

                <div className="vibesync-tldr-layout rb-tldr-layout">
                  <div className="vibesync-tldr-row">
                    <TLDRCard icon={TrendingDown} emoji="💔" title="The Friction" index={0}
                      content="The new IA boosted room booking success to 71% but <strong>collapsed research discovery to 14% overall — with 0% direct success</strong>. It traded one failure for another.">
                    </TLDRCard>
                    <TLDRCard icon={Target} emoji="🔄" title="The Pivot" index={1}
                      content="Re-architected the entire taxonomy away from <strong>institutional org-chart hierarchies</strong> into an <strong>intent-driven, action-oriented semantic model</strong> aligned with student mental models.">
                    </TLDRCard>
                  </div>

                  {/* Data callout card */}
                  <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="rb-data-card">
                    <div className="rb-data-card__header">
                      <div className="tldr-card-top">
                        <span className="tldr-emoji" aria-hidden>📉</span>
                        <div className="tldr-icon-circle"><BarChart2 size={20} className="tldr-icon" /></div>
                      </div>
                      <h3 className="tldr-title">The Numbers Don't Lie</h3>
                    </div>
                    <div className="rb-task-results-grid">
                      {[
                        { task: 'Room Booking', direct: 71, indirect: 14, skip: 14, color: RB_GREEN },
                        { task: 'Research Guides', direct: 0, indirect: 14, skip: 86, color: RB_RED },
                        { task: 'Book Retrieval', direct: 14, indirect: 43, skip: 43, color: RB_AMBER },
                        { task: 'Public Events', direct: 43, indirect: 14, skip: 43, color: RB_AMBER },
                        { task: 'Overall', direct: 34, indirect: 28, skip: 38, color: RB_BLUE },
                      ].map(({ task, direct, color }) => (
                        <div key={task} className="rb-task-result-item">
                          <span className="rb-task-result-label">{task}</span>
                          <div className="rb-task-result-num" style={{ color }}>
                            <AnimatedNum value={direct} />
                          </div>
                          <span className="rb-task-result-sub">direct success</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Why this study */}
                <div className="mt-10 overflow-hidden rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                  <img src={richmondWhy} alt="Why This Study — 8 usability participants, 8 tree test participants, 5 core tasks"
                    className="block h-auto w-full object-contain" loading="lazy" decoding="async" />
                </div>
              </div>

              {/* ── 01 METHODOLOGY ─────────────────────────────────────── */}
              <div id="methodology" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">01. Methodology: The Dual-Track Audit</h2>
                <p className="funfit-body-text funfit-body-text--spaced-md">
                  To critically validate the university library's proposed restructuring, we <strong>decoupled content semantics from interface aesthetics</strong> through a rigorous, two-phased investigative framework — isolating semantic hierarchy from visual bias.
                </p>

                <div className="mt-8 overflow-hidden rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                  <img src={richmondMethods} alt="Two methods, one question: Moderated Usability Test + Tree Test"
                    className="block h-auto w-full object-contain" loading="lazy" decoding="async" />
                </div>

                <div className="rb-method-cards mt-10">
                  {[
                    {
                      icon: Users, num: 'Track 1', color: RB_NAVY, bg: RB_LIGHT_SOFT,
                      title: 'Legacy IA Diagnostic',
                      sub: 'Moderated Usability Testing · N=8',
                      body: 'Conducted think-aloud protocols across 5 baseline academic and administrative tasks to map systemic cognitive friction, semantic overlapping, and behavioral drop-off vectors in the live environment.',
                    },
                    {
                      icon: BarChart2, num: 'Track 2', color: RB_BLUE, bg: 'rgba(26,79,156,0.08)',
                      title: 'Proposed IA Validation',
                      sub: 'Quantitative Tree Testing · N=8',
                      body: 'Stripped away the UI layer to benchmark the textual hierarchy alone. We tracked raw, unforgiving user behavioral data: Direct Success, Indirect Success, and Time-to-Task.',
                    },
                  ].map(({ icon: Icon, num, color, bg, title, sub, body }) => (
                    <motion.div key={title} className="rb-method-card"
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ duration: 0.5 }}
                      style={{ borderTop: `3px solid ${color}` }}>
                      <div className="rb-method-card__icon-wrap" style={{ background: bg }}>
                        <Icon className="h-6 w-6" style={{ color }} strokeWidth={2} />
                      </div>
                      <div className="rb-method-card__tag" style={{ color, background: bg }}>{num}</div>
                      <h3 className="rb-method-card__title">{title}</h3>
                      <p className="rb-method-card__sub">{sub}</p>
                      <p className="rb-method-card__body">{body}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 overflow-hidden rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                  <img src={richmondTasks} alt="5 Core Tasks Tested"
                    className="block h-auto w-full object-contain" loading="lazy" decoding="async" />
                </div>
              </div>

              {/* ── 02 DIAGNOSTICS ─────────────────────────────────────── */}
              <div id="diagnostics" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">02. Diagnostics: The Cognitive Traps of the Legacy IA</h2>
                <p className="funfit-body-text funfit-body-text--spaced-md">
                  Our deep-dive discovery revealed that the legacy platform did not fail due to a lack of features, but because it forced students to <strong>decode institutional jargon</strong>. The friction map below was empathy grounded in user failure.
                </p>

                <div className="rb-traps-grid">
                  {[
                    {
                      num: '01', icon: Search, color: RB_RED, bg: 'rgba(192,57,43,0.08)',
                      title: 'The OneSearch Mirage',
                      sub: 'Search Cannibalization',
                      evidence: 'Users overwhelmingly defaulted to brute-force keyword matching instead of systemic categorization.',
                      quote: '"I would probably just search sustainability."',
                      insight: 'The omnipotent global search engine acted as a cognitive crutch, completely masking highly-curated Subject Research Guides.',
                    },
                    {
                      num: '02', icon: FileSearch, color: RB_AMBER, bg: 'rgba(217,119,6,0.08)',
                      title: 'Legalistic Policy Walls',
                      sub: 'Service Utility Blocked',
                      evidence: 'The book retrieval sequence forced users into dead-ends of administrative rules rather than offering functional deployment pathways.',
                      quote: '"This page tells me the policy, but I still don\'t know how to request the book."',
                      insight: 'The explicit transactional path was absent, turning a utility-seeking user into an alienated reader.',
                    },
                    {
                      num: '03', icon: Layers, color: RB_BLUE, bg: 'rgba(26,79,156,0.08)',
                      title: 'Semantic Choice Paralysis',
                      sub: 'Overlapping Taxonomies',
                      evidence: 'Users exhibited visible hesitation when confronted with closely related terminologies.',
                      quote: '"Are study zones and study rooms the same thing?"',
                      insight: 'Synonymous labeling heavily inflated the user\'s cognitive load and visual processing metrics.',
                    },
                    {
                      num: '04', icon: Brain, color: RB_NAVY, bg: RB_LIGHT_SOFT,
                      title: 'Administrative Isolation',
                      sub: 'Public Artifacts Buried',
                      evidence: 'Prominent public events, such as the Peple Lecture, were completely obscured within internal corporate metadata.',
                      quote: '"I wouldn\'t think to look under About for this."',
                      insight: 'The site topography mirrored internal departmental ownership instead of external user intent.',
                    },
                  ].map(({ num, icon: Icon, color, bg, title, sub, evidence, quote, insight }, i) => (
                    <motion.div key={num} className="rb-trap-card"
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                      <div className="rb-trap-card__top">
                        <div className="rb-trap-card__icon-wrap" style={{ background: bg }}>
                          <Icon className="h-5 w-5" style={{ color }} strokeWidth={2} />
                        </div>
                        <span className="rb-trap-card__num" style={{ color }}>{num}</span>
                      </div>
                      <h3 className="rb-trap-card__title">{title}</h3>
                      <p className="rb-trap-card__sub">{sub}</p>
                      <div className="rb-trap-card__section">
                        <p className="rb-trap-card__section-label">Behavioral Evidence</p>
                        <p className="rb-trap-card__body">{evidence}</p>
                      </div>
                      <blockquote className="rb-trap-card__quote" style={{ borderLeftColor: color }}>{quote}</blockquote>
                      <div className="rb-trap-card__section">
                        <p className="rb-trap-card__section-label">UX Insight</p>
                        <p className="rb-trap-card__body">{insight}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ── 03 TREE TEST ───────────────────────────────────────── */}
              <div id="treetest" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">03. The Tree Test Twist: Deconstructing the "Redesign"</h2>
                <p className="funfit-body-text funfit-body-text--spaced-md">
                  The quantitative testing of the proposed IA shattered the assumption that an aesthetic cleanup equates to functional optimization. It unveiled a <strong>stark polarization in user performance</strong>.
                </p>

                {/* Overview slide */}
                <div className="mt-6 mb-10 overflow-hidden rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                  <img src={richmondOverview} alt="Overview — Evaluating the Boatwright Library Website Redesign"
                    className="block h-auto w-full object-contain" loading="lazy" decoding="async" />
                </div>

                {/* Task performance bars */}
                <div className="rb-results-block">
                  <h3 className="funfit-section-subtitle-neutral">Task-by-Task Direct Success</h3>
                  <div className="rb-bars-list">
                    <StatBar value={71} color={RB_GREEN} label="Room Booking" />
                    <StatBar value={43} color={RB_AMBER} label="Public Events (Peple Lecture)" />
                    <StatBar value={14} color={RB_AMBER} label="Book Retrieval" />
                    <StatBar value={0} color={RB_RED} label="Research Guides (Find & Borrow)" />
                    <StatBar value={34} color={RB_BLUE} label="Global Average" />
                  </div>
                </div>

                <div className="rb-verdict-cards mt-10">
                  <motion.div className="rb-verdict-card rb-verdict-card--success"
                    initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <div className="rb-verdict-card__icon-wrap" style={{ background: 'rgba(30,122,74,0.1)' }}>
                      <CheckCircle2 className="h-6 w-6" style={{ color: RB_GREEN }} strokeWidth={2} />
                    </div>
                    <h3 className="rb-verdict-card__title" style={{ color: RB_GREEN }}>The Success: 71%</h3>
                    <p className="rb-verdict-card__sub">Spatial Consolidation</p>
                    <p className="rb-verdict-card__body">Unifying all physical environments under the comprehensive "Libraries & Spaces" parent taxonomy eliminated prior locational confusion. Strong, distinct entry points streamlined wayfinding and room booking pipelines.</p>
                  </motion.div>

                  <motion.div className="rb-verdict-card rb-verdict-card--fail"
                    initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                    <div className="rb-verdict-card__icon-wrap" style={{ background: 'rgba(192,57,43,0.1)' }}>
                      <TrendingDown className="h-6 w-6" style={{ color: RB_RED }} strokeWidth={2} />
                    </div>
                    <h3 className="rb-verdict-card__title" style={{ color: RB_RED }}>The Catastrophe: 0%</h3>
                    <p className="rb-verdict-card__sub">Research Discovery — Direct Success</p>
                    <p className="rb-verdict-card__body">When tasked with locating Research Guides, the overall success rate plunged to 14%, while Direct Success hit absolute zero. The taxonomy forced users into blind guessing games between "Find & Borrow" and "Help & Support". The architecture did not cure systemic friction — it merely traded legacy chaos for modern fragmentation.</p>
                  </motion.div>
                </div>
              </div>

              {/* ── 04 PIVOT ───────────────────────────────────────────── */}
              <div id="pivot" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">04. Strategic Architecture Restructuring</h2>
                <p className="funfit-body-text funfit-body-text--spaced-md">
                  To salvage the user experience, we pivoted the taxonomy away from administrative classifications and established an <strong>objective-oriented architecture</strong> aligned with student mental models.
                </p>

                <div className="rb-strategy-cards">
                  {[
                    {
                      num: '01', icon: Zap, color: RB_BLUE, bg: 'rgba(26,79,156,0.08)',
                      title: 'Forge a Unified "Research & Study" Pipeline',
                      body: 'Dissolve the artificial semantic boundary between "Find & Borrow" and "Help & Support". Coalesce research literature, transactional borrowing facilities, and subject-matter expert support into a singular, cohesive domain centered on student workflow optimization.',
                    },
                    {
                      num: '02', icon: TrendingUp, color: RB_GREEN, bg: 'rgba(30,122,74,0.08)',
                      title: 'Rehome Institutional Content into Intent-Driven Hubs',
                      body: 'Extract active, community-facing programming like the Peple Lecture from historical corporate metadata ("About Us"). Transition these elements into a prominent, dynamic "Events & Programs" ecosystem.',
                    },
                    {
                      num: '03', icon: Search, color: RB_NAVY, bg: RB_LIGHT_SOFT,
                      title: 'Establish Search Scaffolding and Context Boundaries',
                      body: 'Introduce contextual controls and explicit scope markers within the OneSearch interface. Educate users on system parameters to naturally transition them from lazy indexing queries into structured database discovery.',
                    },
                  ].map(({ num, icon: Icon, color, bg, title, body }, i) => (
                    <motion.div key={num} className="rb-strategy-card"
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                      <div className="rb-strategy-card__header">
                        <div className="rb-strategy-card__icon-wrap" style={{ background: bg }}>
                          <Icon className="h-5 w-5" style={{ color }} strokeWidth={2} />
                        </div>
                        <span className="rb-strategy-card__num" style={{ color, background: bg }}>Strategy {num}</span>
                      </div>
                      <h3 className="rb-strategy-card__title">{title}</h3>
                      <p className="rb-strategy-card__body">{body}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ── 05 TAKEAWAY ────────────────────────────────────────── */}
              <div id="takeaway" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">05. Definitive Takeaway</h2>

                <motion.div className="rb-quote-block"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.7 }}>
                  <div className="rb-quote-block__bar" style={{ background: RB_BLUE }} />
                  <blockquote className="rb-quote-block__text">
                    "Digital systems routinely fail when their navigation models mirror internal administrative charts rather than the end-user's mental map. The true value of this design intervention was not the cosmetic shifting of navigation labels, but the <strong>deliberate dismantling of the institutional silos</strong> that stood between students and their academic objectives."
                  </blockquote>
                </motion.div>

                <div className="rb-final-cta-row">
                  <a href={DECK_HREF} target="_blank" rel="noopener noreferrer" className="rb-cta-btn rb-cta-btn--primary">
                    <BookOpen className="h-4 w-4 shrink-0" strokeWidth={2.2} aria-hidden />
                    <span>View Full Presentation Deck</span>
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
