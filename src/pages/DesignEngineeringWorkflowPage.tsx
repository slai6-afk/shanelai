import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { FlowDiagram, type FlowDiagramStep } from '../components/case-study/FlowDiagram';
import { MobileTOC } from '../components/case-study/MobileTOC';
import { StickyTOC } from '../components/case-study/StickyTOC';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import workflowLogo1 from '../assets/workflow/workflow-logo-1.png';
import workflowLogo2 from '../assets/workflow/workflow-logo-2.png';
import workflowLogo3 from '../assets/workflow/workflow-logo-3.png';
import workflowLogo4 from '../assets/workflow/workflow-logo-4.png';
import { WordBackdropDecor } from '../components/vector-decor';

type WorkflowSection = {
  id: string;
  label: string;
  title: string;
  description?: string;
  steps: FlowDiagramStep[];
};

const workflowSections: WorkflowSection[] = [
  {
    id: 'end-to-end',
    label: 'End-to-End (0 to 1 Launch)',
    title: 'End-to-End (0 to 1 Launch)',
    steps: [
      { emoji: '🔍', text: 'Research & Strategy: Defining core problems.' },
      { emoji: '✏️', text: 'Sketch MVP Flow: Low-fidelity logic mapping.' },
      { emoji: '🎨', text: 'Figma Make: Generating initial UI via AI-assisted design.' },
      { emoji: '✨', text: 'Perfecting Design: Manual polish of the design system in Figma.' },
      { emoji: '🔗', text: 'Cursor + Figma MCP: Connecting Figma components directly to Cursor for code generation.' },
      { emoji: '⚡', text: 'Functional MVP: Verifying the core user flow in code.' },
      { emoji: '🗄️', text: 'Database & API: Connecting Supabase for real-time data and authentication.' },
      { emoji: '🛡️', text: 'Edge Cases & Failure States: Handling errors and empty states.' },
      { emoji: '🔄', text: 'Final MCP Sync: Updating Figma changes to code via MCP for pixel-perfect results.' },
      { emoji: '🧪', text: 'User Testing & Iteration: Loop back based on feedback.' }
    ]
  },
  {
    id: 'design-to-dev-handoff',
    label: 'Design-to-Dev Handoff',
    title: 'Design-to-Dev Handoff',
    description:
      'I focus on scalability and communication. By establishing a rigorous Token system, I minimize communication entropy and ensure design consistency across all platforms.',
    steps: []
  },
  {
    id: 'fun-visual-coding',
    label: 'Fun Visual Coding (Rapid Prototyping)',
    title: 'Fun Visual Coding (Rapid Prototyping)',
    steps: [
      { emoji: '💬', text: 'The Prompt: Combining text and visual references in Figma Make.' },
      { emoji: '🤖', text: 'AI Generation: Rapid prototyping of visual modules.' },
      { emoji: '✍️', text: 'Manual Refinement: Overriding AI choices with human aesthetic judgment.' },
      { emoji: '🎬', text: 'Visual Polish: Finalizing textures and motion.' }
    ]
  }
];

const tocItems = workflowSections.map((s) => ({ id: s.id, label: s.label }));

function WorkflowLogoStrip() {
  return (
    <div
      className="flex w-full flex-wrap items-end justify-between gap-6 px-4 sm:px-10 md:px-[65px]"
      style={{ marginBottom: '8px' }}
    >
      <div
        className="flex h-[71px] w-[71px] shrink-0 items-center justify-center"
        style={{ transform: 'scaleY(-1) rotate(180deg)' }}
      >
        <img
          src={workflowLogo4}
          alt=""
          className="h-[71px] w-[71px] object-cover"
          width={71}
          height={71}
          loading="lazy"
          decoding="async"
        />
      </div>
      <img
        src={workflowLogo1}
        alt=""
        className="h-[71px] w-[71px] shrink-0 object-cover"
        width={71}
        height={71}
        loading="lazy"
        decoding="async"
      />
      <img
        src={workflowLogo2}
        alt=""
        className="h-[71px] w-[71px] shrink-0 object-cover"
        width={71}
        height={71}
        loading="lazy"
        decoding="async"
      />
      <img
        src={workflowLogo3}
        alt=""
        className="h-[71px] max-h-[71px] min-w-0 shrink object-cover"
        style={{ width: 'min(100%, 294px)' }}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

/** Workflow section cards — match About panel (Wild Sand 65%). */
function WorkflowSectionCard({ bordered, children }: { bordered?: boolean; children: ReactNode }) {
  return (
    <div
      className="w-full"
      style={{
        borderRadius: '20px',
        padding: '33px',
        backgroundColor: 'var(--ds-surface-elevated)',
        boxShadow: 'var(--ds-shadow-elevated)',
        ...(bordered
          ? { border: '1px solid var(--ds-border-subtle)' }
          : {})
      }}
    >
      {children}
    </div>
  );
}

function TimelineViz({ steps }: { steps: FlowDiagramStep[] }) {
  return (
    <div className="flex flex-col gap-6">
      {steps.map((step, index) => (
        <motion.div
          key={step.text}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.35, delay: index * 0.02 }}
          className="flex items-start gap-4"
        >
          <div
            className="flex h-6 min-w-0 shrink-0 items-center justify-center rounded-full px-2"
            style={{ color: 'var(--ds-accent-case)', backgroundColor: 'var(--ds-bg-muted)' }}
            aria-hidden
          >
            <span className="text-[16px] font-bold leading-6 tabular-nums">{index + 1}</span>
          </div>
          <p
            className="min-w-0 flex-1 text-[16px] leading-[26px]"
            style={{ color: 'var(--ds-text-primary)' }}
          >
            <span className="mr-2 inline-block align-[-0.1em] text-[1em] leading-none" aria-hidden>
              {step.emoji}
            </span>
            {step.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function HandoffViz() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0 }}
        className="flex min-w-0 flex-col gap-3"
      >
        <div className="flex flex-wrap items-baseline gap-2 text-[16px] leading-6 text-[var(--ds-text-primary)]">
          <span className="font-bold">01</span>
          <span className="font-normal">🎯 Design Token System</span>
        </div>
        <p className="m-0 text-[16px] leading-[26px]" style={{ color: 'var(--ds-text-primary)' }}>
          Standardizing colors, spacing, and shadows.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="flex min-w-0 flex-col gap-3"
      >
        <p className="m-0 text-[16px] leading-6 text-[var(--ds-text-primary)]">
          <span className="font-bold">02 📋 </span>
          <span className="font-normal">Component Documentation </span>
        </p>
        <p className="m-0 text-[16px] leading-[26px]" style={{ color: 'var(--ds-text-primary)' }}>
          Detailed state definitions (hover, active, disabled).
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="flex min-w-0 flex-col gap-3"
      >
        <p className="m-0 text-[16px] leading-6 text-[var(--ds-text-primary)]">
          <span className="font-bold">03 📦 </span>
          <span className="font-normal">Asset Delivery</span>
        </p>
        <p className="m-0 text-[16px] leading-[26px]" style={{ color: 'var(--ds-text-primary)' }}>
          Exporting optimized SVGs and optimized Lottie files.
        </p>
      </motion.div>
    </div>
  );
}

export function DesignEngineeringWorkflowPage() {
  const tocTriggerRef = useRef<HTMLDivElement>(null);
  const [tocFixed, setTocFixed] = useState(false);
  const [w1, w2, w3] = workflowSections;

  useEffect(() => {
    const handleScroll = () => {
      if (tocTriggerRef.current) {
        const triggerRect = tocTriggerRef.current.getBoundingClientRect();
        const activationOffset = 120;
        setTocFixed(triggerRect.top <= activationOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--ds-bg-page)]">
      <Navigation />

      <section className="design-workflow-hero px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px] text-center">
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="font-normal text-[var(--ds-text-primary)]"
              style={{
                fontSize: 'var(--type-l6)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em'
              }}
            >
              👩‍💻 As a <WordBackdropDecor vector="highlight1">Design Engineer</WordBackdropDecor>
            </h1>
          </motion.header>
        </div>
      </section>

      <MobileTOC items={tocItems} />

      <section className="px-4 pb-32 sm:px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr] lg:items-start lg:gap-4">
            <div className="hidden lg:block">
              <StickyTOC items={tocItems} isFixed={tocFixed} />
            </div>

            <div className="case-study-content-wrapper w-full max-w-[848px]">
              <div ref={tocTriggerRef} style={{ height: 1 }} />

              <section id={w1.id} className="funfit-section scroll-mt-28">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-section-title funfit-section-title--standard"
                >
                  {w1.title}
                </motion.h2>
                <WorkflowSectionCard>
                  <div className="flex flex-col gap-10">
                    <p
                      className="m-0 text-[15px] leading-[24px]"
                      style={{ color: 'var(--ds-text-secondary)' }}
                    >
                      After my thousands of experimenting, this is my current ( Apr, 2026 ) workflow
                      about how{' '}
                      <strong className="marker-highlight marker-highlight--blue">
                        I embodied AI in to a product developing flow from 0 to 1
                      </strong>
                      . The most important thing I figured it out,{' '}
                      <strong className="marker-highlight marker-highlight--blue">is LLM knows LLM the best</strong>
                      , the fundamental thing about Vibe coding, is prompt, and ChatGPT( or Gemini,
                      Claude, and ect ) can help with translate our plain language to a prompt that our
                      tool understand :)
                    </p>
                    <WorkflowLogoStrip />
                    <TimelineViz steps={w1.steps} />
                  </div>
                </WorkflowSectionCard>
              </section>

              <section id={w2.id} className="funfit-section scroll-mt-28">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-section-title funfit-section-title--standard"
                >
                  {w2.title}
                </motion.h2>
                <WorkflowSectionCard bordered>
                  <p
                    className="funfit-meta-text mb-8 text-[15px] leading-relaxed"
                    style={{ color: 'var(--ds-text-secondary)' }}
                  >
                    {w2.description}
                  </p>
                  <HandoffViz />
                </WorkflowSectionCard>
              </section>

              <section id={w3.id} className="funfit-section scroll-mt-28">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-section-title funfit-section-title--standard"
                >
                  {w3.title}
                </motion.h2>
                <WorkflowSectionCard bordered>
                  <FlowDiagram steps={w3.steps} embedded />
                </WorkflowSectionCard>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
