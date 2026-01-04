import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function ChatIntroCard() {
  const [lines, setLines] = useState<string[]>(['', '', '', '']);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const fullText = [
    '> Initializing Shane…',
    '> Ready.',
    '> Specializing in Data-driven UX and AI interaction design.',
    '> Scroll to explore my work ↓'
  ];

  useEffect(() => {
    if (currentLineIndex >= fullText.length) return;

    const currentLineText = fullText[currentLineIndex];

    if (charIndex < currentLineText.length) {
      const timeout = setTimeout(() => {
        setLines(prev => {
          const newLines = [...prev];
          newLines[currentLineIndex] = currentLineText.slice(0, charIndex + 1);
          return newLines;
        });
        setCharIndex(prev => prev + 1);
      }, 50); // Typewriter speed ~50ms

      return () => clearTimeout(timeout);
    } else {
      // Line finished, wait before starting next line
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCharIndex(0);
      }, 400); // Stagger delay

      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentLineIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="chat-intro-card"
    >
      <div className="chat-intro-header">
        <div className="chat-intro-icon-wrapper">
          <Sparkles size={14} className="chat-intro-icon" />
        </div>
        <div className="chat-intro-dots">
          <div className="chat-intro-dot" />
          <div className="chat-intro-dot" />
        </div>
      </div>
      
      <div className="chat-intro-content">
        {lines.map((line, index) => (
          <div key={index} className="chat-intro-line">
            <span className="chat-text">{line}</span>
            {index === currentLineIndex && index < fullText.length && (
              <span className="chat-cursor" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
