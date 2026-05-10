import { motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { StickyTOC } from '../../components/case-study/StickyTOC';
import { MobileTOC } from '../../components/case-study/MobileTOC';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { CardCornerVector } from '../../components/vector-decor';

import heroComposite from '../../assets/Gemini_Generated_Image_2e1a482e1a482e1a 1.png';
import tldrBackground from '../../assets/tlnrbg.png';
import hookStreet from '../../assets/f47027c6a37e29d17d2cc9b1d3f48fff.jpg';
import oldHomepage from '../../assets/oldweb1.png';
import oldDeepPage from '../../assets/oldweb2.png';
import oldCluttered from '../../assets/Screenshot 2025-12-11 at 1.20.38 PM.png';
import similarityMatrix from '../../assets/similirity metrix.png';
import personaSpectrum from '../../assets/persona.png';
import cardSortBoard from '../../assets/Things to Do-2.png';
import treeTestResult from '../../assets/Things to Do-1.png';
import sketchImage from '../../assets/sketch.png';
import iaImage from '../../assets/IA.png';
import mapNotationImage from '../../assets/mapnotation.png';
import homepageVideo from '../../assets/Screen Recording 2025-12-12 at 11.50.30 PM.mov';
import cardComparison from '../../assets/cardcompareson.png';
import mobileMapVideo from '../../assets/map_record.mov';
import mapComparisons from '../../assets/3maps.png';
import explorationFlowVideo from '../../assets/mobilevideo.mov';
import annotation1 from '../../assets/annotation1.png';
import annotation2 from '../../assets/annotation2.png';
import annotation3 from '../../assets/annotation3.png';
import logoImage from '../../assets/logo.png';
import designSystemImage from '../../assets/system.png';

// Performance-optimized animation configs
const simpleTransition = { duration: 0.3, ease: [0.4, 0, 0.2, 1] };
const viewportConfig = { once: true, margin: "-50px" };

export function NYCTourismCaseStudy() {
  const heroRef = useRef<HTMLDivElement>(null);
  const tocTriggerRef = useRef<HTMLDivElement>(null);
  const [tocFixed, setTocFixed] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (tocTriggerRef.current) {
        const triggerRect = tocTriggerRef.current.getBoundingClientRect();
        const activationOffset = 120;
        const shouldBeFixed = triggerRect.top <= activationOffset;
        setTocFixed((prev) => (prev === shouldBeFixed ? prev : shouldBeFixed));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tocItems = [
    { id: 'tldr', label: 'Overview' },
    { id: 'problem', label: 'Context' },
    { id: 'research', label: 'Research' },
    { id: 'insight', label: 'Insight' },
    { id: 'design', label: 'Design' },
    { id: 'solution', label: 'Solution' },
    { id: 'evaluation', label: 'Evaluation' }
  ];

  const researchSteps = [
    { step: 'Step 01', title: 'Interviews', outcome: 'Captured decision anxiety and planning habits', evidenceIndex: 0 },
    { step: 'Step 02', title: 'Card sorting', outcome: 'Revealed grouping by vibe, effort, and context', evidenceIndex: 1 },
    { step: 'Step 03', title: 'Data analysis', outcome: 'Confirmed clusters through a similarity matrix', evidenceIndex: 2 },
    { step: 'Step 04', title: 'Tree testing', outcome: 'Exposed where labels and paths broke', evidenceIndex: 3 },
    { step: 'Step 05', title: 'Insights', outcome: 'Reduced uncertainty became the north star', evidenceIndex: 4 }
  ];

  const researchEvidence = [
    { src: sketchImage, alt: 'sketch', caption: 'Early notes turned confusion into concrete behaviors', type: 'sketch' },
    { src: iaImage, alt: 'IA', caption: 'Category logic failed when users thought in situations', type: 'ia' },
    { src: similarityMatrix, alt: 'Similarity matrix', caption: 'Clusters emerged beyond intuition', type: 'matrix' },
    { src: iaImage, alt: 'IA tree', caption: 'Validation showed where navigation collapsed', type: 'tree' },
    { src: personaSpectrum, alt: 'persona', caption: 'Persona spectrum aligned the system to city familiarity', type: 'persona' }
  ];

  return (
    <div className="case-study-page case-study-page--nyc min-h-screen bg-[var(--ds-bg-page)]">
      <Navigation />

      <section className="case-study-hero-section pt-24 sm:pt-32 md:pt-40 pb-4 sm:pb-5 md:pb-6 px-4 sm:px-6 md:px-8 lg:px-16" id="hero" ref={heroRef}>
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={simpleTransition}>
            <div className="mb-8 rounded-lg overflow-hidden w-full sm:w-11/12 md:w-4/5 lg:w-[70%] mx-auto">
                <ImageWithFallback
                  src={heroComposite}
                  alt="NYC redesign map"
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '16 / 9',
                    display: 'block',
                    objectFit: 'cover',
                  objectPosition: 'center'
                  }}
                />
            </div>

            <h1
              style={{
                color: 'var(--ds-text-primary)',
                fontSize: 'var(--ds-text-display)',
                fontWeight: 400,
                lineHeight: '1.2',
                marginBottom: '16px'
              }}
            >
              NYC Tourism: Discover the Big Apple &amp; Making It Your Home
            </h1>

            <p
              style={{
                color: 'var(--ds-text-secondary)',
                fontSize: 'var(--type-l4)',
                fontWeight: 400,
                lineHeight: '1.6',
                marginBottom: '32px',
                maxWidth: '800px'
              }}
            >
              How I re-engineered NYC tourism IA to reduce cognitive load for students by 35% through personalized discovery
            </p>
          </motion.div>
        </div>
      </section>

      {/* TL;DR full-bleed (Memory Navigator style) */}
      <section className="px-0">
        <div
          id="tldr"
          className="tldr-hero-fullbleed case-full-bleed"
          style={{
            position: 'relative',
            minHeight: '100vh',
            marginBottom: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            padding: '80px 0'
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              overflow: 'hidden'
            }}
          >
            <ImageWithFallback
              src={tldrBackground}
              alt="NYC TL;DR background"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'brightness(0.88) blur(10px)' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.55) 40%)'
              }}
            />
          </motion.div>

          <div
            className="px-4 sm:px-6 md:px-10 lg:px-12"
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '28px',
                color: '#FFFFFF',
                opacity: 0.92
              }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{
                  fontSize: 'var(--type-l2)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  margin: 0,
                  color: 'rgba(255,255,255,0.8)'
                }}
              >
                TL;DR
              </motion.p>

              <div
                className="grid gap-4 sm:gap-4 md:gap-4"
                style={{
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                  alignItems: 'stretch'
                }}
              >
                {[
                  {
                    title: 'What I built',
                    body: 'A redesigned discovery experience that helps students explore NYC with confidence, not cognitive overload.'
                  },
                  {
                    title: 'Research foundation',
                    body: '• In-depth interviews\n• Card sorting and tree testing\n• Behavioral analysis of planning and decision-making'
                  },
                  {
                    title: 'What improved',
                    body: '• Exploring neighborhoods\n• Finding and saving places\n• Planning outings through wishlists'
                  }
                ].map((card, idx) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.08 + idx * 0.06 }}
                    style={{
                      position: 'relative',
                      backgroundColor: 'rgba(0,0,0,0.35)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      padding: '18px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    {idx === 0 ? <CardCornerVector name="highlight3" /> : null}
                    <p style={{ margin: 0, fontSize: 'var(--type-l3)', fontWeight: 600, color: 'rgba(255,255,255,0.92)' }}>{card.title}</p>
                    <p style={{ margin: 0, fontSize: 'var(--type-l3)', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', whiteSpace: 'pre-line' }}>
                      {card.body}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Team and ownership */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                style={{ marginTop: '40px' }}
              >
                <p
                  style={{
                    fontSize: 'var(--type-l2)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    margin: 0,
                    marginBottom: '24px',
                    color: 'rgba(255,255,255,0.75)'
                  }}
                >
                  Team and ownership
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '32px',
                    marginBottom: '20px'
                  }}
                  className="md:grid-cols-[100px_1fr]"
                >
                  {/* Left column - Tree image */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <div style={{ width: '80px', height: 'auto', opacity: 0.8 }}>
                      <ImageWithFallback
                        src={logoImage}
                        alt="NYC Logo"
                        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                      />
                    </div>
                  </motion.div>

                  {/* Right column - Three people side by side */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                    >
                      <p style={{ margin: 0, fontSize: 'var(--type-l3)', fontWeight: 600, color: 'rgba(255,255,255,0.95)', marginBottom: '6px' }}>
                        Shane
                      </p>
                      <p style={{ margin: 0, fontSize: 'var(--type-l2)', lineHeight: 1.5, color: 'rgba(255,255,255,0.75)' }}>
                        Using curated content to help users explore
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                    >
                      <p style={{ margin: 0, fontSize: 'var(--type-l3)', fontWeight: 600, color: 'rgba(255,255,255,0.95)', marginBottom: '6px' }}>
                        Harsh
                      </p>
                      <p style={{ margin: 0, fontSize: 'var(--type-l2)', lineHeight: 1.5, color: 'rgba(255,255,255,0.75)' }}>
                        Miltiple entry points for filtering 
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                    >
                      <p style={{ margin: 0, fontSize: 'var(--type-l3)', fontWeight: 600, color: 'rgba(255,255,255,0.95)', marginBottom: '6px' }}>
                        Robert
                      </p>
                      <p style={{ margin: 0, fontSize: 'var(--type-l2)', lineHeight: 1.5, color: 'rgba(255,255,255,0.75)' }}>
                        Utilize the wishlist to save places and explore later
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Bottom acknowledgment text */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                  style={{
                    margin: 0,
                    fontSize: 'var(--type-l1)',
                    lineHeight: 1.6,
                    color: 'rgba(255,255,255,0.6)',
                    fontStyle: 'italic',
                    textAlign: 'center'
                  }}
                >
                  Special thanks to everyone on the team for the collaboration, and to Johna Shi for his professional guidance.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile TOC */}
      <MobileTOC items={tocItems} />

      <section className="pb-32 px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr]">
            <div className="hidden lg:block">
              <div style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
                <StickyTOC items={tocItems} isFixed={tocFixed} />
              </div>
            </div>

            <div className="case-study-content-wrapper flex w-full max-w-none min-w-0 flex-col" style={{ position: 'relative' }}>
              <div ref={tocTriggerRef} style={{ height: 1 }} />

              {/* Transition: Hero → Hook */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{
                  marginBottom: '120px',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(0,0,0,0.02)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderRadius: '12px',
                  padding: '16px 24px'
                }}>
                  <p style={{ fontSize: 'var(--type-l3)', color: '#333', lineHeight: 1.8, margin: 0, fontStyle: 'normal' }}>
                    I want to explore.
                  </p>
                  <p style={{ fontSize: 'var(--type-l3)', color: '#333', lineHeight: 1.8, margin: 0, fontStyle: 'normal' }}>
                    Just not plan everything.
                </p>
                </div>
              </motion.div>

              <div id="hook" style={{ marginBottom: '200px', position: 'relative' }}>
                <motion.div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '80vh',
                    minHeight: '620px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    marginBottom: '160px'
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1 }}
                >
                  <div style={{ width: '100%', height: '100%' }}>
                    <ImageWithFallback
                      src={hookStreet}
                      alt="NYC street photo"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(6px) brightness(0.95)' }}
                    />
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.35) 100%)',
                      mixBlendMode: 'multiply',
                      zIndex: 1
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      zIndex: 2,
                      backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 0)',
                      backgroundSize: '24px 24px',
                      opacity: 0.4,
                      pointerEvents: 'none'
                    }}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      zIndex: 3,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '40px 28px'
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.75, ease: 'easeOut', delay: 0.08 }}
                      style={{
                        width: '100%',
                        maxWidth: '640px',
                        textAlign: 'left',
                        color: '#FFFFFF',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '18px'
                      }}
                    >
                      <p style={{ fontSize: 'clamp(var(--type-l4), 2.6vw, var(--ds-text-title))', fontWeight: 400, lineHeight: '1.55', letterSpacing: '0.01em', margin: 0 }}>
                        When you first arrive in New York, the city feels unreadable.
                      </p>
                      <p style={{ fontSize: 'var(--type-l3)', fontWeight: 400, lineHeight: '1.55', letterSpacing: '0.01em', margin: 0, color: 'rgba(255,255,255,0.88)' }}>
                        Students told us the same story.
                      </p>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                          marginTop: '4px'
                        }}
                      >
                        {[
                          'I want to explore.',
                          'But everything is scattered across apps.',
                          "And I don't want to waste my one free evening."
                        ].map((line) => (
                          <div
                            key={line}
                            style={{
                              border: '1px solid rgba(255,255,255,0.5)',
                              borderRadius: '10px',
                              padding: '12px 16px',
                              background: 'transparent',
                              fontSize: 'var(--type-l3)',
                              lineHeight: 1.55,
                              fontWeight: 400,
                              color: 'rgba(255,255,255,0.95)'
                            }}
                          >
                            {line}
                          </div>
                        ))}
                      </div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.85, ease: 'easeOut', delay: 0.25 }}
                        style={{ fontSize: 'var(--type-l3)', fontWeight: 400, lineHeight: '1.55', letterSpacing: '0.01em', margin: '8px 0 0', color: 'rgba(255,255,255,0.92)' }}
                      >
                        They were not looking for a tourism site.
                        <br />
                        They were looking for orientation.
                      </motion.p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div id="problem" style={{ marginBottom: '200px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: 'var(--ds-text-primary)', fontSize: 'var(--type-l5)', fontWeight: 400, marginBottom: '60px' }}
                >
                  Problem
                </motion.h2>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '24px',
                    marginBottom: '120px'
                  }}
                >
                  {[
                    {
                      label: 'Discovery',
                      title: 'Fragmented experience',
                      body: 'Students switched between TikTok, Instagram, Maps, and screenshots to plan anything.',
                      image: oldHomepage
                    },
                    {
                      label: 'Structure',
                      title: 'Unclear information architecture',
                      body: 'Category labels overlapped and buried important content.',
                      image: oldDeepPage
                    },
                    {
                      label: 'Emotion',
                      title: 'High decision risk',
                      body: 'One bad outing feels expensive in time and energy.',
                      image: oldCluttered
                    }
                  ].map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
                      style={{
                        backgroundColor: '#FFFFFF',
                        padding: '28px',
                        borderRadius: '16px',
                        border: '1px solid rgba(0,0,0,0.06)',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          border: '1px dashed rgba(235,73,73,0.7)',
                          opacity: 0.4,
                          pointerEvents: 'none'
                        }}
                      />
                      <div
                        style={{
                          borderRadius: '12px',
                          overflow: 'hidden',
                          border: '1px solid rgba(0,0,0,0.06)',
                          aspectRatio: '4 / 3',
                          backgroundColor: '#F7F7F7',
                          position: 'relative'
                        }}
                      >
                        <ImageWithFallback
                          src={card.image}
                          alt={card.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 0.9 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background:
                              'radial-gradient(circle at 22% 32%, rgba(235,73,73,0.14), transparent 28%), radial-gradient(circle at 68% 58%, rgba(235,73,73,0.12), transparent 32%)',
                            pointerEvents: 'none'
                          }}
                        />
                      </div>
                      <span style={{ fontSize: 'var(--type-l1)', letterSpacing: '0.06em', color: '#B22222', textTransform: 'uppercase' }}>
                        {card.label}
                      </span>
                      <h3 style={{ fontSize: 'var(--type-l4)', fontWeight: 600, color: '#111', margin: 0 }}>{card.title}</h3>
                      <p style={{ fontSize: 'var(--type-l3)', lineHeight: '1.6', color: '#4B4B4B', margin: 0 }}>{card.body}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div id="research" style={{ marginBottom: '160px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: 'var(--ds-text-primary)', fontSize: 'var(--type-l5)', fontWeight: 400, marginBottom: '12px' }}
                >
                  Research Overview
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ marginBottom: '16px', color: '#666', fontSize: 'var(--type-l2)', letterSpacing: '0.05em', textTransform: 'uppercase' }}
                >
                  From interviews to insights
                </motion.p>

                {/* Transition: Problem → Research */}
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  style={{ marginBottom: '32px', fontSize: 'var(--type-l3)', color: '#777', lineHeight: 1.6, fontStyle: 'italic' }}
                >
                  So we looked at how people actually decide.
                </motion.p>

                <div className="research-grid">
                  {/* Accordion View - All screens */}
                  <div className="flex flex-col gap-3">
                    {[
                      {
                        step: 'Step 01',
                        title: 'Interviews',
                        color: 'var(--ds-accent-case)',
                        content: {
                        headline: 'Captured decision anxiety and planning under constraints',
                        reflection: 'People talked about energy, not features.',
                        data: [
                          { value: '6', label: 'Users' },
                          { value: '20–28', label: 'Ages' },
                          { value: '≤ 1 year', label: 'Time living in NYC' }
                        ],
                          caption: 'Early notes turned confusion into concrete behaviors'
                        }
                      },
                      {
                        step: 'Step 02',
                        title: 'Card sorting',
                        color: '#FFB347',
                        content: {
                        headline: 'Students organized content by context, not topic',
                        reflection: 'They grouped by feeling, not category.',
                        bullets: [
                          'Groupings reflected intention, situation, and emotional state',
                          '"What am I doing, with whom, and when?" mattered more than categories',
                          'Topic-based navigation consistently broke down'
                          ]
                        }
                      },
                      {
                        step: 'Step 03',
                        title: 'Data analysis',
                        color: '#7D9FFF',
                        content: {
                        headline: 'Quantitative analysis revealed hidden structural patterns',
                        reflection: 'Patterns appeared once emotion became structure.',
                        caption: 'Clusters emerged beyond intuition',
                          image: similarityMatrix
                        }
                      },
                      {
                        step: 'Step 04',
                        title: 'Tree testing',
                        color: '#5CC6C3',
                        content: {
                        headline: 'Validation exposed where navigation failed',
                        reflection: 'This is where hesitation showed up.',
                        caption: 'Validation confirmed where mental models and structure diverged',
                          image: iaImage
                        }
                      },
                      {
                        step: 'Step 05',
                        title: 'Key insight',
                        color: '#AC8BFF',
                        content: {
                          headline: 'Confidence comes from clarity of choice, not abundance of options',
                          reflection: 'Less can create more direction.'
                        }
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="research-accordion-item">
                        <button
                          className={`research-accordion-header ${activeStep === idx ? 'active' : ''}`}
                          onClick={() => setActiveStep(activeStep === idx ? -1 : idx)}
                      >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span
                            style={{
                              width: '10px',
                              height: '10px',
                              borderRadius: '50%',
                                backgroundColor: item.color,
                              flexShrink: 0
                            }}
                          />
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
                              <span style={{ fontSize: 'var(--type-l1)', letterSpacing: '0.08em', color: '#666', textTransform: 'uppercase' }}>
                                {item.step}
                              </span>
                              <span style={{ fontSize: 'var(--type-l3)', fontWeight: 600, color: '#111' }}>
                              {item.title}
                              </span>
                          </div>
                        </div>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            style={{
                              transform: activeStep === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.3s ease'
                            }}
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </button>
                        <div className={`research-accordion-content ${activeStep === idx ? 'open' : ''}`}>
                          <div>
                            <h4 style={{ fontSize: 'var(--type-l4)', fontWeight: 600, color: '#111', marginBottom: '12px' }}>
                              {item.content.headline}
                            </h4>
                            <p style={{ fontSize: 'var(--type-l2)', color: '#666', fontStyle: 'italic', marginBottom: '16px' }}>
                              {item.content.reflection}
                          </p>
                            {item.content.data && (
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '12px', marginBottom: '12px' }}>
                                {item.content.data.map((d, i) => (
                              <div
                                    key={i}
                                style={{
                                  border: '1px solid rgba(0,0,0,0.06)',
                                      borderRadius: '8px',
                                  padding: '12px',
                                      textAlign: 'center',
                                      background: '#fafafa'
                                }}
                              >
                                    <div style={{ fontSize: 'var(--type-l4)', fontWeight: 700, color: '#111', marginBottom: '4px' }}>
                                      {d.value}
                              </div>
                                    <div style={{ fontSize: 'var(--type-l1)', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                      {d.label}
                          </div>
                              </div>
                            ))}
                          </div>
                        )}
                            {item.content.bullets && (
                              <ul style={{ fontSize: 'var(--type-l2)', color: '#666', lineHeight: 1.7, paddingLeft: '20px', marginBottom: '12px' }}>
                                {item.content.bullets.map((bullet, i) => (
                                  <li key={i}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                            {item.content.image && (
                              <div style={{ marginTop: '16px', borderRadius: '8px', overflow: 'hidden' }}>
                                <ImageWithFallback src={item.content.image} alt={item.title} style={{ width: '100%', height: 'auto' }} />
                          </div>
                        )}
                            {item.content.caption && (
                              <p style={{ fontSize: 'var(--type-l1)', color: '#999', marginTop: '12px', fontStyle: 'italic' }}>
                                {item.content.caption}
                              </p>
                        )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* From behaviors to a spectrum */}
              <div style={{ marginBottom: '160px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ color: 'var(--ds-text-primary)', fontSize: 'var(--type-l5)', fontWeight: 400, marginBottom: '24px' }}
                >
                  From scattered behaviors to a shared spectrum
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, x: -12, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <ImageWithFallback
                    src={personaSpectrum}
                    alt="Persona spectrum"
                    style={{
                      width: '100%',
                      maxWidth: '900px',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{
                    marginTop: '12px',
                    textAlign: 'center',
                    color: '#666',
                    fontSize: 'var(--type-l2)'
                  }}
                >
                  Different familiarity levels revealed different exploration needs
                </motion.p>
              </div>

              {/* Information Architecture */}
              <div id="information-architecture" style={{ marginBottom: '160px' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={simpleTransition}
                  style={{ marginBottom: '40px' }}
                >
                  <h2 style={{ 
                    color: 'var(--ds-text-primary)', 
                    fontSize: 'var(--ds-text-title-lg)', 
                    fontWeight: 600, 
                    marginBottom: '12px',
                    letterSpacing: '-0.02em'
                  }}>
                    Information Architecture
                  </h2>
                  <p style={{ 
                    color: '#666', 
                    fontSize: 'var(--type-l4)', 
                    fontWeight: 400,
                    maxWidth: '720px'
                  }}>
                    Designing for intention, not categories
                  </p>
                </motion.div>

                {/* IA Diagram - Visual Focus */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  style={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(0,0,0,0.08)',
                    backgroundColor: '#FAFAFA',
                    padding: '24px',
                    marginBottom: '48px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
                  }}
                >
                  <ImageWithFallback
                    src={iaImage}
                    alt="Information Architecture diagram showing user intent-based navigation"
                    style={{ 
                      width: '100%', 
                      height: 'auto', 
                      display: 'block', 
                      borderRadius: '8px',
                      background: '#FFFFFF'
                    }}
                  />

                  {/* Static dots along paths - removed infinite animation for performance */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '28%',
                      left: '12%',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#FF7A00',
                      boxShadow: '0 0 8px rgba(255,122,0,0.5)'
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '48%',
                      left: '32%',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#5CC6C3',
                      boxShadow: '0 0 8px rgba(92,198,195,0.5)'
                    }}
                  />
                </motion.div>

              </div>

              {/* Key Insights - Redesigned */}
              <div id="insight" style={{ marginBottom: '160px' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={simpleTransition}
                  style={{ marginBottom: '48px' }}
                >
                  <h2 style={{ 
                    color: 'var(--ds-text-primary)', 
                    fontSize: 'var(--ds-text-title-lg)', 
                    fontWeight: 600, 
                    marginBottom: '12px',
                    letterSpacing: '-0.02em'
                  }}>
                    What the structure made possible
                  </h2>
                  <p style={{ 
                    color: '#666', 
                    fontSize: 'var(--type-l4)', 
                    fontWeight: 400,
                    maxWidth: '720px'
                  }}>
                    Three core principles that transformed how students discover NYC
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M8 12h8"></path>
                          <path d="M12 8v8"></path>
                          <path d="M16 8l-8 8"></path>
                          <path d="M8 8l8 8"></path>
                        </svg>
                      ),
                      title: 'Multiple Entry Points',
                      description: 'Students can start from vibe, location, or activity — whatever feels right in the moment',
                      color: 'var(--ds-accent-case)',
                      bgGradient: 'linear-gradient(135deg, rgba(255, 122, 0, 0.08) 0%, rgba(255, 122, 0, 0.02) 100%)',
                      numberTint: 'rgba(255, 122, 0, 0.12)'
                    },
                    {
                      icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="7" height="7"></rect>
                          <rect x="14" y="3" width="7" height="7"></rect>
                          <rect x="14" y="14" width="7" height="7"></rect>
                          <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                      ),
                      title: 'Clear Information Hierarchy',
                      description: 'Essential details first, deep context available when needed — no cognitive overload',
                      color: '#7D9FFF',
                      bgGradient: 'linear-gradient(135deg, rgba(125, 159, 255, 0.08) 0%, rgba(125, 159, 255, 0.02) 100%)',
                      numberTint: 'rgba(125, 159, 255, 0.12)'
                    },
                    {
                      icon: (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      ),
                      title: 'Geo-Location Driven',
                      description: 'The map shows where you are and what\'s nearby — building spatial confidence over time',
                      color: '#AC8BFF',
                      bgGradient: 'linear-gradient(135deg, rgba(172, 139, 255, 0.08) 0%, rgba(172, 139, 255, 0.02) 100%)',
                      numberTint: 'rgba(172, 139, 255, 0.12)'
                    }
                  ].map((insight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewportConfig}
                      transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
                      style={{
                        background: insight.bgGradient,
                        borderRadius: '16px',
                        padding: '32px 28px',
                        border: `1px solid ${insight.color}20`,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                        transition: 'all 0.3s ease',
                        cursor: 'default',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Background accent */}
                      <div style={{
                        position: 'absolute',
                        top: -20,
                        right: -20,
                        width: '120px',
                        height: '120px',
                        background: `radial-gradient(circle, ${insight.color}15 0%, transparent 70%)`,
                        pointerEvents: 'none'
                      }} />
                      
                      {/* Icon container */}
                      <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '12px',
                        background: `${insight.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        color: insight.color,
                        position: 'relative',
                        zIndex: 1
                      }}>
                        {insight.icon}
                      </div>

                      {/* Content */}
                      <h3 style={{
                        fontSize: 'var(--type-l4)',
                        fontWeight: 600,
                        color: '#1A1A1A',
                        marginBottom: '12px',
                        lineHeight: '1.3',
                        position: 'relative',
                        zIndex: 1
                      }}>
                        {insight.title}
                      </h3>
                      <p style={{
                        fontSize: 'var(--type-l3)',
                        lineHeight: '1.6',
                        color: '#555',
                        margin: 0,
                        position: 'relative',
                        zIndex: 1
                      }}>
                        {insight.description}
                      </p>

                      {/* Number indicator — use rgba tints; CSS variables cannot be suffixed with hex alpha */}
                      <div style={{
                        position: 'absolute',
                        bottom: '16px',
                        right: '20px',
                        fontSize: 'var(--ds-text-display)',
                        fontWeight: 700,
                        color: insight.numberTint,
                        lineHeight: 1,
                        userSelect: 'none',
                        pointerEvents: 'none'
                      }}>
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Transition: Research → Solution */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{
                  marginBottom: '140px',
                  textAlign: 'center'
                }}
              >
                <p style={{ fontSize: 'var(--type-l3)', color: '#666', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                  If exploration starts with intent, the interface should too.
                </p>
              </motion.div>

              {/* Solution — Designing for Exploration, Not Planning */}
              <div id="design" style={{ marginBottom: '240px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ color: '#000', fontSize: 'var(--type-l5)', fontWeight: 400, marginBottom: '24px' }}
                >
                  Solution — Designing for Exploration, Not Planning
                </motion.h2>
                {/* User scenario intro */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  style={{
                    marginBottom: '60px',
                    padding: '48px',
                    borderRadius: '18px',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, rgba(12,12,12,0.9), rgba(26,26,26,0.85))'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${mapNotationImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'blur(22px)',
                      opacity: 0.2,
                      transform: 'scale(1.06)'
                    }}
                  />
                  <div style={{ position: 'relative', zIndex: 1, color: '#F5F5F5', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '900px' }}>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      style={{ fontSize: 'var(--type-l3)', letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0 }}
                    >
                      EXPLORATION STARTS BEFORE PLANNING
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.5 }}
                      style={{ margin: 0, fontSize: 'var(--type-l4)', fontWeight: 600 }}
                    >
                      Walking in Brooklyn.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 0.6, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.62 }}
                      style={{ margin: 0, fontSize: 'var(--type-l3)', color: 'rgba(245,245,245,0.75)' }}
                    >
                      No plan.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.95 }}
                      style={{ margin: 0, fontSize: 'var(--type-l4)', color: 'rgba(245,245,245,0.9)' }}
                    >
                      One free evening.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 1.25 }}
                      style={{ margin: 0, fontSize: 'var(--type-l4)', color: 'rgba(245,245,245,0.9)' }}
                    >
                      Limited energy.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 0.5, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 1.6 }}
                      style={{ margin: 0, fontSize: 'var(--type-l2)', color: 'rgba(245,245,245,0.65)' }}
                    >
                      I don't want ten tabs.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 2.0 }}
                      style={{
                        margin: 0,
                        fontSize: 'var(--type-l4)',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        textShadow: '0 0 10px rgba(255,255,255,0.15)'
                      }}
                    >
                      Just tell me where to go next.
                    </motion.p>
                  </div>
                </motion.div>

                {/* Subsection 01 */}
              <div style={{ marginBottom: '200px' }}>
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ color: '#111', fontSize: 'var(--type-l5)', fontWeight: 500, marginBottom: '24px' }}
                  >
                    From guides to places worth discovering.
                  </motion.h3>

                  <div
                    style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)' }}
                    >
                      <video
                        src={homepageVideo}
                        autoPlay
                        muted
                        playsInline
                        loop
                        controls={false}
                      preload="metadata"
                        style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                      />
                  </div>
                </div>

                {/* Subsection 02 */}
              <div style={{ marginBottom: '120px' }}>
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ color: '#111', fontSize: 'var(--type-l5)', fontWeight: 500, marginBottom: '24px' }}
                  >
                    Designed for short attention and high information density.
                  </motion.h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                    {['TikTok', 'Maps', 'Screenshots', 'Location', 'Vibe', 'Distance', 'Context'].map((tag, i) => (
                      <span
                        key={tag}
                        style={{
                          padding: '6px 10px',
                          borderRadius: '999px',
                          backgroundColor: ['#FFF3E6', '#E8F0FF', '#EAF9F6', '#FFF3E6', '#E8F0FF', '#EAF9F6', '#F3E8FF'][i % 7],
                          fontSize: 'var(--type-l2)',
                          color: '#333'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{ borderRadius: '12px', overflow: 'hidden' }}
                  >
                    <ImageWithFallback
                      src={cardComparison}
                      alt="Annotated comparison"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </motion.div>
                </div>

  

                {/* Subsection 04 */}
              <div style={{ marginBottom: '120px' }}>
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ color: '#111', fontSize: 'var(--type-l5)', fontWeight: 500, marginBottom: '24px' }}
                  >
                    Existing maps solve navigation. They do not solve exploration.
                  </motion.h3>

                  <div className="video-map-grid">
                    <div
                      style={{ overflow: 'hidden', borderRadius: '12px' }}
                    >
                      <video
                        src={mobileMapVideo}
                        autoPlay
                        muted
                        playsInline
                        loop
                        controls={false}
                        preload="metadata"
                        className="w-4/5 sm:w-3/5 md:w-full mx-auto"
                        style={{ maxWidth: '310px', display: 'block', objectFit: 'cover', borderRadius: '22px', border: '5px solid #333' }}
                      />
                    </div>

                    <div
                      style={{ overflow: 'hidden', borderRadius: '12px' }}
                    >
                      <ImageWithFallback
                        src={mapComparisons}
                        alt="Map comparisons"
                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Subsection 05 */}
                <div id="solution" style={{ marginBottom: '120px' }}>
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  style={{ color: '#111', fontSize: 'var(--type-l5)', fontWeight: 500, marginBottom: '16px' }}
                  >
                    A flow built for curiosity, not commitment.
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    style={{ marginBottom: '24px', fontSize: 'var(--type-l3)', color: '#777', lineHeight: 1.6, fontStyle: 'italic' }}
                  >
                    Exploration stays light until intent is clear.
                  </motion.p>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    {['See what is nearby.', 'Notice what fits the moment.', 'Save only when it feels right.', 'Exploration stays lightweight until intent becomes clear.'].map((line, idx) => (
                      <span
                        key={line}
                        style={{
                          padding: '8px 10px',
                          borderRadius: '999px',
                          backgroundColor: ['#E8F0FF', '#EAF9F6', '#FFF3E6', '#F3E8FF'][idx % 4],
                          color: '#333',
                          fontSize: 'var(--type-l2)'
                        }}
                      >
                        {line}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <video
                      src={explorationFlowVideo}
                      autoPlay
                      muted
                      playsInline
                      loop={false}
                      controls
                      preload="metadata"
                      className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-[35%]"
                      style={{ maxWidth: '350px', display: 'block', objectFit: 'cover', borderRadius: '25px' }}
                    />
                  </div>
                </div>

                {/* Design System in Action */}
                <div style={{ marginBottom: '160px' }}>
                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    style={{ color: '#111', fontSize: 'var(--type-l5)', fontWeight: 500, marginBottom: '12px' }}
                  >
                    Design System in Action
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                    style={{ color: '#666', fontSize: 'var(--type-l3)', lineHeight: 1.6, marginBottom: '48px' }}
                  >
                    How exploration works across entry points, maps, and memory
                  </motion.p>

                  {/* Block 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    style={{ marginBottom: '48px' }}
                  >
                    <h4 style={{ color: '#111', fontSize: 'var(--type-l4)', fontWeight: 600, marginBottom: '16px' }}>
                      Entry points and navigation system
                    </h4>
                    <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' }}>
                      <ImageWithFallback
                        src={annotation1}
                        alt="Entry points and navigation system"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                  </motion.div>

                  {/* Block 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                    style={{ marginBottom: '48px' }}
                  >
                    <h4 style={{ color: '#111', fontSize: 'var(--type-l4)', fontWeight: 600, marginBottom: '16px' }}>
                      Map-based exploration flow
                    </h4>
                    <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' }}>
                      <ImageWithFallback
                        src={annotation2}
                        alt="Map-based exploration flow"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                  </motion.div>

                  {/* Block 3 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                    style={{ marginBottom: '48px' }}
                  >
                    <h4 style={{ color: '#111', fontSize: 'var(--type-l4)', fontWeight: 600, marginBottom: '16px' }}>
                      Wishlist as lightweight memory
                    </h4>
                    <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' }}>
                      <ImageWithFallback
                        src={annotation3}
                        alt="Wishlist as lightweight memory"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Design System Overview - Interactive Section */}
                <div style={{ marginBottom: '160px' }}>
                  <motion.h3
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ color: '#111', fontSize: 'var(--type-l5)', fontWeight: 500, marginBottom: '12px' }}
                  >
                    Design system overview
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    style={{ color: '#666', fontSize: 'var(--type-l3)', marginBottom: '32px', fontStyle: 'italic' }}
                  >
                    A scalable system supporting exploration across entry points, maps, and memory.
                  </motion.p>

                  {/* Interactive Pan & Zoom Container */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {(() => {
                      const [scale, setScale] = React.useState(1);
                      const [position, setPosition] = React.useState({ x: 0, y: 0 });
                      const [isDragging, setIsDragging] = React.useState(false);
                      const [dragStart, setDragStart] = React.useState({ x: 0, y: 0 });
                      const containerRef = React.useRef<HTMLDivElement>(null);
                      const [isMobile, setIsMobile] = React.useState(false);
                      
                      // Touch state
                      const [initialTouchDistance, setInitialTouchDistance] = React.useState<number | null>(null);
                      const [initialScale, setInitialScale] = React.useState(1);

                      // Detect mobile
                      React.useEffect(() => {
                        const checkMobile = () => {
                          setIsMobile(window.innerWidth < 1024);
                        };
                        checkMobile();
                        window.addEventListener('resize', checkMobile);
                        return () => window.removeEventListener('resize', checkMobile);
                      }, []);

                      // Mouse handlers
                      const handleMouseDown = (e: React.MouseEvent) => {
                        setIsDragging(true);
                        setDragStart({
                          x: e.clientX - position.x,
                          y: e.clientY - position.y
                        });
                      };

                      const handleMouseMove = (e: React.MouseEvent) => {
                        if (isDragging) {
                          setPosition({
                            x: e.clientX - dragStart.x,
                            y: e.clientY - dragStart.y
                          });
                        }
                      };

                      const handleMouseUp = () => {
                        setIsDragging(false);
                      };

                      const handleWheel = (e: React.WheelEvent) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const delta = e.deltaY * -0.001;
                        const newScale = Math.min(Math.max(0.5, scale + delta), 3);
                        setScale(newScale);
                      };

                      // Touch handlers
                      const getTouchDistance = (touch1: React.Touch, touch2: React.Touch) => {
                        const dx = touch1.clientX - touch2.clientX;
                        const dy = touch1.clientY - touch2.clientY;
                        return Math.sqrt(dx * dx + dy * dy);
                      };

                      const handleTouchStart = (e: React.TouchEvent) => {
                        if (e.touches.length === 2) {
                          // Two finger pinch
                          e.preventDefault();
                          const distance = getTouchDistance(e.touches[0], e.touches[1]);
                          setInitialTouchDistance(distance);
                          setInitialScale(scale);
                        } else if (e.touches.length === 1) {
                          // Single finger drag
                          setIsDragging(true);
                          setDragStart({
                            x: e.touches[0].clientX - position.x,
                            y: e.touches[0].clientY - position.y
                          });
                        }
                      };

                      const handleTouchMove = (e: React.TouchEvent) => {
                        if (e.touches.length === 2 && initialTouchDistance) {
                          // Pinch zoom
                          e.preventDefault();
                          const distance = getTouchDistance(e.touches[0], e.touches[1]);
                          const scaleChange = distance / initialTouchDistance;
                          const newScale = Math.min(Math.max(0.5, initialScale * scaleChange), 3);
                          setScale(newScale);
                        } else if (e.touches.length === 1 && isDragging) {
                          // Drag
                          e.preventDefault();
                          setPosition({
                            x: e.touches[0].clientX - dragStart.x,
                            y: e.touches[0].clientY - dragStart.y
                          });
                        }
                      };

                      const handleTouchEnd = () => {
                        setIsDragging(false);
                        setInitialTouchDistance(null);
                      };

                      // Prevent scroll on wheel event
                      React.useEffect(() => {
                        const container = containerRef.current;
                        if (!container) return;

                        const preventScroll = (e: WheelEvent) => {
                          e.preventDefault();
                        };

                        container.addEventListener('wheel', preventScroll, { passive: false });
                        return () => {
                          container.removeEventListener('wheel', preventScroll);
                        };
                      }, []);

                      return isMobile ? (
                        // Mobile: Static preview
                  <div
                    style={{
                            border: '1px solid rgba(0,0,0,0.08)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            background: '#fafafa',
                            position: 'relative'
                          }}
                        >
                          <img
                            src={designSystemImage}
                            alt="Design system overview"
                                style={{
                              width: '100%',
                              height: 'auto',
                              display: 'block'
                                }}
                              />
                            <div
                              style={{
                                position: 'absolute',
                              bottom: '12px',
                              right: '12px',
                              background: 'rgba(255,255,255,0.95)',
                              padding: '6px 12px',
                              borderRadius: '6px',
                              fontSize: 'var(--type-l1)',
                              color: '#666',
                              border: '1px solid rgba(0,0,0,0.06)'
                            }}
                          >
                            Full system view on desktop
                          </div>
                        </div>
                      ) : (
                        // Desktop: Interactive pan & zoom
                        <div
                          style={{
                            border: '1px solid rgba(0,0,0,0.08)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            background: '#fafafa',
                            position: 'relative',
                            height: '600px',
                            cursor: isDragging ? 'grabbing' : 'grab',
                            touchAction: 'none'
                          }}
                          ref={containerRef}
                          onMouseDown={handleMouseDown}
                          onMouseMove={handleMouseMove}
                          onMouseUp={handleMouseUp}
                          onMouseLeave={handleMouseUp}
                          onWheel={handleWheel}
                          onTouchStart={handleTouchStart}
                          onTouchMove={handleTouchMove}
                          onTouchEnd={handleTouchEnd}
                        >
                          <div
                            style={{
                              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                              transformOrigin: 'center center',
                              transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                              width: '100%',
                              height: 'auto',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: '40px'
                            }}
                          >
                            <img
                              src={designSystemImage}
                              alt="Design system overview"
                              style={{
                                maxWidth: '100%',
                                height: 'auto',
                                display: 'block',
                                userSelect: 'none',
                                pointerEvents: 'none'
                              }}
                              draggable={false}
                            />
                          </div>

                          {/* Controls hint */}
                          <div
                              style={{
                                position: 'absolute',
                              bottom: '16px',
                              right: '16px',
                              background: 'rgba(255,255,255,0.95)',
                              padding: '8px 14px',
                              borderRadius: '8px',
                              fontSize: 'var(--type-l2)',
                              color: '#666',
                              border: '1px solid rgba(0,0,0,0.06)',
                              pointerEvents: 'none',
                              userSelect: 'none'
                            }}
                          >
                            Drag to explore • Scroll or pinch to zoom
                          </div>
                        </div>
                      );
                    })()}
                  </motion.div>
                </div>

                {/* Evaluation & Outcomes Section */}
                <div id="evaluation" style={{ marginBottom: '160px' }}>
                  {/* Part 1: How we measure better exploration */}
                  <motion.h3
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ color: '#111', fontSize: 'var(--type-l5)', fontWeight: 500, marginBottom: '56px' }}
                  >
                    How we measure better exploration
                  </motion.h3>

                  {/* Visual Indicators */}
                  <div
                    className="grid gap-12 sm:gap-16 md:gap-12 mb-24 sm:mb-32 md:mb-24"
                              style={{
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
                    }}
                  >
                    {[
                      {
                        label: 'Confidence to Start',
                        color: 'var(--ds-accent-case)',
                        icon: (
                          <div style={{ position: 'relative', width: '72px', height: '72px', margin: '0 auto' }}>
                            <div style={{
                                position: 'absolute',
                              inset: 0,
                                borderRadius: '50%',
                              border: '3px solid rgba(255,122,0,0.12)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <div style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '50%',
                                background: '#FF7A00',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        )
                      },
                      {
                        label: 'Clarity of Choice',
                        color: '#7D9FFF',
                        icon: (
                          <div style={{ position: 'relative', width: '72px', height: '72px', margin: '0 auto' }}>
                            <div style={{
                              position: 'absolute',
                              inset: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <div style={{
                                width: '42px',
                                height: '42px',
                                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                                background: 'linear-gradient(180deg, #7D9FFF 0%, rgba(125,159,255,0.3) 100%)',
                                position: 'relative'
                              }}>
                                <div style={{
                                  position: 'absolute',
                                  bottom: '-6px',
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  width: '14px',
                                  height: '7px',
                                  background: '#7D9FFF',
                                  borderRadius: '0 0 3px 3px'
                                }} />
                              </div>
                            </div>
                          </div>
                        )
                      },
                      {
                        label: 'Lightweight Commitment',
                        color: '#5CC6C3',
                        icon: (
                          <div style={{ position: 'relative', width: '72px', height: '72px', margin: '0 auto' }}>
                            <div style={{
                              position: 'absolute',
                              inset: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <svg width="36" height="46" viewBox="0 0 40 52" fill="none">
                                <path d="M4 0H36C38.2091 0 40 1.79086 40 4V52L20 40L0 52V4C0 1.79086 1.79086 0 4 0Z" fill="#5CC6C3" fillOpacity="0.15"/>
                                <path d="M4 0H36C38.2091 0 40 1.79086 40 4V52L20 40L0 52V4C0 1.79086 1.79086 0 4 0Z" stroke="#5CC6C3" strokeWidth="2.5"/>
                              </svg>
                            </div>
                          </div>
                        )
                      },
                      {
                        label: 'Local Continuity',
                        color: '#AC8BFF',
                        icon: (
                          <div style={{ position: 'relative', width: '72px', height: '72px', margin: '0 auto' }}>
                            <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                              <circle cx="18" cy="18" r="5" fill="#AC8BFF" />
                              <circle cx="36" cy="32" r="5" fill="#AC8BFF" />
                              <circle cx="54" cy="22" r="5" fill="#AC8BFF" />
                              <circle cx="45" cy="50" r="5" fill="#AC8BFF" />
                              <path d="M 18 18 Q 27 25, 36 32" stroke="#AC8BFF" strokeWidth="2" fill="none" strokeDasharray="3 3" opacity="0.35"/>
                              <path d="M 36 32 Q 45 27, 54 22" stroke="#AC8BFF" strokeWidth="2" fill="none" strokeDasharray="3 3" opacity="0.35"/>
                              <path d="M 54 22 Q 49.5 36, 45 50" stroke="#AC8BFF" strokeWidth="2" fill="none" strokeDasharray="3 3" opacity="0.35"/>
                            </svg>
                          </div>
                        )
                      }
                    ].map((indicator, index) => (
                      <motion.div
                        key={indicator.label}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '24px',
                          textAlign: 'center'
                        }}
                      >
                        {indicator.icon}
                        <p style={{
                          margin: 0,
                          fontSize: 'var(--type-l3)',
                          fontWeight: 500,
                          color: indicator.color,
                          letterSpacing: '-0.01em',
                          lineHeight: 1.3
                        }}>
                          {indicator.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Part 2: Design Outcomes */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h3 style={{ 
                      color: '#111', 
                      fontSize: 'var(--type-l5)', 
                      fontWeight: 500, 
                      marginBottom: '56px',
                      textAlign: 'center'
                    }}>
                      Design outcomes
                    </h3>

                    <div
                      className="grid gap-8 sm:gap-10 md:gap-10 max-w-[1000px] mx-auto"
                      style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'
                      }}
                    >
                      {[
                        {
                          title: 'External Validation',
                          icon: (
                            <div style={{ 
                              width: '48px', 
                              height: '48px',
                              borderRadius: '50%',
                              background: 'rgba(125,159,255,0.12)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto 20px'
                            }}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7D9FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                </div>
                          ),
                          content: 'Reviewed by three professional UX designers who recognized core insight clarity and solution restraint'
                        },
                        {
                          title: 'Implementation Momentum',
                          icon: (
                            <div style={{ 
                              width: '48px', 
                              height: '48px',
                              borderRadius: '50%',
                              background: 'rgba(255,122,0,0.12)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto 20px'
                            }}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="13 17 18 12 13 7"/>
                                <polyline points="6 17 11 12 6 7"/>
                              </svg>
              </div>
                          ),
                          content: 'Actively moving toward implementation, indicating feasibility beyond academic exercise'
                        },
                        {
                          title: 'User Impact Direction',
                          icon: (
                            <div style={{ 
                              width: '48px', 
                              height: '48px',
                              borderRadius: '50%',
                              background: 'rgba(92,198,195,0.12)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto 20px'
                            }}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5CC6C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                              </svg>
            </div>
                          ),
                          content: 'Helps young NYC residents feel more oriented and gradually develop sense of belonging'
                        }
                      ].map((outcome, index) => (
                        <motion.div
                          key={outcome.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: index * 0.15 }}
                          style={{
                            textAlign: 'center'
                          }}
                        >
                          {outcome.icon}
                          <h4 style={{
                            fontSize: 'var(--type-l3)',
                            fontWeight: 600,
                            color: '#111',
                            marginBottom: '12px',
                            letterSpacing: '-0.01em'
                          }}>
                            {outcome.title}
                          </h4>
                          <p style={{
                            fontSize: 'var(--type-l2)',
                            color: '#666',
                            lineHeight: 1.6,
                            margin: 0
                          }}>
                            {outcome.content}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
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
