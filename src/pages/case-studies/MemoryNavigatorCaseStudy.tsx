import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { TLDRCard } from '../../components/case-study/TLDRCard';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { WordBackdropDecor } from '../../components/vector-decor';
import { NextSteps } from '../../components/case-study/NextSteps';
import { StickyTOC } from '../../components/case-study/StickyTOC';
import { MobileTOC } from '../../components/case-study/MobileTOC';
import { ProblemStatement } from '../../components/case-study/ProblemStatement';
import { ProblemFramework } from '../../components/case-study/ProblemFramework';
import { DesignPointsGrid } from '../../components/case-study/DesignPointsGrid';
import { DesignTargetsGrid } from '../../components/case-study/DesignTargetsGrid';
import { ServiceBlueprint } from '../../components/case-study/ServiceBlueprint';
import { DesignLayoutSection } from '../../components/case-study/DesignLayoutSection';
import { PlatformComparison } from '../../components/case-study/PlatformComparison';
import { TakeoutMapSection } from '../../components/case-study/TakeoutMapSection';
import { FullWidthHMWHero } from '../../components/case-study/FullWidthHMWHero';
import { Users, Heart, Activity, ArrowDown, ChevronRight } from 'lucide-react';
import dorothyAvatar from 'figma:asset/bd3279557edaf145fc9f479641cb2484dcefd316.png';
import lisaAvatar from 'figma:asset/01d46c6003e7b09a4a46b4bc6c09005e5c3439b6.png';
import drBakerAvatar from 'figma:asset/7553eb442baa913420a200212bcf16321543fc1d.png';
import medicalWorkflowDiagram from 'figma:asset/7efd7a56d3ae14fbe2ce997c2f13296569c9ed8f.png';
import coreIssueFramework from 'figma:asset/afab332149cca5541527d8721cbc898e8e6a0ffe.png';
import keyDesignPoints from 'figma:asset/6d8b3e2aa9be6ba6437a933cb0eb6cbfa8d54de5.png';
import designTargetImage1 from 'figma:asset/a9db3a7fcd6c3f29fc87f8380bf17e01c566f24b.png';
import designTargetImage2 from 'figma:asset/876428657d097da729a6a828d17bf0ad6e6d2dd1.png';
import memoryNavigatorTarget from 'figma:asset/4fbc0476f8c2dd091d5b8c16e52946486aed2c60.png';
import informationUploadTarget from 'figma:asset/58cfe1af080931bcb728425582c350686f4232da.png';
import evaluationArchiveTarget from 'figma:asset/0d9de99af88cce619ab19a62bd54ca40633adbcd.png';
import reportSystemTarget from 'figma:asset/a3708ef975dd2c6fd775fe753f66f400ed0a0693.png';
import conceptSketch from 'figma:asset/00369ae430465db0fa6899f5bee6e2437ed7e850.png';
import annotation from '../../assets/annotation.png';
import hololensLayout from 'figma:asset/2ca350b9e846253fae852a974ae4c73d8811a9a4.png';
import mockup from '../../assets/Gemini_Generated_Image_c23ldzc23ldzc23l.png';
import caregiverPlatform from '../../assets/map.png';
import doctorPlatform from '../../assets/mapnotation.png';
import scanningCard from '../../assets/Group 3905.png';
import friendHuntCard from '../../assets/Group 81.png';
import essentialExplorerCard from '../../assets/Group 3898.png';
import mrVideo from '../../assets/MR video.mp4';
import takeoutMap from '../../assets/Gemini_Generated_Image_38hk0838hk0838hk.png';
import prototypeVideo from '../../assets/prototype .mp4';
import userTestScreen from 'figma:asset/f7d0d61ae13fbcec7b6c63549bccc17d8e5fb92c.png';
import caregiverHero from '../../assets/Gemini_Generated_Image_c23ldzc23ldzc23l.png';
import mobileOverview from '../../assets/annotation.png';
import profHodaraTesting from 'figma:asset/13f1108381d54b781f42c8a4e21be234f101e84c.png';
import participantDemo from 'figma:asset/4b86632d2d2e4413e8addb4f8875dfc8ef755be1.png';
import tldrBackgroundImage from '../../assets/old.png';
import confusionImage from './image 5.png';
import dorothyCard from '../../components/case-study/DM.png';
import lisaCard from '../../components/case-study/LT.png';
import drBakerCard from '../../components/case-study/DJB.png';
import defineBackground from './Screenshot 2024-09-09 at 08.39.31 1.png';

// Performance-optimized animation configs (same as NYC Tourism)
const simpleTransition = { duration: 0.3, ease: [0.4, 0, 0.2, 1] };
const viewportConfig = { once: true, margin: "-50px" };

export function MemoryNavigatorCaseStudy() {
  const tldrHeroRef = useRef<HTMLDivElement>(null);
  const hmwHeroRef = useRef<HTMLElement>(null);
  const tocTriggerRef = useRef<HTMLDivElement>(null);
  const [tocOnDark, setTocOnDark] = useState(false);
  const [tocFixed, setTocFixed] = useState(false); // Changed from tocVisible to tocFixed
  const [activePersona, setActivePersona] = useState(0);

  const personas = [
    {
      name: "Dorothy Miller",
      role: "Primary User",
      avatar: dorothyAvatar,
      cardImage: dorothyCard,
      color: "#E56641"
    },
    {
      name: "Lisa Thompson",
      role: "Caregiver",
      avatar: lisaAvatar,
      cardImage: lisaCard,
      color: "#ED964F"
    },
    {
      name: "Dr. James Baker",
      role: "Healthcare Provider",
      avatar: drBakerAvatar,
      cardImage: drBakerCard,
      color: "#795337"
    }
  ];

  // Progressive sticky TOC (same as NYC Tourism)
  useEffect(() => {
    const handleScroll = () => {
      const toc = document.querySelector('.sticky-toc-nav');
      if (!toc) return;
      
      const tocRect = toc.getBoundingClientRect();
      const tocMiddle = tocRect.top + tocRect.height / 2;
      
      // Check if TOC overlaps with dark hero sections
      let isOnDark = false;
      
      if (tldrHeroRef.current) {
        const heroRect = tldrHeroRef.current.getBoundingClientRect();
        if (tocMiddle >= heroRect.top && tocMiddle <= heroRect.bottom) {
          isOnDark = true;
        }
      }
      
      if (hmwHeroRef.current) {
        const hmwRect = hmwHeroRef.current.getBoundingClientRect();
        if (tocMiddle >= hmwRect.top && tocMiddle <= hmwRect.bottom) {
          isOnDark = true;
        }
      }
      
      setTocOnDark(isOnDark);
      
      // Progressive sticky TOC (removed parallax effects for performance)
      if (tocTriggerRef.current) {
        const triggerRect = tocTriggerRef.current.getBoundingClientRect();
        const activationOffset = 80; // Reduced for smoother transition
        const shouldBeFixed = triggerRect.top <= activationOffset;
        setTocFixed((prev) => (prev === shouldBeFixed ? prev : shouldBeFixed));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply TOC dark mode class
  useEffect(() => {
    const toc = document.querySelector('.sticky-toc-nav');
    if (toc) {
      if (tocOnDark) {
        toc.classList.add('toc--on-dark');
      } else {
        toc.classList.remove('toc--on-dark');
      }
    }
  }, [tocOnDark]);

  const tocItems = [
    { id: 'tldr', label: 'TL;DR' },
    { id: 'background', label: 'Background' },
    { id: 'discover', label: 'Discover' },
    { id: 'define', label: 'Define' },
    { id: 'design', label: 'Design' },
    { id: 'outcomes', label: 'Outcomes' }
  ];

  return (
    <div className="case-study-page case-study-page--memory min-h-screen bg-[var(--ds-bg-page)]">
      <Navigation />

      <section className="case-study-hero-section pt-24 sm:pt-32 md:pt-40 pb-7 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div>
            {/* Hero Image */}
            <div
              style={{
                marginBottom: '32px',
                borderRadius: '8px',
                overflow: 'hidden',
                maxWidth: '60%',
                margin: '0 auto 32px'
              }}
            >
              <ImageWithFallback
                src={profHodaraTesting}
                alt="Elderly woman using HoloLens MR headset with caregiver assistance"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>

            <h1 style={{ color: '#000000', fontSize: 'var(--ds-text-display)', fontWeight: 400, lineHeight: '1.2', marginBottom: '16px' }}>
              Memory Navigator
            </h1>

            <p style={{ color: '#666666', fontSize: 'var(--type-l4)', fontWeight: 400, lineHeight: '1.6', marginBottom: '32px', maxWidth: '800px' }}>
              MR <WordBackdropDecor vector="highlight2">cognitive</WordBackdropDecor> training system using HoloLens for elderly users with mild cognitive impairment
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFA789', color: '#FFFFFF', fontSize: 'var(--type-l1)', fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase' }}>Design</span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFFFFF', color: '#000000', fontSize: 'var(--type-l1)', fontWeight: 500, letterSpacing: '0.02em', border: '1px solid rgba(0, 0, 0, 0.2)' }}>MR · HoloLens · Unity</span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFFFFF', color: '#000000', fontSize: 'var(--type-l1)', fontWeight: 500, letterSpacing: '0.02em', border: '1px solid rgba(0, 0, 0, 0.2)' }}>Product Designer</span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFFFFF', color: '#000000', fontSize: 'var(--type-l1)', fontWeight: 500, letterSpacing: '0.02em', border: '1px solid rgba(0, 0, 0, 0.2)' }}>10 Weeks</span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFFFFF', color: '#000000', fontSize: 'var(--type-l1)', fontWeight: 500, letterSpacing: '0.02em', border: '1px solid rgba(0, 0, 0, 0.2)' }}>Unity Prototype · Clinical Trial Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR full-bleed hero */}
      <section className="px-0 mt-16 sm:mt-20 md:mt-24">
        <div 
          ref={tldrHeroRef}
          id="tldr" 
          className="tldr-hero-fullbleed case-full-bleed"
          style={{ 
            position: 'relative',
            height: '80vh',
            minHeight: '700px',
            marginBottom: '120px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Background Image (parallax removed for performance) */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0
            }}
          >
            <ImageWithFallback
              src={tldrBackgroundImage}
              alt="Elderly living room setting"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Content Container */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 40px'
          }}>
            {/* TL;DR Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              style={{ 
                color: '#FFFFFF', 
                fontSize: 'var(--ds-text-title-lg)', 
                fontWeight: 400, 
                marginBottom: '32px',
                textAlign: 'center'
              }}
            >
              TL;DR
            </motion.h2>
            
            {/* Paragraph Text with stagger */}
            <div style={{
              maxWidth: '800px',
              margin: '0 auto 48px',
              textAlign: 'center'
            }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.05, ease: 'easeOut' }}
                style={{
                  color: '#FFFFFF',
                  fontSize: 'var(--type-l3)',
                  fontWeight: 400,
                  lineHeight: '1.7',
                  marginBottom: '12px'
                }}
              >
                Early <span style={{ color: '#FF7A00' }}>memory challenges</span> often go unnoticed until they become serious.
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                style={{
                  color: '#FFFFFF',
                  fontSize: 'var(--type-l3)',
                  fontWeight: 400,
                  lineHeight: '1.7'
                }}
              >
                We built a <span style={{ color: '#FF7A00' }}>mixed-reality system</span> that gives simple, real-time <span style={{ color: '#FF7A00' }}>spatial guidance</span> so seniors feel more confident, and caregivers understand changes sooner.
              </motion.div>
            </div>

            {/* Glassmorphism Stats Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15, ease: 'easeOut' }}
                className="tldr-stat-card"
              >
                <div style={{
                  fontSize: 'var(--ds-text-display)',
                  fontWeight: 700,
                  color: '#FF7A00',
                  lineHeight: '1',
                  marginBottom: '12px'
                }}>
                  68%
                </div>
                <p style={{
                  color: '#FFFFFF',
                  fontSize: 'var(--type-l3)',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Fewer navigation errors
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2, ease: 'easeOut' }}
                className="tldr-stat-card"
              >
                <div style={{
                  fontSize: 'var(--ds-text-display)',
                  fontWeight: 700,
                  color: '#FF7A00',
                  lineHeight: '1',
                  marginBottom: '12px'
                }}>
                  40%
                </div>
                <p style={{
                  color: '#FFFFFF',
                  fontSize: 'var(--type-l3)',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Faster task completion
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.25, ease: 'easeOut' }}
                className="tldr-stat-card"
              >
                <div style={{
                  fontSize: 'var(--ds-text-display)',
                  fontWeight: 700,
                  color: '#FF7A00',
                  lineHeight: '1',
                  marginBottom: '12px'
                }}>
                  6 seniors
                </div>
                <p style={{
                  color: '#FFFFFF',
                  fontSize: 'var(--type-l3)',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Pilot tested
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.3, ease: 'easeOut' }}
                className="tldr-stat-card"
              >
                <div style={{
                  fontSize: 'var(--ds-text-title)',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  lineHeight: '1.2',
                  marginBottom: '12px'
                }}>
                  Clinical interest
                </div>
                <p style={{
                  color: '#FFFFFF',
                  fontSize: 'var(--type-l3)',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Columbia lab wants to extend the study
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile TOC */}
      <MobileTOC items={tocItems} />

      <section className="pb-32 px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          {/* Reduced left column width from 280px to 160px (~60% of original) */}
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 lg:gap-8">
            <div className="hidden lg:block">
              <div style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
                <StickyTOC items={tocItems} isFixed={tocFixed} />
              </div>
            </div>

            <div className="case-study-content-wrapper w-full max-w-none min-w-0 flex flex-col" style={{ position: 'relative' }}>
              <div ref={tocTriggerRef} style={{ height: 1 }} />

              <div id="background" style={{ marginBottom: '200px', position: 'relative' }}>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: 'var(--type-l5)', fontWeight: 400, marginBottom: '60px' }}>Background</motion.h2>
                
                <motion.div 
                  style={{ 
                    position: 'relative', 
                    width: '100%', 
                    height: '80vh', // Cinematic height
                    minHeight: '600px',
                    borderRadius: '12px', 
                    overflow: 'hidden',
                    marginBottom: '160px' // Spacing after
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                >
                  {/* Image with brightness filter */}
                  <div style={{ width: '100%', height: '100%' }}>
                      <ImageWithFallback 
                          src={confusionImage} 
                          alt="Senior experiencing confusion in familiar setting"
                          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }} 
                      />
                  </div>

                  {/* Gradient Overlay & Vignette */}
                <div style={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0, bottom: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)',
                      boxShadow: 'inset 0 0 100px rgba(0,0,0,0.3)', // Subtle vignette
                      zIndex: 1
                  }} />

                  {/* Content Overlay */}
                  <div style={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0, bottom: 0,
                      zIndex: 2,
                      display: 'flex',
                      flexDirection: 'column',
                  alignItems: 'center',
                      justifyContent: 'center',
                      padding: '40px'
                  }}>
                      {/* Text Hook */}
                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                          style={{
                              maxWidth: '720px',
                              textAlign: 'center',
                              marginBottom: '64px' // Space between text and data
                          }}
                  >
                    <p style={{
                              color: '#FFFFFF',
                              fontSize: 'var(--ds-text-title)',
                              fontWeight: 300, // Light
                              lineHeight: '1.6',
                              letterSpacing: '0.02em'
                          }}>
                              “You know the route from your sofa to the fridge. But imagine one day you don’t.
                              <br /><br />
                              That’s what many seniors with early MCI face — confusion in familiar rooms.
                              <br /><br />
                              They hide it. Shame it. And by the time anyone notices, it’s already late.”
                    </p>
                  </motion.div>

                      {/* Minimal Data Badge (Option B) */}
                  <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.5 }}
                          style={{
                              textAlign: 'center'
                          }}
                      >
                          <div style={{
                              color: '#FFFFFF',
                              fontSize: 'var(--ds-text-display)',
                              fontWeight: 200, // Ultra light/thin
                              letterSpacing: '-0.02em',
                              marginBottom: '8px',
                              lineHeight: 1
                          }}>
                              9/12
                </div>
                          <div style={{
                              color: 'rgba(255,255,255,0.7)',
                              fontSize: 'var(--type-l3)',
                              fontWeight: 400,
                              letterSpacing: '0.05em',
                              textTransform: 'uppercase'
                          }}>
                              Hid memory lapses
              </div>
                </motion.div>
                  </div>
                </motion.div>
              </div>

              <div id="discover" style={{ marginBottom: '200px' }}>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: 'var(--type-l5)', fontWeight: 400, marginBottom: '60px' }}>Discover</motion.h2>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  style={{ 
                    fontSize: 'var(--type-l4)', 
                    lineHeight: '1.6', 
                    color: '#333', 
                    marginBottom: '80px',
                    maxWidth: '900px'
                  }}
                >
                  “We sat down with 12 seniors, their caregivers and doctors. What we heard broke the pattern:”
                </motion.p>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                  gap: '24px', 
                  marginBottom: '120px' 
                }}>
                  {[
                    { icon: '🧠', text: '9 of 12 secretly masked memory lapses.' },
                    { icon: '🔍', text: '75% pulled away from friends and routines.' },
                    { icon: '📍', text: 'Everyday objects – keys, glasses, meds – became unexpected stress points.' }
                  ].map((card, index) => (
                <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                  style={{
                        backgroundColor: '#FFFFFF',
                        padding: '32px',
                    borderRadius: '16px',
                        border: '1px solid rgba(0,0,0,0.06)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '24px'
                      }}
                    >
                      <span style={{ fontSize: 'var(--type-l5)' }}>{card.icon}</span>
                      <p style={{ fontSize: 'var(--type-l4)', color: '#333', margin: 0, lineHeight: '1.5', fontWeight: 500 }}>{card.text}</p>
                    </motion.div>
                  ))}
                  </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}
                >
                  <p style={{ 
                    fontSize: 'var(--ds-text-title)', 
                    fontWeight: 500, 
                    lineHeight: '1.4', 
                    color: '#000' 
                  }}>
                    “We mapped the <span style={{ color: '#FF7A00' }}>invisible gaps</span>: what seniors feel vs what the world sees. That map became our <span style={{ color: '#FF7A00' }}>design target</span>.”
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}
                >
                  <ArrowDown color="#FF7A00" size={40} strokeWidth={1.5} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, delay: 0.5 }}
                  style={{ marginBottom: '60px', maxWidth: '80%', margin: '0 auto 60px' }}
                >
                      <ImageWithFallback
                        src={medicalWorkflowDiagram}
                        alt="Medical workflow diagram"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </motion.div>

                {/* Section 4 - Full-width HMW Hero */}
                <FullWidthHMWHero
                  ref={hmwHeroRef}
                  imageSrc={profHodaraTesting}
                  imageAlt="User testing session with elderly participant using HoloLens"
                  heading="How Might We…"
                  question="How might we help seniors navigate daily spaces with clarity and confidence—without feeling medical?"
                  overlayOpacity={0.7}
                />

                {/* REFACTORED PERSONA SECTION */}
                <div style={{ margin: '160px 0' }}>
                   <motion.h2 
                     initial={{ opacity: 0 }} 
                     whileInView={{ opacity: 1 }} 
                     viewport={{ once: true }} 
                     style={{ 
                       color: '#000000', 
                       fontSize: 'var(--type-l5)', 
                       fontWeight: 400, 
                       marginBottom: '60px' 
                     }}
                   >
                     Personas: Understanding Who We Design For
                   </motion.h2>

                   <div className="max-w-6xl mx-auto">
                     {/* Responsive 2-Column Layout */}
                     <div className="grid grid-cols-1 md:grid-cols-[25%_75%] gap-8 items-start">
                        {/* Left Column: Persona Selector (Desktop & Mobile) */}
                        <div className="flex md:flex-col flex-row items-center gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
                          {personas.map((p, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActivePersona(idx)}
                              className={`
                                group flex flex-col items-center gap-1
                                py-3 px-2 rounded-xl transition-all duration-300 
                                bg-transparent hover:bg-neutral-50 hover:scale-[1.01]
                      
                                min-w-[140px] w-[160px] md:w-[160px]
                                relative
                              `}
                              style={{
                                borderTop: activePersona === idx ? '2px solidrgb(255, 140, 0)' : '1px solidrgba(229, 229, 229, 0)',
                                height: '100px'
                              }}
                            >
                              <div className="w-[32px] h-[32px] rounded-full overflow-hidden bg-transparent">
                                <ImageWithFallback src={p.avatar} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                              </div>
                              
                              <div className="text-center" style={{ opacity: activePersona === idx ? 1 : 0.5, transition: 'opacity 0.3s ease' }}>
                                <div className="text-gray-900 font-medium text-[15px] leading-tight">{p.name}</div>
                                <div className="text-neutral-500 text-[12px] leading-none mt-1">{p.role}</div>
                              </div>
                            </button>
                          ))}
                        </div>

                        {/* Right Column: Full Image Display */}
                        <div className="relative w-full flex items-center justify-center">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activePersona}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                              className="w-full flex items-center justify-center"
                            >
                              <div className="w-full md:w-[55%] md:max-w-[580px] mx-auto">
                                <ImageWithFallback 
                                  src={personas[activePersona].cardImage} 
                                  alt={`${personas[activePersona].name} Persona Details`} 
                                  style={{ width: '80%', height: 'auto', margin: '0 auto', display: 'block' }} 
                                />
                              </div>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                     </div>
                   </div>
                </div>
                </div>

              <div id="define" style={{ marginBottom: '120px' }}>
                <motion.h2 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  viewport={{ once: true }} 
                  style={{ 
                    color: '#000000', 
                    fontSize: 'var(--type-l5)', 
                    fontWeight: 400, 
                    marginBottom: '60px' 
                  }}
                >
                  Define
                </motion.h2>

                {/* BLOCK 1: DEFINE - Dark Section */}
                <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', marginBottom: '160px', color: '#F5F5F5' }}>
                  {/* Background Image & Overlay */}
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                    <img
                      src={defineBackground}
                      alt="Background showing cognitive decline context"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(26, 26, 26, 0.71)' }} />
                </div>

                  <div style={{ position: 'relative', zIndex: 1, padding: '96px 60px' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      style={{ maxWidth: '900px', margin: '0 auto' }}
                    >
                      <h3 style={{ fontSize: 'var(--type-l4)', fontWeight: 500, marginBottom: '40px', color: '#FFFFFF' }}>
                        ✨ What’s breaking down
                      </h3>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '40px' }}>
                        {[
                          {
                            title: "🧩 Hidden struggles",
                            text: "Seniors often hide lapses to protect dignity. Care teams only notice when things worsen."
                          },
                          {
                            title: "⏳ Clinic snapshots are too thin",
                            text: "Short visits miss everyday behaviors that actually show change."
                          },
                          {
                            title: "🏠 Care happens in different rooms",
                            text: "Seniors, caregivers, and doctors each see a different piece of the story."
                          }
                        ].map((insight, i) => (
                <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.15 * (i + 1) }}
                          >
                            <h3 style={{ fontSize: 'var(--type-l4)', fontWeight: 500, color: '#FFFFFF', marginBottom: '8px' }}>
                              {insight.title}
                            </h3>
                            <p style={{ fontSize: 'var(--type-l3)', lineHeight: '1.6', color: '#CFCFCF', margin: 0, maxWidth: '650px' }}>
                              {insight.text}
                  </p>
                </motion.div>
                        ))}
              </div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <p style={{ fontSize: 'var(--type-l4)', fontWeight: 600, color: '#FFFFFF', lineHeight: '1.4' }}>
                          🎯 We need a way to make everyday cognitive change visible—without making seniors feel watched.
                  </p>
                </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* BLOCK 2: SYSTEM PROBLEM */}
                <div style={{ marginBottom: '160px', textAlign: 'center' }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h3 style={{ fontSize: 'var(--type-l5)', fontWeight: 500, marginBottom: '16px', color: '#000' }}>
                      What the system actually needs to solve
                    </h3>
                    <div style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
                      <ImageWithFallback
                        src={coreIssueFramework}
                        alt="Problem framework showing the gap between stakeholders"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                    <p style={{ fontSize: 'var(--type-l4)', color: '#666', margin: 0 }}>
                      A hidden behavioral gap between seniors, caregivers, and providers.
                  </p>
                </motion.div>
                </div>

                {/* BLOCK 3: DESIGN FOUNDATIONS */}
                <div style={{ marginBottom: '160px' }}>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                    gap: '24px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                  }}>
                    {[
                      "Non-intrusive guidance, not monitoring.",
                      "No extra input for seniors.",
                      "Privacy-first and user-controlled.",
                      "Works in real homes.",
                      "Supports care rather than replacing it."
                    ].map((item, i) => (
                <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.5, delay: 0.12 * i }}
                  style={{
                          padding: '24px',
                          backgroundColor: '#F9F9F9',
                    borderRadius: '12px',
                          fontSize: 'var(--type-l4)',
                          color: '#333',
                          fontWeight: 500,
                          textAlign: 'center'
                        }}
                      >
                        {item}
                </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div id="design" style={{ marginBottom: '120px' }}>
                <motion.h2 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  viewport={{ once: true }}
                  style={{
                    color: '#000000', 
                    fontSize: 'var(--type-l5)', 
                    fontWeight: 400, 
                    marginBottom: '60px' 
                  }}
                >
                  Design
                </motion.h2>

                {/* BLOCK 4: SOLUTION OVERVIEW */}
                <div style={{ marginBottom: '160px', textAlign: 'center' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h3 style={{ fontSize: 'var(--type-l4)', fontWeight: 500, marginBottom: '48px', color: '#000', maxWidth: '800px', margin: '0 auto 48px' }}>
                      A connected ecosystem turning everyday actions into shared insight.
                    </h3>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                      <ImageWithFallback
                        src={designTargetImage1}
                        alt="Design target breakdown showing interconnected platforms"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                </motion.div>
                </div>

                {/* BLOCK 5: SYSTEM FLOW */}
                <div style={{ marginBottom: '160px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: 'var(--type-l4)', fontWeight: 500, marginBottom: '24px', color: '#000' }}>
                    How it works
                  </h3>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0 }}
                    style={{ maxWidth: '1000px', margin: '0 auto 48px' }}
                  >
                    <ImageWithFallback
                      src={designTargetImage2}
                      alt="Service blueprint showing system flow"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </motion.div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px', margin: '0 auto' }}>
                    {[
                      "1. Seniors interact naturally in MR.",
                      "2. The system maps patterns quietly in the background.",
                      "3. Caregivers & doctors see what matters — not everything."
                    ].map((line, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 * i }}
                        style={{ fontSize: 'var(--type-l4)', color: '#333', margin: 0 }}
                      >
                        {line}
                      </motion.p>
                    ))}
                  </div>
                </div>

                {/* BLOCK 6: SENIOR MR TASKS - Redesigned Minimal Section */}
                <div style={{ 
                  marginBottom: '160px', 
                  backgroundColor: '#FBFAFF', // Requested background
                  padding: '80px 40px',
                  borderRadius: '32px',
                  marginLeft: '-40px',
                  marginRight: '-40px'
                }}>
                  {/* SECTION 1 — HERO */}
                  <div style={{ maxWidth: '1280px', margin: '0 auto 160px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                      <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{
                          fontSize: 'var(--ds-text-title-lg)',
                          fontWeight: 300, // 300-400
                          color: '#000',
                          lineHeight: '1.1',
                          marginBottom: '24px'
                        }}
                      >
                        A gentle MR layer on top of familiar life.
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ 
                          fontSize: 'var(--type-l4)', // section subtitle
                          color: '#666', // low-contrast
                          maxWidth: '800px',
                          margin: '0 auto 32px',
                          lineHeight: '1.6'
                        }}
                      >
                        Soft mixed-reality cues help seniors explore, navigate, and understand their world — without feeling like “training.”
                      </motion.p>
                      
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        {['Spatial clarity', 'Social memory', 'Daily confidence', 'Low cognitive load'].map((tag, i) => (
                          <span key={i} style={{
                            padding: '8px 16px',
                            backgroundColor: 'rgba(255,255,255,0.6)',
                            border: '1px solid rgba(0,0,0,0.05)',
                            borderRadius: '100px',
                    fontSize: 'var(--type-l2)',
                            color: '#555'
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
              </div>

                    {/* Hero Image + Video */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', marginBottom: '48px' }}
                    >
                      <ImageWithFallback
                        src={takeoutMap} // Using as hero image per instruction
                        alt="Senior and caregiver using MR"
                        style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '600px', objectFit: 'cover' }}
                      />
                </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                      whileHover={{ scale: 1.01, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                      transition={{ duration: 0.4 }}
                      style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}
                    >
                      <video 
                        src={mrVideo}
                        controls 
                        playsInline
                        style={{ width: '100%', display: 'block' }}
                      />
                  </motion.div>
                  </div>

                  {/* SECTION 2 — TASKS */}
                  <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '160px' }}>
                    {/* TASK 1 - SCANNING */}
                <motion.div
                      initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                    >
                      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <h4 style={{ fontSize: 'var(--type-l5)', fontWeight: 400, marginBottom: '12px', color: '#000' }}>Scanning</h4>
                        <p style={{ fontSize: 'var(--type-l4)', color: '#888', fontWeight: 300 }}>Put on the headset → Enter Memory Navigator → Locate by QR code</p>
                </div>

                      <motion.div
                        whileHover={{ y: -6, boxShadow: '0 32px 64px rgba(0,0,0,0.08)' }}
                  style={{
                          borderRadius: '32px', 
                          overflow: 'hidden', 
                          boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                          marginBottom: '32px',
                          transition: 'box-shadow 0.3s ease'
                        }}
                      >
                        <ImageWithFallback src={scanningCard} alt="Scanning Task" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </motion.div>

                      <p style={{ textAlign: 'center', fontSize: 'var(--type-l4)', color: '#555', fontStyle: 'italic' }}>
                        Tactile grounding makes MR feel safe, predictable, and intuitive.
                  </p>
                </motion.div>

                    {/* TASK 2 - FRIEND HUNT */}
                  <motion.div
                      initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <h4 style={{ fontSize: 'var(--type-l5)', fontWeight: 400, marginBottom: '12px', color: '#000' }}>Friend Hunt</h4>
                        <p style={{ fontSize: 'var(--type-l4)', color: '#888', fontWeight: 300 }}>Try to find friends’ addresses → Guided hints → Celebrate small wins</p>
                      </div>
                      
                      <motion.div
                        whileHover={{ y: -6, boxShadow: '0 32px 64px rgba(0,0,0,0.08)' }}
                    style={{
                          borderRadius: '32px', 
                          overflow: 'hidden', 
                          boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                          marginBottom: '32px',
                          transition: 'box-shadow 0.3s ease'
                        }}
                      >
                        <ImageWithFallback src={friendHuntCard} alt="Friend Hunt Task" style={{ width: '100%', height: 'auto', display: 'block' }} />
                      </motion.div>
                      
                      <p style={{ textAlign: 'center', fontSize: 'var(--type-l4)', color: '#555', fontStyle: 'italic' }}>
                        A meaningful social goal turns navigation practice into a warm, human moment.
                      </p>
                </motion.div>

                    {/* TASK 3 - ESSENTIAL EXPLORER */}
                <motion.div
                      initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                    >
                      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <h4 style={{ fontSize: 'var(--type-l5)', fontWeight: 400, marginBottom: '12px', color: '#000' }}>Essential Explorer</h4>
                        <p style={{ fontSize: 'var(--type-l4)', color: '#888', fontWeight: 300 }}>Tap on locations → Learn what they offer → Build daily confidence</p>
                      </div>
                      
                      <motion.div
                        whileHover={{ y: -6, boxShadow: '0 32px 64px rgba(0,0,0,0.08)' }}
                        style={{
                          borderRadius: '32px', 
                          overflow: 'hidden', 
                          boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                          marginBottom: '32px',
                          transition: 'box-shadow 0.3s ease'
                        }}
                      >
                        <ImageWithFallback src={essentialExplorerCard} alt="Essential Explorer Task" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </motion.div>

                      <p style={{ textAlign: 'center', fontSize: 'var(--type-l4)', color: '#555', fontStyle: 'italic' }}>
                        Understanding nearby essentials supports safety, logic, and independence.
                  </p>
                </motion.div>
                </div>

                  {/* SECTION 3 — CLOSING BLOCK */}
                  <div style={{ textAlign: 'center', marginTop: '160px', position: 'relative' }}>
                    {/* Dotted pattern hint */}
                    <div style={{ 
                      position: 'absolute', 
                      top: -40, 
                      right: 40, 
                      width: '120px', 
                      height: '120px', 
                      backgroundImage: 'radial-gradient(#E0E0FF 2px, transparent 2px)',
                      backgroundSize: '20px 20px',
                      opacity: 0.6
                    }} />

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.0 }}
                    >
                      <h3 style={{ fontSize: 'var(--type-l6)', fontWeight: 400, marginBottom: '32px', color: '#000' }}>
                        Designed to support — not overwhelm.
                  </h3>
                      <p style={{ fontSize: 'var(--type-l4)', lineHeight: '1.6', color: '#555', maxWidth: '700px', margin: '0 auto 48px' }}>
                        The tasks stay intentionally quiet.<br/>
                        They encourage seniors to look, reach, plan, and understand —<br/>
                        the same cognitive actions they rely on every day,<br/>
                        now supported by a gentle MR layer.
                      </p>
                      
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                        {['Dignity first', 'Calm cognitive engagement', 'Emotionally safe', 'Real-life relevance'].map((tag, i) => (
                          <span key={i} style={{
                            padding: '6px 16px',
                            backgroundColor: '#FFF',
                            border: '1px solid #EAEAEA',
                            borderRadius: '100px',
                            fontSize: 'var(--type-l2)',
                            color: '#666'
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* BLOCK 7: CAREGIVER MOBILE VIEW */}
                  <div style={{ 
                  marginBottom: '160px',
                  backgroundColor: '#F8F5FF', // Soft lavender-white
                  padding: '120px 40px',
                  borderRadius: '32px',
                  marginLeft: '-40px',
                  marginRight: '-40px'
                }}>
                  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    
                    {/* 1. Transition */}
                    <div style={{ textAlign: 'center', marginBottom: '120px' }}>
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                          fontSize: 'var(--type-l6)', 
                          fontWeight: 500, 
                          color: '#000', 
                          marginBottom: '16px' 
                        }}
                      >
                        Caring continues on the caregiver’s phone.
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ 
                          fontSize: 'var(--type-l4)', 
                          color: '#666', 
                          fontWeight: 300
                        }}
                      >
                        Quiet insights surface only when needed — never overwhelming.
                      </motion.p>
                  </div>

                    {/* 2. Hero Card (Caregiver Photo) */}
                <motion.div
                      initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      style={{ marginBottom: '120px', textAlign: 'center' }}
                    >
                      <motion.div
                        whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                  style={{
                          borderRadius: '24px', 
                          overflow: 'hidden', 
                          boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                          marginBottom: '24px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <ImageWithFallback 
                          src={caregiverHero} 
                          alt="Caregiver holding phone" 
                          style={{ width: '100%', height: 'auto', display: 'block' }} 
                        />
                      </motion.div>
                      <p style={{ fontSize: 'var(--type-l3)', color: '#8A8A9B' }}>
                        Grounded in real routines, not dashboards.
                  </p>
                </motion.div>

                    {/* 3. Mobile Overview (Annotation UI) */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      style={{ marginBottom: '120px', textAlign: 'center' }}
                    >
                      <div style={{ marginBottom: '48px' }}>
                        <h4 style={{ fontSize: 'var(--type-l6)', fontWeight: 500, marginBottom: '12px', color: '#000' }}>
                          Understanding each person’s rhythm
                        </h4>
                        <p style={{ fontSize: 'var(--type-l4)', color: '#666', fontWeight: 300 }}>
                          Subtle shifts in movement, clarity, and memory — shown gently.
                        </p>
                      </div>

                      <motion.div
                        whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                        style={{ 
                          borderRadius: '24px', 
                          overflow: 'hidden', 
                          boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                          marginBottom: '24px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <ImageWithFallback 
                          src={mobileOverview} 
                          alt="Mobile Annotation UI" 
                          style={{ width: '100%', height: 'auto', display: 'block' }} 
                        />
                      </motion.div>
                      <p style={{ fontSize: 'var(--type-l3)', color: '#8A8A9B' }}>
                        A calm overview designed for quick, human judgment.
                      </p>
                    </motion.div>

                    {/* 4. Demo Video (Vertical) */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      style={{ marginBottom: '80px', textAlign: 'center' }}
                    >
                      <motion.div
                        whileHover={{ y: -6, boxShadow: '0 0 30px rgba(172, 139, 255, 0.2)' }}
                        style={{ 
                          maxWidth: '800px', // Increased size per request
                          width: '100%',
                          margin: '0 auto 24px',
                          borderRadius: '24px', 
                          overflow: 'hidden', 
                          boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <video 
                          src={prototypeVideo} 
                          controls 
                          playsInline
                          style={{ width: '100%', display: 'block', height: 'auto' }} 
                        />
                      </motion.div>
                      <p style={{ fontSize: 'var(--type-l3)', color: '#8A8A9B' }}>
                        Lightweight support for everyday caregiving.
                      </p>
                    </motion.div>

                    {/* 5. Closing Line */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.0 }}
                      style={{ textAlign: 'center' }}
                    >
                      <p style={{ fontSize: 'var(--type-l2)', color: '#AAA', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Designed to guide, not to monitor.
                      </p>
                    </motion.div>

                  </div>
                </div>
              </div>

              <div id="develop" style={{ marginBottom: '80px' }}>
                <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: 'var(--type-l4)', fontWeight: 500, marginBottom: '32px' }}>Prototyping & Testing</motion.h3>
                
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  <p style={{ color: '#666666', fontSize: 'var(--type-l3)', lineHeight: '1.8', marginBottom: '40px' }}>
                    After developing our Unity prototype, we invited participants from diverse backgrounds — including professors, students, and seniors — to experience our immersive media lab demo. Their feedback informed design refinement and usability improvement for older adults.
                  </p>
                </motion.div>

                <div style={{ marginBottom: '48px' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '20px',
                    marginBottom: '20px'
                  }}>
                    <motion.figure
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      style={{ margin: 0 }}
                    >
                      <div style={{
                        backgroundColor: '#2B2B2B',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
                        padding: '20px',
                        aspectRatio: '16/10',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <ImageWithFallback
                          src={userTestScreen}
                          alt="Reviewing users' behavior from screen"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                          }}
                        />
                      </div>
                      <figcaption style={{
                        color: '#666666',
                        fontSize: 'var(--type-l2)',
                        fontStyle: 'italic',
                        marginTop: '12px',
                        textAlign: 'center',
                        lineHeight: '1.5'
                      }}>
                        Reviewing users' behavior from screen.
                      </figcaption>
                    </motion.figure>

                    <motion.figure
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      style={{ margin: 0 }}
                    >
                      <div style={{
                        backgroundColor: '#2B2B2B',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
                        padding: '20px',
                        aspectRatio: '16/10',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <ImageWithFallback
                          src={profHodaraTesting}
                          alt="Prof. Hodara testing the system"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                          }}
                        />
                      </div>
                      <figcaption style={{
                        color: '#666666',
                        fontSize: 'var(--type-l2)',
                        fontStyle: 'italic',
                        marginTop: '12px',
                        textAlign: 'center',
                        lineHeight: '1.5'
                      }}>
                        Prof. Hodara testing the system.
                      </figcaption>
                    </motion.figure>
                  </div>

                  <motion.figure
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ margin: 0 }}
                  >
                    <div style={{
                      backgroundColor: '#2B2B2B',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
                      padding: '24px',
                      aspectRatio: '16/9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <ImageWithFallback
                        src={participantDemo}
                        alt="Participants interacting with the demo"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    <figcaption style={{
                      color: '#666666',
                      fontSize: 'var(--type-l2)',
                      fontStyle: 'italic',
                      marginTop: '12px',
                      textAlign: 'center',
                      lineHeight: '1.5'
                    }}>
                      Participants interacting with the demo.
                    </figcaption>
                  </motion.figure>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{
                    backgroundColor: 'rgba(229, 102, 65, 0.05)',
                    border: '1px solid rgba(229, 102, 65, 0.15)',
                    borderRadius: '12px',
                    padding: '32px',
                    marginTop: '48px'
                  }}
                >
                  <h4 style={{
                    color: '#482D18',
                    fontSize: 'var(--type-l4)',
                    fontWeight: 600,
                    marginBottom: '24px'
                  }}>
                    Design Insights
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <span style={{
                        color: '#E56641',
                        fontSize: 'var(--type-l4)',
                        fontWeight: 600,
                        minWidth: '28px'
                      }}>1.</span>
                      <p style={{ color: '#3B2E24', fontSize: 'var(--type-l3)', lineHeight: '1.7', margin: 0 }}>
                        Designing systems for seniors must be respectful, avoiding preconceptions.
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <span style={{
                        color: '#E56641',
                        fontSize: 'var(--type-l4)',
                        fontWeight: 600,
                        minWidth: '28px'
                      }}>2.</span>
                      <p style={{ color: '#3B2E24', fontSize: 'var(--type-l3)', lineHeight: '1.7', margin: 0 }}>
                        Prioritize usability for older adults — consider color contrast, interface visibility, and element scale.
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <span style={{
                        color: '#E56641',
                        fontSize: 'var(--type-l4)',
                        fontWeight: 600,
                        minWidth: '28px'
                      }}>3.</span>
                      <p style={{ color: '#3B2E24', fontSize: 'var(--type-l3)', lineHeight: '1.7', margin: 0 }}>
                        Immersive experiences should empower, not exclude, those with limited mobility.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div id="outcomes" style={{ marginBottom: '80px' }}>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: 'var(--type-l5)', fontWeight: 400, marginBottom: '24px' }}>Outcomes</motion.h2>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(0, 0, 0, 0.08)', padding: '32px', marginBottom: '24px' }}>
                  <p style={{ color: '#666666', fontSize: 'var(--type-l3)', lineHeight: '1.8', marginBottom: '16px' }}>
                    <strong style={{ color: '#000000' }}>Validation:</strong> Pilot study with 6 MCI patients showed 68% reduction in navigation errors and 40% faster task completion compared to baseline.
                  </p>
                  <p style={{ color: '#666666', fontSize: 'var(--type-l3)', lineHeight: '1.8', marginBottom: '16px' }}>
                    <strong style={{ color: '#000000' }}>Academic Recognition:</strong> Presented at ACM CHI Student Research Competition 2024. Received honorable mention.
                  </p>
                  <p style={{ color: '#666666', fontSize: 'var(--type-l3)', lineHeight: '1.8', margin: 0 }}>
                    <strong style={{ color: '#000000' }}>Clinical Interest:</strong> Cognitive Health Lab at Columbia expressed interest in expanded clinical trial (pending IRB approval).
                  </p>
                </motion.div>

                <NextSteps
                  steps={[
                    "Expand prototype to support multi-room environments and outdoor navigation",
                    "Integrate with wearable health sensors for holistic cognitive assessment",
                    "Design caregiver dashboard for remote monitoring and intervention",
                    "Pursue IRB approval for 12-month longitudinal clinical study"
                  ]}
                />
              </div>

              <div id="reflection" style={{ marginBottom: '80px' }}>
                <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: 'var(--type-l4)', fontWeight: 500, marginBottom: '24px' }}>Reflection</motion.h3>
                
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  <p style={{ color: '#666666', fontSize: 'var(--type-l3)', lineHeight: '1.8', marginBottom: '48px' }}>
                    Testing with diverse participants — from seniors navigating cognitive changes to academic experts in immersive technology — helped me move beyond interface evaluation toward understanding emotional accessibility. These reflections shaped my growth as a designer committed to human-centered care.
                  </p>
                </motion.div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                  gap: '24px',
                  marginBottom: '56px'
                }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(229, 102, 65, 0.12)',
                      borderRadius: '12px',
                      padding: '28px',
                      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <div style={{ marginBottom: '16px' }}>
                      <Heart style={{ width: '28px', height: '28px', color: '#E56641', strokeWidth: 1.5 }} />
                    </div>
                    <h4 style={{
                      color: '#482D18',
                      fontSize: 'var(--type-l3)',
                      fontWeight: 600,
                      marginBottom: '12px'
                    }}>
                      Empathy as a Method
                    </h4>
                    <p style={{ color: '#666666', fontSize: 'var(--type-l2)', lineHeight: '1.7', margin: 0 }}>
                      Observing seniors taught me to listen before designing — noticing not just their needs, but their rhythm and confidence.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(237, 150, 79, 0.12)',
                      borderRadius: '12px',
                      padding: '28px',
                      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <div style={{ marginBottom: '16px' }}>
                      <Activity style={{ width: '28px', height: '28px', color: '#ED964F', strokeWidth: 1.5 }} />
                    </div>
                    <h4 style={{
                      color: '#482D18',
                      fontSize: 'var(--type-l3)',
                      fontWeight: 600,
                      marginBottom: '12px'
                    }}>
                      Designing Across Touch and Cognition
                    </h4>
                    <p style={{ color: '#666666', fontSize: 'var(--type-l2)', lineHeight: '1.7', margin: 0 }}>
                      Translating digital data into tangible, physical maps revealed how memory and emotion intertwine with interaction.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(172, 139, 255, 0.12)',
                      borderRadius: '12px',
                      padding: '28px',
                      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <div style={{ marginBottom: '16px' }}>
                      <Users style={{ width: '28px', height: '28px', color: '#AC8BFF', strokeWidth: 1.5 }} />
                    </div>
                    <h4 style={{
                      color: '#482D18',
                      fontSize: 'var(--type-l3)',
                      fontWeight: 600,
                      marginBottom: '12px'
                    }}>
                      Redefining Accessibility
                    </h4>
                    <p style={{ color: '#666666', fontSize: 'var(--type-l2)', lineHeight: '1.7', margin: 0 }}>
                      Accessibility is not just clarity of interface — it's dignity and independence. Design should empower, not protect.
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{
                    backgroundColor: 'rgba(250, 248, 246, 0.8)',
                    borderRadius: '16px',
                    padding: '40px 32px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #E56641 0%, #ED964F 50%, #AC8BFF 100%)'
                  }} />
                  
                  <p style={{
                    color: '#795337',
                    fontSize: 'var(--type-l2)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '24px',
                    textAlign: 'center'
                  }}>
                    Key Takeaways
                  </p>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px'
                  }}>
                    <div style={{
                      backgroundColor: 'rgba(229, 102, 65, 0.08)',
                      borderRadius: '10px',
                      padding: '20px',
                      textAlign: 'center',
                      border: '1px solid rgba(229, 102, 65, 0.15)'
                    }}>
                      <p style={{
                        color: '#E56641',
                        fontSize: 'var(--type-l3)',
                        fontWeight: 600,
                        marginBottom: '8px'
                      }}>
                        Listen First
                      </p>
                      <p style={{
                        color: '#666666',
                        fontSize: 'var(--type-l2)',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        Observation → Adjustment
                      </p>
                    </div>

                    <div style={{
                      backgroundColor: 'rgba(237, 150, 79, 0.08)',
                      borderRadius: '10px',
                      padding: '20px',
                      textAlign: 'center',
                      border: '1px solid rgba(237, 150, 79, 0.15)'
                    }}>
                      <p style={{
                        color: '#ED964F',
                        fontSize: 'var(--type-l3)',
                        fontWeight: 600,
                        marginBottom: '8px'
                      }}>
                        Design Tangibly
                      </p>
                      <p style={{
                        color: '#666666',
                        fontSize: 'var(--type-l2)',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        Digital → Physical embodiment
                      </p>
                    </div>

                    <div style={{
                      backgroundColor: 'rgba(172, 139, 255, 0.08)',
                      borderRadius: '10px',
                      padding: '20px',
                      textAlign: 'center',
                      border: '1px solid rgba(172, 139, 255, 0.15)'
                    }}>
                      <p style={{
                        color: '#AC8BFF',
                        fontSize: 'var(--type-l3)',
                        fontWeight: 600,
                        marginBottom: '8px'
                      }}>
                        Empower, Don't Protect
                      </p>
                      <p style={{
                        color: '#666666',
                        fontSize: 'var(--type-l2)',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        Respect → Paternalism
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div id="credits" style={{ marginBottom: '64px' }}>
                <motion.h3 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  viewport={{ once: true }} 
                  style={{ 
                    color: '#000000', 
                    fontSize: 'var(--type-l4)', 
                    fontWeight: 500, 
                    marginBottom: '32px' 
                  }}
                >
                  Credits
                </motion.h3>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ 
                    backgroundColor: '#FFFFFF', 
                    border: '1px solid rgba(0, 0, 0, 0.06)', 
                    borderRadius: '8px',
                    padding: '48px',
                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)'
                  }}
                  className="md:p-12 p-8"
                >
                  <div 
                    style={{ 
                      display: 'grid', 
                      gap: '40px'
                    }}
                    className="md:grid-cols-2 grid-cols-1"
                  >
                    {/* Left Column - Team & Location */}
                    <div>
                      <div style={{ marginBottom: '32px' }}>
                        <h3 style={{ 
                          color: '#000000', 
                          fontSize: 'var(--type-l3)', 
                          fontWeight: 500, 
                          marginBottom: '12px',
                          letterSpacing: '0.02em'
                        }}>
                          Team
                        </h3>
                        <p style={{ 
                          color: '#666666', 
                          fontSize: 'var(--type-l3)', 
                          lineHeight: '1.8', 
                          margin: 0 
                        }}>
                          Shane Lai — Full-Stack Designer & Developer<br />
                          Prof. Sofie Hodara — Faculty Advisor
                        </p>
                      </div>
                      
                      <div>
                        <h3 style={{ 
                          color: '#000000', 
                          fontSize: 'var(--type-l3)', 
                          fontWeight: 500, 
                          marginBottom: '12px',
                          letterSpacing: '0.02em'
                        }}>
                          Location
                        </h3>
                        <p style={{ 
                          color: '#666666', 
                          fontSize: 'var(--type-l3)', 
                          lineHeight: '1.8', 
                          margin: 0 
                        }}>
                          Boston, MA — Northeastern University,<br />
                          Media Innovation Lab
                        </p>
                      </div>
                    </div>
                    
                    {/* Right Column - Special Thanks */}
                    <div>
                      <h3 style={{ 
                        color: '#000000', 
                        fontSize: 'var(--type-l3)', 
                        fontWeight: 500, 
                        marginBottom: '12px',
                        letterSpacing: '0.02em'
                      }}>
                        Special Thanks
                      </h3>
                      <p style={{ 
                        color: '#666666', 
                        fontSize: 'var(--type-l3)', 
                        lineHeight: '1.8', 
                        margin: 0,
                        fontStyle: 'italic'
                      }}>
                        Participants from local senior centers and healthcare professionals in Boston who generously shared their experiences and feedback during user testing.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
