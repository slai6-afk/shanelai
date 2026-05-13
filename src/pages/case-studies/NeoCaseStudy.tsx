import { motion } from 'motion/react';
import { type CSSProperties, type ElementType, type ReactNode, useEffect, useRef, useState } from 'react';
import {
  BarChart2,
  CheckCircle2,
  Clock,
  ExternalLink,
  MessageCircle,
  Mic2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { CaseStudyHero } from '../../components/case-study/CaseStudyHero';
import { TLDRCard } from '../../components/case-study/TLDRCard';
import { StickyTOC } from '../../components/case-study/StickyTOC';
import { MobileTOC } from '../../components/case-study/MobileTOC';
import { DecisionPill } from '../../components/case-study/DecisionPill';

/* ─── Brand tokens ──────────────────────────────────────────── */
const B = '#000000';
const W = '#FFFFFF';
const G = '#333333';
const MED = '#CCCCCC';
const MUTED = '#999999';
const SURFACE = '#F5F5F5';

/* ─── NYON CDN assets ───────────────────────────────────────── */
const NYON_HERO = '/neo-hero.png';
const NYON_LOGO = 'https://newyorkornowhere.com/cdn/shop/files/NYON-Signature-Reg-Black_686a0dfd-2368-4468-a10f-76966c951734.png?v=1763567184&width=500';
const NYON_KNICKS = 'https://newyorkornowhere.com/cdn/shop/files/Knicks_Site_1_updated.png?v=1775844886&width=2048';
const NEO_MOBILE_WATCH = '/neo-mobile-watch.png';
const NEO_FLOW_LOGIC = '/neo-flow-logic.png';
const NEO_FLOW_CANCEL = '/neo-flow-cancel.png';
const NEO_FLOW_COLORSWAP = '/neo-flow-colorswap.png';
const NEO_FLOW_MESSAGE = '/neo-flow-message.png';

/* ─── Typography tokens ─────────────────────────────────────── */
const T_LABEL: CSSProperties = {
  color: MUTED, fontSize: 'var(--type-l1)', fontWeight: 600,
  letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '14px',
};
const T_H2: CSSProperties = {
  color: B, fontSize: 'var(--type-l5)', fontWeight: 400,
  marginBottom: '32px', letterSpacing: '-0.01em',
};
const T_H3: CSSProperties = {
  color: B, fontSize: 'var(--type-l4)', fontWeight: 600,
  marginBottom: '10px', lineHeight: '1.3',
};
const T_BODY: CSSProperties = {
  color: G, fontSize: 'var(--type-l3)', fontWeight: 400, lineHeight: '1.8',
};
const T_H3_INV: CSSProperties = { ...T_H3, color: W };
const T_BODY_INV: CSSProperties = { ...T_BODY, color: 'rgba(255,255,255,0.75)' };
const INV: CSSProperties = { backgroundColor: B, padding: '32px' };

/* ─── Shared components ─────────────────────────────────────── */

function Label({ children }: { children: ReactNode }) {
  return <p style={T_LABEL}>{children}</p>;
}

function NyonImage({ src, alt, style }: { src: string; alt: string; style?: CSSProperties }) {
  return (
    <div style={{ overflow: 'hidden', marginBottom: '32px', ...style }}>
      <img src={src} alt={alt} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
    </div>
  );
}

function MetricCard({ stat, label, sub, index = 0 }: {
  stat: string; label: string; sub: string; index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.1 }}
      style={INV}
    >
      <p style={{ color: W, fontSize: 'var(--type-l6)', fontWeight: 700, lineHeight: 1, marginBottom: '10px' }}>{stat}</p>
      <p style={{ color: W, fontSize: 'var(--type-l3)', fontWeight: 500, marginBottom: '6px' }}>{label}</p>
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--type-l2)', fontWeight: 400, lineHeight: '1.6' }}>{sub}</p>
    </motion.div>
  );
}

function InsightBlock({ number, title, body, index = 0 }: {
  number: string; title: string; body: string; index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.12 }}
      style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '24px',
        paddingBottom: '32px', borderBottom: `1px solid ${SURFACE}` }}
    >
      <p style={{ color: MED, fontSize: 'var(--type-l5)', fontWeight: 700, lineHeight: 1, paddingTop: '4px' }}>
        {number}
      </p>
      <div>
        <h3 style={T_H3}>{title}</h3>
        <p style={T_BODY}>{body}</p>
      </div>
    </motion.div>
  );
}

function PersonaItem({ icon: Icon, title, body, index = 0 }: {
  icon: ElementType; title: string; body: string; index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div style={{
        width: 36, height: 36, backgroundColor: B,
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px',
      }}>
        <Icon size={16} color={W} />
      </div>
      <h3 style={T_H3}>{title}</h3>
      <p style={T_BODY}>{body}</p>
    </motion.div>
  );
}

function NextStepItem({ icon: Icon, title, body, index = 0 }: {
  icon: ElementType; title: string; body: string; index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.1 }}
      style={{ display: 'flex', gap: '20px', alignItems: 'flex-start',
        paddingBottom: '28px', borderBottom: `1px solid ${SURFACE}` }}
    >
      <div style={{
        flexShrink: 0, width: 40, height: 40, backgroundColor: B,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon size={18} color={W} />
      </div>
      <div>
        <h3 style={T_H3}>{title}</h3>
        <p style={T_BODY}>{body}</p>
      </div>
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export function NeoCaseStudy() {
  const tocTriggerRef = useRef<HTMLDivElement>(null);
  const [tocFixed, setTocFixed] = useState(false);

  const tocItems = [
    { id: 'tldr',         label: 'TL;DR' },
    { id: 'brand',        label: 'Brand' },
    { id: 'challenge',    label: 'Challenge' },
    { id: 'persona',      label: 'Persona' },
    { id: 'strategy',     label: 'Design Strategy' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'reflection',   label: 'Reflection' },
    { id: 'next',         label: 'Next Steps' },
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
    <div className="case-study-page neo-page min-h-screen bg-[var(--ds-bg-page)]">
      <Navigation />

      <CaseStudyHero
        title="Neo"
        description="A conversational stylist & support agent for NYON — turning post-purchase anxiety into a 45-second brand moment."
        mediaType="image"
        mediaSrc={NYON_HERO}
        visitLink={{ href: 'https://newyorkornowhere.com', label: 'Visit newyorkornowhere.com' }}
        secondaryLink={{ href: 'https://creator.voiceflow.com/share/69839590c8232148705927c0/development', label: 'Try the prototype' }}
        tags={[
          { label: 'Conversational AI', variant: 'secondary' },
          { label: 'Order Modification', variant: 'secondary' },
          { label: 'Brand-Voice Design', variant: 'secondary' },
          { label: 'Voiceflow', variant: 'secondary' },
        ]}
      />

      <MobileTOC items={tocItems} />

      {/* ── Main layout ──────────────────────────────────── */}
      <section className="pb-32 pt-16 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr]">

            {/* Sticky TOC */}
            <div className="hidden lg:block">
              <div style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
                <StickyTOC items={tocItems} isFixed={tocFixed} />
              </div>
            </div>

            {/* Content */}
            <div className="case-study-content-wrapper flex w-full max-w-none min-w-0 flex-col">
              <div ref={tocTriggerRef} style={{ height: 1 }} />

              {/* ── TL;DR ──────────────────────────── */}
              <div id="tldr" className="funfit-section">
                <h2 style={T_H2}>TL;DR</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '16px', marginBottom: '48px' }}>
                  <TLDRCard icon={Target} title="Project" index={0}
                    content="Designed Neo — NYON's conversational agent — to handle post-purchase order modifications end-to-end, in brand voice." />
                  <TLDRCard icon={TrendingUp} title="Outcome" index={1}
                    content="Order modification time: 4.5 min → 45 sec. 85% of beta testers rated Neo as distinctly NYON even in error states." />
                  <TLDRCard icon={MessageCircle} title="My Role" index={2}
                    content="UX Design & Systems. Architected intent logic, tone guidelines, and edge-case guardrails in Voiceflow." />
                </div>

                {/* Metrics — inverted */}
                <Label>Beta Testing & Heuristic Evaluation</Label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
                  gap: '4px', marginBottom: '48px' }}>
                  <MetricCard stat="100%" label="Resolution Rate"
                    sub="Zero human escalations during beta" index={0} />
                  <MetricCard stat="45s" label="Avg. Modification Time"
                    sub="Down from 4.5 min — 6× faster" index={1} />
                  <MetricCard stat="85%" label="Brand-Voice Continuity"
                    sub={'Testers confirmed Neo stayed "distinctly NYON" even in error states'} index={2} />
                </div>

                {/* Credits */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  <Label>Project Credits</Label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px 32px' }}>
                    <div>
                      <p style={{ color: MUTED, fontSize: 'var(--type-l1)', fontWeight: 600,
                        letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                        Faculty Advisor
                      </p>
                      <p style={{ color: B, fontSize: 'var(--type-l3)', fontWeight: 500 }}>
                        Prof. Sai Shruthi Chivukula
                      </p>
                    </div>
                    {[
                      { role: 'CUX Research & Strategy', name: 'Manvi Tandon', href: 'https://www.linkedin.com/in/manvi-tandon/' },
                      { role: 'Conversational Design & Prototyping', name: 'Tony Zhang', href: 'https://www.linkedin.com/in/tony-zhang-45467929b/' },
                      { role: 'UX Design & Systems', name: 'Shanshan Lai', href: 'https://www.linkedin.com/in/shane-lai/' },
                    ].map(({ role, name, href }) => (
                      <div key={role}>
                        <p style={{ color: MUTED, fontSize: 'var(--type-l1)', fontWeight: 600,
                          letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                          {role}
                        </p>
                        <a href={href} target="_blank" rel="noopener noreferrer"
                          style={{ color: B, fontSize: 'var(--type-l3)', fontWeight: 500,
                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                            textDecoration: 'none', borderBottom: `1px solid ${MED}` }}>
                          {name}
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* ── Demo Video ─────────────────────── */}
              <div className="funfit-section">
                <motion.div
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6 }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '48px',
                    alignItems: 'center',
                  }}
                  className="neo-demo-grid"
                >
                  {/* Left — copy */}
                  <div>
                    <Label>Prototype Demo</Label>
                    <h2 style={{ ...T_H2, marginBottom: '20px' }}>Neo in Action</h2>
                    <p style={{ ...T_BODY, marginBottom: '24px' }}>
                      Watch Neo handle a real post-purchase flow — from order lookup to color swap
                      confirmation — in under 45 seconds, entirely in brand voice.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {[
                        'Sub-intent detection mid-flow',
                        'Real-time order card rendering',
                        'Contextual tone — casual → authoritative',
                      ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: 6, height: 6, backgroundColor: B, flexShrink: 0 }} />
                          <p style={{ color: G, fontSize: 'var(--type-l3)', fontWeight: 400 }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right — video */}
                  <div style={{ overflow: 'hidden', borderRadius: '4px' }}>
                    <video
                      src="/neo-demo.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* ── Brand Context ───────────────────── */}
              <div id="brand" className="funfit-section">
                <Label>The Brand</Label>
                <h2 style={T_H2}>New York or Nowhere</h2>

                {/* NYON logo */}
                <div style={{ marginBottom: '32px' }}>
                  <img src={NYON_LOGO} alt="NYON logo"
                    style={{ height: '48px', display: 'block', objectFit: 'contain' }} />
                </div>

                <p style={{ ...T_BODY, marginBottom: '32px', maxWidth: '640px' }}>
                  NYON is a New York–born streetwear label built on unapologetic city pride — from Knicks
                  collab drops to sold-out capsule collections.
                </p>

                {/* Knicks collab full-bleed image */}
                <NyonImage src={NYON_KNICKS} alt="NYON × Knicks collaboration campaign" />

                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '-8px' }}>
                  {['NYC Streetwear', 'Knicks Collab', 'Limited Drops', 'Community-first'].map((tag) => (
                    <span key={tag} style={{
                      padding: '5px 12px', backgroundColor: SURFACE,
                      color: G, fontSize: 'var(--type-l1)', fontWeight: 500,
                      letterSpacing: '0.04em', textTransform: 'uppercase',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* ── Challenge ──────────────────────── */}
              <div id="challenge" className="funfit-section">
                <Label>The Challenge</Label>
                <h2 style={T_H2}>Post-Purchase Anxiety</h2>

                <p style={{ ...T_BODY, marginBottom: '32px', maxWidth: '640px' }}>
                  Between "Order Placed" and "Shipped," customers find sizing errors, change their minds,
                  and hit dead-end email forms. NYON needed a solution that matched the brand's speed and
                  attitude.
                </p>

                {/* Inverted callout */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} style={INV}>
                  <h3 style={T_H3_INV}>Designer's Framing</h3>
                  <p style={T_BODY_INV}>
                    The goal wasn't a chatbot — it was{' '}
                    <strong style={{ color: W }}>Systemic Elasticity</strong>: a conversational bridge
                    that lets the system pivot mid-transaction without breaking backend data integrity.
                  </p>
                </motion.div>
              </div>

              {/* ── Persona ────────────────────────── */}
              <div id="persona" className="funfit-section">
                <Label>Defining Neo</Label>
                <h2 style={T_H2}>Main Character Energy</h2>

                <p style={{ ...T_BODY, marginBottom: '40px', maxWidth: '640px' }}>
                  Neo is loud, unapologetic, and effortlessly reliable — a personality map anchored in
                  NYON's NYC attitude.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px' }}>
                  <PersonaItem icon={Mic2} title="Voice" index={0}
                    body="Loud, Unapologetic, Effortlessly Reliable. Neo redirects confusion with the confidence of a New York local — never apologizes, always moves forward." />
                  <PersonaItem icon={Sparkles} title="Tone Shift" index={1}
                    body="Playful during discovery. Concise & authoritative during order modification. Personality stays; register shifts." />
                  <PersonaItem icon={ShieldCheck} title="Brand Continuity" index={2}
                    body="85% of testers confirmed Neo felt distinctly NYON even in high-friction error states." />
                </div>
              </div>

              {/* ── Design Strategy ────────────────── */}
              <div id="strategy" className="funfit-section">
                <Label>Design Strategy</Label>
                <h2 style={T_H2}>Breaking the Linearity Trap</h2>

                <p style={{ ...T_BODY, marginBottom: '32px', maxWidth: '640px' }}>
                  Most bots break when a user changes their mind mid-flow — Neo doesn't.
                </p>

                {/* Solution — inverted */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} style={{ ...INV, marginBottom: '32px' }}>
                  <h3 style={T_H3_INV}>Global Triggers &amp; Local Overrides</h3>
                  <p style={{ ...T_BODY_INV, marginBottom: '24px' }}>
                    Sub-intent shifts are detected at every turn, so pivoting from "size swap" to "refund"
                    never forces a restart.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '8px' }}>
                    {['Global escape triggers', 'Sub-intent detection',
                      'Context persistence across turns', 'Graceful flow hand-off'].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px',
                        padding: '10px 14px', backgroundColor: 'rgba(255,255,255,0.08)' }}>
                        <CheckCircle2 size={14} color={W} />
                        <p style={{ color: W, fontSize: 'var(--type-l2)', fontWeight: 500 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
                  <DecisionPill text="Contextual tone shifting" index={0} />
                  <DecisionPill text="Non-linear pivot handling" index={1} />
                  <DecisionPill text="Real-time status syncs" index={2} />
                </div>

                <Label>Intent routing — Voiceflow</Label>
                <NyonImage src={NEO_FLOW_LOGIC} alt="Voiceflow intent routing: Modify my order → Color / Cancel / Size branches" />
              </div>

              {/* ── Architecture ───────────────────── */}
              <div id="architecture" className="funfit-section">
                <Label>Deep Dive</Label>
                <h2 style={T_H2}>Order Modification Architecture</h2>

                <NyonImage src={NEO_MOBILE_WATCH} alt="Neo on mobile and Apple Watch" style={{ marginBottom: '40px' }} />

                <p style={{ ...T_BODY, marginBottom: '32px', maxWidth: '640px' }}>
                  Swapping an item means managing inventory, price deltas, and confirmation — all surfaced
                  inline so users never wonder if the change saved.
                </p>

                <Label>Color swap flow — Voiceflow</Label>
                <NyonImage src={NEO_FLOW_COLORSWAP} alt="Voiceflow ReplaceColor flow: product card → color selection → confirmation" />

                <Label>Cancel order flow — Voiceflow</Label>
                <NyonImage src={NEO_FLOW_CANCEL} alt="Voiceflow cancel order flow with color variant branching and confirmation state" />

                <Label>Dynamic variables in confirmation message</Label>
                <NyonImage src={NEO_FLOW_MESSAGE} alt="Voiceflow message node using {color} and {size} variables in order confirmation" style={{ marginBottom: '0' }} />

                <motion.blockquote
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5 }}
                  style={{ borderLeft: `3px solid ${B}`, paddingLeft: '24px', margin: '0 0 40px' }}>
                  <p style={{ color: B, fontSize: 'var(--type-l4)', fontWeight: 400,
                    fontStyle: 'italic', lineHeight: '1.6', marginBottom: '12px' }}>
                    "I expected a boring form. Instead I had a 30-second chat that felt like texting a
                    friend at the warehouse."
                  </p>
                  <span style={{ color: MUTED, fontSize: 'var(--type-l2)', fontWeight: 500 }}>
                    — Participant #04, Usability Study
                  </span>
                </motion.blockquote>
              </div>

              {/* ── Reflection ─────────────────────── */}
              <div id="reflection" className="funfit-section">
                <Label>Senior Reflection</Label>
                <h2 style={T_H2}>Redefining Customer Service</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  <InsightBlock number="01"
                    title="Support as a Revenue Driver"
                    body="Frictionless modification reduces perceived purchase risk — converting support from a cost center into a competitive advantage."
                    index={0} />
                  <InsightBlock number="02"
                    title="Edge Cases Are the Product"
                    body="In CUI design, the frustrated, rushed, or indecisive user is where real UX value is created. We moved from 'Bot Design' to 'Expectation Management.'"
                    index={1} />
                  <InsightBlock number="03"
                    title="Constraints as Guardrails"
                    body="Voiceflow's intent-overlap constraints shaped the 'No-Match' logic — not 'I don't know,' but 'I can notify you when your size is back in stock.'"
                    index={2} />
                </div>
              </div>

              {/* ── Next Steps ─────────────────────── */}
              <div id="next" className="funfit-section">
                <Label>Future Iterations</Label>
                <h2 style={T_H2}>Scaling Personalization</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  <NextStepItem icon={BarChart2} title="Predictive Modification" index={0}
                    body="Surface best-fit size recommendations during a swap using purchase history — fewer turns, faster resolution." />
                  <NextStepItem icon={Clock} title="Proactive Logistics" index={1}
                    body="Alert users of shipping delays via Neo before they ask — reactive pain point becomes proactive brand gesture." />
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
