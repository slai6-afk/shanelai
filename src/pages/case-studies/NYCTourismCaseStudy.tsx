import { motion, useScroll, useTransform } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { StickyTOC } from '../../components/case-study/StickyTOC';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

import heroComposite from '../../assets/desktop_homepage.png';
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
import mobileMapVideo from '../../assets/mapvideo.mov';
import mapComparisons from '../../assets/3maps.png';
import explorationFlowVideo from '../../assets/mobilevideo.mov';
import annotation1 from '../../assets/annotation1.png';
import annotation2 from '../../assets/annotation2.png';
import annotation3 from '../../assets/annotation3.png';
import logoImage from '../../assets/logo.png';

export function NYCTourismCaseStudy() {
  const heroRef = useRef<HTMLDivElement>(null);
  const tocTriggerRef = useRef<HTMLDivElement>(null);
  const [tocVisible, setTocVisible] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const heroBgY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (tocTriggerRef.current) {
        const triggerRect = tocTriggerRef.current.getBoundingClientRect();
        const activationOffset = 120;
        const shouldShow = triggerRect.top <= activationOffset;
        setTocVisible((prev) => (prev === shouldShow ? prev : shouldShow));
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
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navigation />

      <section className="case-study-hero-section pt-40 pb-20 px-8 md:px-16" id="hero" ref={heroRef}>
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{
                marginBottom: '32px',
                borderRadius: '8px',
                overflow: 'hidden',
                maxWidth: '60%',
                margin: '0 auto 32px'
              }}
            >
              <motion.div style={{ y: heroBgY }}>
                <ImageWithFallback
                  src={heroComposite}
                  alt="NYC redesign map"
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '16 / 9',
                    display: 'block',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    opacity: 1
                  }}
                />
              </motion.div>
            </motion.div>

            <h1
              style={{
                color: '#000000',
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 400,
                lineHeight: '1.2',
                marginBottom: '16px'
              }}
            >
              Reimagining discovery for young people navigating NYC
            </h1>

            <p
              style={{
                color: '#666666',
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: '1.6',
                marginBottom: '32px',
                maxWidth: '800px'
              }}
            >
              Helping students and recent arrivals turn the city into a place that feels livable, not overwhelming
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
            height: '100vh',
            minHeight: '720px',
            marginBottom: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
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
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'brightness(0.9)' }}
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
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 40px'
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
                  fontSize: '14px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  margin: 0,
                  color: 'rgba(255,255,255,0.8)'
                }}
              >
                TL;DR
              </motion.p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '16px',
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
                    <p style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: 'rgba(255,255,255,0.92)' }}>{card.title}</p>
                    <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', whiteSpace: 'pre-line' }}>
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
                    fontSize: '13px',
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
                      <p style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: 'rgba(255,255,255,0.95)', marginBottom: '6px' }}>
                        Shane
                      </p>
                      <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: 'rgba(255,255,255,0.75)' }}>
                        Explore things to do in Brooklyn
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                    >
                      <p style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: 'rgba(255,255,255,0.95)', marginBottom: '6px' }}>
                        Harsh
                      </p>
                      <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: 'rgba(255,255,255,0.75)' }}>
                        Find a vegan and accessible restaurant in the Upper West Side
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                    >
                      <p style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: 'rgba(255,255,255,0.95)', marginBottom: '6px' }}>
                        Robert
                      </p>
                      <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: 'rgba(255,255,255,0.75)' }}>
                        Utilize the wishlist function
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
                    fontSize: '12px',
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

      <section className="pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-3 lg:gap-4">
            <div className="hidden lg:block">
              <StickyTOC items={tocItems} isVisible={tocVisible} />
            </div>

            <div className="case-study-content-wrapper max-w-[1200px] w-full" style={{ position: 'relative' }}>
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
                <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                  I want to explore, but I do not know where to start.
                </p>
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
                      padding: '48px'
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                      style={{
                        maxWidth: '760px',
                        textAlign: 'left',
                        color: '#FFFFFF',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.35))'
                      }}
                    >
                      <p style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 300, lineHeight: '1.6', letterSpacing: '0.01em' }}>
                        When you first arrive in New York, the city feels unreadable.
                      </p>
                      <p style={{ fontSize: 'clamp(20px, 2.6vw, 24px)', fontWeight: 300, lineHeight: '1.6', letterSpacing: '0.01em' }}>
                        Students told us the same story.
                      </p>
                      <div style={{ borderLeft: '2px solid rgba(255,255,255,0.35)', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p style={{ margin: 0, fontSize: '20px', lineHeight: '1.6', fontWeight: 300 }}>
                          “I want to explore but I do not know where to begin.”
                        </p>
                        <p style={{ margin: 0, fontSize: '20px', lineHeight: '1.6', fontWeight: 300 }}>
                          “Everything is scattered across apps.”
                        </p>
                        <p style={{ margin: 0, fontSize: '20px', lineHeight: '1.6', fontWeight: 300 }}>
                          “I do not want to waste my one free evening.”
                        </p>
                      </div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.35 }}
                        style={{ fontSize: 'clamp(20px, 2.6vw, 24px)', fontWeight: 300, lineHeight: '1.6', letterSpacing: '0.01em', margin: 0 }}
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
                  style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '60px' }}
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
                      <span style={{ fontSize: '12px', letterSpacing: '0.06em', color: '#B22222', textTransform: 'uppercase' }}>
                        {card.label}
                      </span>
                      <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#111', margin: 0 }}>{card.title}</h3>
                      <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#4B4B4B', margin: 0 }}>{card.body}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div id="research" style={{ marginBottom: '160px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '12px' }}
                >
                  Research Overview
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ marginBottom: '16px', color: '#666', fontSize: '14px', letterSpacing: '0.05em', textTransform: 'uppercase' }}
                >
                  From interviews to insights
                </motion.p>

                {/* Transition: Problem → Research */}
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  style={{ marginBottom: '32px', fontSize: '15px', color: '#777', lineHeight: 1.6, fontStyle: 'italic' }}
                >
                  So we looked at how people actually decide.
                </motion.p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(200px, 260px) minmax(0, 1fr)',
                    gap: '16px',
                    alignItems: 'start'
                  }}
                  className="lg:grid md:grid sm:block"
                >
                  {/* Left selector */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '260px' }}>
                    {[
                      { step: 'Step 01', title: 'Interviews' },
                      { step: 'Step 02', title: 'Card sorting' },
                      { step: 'Step 03', title: 'Data analysis' },
                      { step: 'Step 04', title: 'Tree testing' },
                      { step: 'Step 05', title: 'Key insight' }
                    ].map((item, idx) => (
                      <motion.button
                        key={item.step}
                        type="button"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.05 * idx, ease: 'easeOut' }}
                        onClick={() => setActiveStep(idx)}
                        style={{
                          border: '1px solid rgba(0,0,0,0.08)',
                          borderRadius: '12px',
                          padding: '12px 14px',
                          backgroundColor: activeStep === idx ? 'rgba(0,0,0,0.04)' : '#FFFFFF',
                          boxShadow: activeStep === idx ? '0 10px 24px rgba(0,0,0,0.06)' : '0 2px 10px rgba(0,0,0,0.03)',
                          transform: activeStep === idx ? 'translateY(-1px) scale(1.005)' : 'translateY(0) scale(1)',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          cursor: 'pointer'
                        }}
                      >
                        <span
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: ['#FF7A00', '#FFB347', '#7D9FFF', '#5CC6C3', '#AC8BFF'][idx],
                            flexShrink: 0
                          }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
                          <span style={{ fontSize: '11px', letterSpacing: '0.08em', color: '#666', textTransform: 'uppercase' }}>{item.step}</span>
                          <span style={{ fontSize: '15px', fontWeight: 600, color: '#111' }}>{item.title}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {/* Right content */}
                  <div
                    style={{
                      position: 'relative',
                      border: '1px solid rgba(0,0,0,0.08)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      backgroundColor: '#FFFFFF',
                      minHeight: '420px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '12px'
                    }}
                  >
                    {[
                      {
                        title: 'STEP 01 — Interviews',
                        headline: 'Captured decision anxiety and planning under constraints',
                        reflection: 'People talked about energy, not features.',
                        body: null,
                        data: [
                          { value: '6', label: 'Users' },
                          { value: '20–28', label: 'Ages' },
                          { value: '≤ 1 year', label: 'Time living in NYC' }
                        ],
                        caption: 'Early notes turned confusion into concrete behaviors',
                        image: null,
                        type: 'data'
                      },
                      {
                        title: 'STEP 02 — Card sorting',
                        headline: 'Students organized content by context, not topic',
                        reflection: 'They grouped by feeling, not category.',
                        bullets: [
                          'Groupings reflected intention, situation, and emotional state',
                          '"What am I doing, with whom, and when?" mattered more than categories',
                          'Topic-based navigation consistently broke down'
                        ],
                        viz: [
                          { label: 'Intention', color: '#FFB347' },
                          { label: 'Vibe', color: '#7D9FFF' },
                          { label: 'Situation', color: '#5CC6C3' }
                        ],
                        caption: null,
                        image: null,
                        type: 'context'
                      },
                      {
                        title: 'STEP 03 — Data analysis',
                        headline: 'Quantitative analysis revealed hidden structural patterns',
                        reflection: 'Patterns appeared once emotion became structure.',
                        bullets: [
                          'Participant groupings were translated into co-occurrence percentages',
                          'The matrix was reordered to highlight clustering patterns',
                          'Clusters emerged that were not visible through qualitative review alone'
                        ],
                        caption: 'Clusters emerged beyond intuition',
                        image: similarityMatrix,
                        type: 'matrix'
                      },
                      {
                        title: 'STEP 04 — Tree testing',
                        headline: 'Validation exposed where navigation failed',
                        reflection: 'This is where hesitation showed up.',
                        bullets: [
                          'Tree testing showed where label ambiguity and hierarchy caused hesitation, backtracking, and path confusion.'
                        ],
                        caption: 'Validation confirmed where mental models and structure diverged',
                        image: iaImage,
                        type: 'tree'
                      },
                      {
                        title: 'STEP 05 — Key insight',
                        headline: 'Exploration is intention-driven, not category-driven',
                        reflection: 'Exploration follows intent, not menus.',
                        bullets: ['Students do not explore cities by category. They explore by intention, vibe, and situation.'],
                        caption: null,
                        image: null,
                        type: 'insight'
                      }
                    ].map((item, idx) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: activeStep === idx ? 1 : 0, x: activeStep === idx ? 0 : 8 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        style={{
                          position: activeStep === idx ? 'relative' : 'absolute',
                          inset: 0,
                          pointerEvents: activeStep === idx ? 'auto' : 'none',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 4px 0' }}>
                          <span
                            style={{
                              width: '10px',
                              height: '10px',
                              borderRadius: '50%',
                              backgroundColor: ['#FF7A00', '#FFB347', '#7D9FFF', '#5CC6C3', '#AC8BFF'][idx],
                              flexShrink: 0
                            }}
                          />
                          <div>
                            <p style={{ margin: 0, fontSize: '12px', letterSpacing: '0.08em', color: '#666', textTransform: 'uppercase' }}>
                              {item.title}
                            </p>
                            <p style={{ margin: 0, fontSize: '18px', fontWeight: 600, color: '#111' }}>{item.headline}</p>
                          </div>
                        </div>

                        {item.reflection && (
                          <p style={{ margin: '4px 4px 0', fontSize: '14px', color: '#777', lineHeight: 1.6, fontStyle: 'italic' }}>
                            {item.reflection}
                          </p>
                        )}

                        {item.data && (
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '10px', padding: '4px' }}>
                            {item.data.map((d) => (
                              <div
                                key={d.label}
                                style={{
                                  border: '1px solid rgba(0,0,0,0.06)',
                                  borderRadius: '10px',
                                  padding: '12px',
                                  backgroundColor: '#fafafa'
                                }}
                              >
                                <p style={{ margin: 0, fontSize: '22px', fontWeight: 600, color: '#111' }}>{d.value}</p>
                                <p style={{ margin: 0, fontSize: '12px', letterSpacing: '0.05em', color: '#666', textTransform: 'uppercase' }}>{d.label}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {item.viz && (
                          <div style={{ display: 'flex', gap: '10px', padding: '4px' }}>
                            {item.viz.map((v) => (
                              <div
                                key={v.label}
                                style={{
                                  flex: 1,
                                  borderRadius: '10px',
                                  backgroundColor: v.color,
                                  padding: '12px',
                                  color: '#111',
                                  fontWeight: 600,
                                  textAlign: 'center'
                                }}
                              >
                                {v.label}
                              </div>
                            ))}
                          </div>
                        )}

                        {item.bullets && (
                          <ul style={{ padding: '0 16px', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', color: '#444', fontSize: '15px', lineHeight: 1.6 }}>
                            {item.bullets.map((b) => (
                              <li key={b} style={{ listStyle: 'disc' }}>
                                {b}
                              </li>
                            ))}
                          </ul>
                        )}

                        {item.image && (
                          <motion.div
                            initial={item.type === 'matrix' ? { opacity: 0.5, filter: 'grayscale(1)' } : { opacity: 0.95 }}
                            animate={
                              item.type === 'matrix'
                                ? { opacity: activeStep === idx ? 1 : 0.5, filter: activeStep === idx ? 'grayscale(0)' : 'grayscale(1)' }
                                : { opacity: activeStep === idx ? 1 : 0.95 }
                            }
                            transition={{ duration: item.type === 'matrix' ? 0.8 : 0.5, ease: 'easeOut' }}
                            style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)', flex: 1, minHeight: '320px' }}
                          >
                            <ImageWithFallback
                              src={item.image}
                              alt={item.title}
                              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                          </motion.div>
                        )}

                        {item.type === 'insight' && (
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px', padding: '4px' }}>
                            {['Wishlist', 'Curated information', 'Geo-based search'].map((label, i) => (
                              <div
                                key={label}
                                style={{
                                  border: '1px solid rgba(0,0,0,0.08)',
                                  borderRadius: '10px',
                                  padding: '12px',
                                  backgroundColor: ['#FFF4E6', '#F3F0FF', '#E6FAF8'][i],
                                  color: '#222',
                                  fontWeight: 600,
                                  textAlign: 'center'
                                }}
                              >
                                {label}
                              </div>
                            ))}
                          </div>
                        )}

                        {item.caption && (
                          <p style={{ margin: '4px', fontSize: '14px', lineHeight: 1.5, color: '#444' }}>{item.caption}</p>
                        )}
                      </motion.div>
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
                  style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '24px' }}
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
                    fontSize: '14px'
                  }}
                >
                  Different familiarity levels revealed different exploration needs
                </motion.p>
              </div>

              {/* Translating the spectrum into structure */}
              <div style={{ marginBottom: '160px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '24px' }}
                >
                  Designing for intention, not categories
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  style={{ color: '#555', fontSize: '15px', lineHeight: 1.6, marginBottom: '16px' }}
                >
                  —
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  style={{
                    position: 'relative',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    border: '1px solid rgba(0,0,0,0.06)',
                    backgroundColor: '#FFF',
                    padding: '12px'
                  }}
                >
                  <ImageWithFallback
                    src={iaImage}
                    alt="IA diagram"
                    style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px' }}
                  />

                  {/* Animated dots along paths */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, repeat: Infinity, repeatType: 'mirror', repeatDelay: 1 }}
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
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, repeat: Infinity, repeatType: 'mirror', repeatDelay: 1 }}
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

              {/* What this unlocked */}
              <div id="insight" style={{ marginBottom: '140px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '16px' }}
                >
                  What the structure made possible
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    '1. multiple entry points for filter',
                    '2. clear layout',
                    '3. Geo-location Driven'
                  ].map((line, idx) => (
                    <motion.div
                      key={line}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#222', fontSize: '16px' }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#7D9FFF',
                          flexShrink: 0
                        }}
                      />
                      <span
                        style={{
                          width: '1px',
                          height: '18px',
                          backgroundColor: 'rgba(0,0,0,0.15)'
                        }}
                      />
                      <span>{line}</span>
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
                <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
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
                  style={{ color: '#000', fontSize: '32px', fontWeight: 400, marginBottom: '24px' }}
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
                      filter: 'blur(12px)',
                      opacity: 0.18,
                      transform: 'scale(1.04)'
                    }}
                  />
                  <div style={{ position: 'relative', zIndex: 1, color: '#F5F5F5', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '900px' }}>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      style={{ fontSize: '15px', letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0 }}
                    >
                      EXPLORATION STARTS BEFORE PLANNING
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.5 }}
                      style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}
                    >
                      You are walking in Brooklyn.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 0.6, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.62 }}
                      style={{ margin: 0, fontSize: '17px', color: 'rgba(245,245,245,0.75)' }}
                    >
                      No plan.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.95 }}
                      style={{ margin: 0, fontSize: '18px', color: 'rgba(245,245,245,0.9)' }}
                    >
                      One free evening.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 1.25 }}
                      style={{ margin: 0, fontSize: '18px', color: 'rgba(245,245,245,0.9)' }}
                    >
                      Limited energy.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 0.5, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 1.6 }}
                      style={{ margin: 0, fontSize: '14px', color: 'rgba(245,245,245,0.65)' }}
                    >
                      I do not want to compare ten tabs.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 2.0 }}
                      style={{
                        margin: 0,
                        fontSize: '21px',
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
                    style={{ color: '#111', fontSize: '26px', fontWeight: 500, marginBottom: '24px' }}
                  >
                    From guides to places worth discovering.
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)' }}
                  >
                    <motion.div
                      initial={{ scale: 1.02 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    >
                      <video
                        src={homepageVideo}
                        autoPlay
                        muted
                        playsInline
                        loop
                        controls={false}
                        style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                      />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Subsection 02 */}
              <div style={{ marginBottom: '120px' }}>
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ color: '#111', fontSize: '26px', fontWeight: 500, marginBottom: '24px' }}
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
                          fontSize: '13px',
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
                  style={{ color: '#111', fontSize: '26px', fontWeight: 500, marginBottom: '24px' }}
                  >
                    Existing maps solve navigation. They do not solve exploration.
                  </motion.h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '24px', alignItems: 'center' }}>
                    <motion.div
                      initial={{ opacity: 0, x: 8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      style={{ overflow: 'hidden', borderRadius: '12px' }}
                    >
                      <video
                        src={mobileMapVideo}
                        autoPlay
                        muted
                        playsInline
                        loop
                        controls={false}
                        style={{ width: '100%', maxWidth: '620px', display: 'block', objectFit: 'cover', borderRadius: '50px' }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
                      style={{ overflow: 'hidden', borderRadius: '12px' }}
                    >
                      <ImageWithFallback
                        src={mapComparisons}
                        alt="Map comparisons"
                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Subsection 05 */}
                <div id="solution" style={{ marginBottom: '120px' }}>
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  style={{ color: '#111', fontSize: '26px', fontWeight: 500, marginBottom: '16px' }}
                  >
                    A flow built for curiosity, not commitment.
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    style={{ marginBottom: '24px', fontSize: '15px', color: '#777', lineHeight: 1.6, fontStyle: 'italic' }}
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
                          fontSize: '14px'
                        }}
                      >
                        {line}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <video
                      src={explorationFlowVideo}
                      autoPlay
                      muted
                      playsInline
                      loop={false}
                      controls
                      style={{ width: '50%', maxWidth: '500px', display: 'block', objectFit: 'cover', borderRadius: '50px' }}
                    />
                  </motion.div>
                </div>

                {/* Design System in Action */}
                <div style={{ marginBottom: '160px' }}>
                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    style={{ color: '#111', fontSize: '28px', fontWeight: 500, marginBottom: '12px' }}
                  >
                    Design System in Action
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                    style={{ color: '#666', fontSize: '16px', lineHeight: 1.6, marginBottom: '48px' }}
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
                    <h4 style={{ color: '#111', fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>
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
                    <h4 style={{ color: '#111', fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>
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
                    <h4 style={{ color: '#111', fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>
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

                {/* Measuring better exploration */}
                <div id="evaluation" style={{ marginBottom: '160px' }}>
                  <motion.h3
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ color: '#111', fontSize: '28px', fontWeight: 500, marginBottom: '16px' }}
                  >
                    How we measure better exploration
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    style={{ marginBottom: '10px', fontSize: '15px', color: '#777', lineHeight: 1.6, fontStyle: 'italic' }}
                  >
                    Better exploration is not about clicks.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    style={{ color: '#666', fontSize: '14px', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '24px' }}
                  >
                    beyond click-through
                  </motion.p>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                      gap: '16px',
                      background: '#f7f7f7',
                      borderRadius: '16px',
                      padding: '20px'
                    }}
                  >
                    {[
                      {
                        title: 'Faster Discovery',
                        label: 'Time to first confident choice',
                        accent: '#FF7A00',
                        visual: (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{ height: '6px', borderRadius: '999px', background: 'rgba(255,122,0,0.25)', flex: 1 }} />
                            <div style={{ height: '6px', borderRadius: '999px', background: '#FF7A00', width: '35%' }} />
                          </div>
                        )
                      },
                      {
                        title: 'Higher Confidence',
                        label: 'Decision confidence and vibe clarity',
                        accent: '#7D9FFF',
                        visual: (
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '6px' }}>
                            <div style={{ height: '6px', background: 'rgba(125,159,255,0.25)', borderRadius: '999px' }} />
                            <div style={{ height: '6px', background: '#7D9FFF', borderRadius: '999px' }} />
                            <div style={{ height: '6px', background: 'rgba(125,159,255,0.25)', borderRadius: '999px' }} />
                            <div style={{ height: '6px', background: '#7D9FFF', borderRadius: '999px', width: '80%', justifySelf: 'end' }} />
                          </div>
                        )
                      },
                      {
                        title: 'Deeper Exploration',
                        label: 'Exploration depth and wishlist saves',
                        accent: '#5CC6C3',
                        visual: (
                          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                            {[8, 14, 18, 26].map((h, i) => (
                              <span
                                key={h}
                                style={{
                                  width: '10px',
                                  height: `${h}px`,
                                  borderRadius: '6px',
                                  background: i === 3 ? '#5CC6C3' : 'rgba(92,198,195,0.4)',
                                  display: 'inline-block'
                                }}
                              />
                            ))}
                          </div>
                        )
                      },
                      {
                        title: 'Local Engagement',
                        label: 'Repeat exploration and local focus',
                        accent: '#AC8BFF',
                        visual: (
                          <div style={{ position: 'relative', width: '100%', height: '56px' }}>
                            <div
                              style={{
                                position: 'absolute',
                                inset: '8px 12px',
                                border: '1px dashed rgba(172,139,255,0.5)',
                                borderRadius: '10px'
                              }}
                            />
                            <motion.span
                              initial={{ opacity: 0.4, scale: 0.9 }}
                              animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.9, 1, 0.9] }}
                              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                              style={{
                                position: 'absolute',
                                top: '18px',
                                left: '30%',
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: '#AC8BFF',
                                boxShadow: '0 0 12px rgba(172,139,255,0.6)'
                              }}
                            />
                            <motion.span
                              initial={{ opacity: 0.3, scale: 0.85 }}
                              animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.85, 1, 0.85] }}
                              transition={{ duration: 1.6, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
                              style={{
                                position: 'absolute',
                                bottom: '12px',
                                right: '28%',
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                background: '#AC8BFF'
                              }}
                            />
                          </div>
                        )
                      }
                    ].map((item) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        style={{
                          background: '#FFFFFF',
                          borderRadius: '12px',
                          padding: '14px',
                          border: '1px solid rgba(0,0,0,0.05)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span
                            style={{
                              width: '10px',
                              height: '10px',
                              borderRadius: '50%',
                              backgroundColor: item.accent,
                              flexShrink: 0
                            }}
                          />
                          <p style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: '#111' }}>{item.title}</p>
                        </div>
                        <div>{item.visual}</div>
                        <p style={{ margin: 0, fontSize: '13px', color: '#555' }}>{item.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{ marginTop: '18px', color: '#666', fontSize: '14px' }}
                  >
                    Better exploration feels lighter, faster, and more confident. These signals help us see it.
                  </motion.p>
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
