import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface TransitionBlockProps {
  title?: string;
  content: string;
  highlightedText?: { text: string; position: 'start' | 'middle' | 'end' }[];
}

export function TransitionBlock({ title, content, highlightedText }: TransitionBlockProps) {
  const renderContent = () => {
    if (!highlightedText || highlightedText.length === 0) {
      return content;
    }

    // Simple highlighting logic - split content and wrap highlighted parts
    let processedContent = content;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    highlightedText.forEach((highlight, idx) => {
      const index = processedContent.indexOf(highlight.text, lastIndex);
      if (index !== -1) {
        // Add text before highlight
        if (index > lastIndex) {
          parts.push(
            <span key={`text-${idx}`}>
              {processedContent.substring(lastIndex, index)}
            </span>
          );
        }
        // Add highlighted text
        parts.push(
          <span
            key={`highlight-${idx}`}
            style={{
              color: '#E56641',
              fontWeight: 600,
              fontFamily: 'MuseoModerno, sans-serif'
            }}
          >
            {highlight.text}
          </span>
        );
        lastIndex = index + highlight.text.length;
      }
    });

    // Add remaining text
    if (lastIndex < processedContent.length) {
      parts.push(
        <span key="text-end">
          {processedContent.substring(lastIndex)}
        </span>
      );
    }

    return parts;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundColor: 'rgba(237, 150, 79, 0.08)',
        border: '1px solid rgba(229, 102, 65, 0.15)',
        borderRadius: '12px',
        padding: '32px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #ED964F 0%, #E56641 50%, #ED964F 100%)',
        opacity: 0.6
      }} />

      {title && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <ArrowRight size={20} color="#E56641" />
          <h4 style={{
            color: '#E56641',
            fontSize: '16px',
            fontFamily: 'MuseoModerno, sans-serif',
            fontWeight: 600,
            margin: 0
          }}>
            {title}
          </h4>
        </div>
      )}

      <p style={{
        color: '#3B2E24',
        fontSize: '15px',
        lineHeight: '1.8',
        margin: 0
      }}>
        {renderContent()}
      </p>
    </motion.div>
  );
}
