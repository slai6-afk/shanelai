import { Fragment } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export type FlowDiagramStep = {
  text: string;
  emoji: string;
};

interface FlowDiagramProps {
  steps: FlowDiagramStep[];
  accentColor?: string;
  /** When true, omit outer card shell (use inside another card). */
  embedded?: boolean;
}

function FlowNode({
  step,
  accentColor,
  embedded
}: {
  step: FlowDiagramStep;
  accentColor: string;
  embedded: boolean;
}) {
  const nodeBg = embedded ? 'var(--ds-bg-muted)' : 'var(--ds-bg-surface)';
  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="min-h-[99px] min-w-0 flex-1 rounded-2xl shadow-[0_1px_12px_rgba(0,0,0,0.05)]"
      style={{
        maxWidth: '284px',
        padding: '14px 18px',
        backgroundColor: nodeBg,
        borderLeft: `4px solid ${accentColor}`,
        fontSize: 'var(--type-l3)',
        fontWeight: 400,
        lineHeight: '22.5px',
        color: 'var(--ds-text-primary)'
      }}
    >
      <span
        style={{ marginRight: 8, fontSize: 'var(--type-l4)', lineHeight: '27px', verticalAlign: 'middle' }}
        aria-hidden
      >
        {step.emoji}
      </span>
      {step.text}
    </motion.div>
  );
}

export function FlowDiagram({ steps, accentColor = '#ed964f', embedded = false }: FlowDiagramProps) {
  if (embedded && steps.length === 4) {
    const [s0, s1, s2, s3] = steps;
    const row = (a: FlowDiagramStep, b: FlowDiagramStep) => (
      <div
        className="flex w-full max-w-[780px] flex-wrap items-center justify-center gap-3 md:justify-between md:gap-2"
        style={{ paddingLeft: '0', paddingRight: '0' }}
      >
        <FlowNode step={a} accentColor={accentColor} embedded />
        <ArrowRight
          size={22}
          color={accentColor}
          strokeWidth={2}
          className="hidden shrink-0 opacity-85 sm:block"
          aria-hidden
        />
        <FlowNode step={b} accentColor={accentColor} embedded />
      </div>
    );

    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-8"
      >
        {row(s0, s1)}
        {row(s2, s3)}
      </motion.div>
    );
  }

  const nodeBg = embedded ? 'var(--ds-bg-muted)' : 'var(--ds-bg-surface)';
  const inner = (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '12px 16px'
      }}
    >
      {steps.map((step, index) => (
        <Fragment key={step.text}>
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            style={{
              maxWidth: 'min(100%, 280px)',
              padding: '14px 18px',
              backgroundColor: nodeBg,
              borderRadius: '16px',
              boxShadow: '0 1px 12px rgba(0, 0, 0, 0.05)',
              fontSize: 'var(--type-l3)',
              fontWeight: 400,
              lineHeight: '1.5',
              color: 'var(--ds-text-primary)',
              borderLeft: `4px solid ${accentColor}`
            }}
          >
            <span style={{ marginRight: 8, fontSize: 'var(--type-l4)', verticalAlign: 'middle' }} aria-hidden>
              {step.emoji}
            </span>
            {step.text}
          </motion.div>
          {index < steps.length - 1 ? (
            <ArrowRight
              size={22}
              color={accentColor}
              strokeWidth={2}
              style={{ flexShrink: 0, opacity: 0.85 }}
              aria-hidden
            />
          ) : null}
        </Fragment>
      ))}
    </div>
  );

  if (embedded) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {inner}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="tldr-card-surface"
      style={{
        marginTop: '40px',
        marginBottom: '8px',
        padding: '28px'
      }}
    >
      {inner}
    </motion.div>
  );
}
