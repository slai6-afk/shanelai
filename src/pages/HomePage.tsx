import { motion } from 'motion/react';
import { Mail, ArrowDown, Linkedin } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ProjectCard } from '../components/ProjectCard';
import { HeroCurvedLine } from '../components/HeroCurvedLine';
import temuLogo from '../assets/temulogo.png';
import minimaxLogo from '../assets/minimax-ai-models-1024x532.jpg';
import castboxLogo from '../assets/castchatlogo.png';
import shaneAvatar from '../assets/shane-avatar.jpg';
import nycCover from '../assets/cover.png';
import tsinghuaLogo from '../assets/Tsinghua_University_Logo.svg.png';
import prattLogo from '../assets/Pratt_Institute_Logo.svg.png';
import { useState, useEffect, useRef, memo } from 'react';

// Terminal Typing Effect Component - Optimized
const TerminalCard = memo(function TerminalCard() {
  const lines = [
    { text: '> Initializing Shanshan (Shane) Lai…', delay: 200 },
    { text: '> Status: Online.', delay: 300 },
    { text: '', delay: 100 },
    { text: '> origin.location = central_china.small_city', delay: 150 },
    { text: '', delay: 100 },
    { text: '> education.loaded = interaction_design @tsinghua (2020)', delay: 150 },
    { text: '', delay: 100 },
    { text: '> module.vr_mr = shipped (0→1)', delay: 150 },
    { text: '', delay: 100 },
    { text: '> module.agi_avatar = active', delay: 100 },
    { text: '> note: humans still confusing', delay: 250 },
    { text: '', delay: 100 },
    { text: '> ✈️ new_york (2025)', delay: 150 },
    { text: '> program = pratt_ixd', delay: 250 },
    { text: '', delay: 100 },
    { text: '> current.task = ai_customer_support @temu', delay: 150 },
    { text: '> goal: make help feel less robotic', delay: 0 }
  ];

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Check if tsinghua or pratt has been typed
  const allText = displayedLines.join(' ') + ' ' + currentText;
  const showTsinghua = allText.includes('tsinghua');
  const showPratt = allText.includes('pratt');

  // Start typing after initial card animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, 700); // Match card fade-in delay
    return () => clearTimeout(timer);
  }, []);

  // Typing effect for current line - Optimized
  useEffect(() => {
    if (!isTyping || currentLineIndex >= lines.length) return;

    const targetText = lines[currentLineIndex].text;
    
    if (currentText.length < targetText.length) {
      const timer = setTimeout(() => {
        setCurrentText(targetText.slice(0, currentText.length + 1));
      }, 30); // Slightly faster typing for better performance
      return () => clearTimeout(timer);
    } else {
      // Line complete, move to next after delay
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, currentText]);
        setCurrentText('');
        setCurrentLineIndex(prev => prev + 1);
      }, lines[currentLineIndex].delay);
      return () => clearTimeout(timer);
    }
  }, [currentText, currentLineIndex, isTyping, lines]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Auto scroll to bottom when content updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayedLines, currentText]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -4, boxShadow: '0 10px 28px rgba(0, 0, 0, 0.1)' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        marginLeft: '20px',
        position: 'relative',
        zIndex: 2,
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        padding: '28px 32px',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
        transition: 'all 0.2s ease-out',
        alignSelf: 'flex-start',
        marginTop: '45px',
        border: '1px solid rgba(0, 0, 0, 0.04)',
        height: '216px'
      }}
      className="terminal-card-wrapper"
    >
      <div 
        ref={scrollRef}
        style={{ 
          fontSize: '15px', 
          fontFamily: 'monospace', 
          color: '#1a1a1a', 
          lineHeight: '1.8', 
          fontWeight: 400,
          overflowY: 'auto',
          height: '100%',
          paddingRight: '8px',
          scrollBehavior: 'smooth',
          position: 'relative'
        }}
        className="terminal-scroll"
      >
        {/* Tsinghua Logo Background - appears when typing tsinghua */}
        {showTsinghua && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: '80px',
              right: '-20px',
              width: '130px',
              height: '130px',
              pointerEvents: 'none',
              zIndex: 0
            }}
          >
            <img 
              src={tsinghuaLogo} 
              alt="" 
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </motion.div>
        )}
        
        {/* Pratt Logo Background - appears when typing pratt */}
        {showPratt && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 0.7, scale: 1, rotate: -8 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: '200px',
              width: '130px',
              height: '130px',
              pointerEvents: 'none',
              zIndex: 0,
              transform: 'rotate(-8deg)'
            }}
          >
            <img 
              src={prattLogo} 
              alt="" 
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </motion.div>
        )}
        
        {displayedLines.map((line, index) => (
          <div 
            key={index} 
            style={{ 
              marginBottom: line === '' ? '0px' : '4px',
              color: line.includes('note:') ? '#666666' : 
                     line.includes('goal:') ? '#666666' : 
                     index <= 1 ? '#1a1a1a' : '#333333',
              fontSize: line === '' ? '8px' : '15px',
              lineHeight: line === '' ? '0.5' : '1.8',
              position: 'relative',
              zIndex: 1
            }}
          >
            {line || '\u00A0'}
          </div>
        ))}
        {currentLineIndex < lines.length && (
          <div style={{ 
            color: currentText.includes('note:') ? '#666666' : 
                   currentText.includes('goal:') ? '#666666' : 
                   currentLineIndex <= 1 ? '#1a1a1a' : '#333333',
            fontSize: currentText === '' ? '8px' : '15px',
            lineHeight: currentText === '' ? '0.5' : '1.8',
            marginBottom: currentText === '' ? '0px' : '4px',
            position: 'relative',
            zIndex: 1
          }}>
            {currentText || '\u00A0'}
            <span style={{ 
              color: '#FF7300', 
              opacity: showCursor ? 1 : 0,
              transition: 'opacity 0.1s'
            }}>
              _
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
});

export function HomePage() {
  const highlightedWorks = [
    {
      title: 'NYC Tourism Redesign',
      description: 'Helping students and recent arrivals turn the city into a place that feels livable, not overwhelming',
      image: nycCover,
      tags: ['UX', 'Redesign', 'IA'],
      type: 'design' as const,
      link: '/case-study/nyc-tourism'
    },
    {
      title: 'Memory Navigator',
      description: 'A MR game system for seniors with cognitive issue, to identify the symptoms earlier and acknowledge specialists better.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2Fd3d7c1c3590b47178dabf39dc0bd330a',
      tags: ['AR', 'HoloLens'],
      type: 'design' as const,
      link: '/case-study/memory-navigator'
    },
    {
      title: 'Huuuuu',
      description: 'Using gloves with breath-sensors and heating knit to empower women in cold work fields.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2Fca07cfe232474fd98a425e6157eb83f4',
      tags: ['Arduino', 'Wearable'],
      type: 'research' as const,
      link: '/case-study/Huuuuu'
    },
    {
      title: 'FunFitLand (UFit)',
      description: 'Calibration system design in VR that fits users with diverse physical mobilities.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2Ff9363af89837426eac1bacac49533375',
      tags: ['VR', 'Accessibility', 'Design'],
      type: 'design' as const,
      link: '/case-study/funfitland'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navigation />

      {/* Hero Section */}
      <section className="pb-0 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div style={{ paddingTop: '115px' }} className="flex flex-col">
            <div style={{ display: 'flex', flexDirection: 'row', position: 'relative' }} className="max-md:flex-col hero-layout-container">
              <HeroCurvedLine />
              
              {/* Left Column */}
              <div style={{ display: 'flex', flexDirection: 'column', width: '50%', position: 'relative', zIndex: 2, paddingRight: '40px' }} className="max-md:!w-full max-md:!pr-0 hero-headline-wrapper">
                {/* Name with Avatar Tooltip */}
                <motion.div
                  style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', width: 'fit-content' }}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#666666',
                      marginBottom: '24px',
                      letterSpacing: '0.005em',
                      cursor: 'pointer'
                    }}
                    onClick={() => window.location.href = '/about'}
                  >
                    Hi, I'm Shanshan (Shane) Lai.
                  </motion.p>
                  
                  {/* Avatar Tooltip - Right Side */}
                  <motion.div
                    variants={{
                      rest: { opacity: 0, x: -12, scale: 0.85, rotate: -15 },
                      hover: { opacity: 1, x: 0, scale: 1, rotate: 0 }
                    }}
                    transition={{ 
                      duration: 0.35, 
                      ease: [0.34, 1.56, 0.64, 1],
                      rotate: { duration: 0.4 }
                    }}
                    style={{
                      position: 'absolute',
                      left: '100%',
                      top: '-28px',
                      marginLeft: '20px',
                      pointerEvents: 'none',
                      zIndex: 100,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    {/* Playful wave container */}
                    <motion.div
                      variants={{
                        rest: { rotate: 0 },
                        hover: { rotate: [0, 3, -3, 2, -2, 0] }
                      }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.2,
                        ease: 'easeInOut'
                      }}
                      style={{
                        position: 'relative'
                      }}
                    >
                      <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '3px solid #FFFFFF',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.04)',
                        backgroundColor: '#FFFFFF',
                        position: 'relative'
                      }}>
                        <img
                          src={shaneAvatar}
                          alt="Shane"
                          loading="eager"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                          }}
                        />
                      </div>
                      
                      {/* Sparkle decorations */}
                      <motion.div
                        variants={{
                          rest: { opacity: 0, scale: 0 },
                          hover: { opacity: 1, scale: 1 }
                        }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        style={{
                          position: 'absolute',
                          top: '-4px',
                          right: '-4px',
                          fontSize: '18px'
                        }}
                      >
                        ✨
                      </motion.div>
                      
                      <motion.div
                        variants={{
                          rest: { opacity: 0, scale: 0 },
                          hover: { opacity: 1, scale: 1 }
                        }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        style={{
                          position: 'absolute',
                          bottom: '4px',
                          left: '-8px',
                          fontSize: '16px'
                        }}
                      >
                        👋
                      </motion.div>
                    </motion.div>
                    
                    {/* Black Tooltip - same style as logo tooltips */}
                    <motion.div
                      variants={{
                        rest: { opacity: 0, scale: 0.9 },
                        hover: { opacity: 1, scale: 1 }
                      }}
                      transition={{ duration: 0.2, delay: 0.15 }}
                      style={{
                        backgroundColor: '#1a1a1a',
                        color: '#ffffff',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        position: 'relative'
                      }}
                    >
                      About Me
                      {/* Top arrow pointing to avatar */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '-4px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '4px solid transparent',
                          borderRight: '4px solid transparent',
                          borderBottom: '4px solid #1a1a1a'
                        }}
                      />
                    </motion.div>
                    
                    {/* Left-pointing arrow (to text) */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-6px',
                        top: '46px',
                        width: 0,
                        height: 0,
                        borderTop: '6px solid transparent',
                        borderBottom: '6px solid transparent',
                        borderRight: '6px solid #FFFFFF',
                        filter: 'drop-shadow(-2px 0 2px rgba(0,0,0,0.04))'
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* Primary Introduction - Most prominent */}
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                  style={{
                    fontSize: 'clamp(20px, 5vw, 36px)',
                    fontWeight: 400,
                    lineHeight: '1.4',
                    color: '#000000',
                    marginBottom: '32px',
                    maxWidth: '580px',
                    letterSpacing: '-0.01em'
                  }}
                >
                  Designs <span style={{ color: '#FF7300', fontWeight: 500 }}>GenAI & B2C</span> products that blend data, systems, and <span style={{ color: '#FF7300', fontWeight: 500 }}>human stories</span> into intuitive experiences people enjoy every day.
                </motion.h1>

                {/* Company Credibility Line */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '14px',
                    color: '#666666',
                    marginBottom: '48px',
                    flexWrap: 'wrap'
                  }}
                >
                  <span style={{ marginRight: '4px' }}>Prev. @</span>
                  
                  {/* TEMU Logo with Tooltip */}
                  <motion.div
                    style={{ position: 'relative', display: 'inline-block' }}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <motion.img
                      src={temuLogo}
                      alt="TEMU"
                      loading="eager"
                      variants={{
                        rest: { y: 0, scale: 1 },
                        hover: { y: -3, scale: 1.03 }
                      }}
                      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      onClick={() => window.open('https://www.temu.com', '_blank')}
                      style={{
                        height: '40px',
                        width: 'auto',
                        opacity: 0.8,
                        cursor: 'pointer',
                        borderRadius: '4px',
                        display: 'block'
                      }}
                    />
                    <motion.div
                      variants={{
                        rest: { opacity: 0, y: -8, scale: 0.9, rotate: -3 },
                        hover: { opacity: 1, y: 0, scale: 1, rotate: 0 }
                      }}
                      transition={{ duration: 0.3, ease: [0.34, 1.26, 0.64, 1] }}
                      style={{
                        position: 'absolute',
                        top: '54px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#1a1a1a',
                        color: '#ffffff',
                        borderRadius: '8px',
                        fontSize: '11px',
                        pointerEvents: 'none',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        zIndex: 100,
                        minWidth: '160px',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Colored accent bar */}
                      <div style={{ 
                        height: '2px', 
                        background: 'linear-gradient(90deg, #FF7300 0%, #FFA500 100%)'
                      }} />
                      
                      {/* Content */}
                      <div style={{ padding: '10px 12px', position: 'relative' }}>
                        {/* Emoji decoration */}
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                          style={{
                            position: 'absolute',
                            top: '6px',
                            right: '8px',
                            fontSize: '14px'
                          }}
                        >
                          🛍️
                        </motion.span>
                        
                        <div style={{ 
                          fontWeight: 600, 
                          fontSize: '12px',
                          marginBottom: '4px',
                          color: '#ffffff'
                        }}>
                          Temu
                        </div>
                        <div style={{ 
                          fontSize: '10px', 
                          color: 'rgba(255,255,255,0.85)',
                          lineHeight: '1.4'
                        }}>
                          Product Designer
                        </div>
                        <div style={{ 
                          fontSize: '9px', 
                          color: 'rgba(255,255,255,0.6)',
                          marginTop: '3px',
                          fontStyle: 'italic'
                        }}>
                          AI-driven Customer Support
                        </div>
                      </div>
                      
                      {/* Top arrow pointing to logo */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '-5px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderBottom: '6px solid #1a1a1a',
                          filter: 'drop-shadow(0 -2px 3px rgba(0,0,0,0.1))'
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  <span style={{ fontWeight: 300 }}>&</span>
                  
                  {/* MiniMax Logo with Tooltip */}
                  <motion.div
                    style={{ position: 'relative', display: 'inline-block' }}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <motion.img
                      src={minimaxLogo}
                      alt="MiniMax"
                      loading="eager"
                      variants={{
                        rest: { y: 0, scale: 1 },
                        hover: { y: -3, scale: 1.03 }
                      }}
                      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      onClick={() => window.open('https://www.minimax.io', '_blank')}
                      style={{
                        height: '40px',
                        width: 'auto',
                        opacity: 0.8,
                        cursor: 'pointer',
                        borderRadius: '4px',
                        display: 'block'
                      }}
                    />
                    <motion.div
                      variants={{
                        rest: { opacity: 0, y: -8, scale: 0.9, rotate: -3 },
                        hover: { opacity: 1, y: 0, scale: 1, rotate: 0 }
                      }}
                      transition={{ duration: 0.3, ease: [0.34, 1.26, 0.64, 1] }}
                      style={{
                        position: 'absolute',
                        top: '54px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#1a1a1a',
                        color: '#ffffff',
                        borderRadius: '8px',
                        fontSize: '11px',
                        pointerEvents: 'none',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        zIndex: 100,
                        minWidth: '160px',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Colored accent bar */}
                      <div style={{ 
                        height: '2px', 
                        background: 'linear-gradient(90deg, #667EEA 0%, #764BA2 100%)'
                      }} />
                      
                      {/* Content */}
                      <div style={{ padding: '10px 12px', position: 'relative' }}>
                        {/* Emoji decoration */}
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                          style={{
                            position: 'absolute',
                            top: '6px',
                            right: '8px',
                            fontSize: '14px'
                          }}
                        >
                          🤖
                        </motion.span>
                        
                        <div style={{ 
                          fontWeight: 600, 
                          fontSize: '12px',
                          marginBottom: '4px',
                          color: '#ffffff'
                        }}>
                          MiniMax
                        </div>
                        <div style={{ 
                          fontSize: '10px', 
                          color: 'rgba(255,255,255,0.85)',
                          lineHeight: '1.4'
                        }}>
                          Product Intern
                        </div>
                        <div style={{ 
                          fontSize: '9px', 
                          color: 'rgba(255,255,255,0.6)',
                          marginTop: '3px',
                          fontStyle: 'italic'
                        }}>
                          GenAI Platform
                        </div>
                      </div>
                      
                      {/* Top arrow pointing to logo */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '-5px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderBottom: '6px solid #1a1a1a',
                          filter: 'drop-shadow(0 -2px 3px rgba(0,0,0,0.1))'
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  <span style={{ fontWeight: 300 }}>&</span>
                  
                  {/* CastChat Logo with Tooltip */}
                  <motion.div
                    style={{ position: 'relative', display: 'inline-block' }}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <motion.img
                      src={castboxLogo}
                      alt="CastChat"
                      loading="eager"
                      variants={{
                        rest: { y: 0, scale: 1 },
                        hover: { y: -3, scale: 1.03 }
                      }}
                      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      onClick={() => window.open('https://among.chat', '_blank')}
                      style={{
                        height: '40px',
                        width: 'auto',
                        opacity: 0.8,
                        cursor: 'pointer',
                        borderRadius: '4px',
                        display: 'block'
                      }}
                    />
                    <motion.div
                      variants={{
                        rest: { opacity: 0, y: -8, scale: 0.9, rotate: -3 },
                        hover: { opacity: 1, y: 0, scale: 1, rotate: 0 }
                      }}
                      transition={{ duration: 0.3, ease: [0.34, 1.26, 0.64, 1] }}
                      style={{
                        position: 'absolute',
                        top: '54px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#1a1a1a',
                        color: '#ffffff',
                        borderRadius: '8px',
                        fontSize: '11px',
                        pointerEvents: 'none',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        zIndex: 100,
                        minWidth: '160px',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Colored accent bar */}
                      <div style={{ 
                        height: '2px', 
                        background: 'linear-gradient(90deg, #11998E 0%, #38EF7D 100%)'
                      }} />
                      
                      {/* Content */}
                      <div style={{ padding: '10px 12px', position: 'relative' }}>
                        {/* Emoji decoration */}
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                          style={{
                            position: 'absolute',
                            top: '6px',
                            right: '8px',
                            fontSize: '14px'
                          }}
                        >
                          💬
                        </motion.span>
                        
                        <div style={{ 
                          fontWeight: 600, 
                          fontSize: '12px',
                          marginBottom: '4px',
                          color: '#ffffff'
                        }}>
                          CastChat
                        </div>
                        <div style={{ 
                          fontSize: '10px', 
                          color: 'rgba(255,255,255,0.85)',
                          lineHeight: '1.4'
                        }}>
                          UX Designer
                        </div>
                        <div style={{ 
                          fontSize: '9px', 
                          color: 'rgba(255,255,255,0.6)',
                          marginTop: '3px',
                          fontStyle: 'italic'
                        }}>
                          Chatbot Gamification
                        </div>
                      </div>
                      
                      {/* Top arrow pointing to logo */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '-5px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderBottom: '6px solid #1a1a1a',
                          filter: 'drop-shadow(0 -2px 3px rgba(0,0,0,0.1))'
                        }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Contact Module */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
                  style={{ marginTop: '48px' }}
                >
                  <motion.a
                    href="mailto:shanshanlai160402@gmail.com"
                    whileHover="hover"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#000000',
                      textDecoration: 'none',
                      position: 'relative',
                      paddingBottom: '2px',
                      marginBottom: '12px'
                    }}
                  >
                    <span>Get in touch</span>
                    <motion.span
                      variants={{
                        hover: { x: 4 }
                      }}
                      transition={{ duration: 0.2 }}
                      style={{ display: 'inline-block', fontSize: '14px' }}
                    >
                      →
                    </motion.span>
                    <motion.span
                      variants={{
                        hover: { scaleX: 1 }
                      }}
                      initial={{ scaleX: 0 }}
                      transition={{ duration: 0.22 }}
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        backgroundColor: '#000000',
                        transformOrigin: 'left'
                      }}
                    />
                  </motion.a>
                  
                  <div style={{ fontSize: '13px', color: '#999999', marginBottom: '16px', lineHeight: '1.5' }}>
                    Based in NYC 🗽 · Open to UX/Product roles
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <motion.a
                      href="mailto:shanshanlai160402@gmail.com"
                      whileHover={{ scale: 1.12, color: '#FF7300' }}
                      transition={{ duration: 0.18 }}
                      style={{ color: '#666666', display: 'flex', cursor: 'pointer' }}
                      aria-label="Email"
                    >
                      <Mail size={19} />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/shanshan-lai"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.12, color: '#FF7300' }}
                      transition={{ duration: 0.18 }}
                      style={{ color: '#666666', display: 'flex', cursor: 'pointer' }}
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={19} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Terminal Card */}
              <TerminalCard />
            </div>
          </div>
        </div>
      </section>


      {/* Selected Works Section */}
      <section className="py-12 sm:py-16 md:py-28 px-4 sm:px-6 md:px-12 lg:px-16 selected-works-section">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ 
                color: '#000000', 
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 400,
                lineHeight: '1.3'
              }}
            >
              Selected Works
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-2 mt-3"
              style={{ 
                color: '#666666',
                fontSize: '14px',
                fontWeight: 400
              }}
            >
<ArrowDown size={16} />
              <span>Scroll down</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {highlightedWorks.map((work, index) => (
              <ProjectCard
                key={work.title}
                title={work.title}
                description={work.description}
                image={work.image}
                tags={work.tags}
                type={work.type}
                link={work.link}
                index={index}
              />
            ))}
          </div>

          {/* See More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              marginTop: '60px' 
            }}
          >
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                backgroundColor: '#000000',
                color: '#FFFFFF',
                borderRadius: '50px',
                fontSize: '15px',
                fontWeight: 500,
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>See more projects here</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'relative', zIndex: 1, fontSize: '18px' }}
              >
                👉
              </motion.span>
              
              {/* Hover background effect */}
              <motion.div
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(90deg, #FF7300 0%, #FFA500 100%)',
                  zIndex: 0
                }}
              />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Thank You Section */}
      <section style={{ 
        padding: '80px 48px 60px', 
        background: '#1a1a1a',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '60px'
      }}
      className="sm:mt-20 md:mt-24"
      >
        {/* Reduced background particles for better performance */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              borderRadius: '50%',
              background: '#FF7300',
              filter: 'blur(2px)',
              willChange: 'transform, opacity'
            }}
          />
        ))}

        <div className="max-w-[1000px] mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          {/* Main Thank You */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <motion.h2
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '16px',
                letterSpacing: '-0.02em'
              }}
            >
              Thanks for stopping by! 
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                style={{ display: 'inline-block', marginLeft: '12px' }}
              >
                👋
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.8)',
                lineHeight: '1.6',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              Hope you enjoyed exploring my work. If you have any feedback, ideas, or just want to say hi, I'd love to hear from you!
            </motion.p>
          </motion.div>

          {/* Feedback Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(255, 115, 0, 0.2)' }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(255,115,0,0.1) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}
            />
            
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ fontSize: '48px', marginBottom: '16px' }}
            >
              💭
            </motion.div>
            
            <p style={{ 
              fontSize: '16px', 
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '20px',
              fontWeight: 500
            }}>
              Got feedback or suggestions?
            </p>
            
            <motion.a
              href="mailto:shanshanlai160402@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'linear-gradient(90deg, #FF7300 0%, #FFA500 100%)',
                color: '#FFFFFF',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(255, 115, 0, 0.3)'
              }}
            >
              <Mail size={16} />
              <span>Drop me a line</span>
            </motion.a>
          </motion.div>

          {/* Fun emoji decorations */}
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              marginTop: '40px',
              fontSize: '24px'
            }}
          >
            {['✨', '🎨', '💡', '🚀', '🎯'].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                style={{ display: 'inline-block', cursor: 'default' }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
