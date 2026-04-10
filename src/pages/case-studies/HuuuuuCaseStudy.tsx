import { motion, useScroll, useTransform, Variants, AnimatePresence } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { StickyTOC } from '../../components/case-study/StickyTOC';
import { MobileTOC } from '../../components/case-study/MobileTOC';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { ArrowRight, Thermometer, Wind, Heart, Zap, Users, Activity, Layers, MessageCircle, AlertCircle, Lightbulb } from 'lucide-react';
import { WordBackdropDecor } from '../../components/vector-decor';

const heroImage = 'https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2Febad1e3d1c1241e789cd0daeabbe07d6';
import contextImage from 'figma:asset/d4bf212ef865fe4182e7ced9ce71b8bf36c22642.png';
import journeyImage from 'figma:asset/cc6bc14b9d6434396b8eb07e9faa8762d280941f.png';
import sketchImage from 'figma:asset/d1e347e43af72a40623246a4fee6da3508a68413.png';
import prototypeImage from 'figma:asset/437f5d0dae91f7a06abb903106da28ae15c8919c.png';
import systemImage from 'figma:asset/937b2153b646a9476356596579ddfbe49fa07e32.png';
import systemDiagramImage from 'figma:asset/45ae3828a113ea2be8e5fad5040574f18c5648f7.png';
import appInterfaceImage from 'figma:asset/45f782885666d298edfc7a7b70d28e62bf047b5e.png';
import skillGrowthImage from 'figma:asset/76a71ff5aecddb8a8cf62925eb5d54b265006070.png';
import iPhoneMockup from '../../assets/iPhone 15 Pro.png';
import screen497 from '../../assets/image 497.png';
import screen498 from '../../assets/image 498.png';
import screen499 from '../../assets/image 499.png';

export function HuuuuuCaseStudy() {
  const tocTriggerRef = useRef<HTMLDivElement>(null);
  const [tocFixed, setTocFixed] = useState(false);

  const tocItems = [
    { id: 'tldr', label: 'TL;DR' },
    { id: 'discover', label: 'Discover' },
    { id: 'hmw', label: 'HMW' },
    { id: 'experience', label: 'Experience' },
    { id: 'ideation', label: 'Prototyping' },
    { id: 'system', label: 'System' },
    { id: 'reflection', label: 'Reflection' }
  ];

  // Parallax hooks (performance optimized)
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 600], [0, 50]);
  const systemParallax = useTransform(scrollY, [2000, 3000], [0, -30]);

  // Progressive sticky TOC (same as NYC Tourism & Memory Navigator)
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

  // Styles
  const styles = {
    sectionPaddingBottom: '160px',
    headingH1: { fontSize: 'var(--ds-text-display)', fontWeight: 400, letterSpacing: '-0.3px', color: '#1A1A1A', lineHeight: '1.2', marginBottom: '16px' },
    headingH2: { fontSize: 'var(--type-l5)', fontWeight: 400, color: '#000000', marginBottom: '60px' },
    headingH3: { fontSize: 'var(--type-l4)', fontWeight: 500, color: '#000000', marginBottom: '24px' },
    bodyText: { fontSize: 'var(--type-l3)', fontWeight: 400, lineHeight: '1.55', color: '#4A4A4A', marginBottom: '20px' },
    captionText: { fontSize: 'var(--type-l2)', fontWeight: 350, lineHeight: '1.45', color: '#666666', marginTop: '12px' },
    cardSurface: {
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 4px 28px rgba(0,0,0,0.06)',
      border: '1px solid rgba(0,0,0,0.02)'
    },
    imageCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 4px 28px rgba(0,0,0,0.06)',
      overflow: 'hidden'
    },
    floatingCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.04)',
      border: '1px solid rgba(0,0,0,0.02)',
      transition: 'transform 0.3s ease'
    },
    accentColor: '#B3B2FF'
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 0.84, 0.44, 1] }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  return (
    <div
      className="case-study-page case-study-page--huuuuu min-h-screen"
      style={{ background: 'linear-gradient(to bottom, #FAF8F4 0%, #FFFFFF 100%)' }}
    >
      <Navigation />

      <section className="case-study-hero-section pt-24 sm:pt-32 md:pt-40 pb-20 sm:pb-24 md:pb-32 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Hero Image Container */}
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '60px',
                marginBottom: '40px'
            }}>
               <motion.img 
                   src={heroImage}
                   alt="Huuuuu! Hero"
                   initial={{ opacity: 0, scale: 0.98 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 1, delay: 0.2 }}
                   style={{
                       maxWidth: '80%',
                       width: '80%',
                       height: 'auto',
                       objectFit: 'contain',
                       display: 'block'
                   }}
               />
            </div>

            <h1 style={styles.headingH1}>
              Huuuuu!
            </h1>

            <p style={{ color: '#666666', fontSize: 'var(--type-l4)', fontWeight: 400, lineHeight: '1.6', marginBottom: '40px', maxWidth: '800px' }}>
              A <WordBackdropDecor vector="love">breath-powered</WordBackdropDecor> glove that turns a private gesture into warmth, agency, and a shared reminder that comfort is not neutral.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
              <span style={{ padding: '8px 16px', backgroundColor: '#B3B2FF', color: '#FFFFFF', fontSize: 'var(--type-l1)', fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase' }}>Design</span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFFFFF', color: '#000000', fontSize: 'var(--type-l1)', fontWeight: 500, letterSpacing: '0.02em', border: '1px solid rgba(0, 0, 0, 0.2)' }}>Arduino · Wearable · IoT</span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFFFFF', color: '#000000', fontSize: 'var(--type-l1)', fontWeight: 500, letterSpacing: '0.02em', border: '1px solid rgba(0, 0, 0, 0.2)' }}>Interaction Designer</span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFFFFF', color: '#000000', fontSize: 'var(--type-l1)', fontWeight: 500, letterSpacing: '0.02em', border: '1px solid rgba(0, 0, 0, 0.2)' }}>10 Days</span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFFFFF', color: '#000000', fontSize: 'var(--type-l1)', fontWeight: 500, letterSpacing: '0.02em', border: '1px solid rgba(0, 0, 0, 0.2)' }}>Gender Equity · Social Design</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile TOC */}
      <MobileTOC items={tocItems} />

      {/* MAIN CONTENT */}
      <section className="pb-32 px-4 sm:px-6 md:px-16 lg:px-24 pt-8 sm:pt-12 md:pt-16">
        <div className="max-w-[1200px] mx-auto"> {/* Matched max-width */}
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 lg:gap-8"> {/* Matched gap */}
            <div className="hidden lg:block">
              <StickyTOC items={tocItems} isFixed={tocFixed} />
                </div>

            <div className="case-study-content-wrapper max-w-[900px] w-full" style={{ position: 'relative' }}>
              <div ref={tocTriggerRef} style={{ height: 1 }} />
              
              {/* TL;DR - Adjusted spacing and layout */}
              <div id="tldr" style={{ marginBottom: '120px' }}> {/* Adjusted margin */}
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={styles.headingH2}
                >
                  TL;DR
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Challenge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                    style={styles.cardSurface}
                  >
                    <AlertCircle color={styles.accentColor} className="mb-4" />
                    <h3 style={{ fontSize: 'var(--type-l4)', fontWeight: 500, color: '#1A1A1A', marginBottom: '12px' }}>Challenge</h3> {/* Matched H3 style */}
                    <p style={{ fontSize: 'var(--type-l3)', lineHeight: '1.6', color: '#666', marginBottom: '12px' }}>Office temperatures still follow a male metabolic model.</p>
                    <p style={{ fontSize: 'var(--type-l3)', lineHeight: '1.6', color: '#666', margin: 0 }}>Women feel colder—not because they’re “sensitive”—but because the system was never calibrated for them.</p>
                  </motion.div>

                  {/* Insight */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={styles.cardSurface}
                  >
                    <Lightbulb color={styles.accentColor} className="mb-4" />
                    <h3 style={{ fontSize: 'var(--type-l4)', fontWeight: 500, color: '#1A1A1A', marginBottom: '12px' }}>Insight</h3>
                    <p style={{ fontSize: 'var(--type-l3)', lineHeight: '1.6', color: '#666', marginBottom: '12px' }}>Cold is not a personal flaw.</p>
                    <p style={{ fontSize: 'var(--type-l3)', lineHeight: '1.6', color: '#666', margin: 0 }}>It’s infrastructure choosing one body over another.</p>
                </motion.div>

                  {/* Solution */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={styles.cardSurface}
                  >
                    <Wind color={styles.accentColor} className="mb-4" />
                    <h3 style={{ fontSize: 'var(--type-l4)', fontWeight: 500, color: '#1A1A1A', marginBottom: '12px' }}>Solution</h3>
                    <p style={{ fontSize: 'var(--type-l3)', lineHeight: '1.6', color: '#666', marginBottom: '12px' }}>A glove that warms when you breathe into your hands.</p>
                    <p style={{ fontSize: 'var(--type-l3)', lineHeight: '1.6', color: '#666', marginBottom: '12px' }}>Quiet. Natural. Dignity-preserving.</p>
                    <p style={{ fontSize: 'var(--type-l3)', lineHeight: '1.6', color: '#666', margin: 0, fontWeight: 500 }}>A gesture you already make—amplified.</p>
                </motion.div>

                  {/* Impact */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={styles.cardSurface}
                  >
                    <Zap color={styles.accentColor} className="mb-4" />
                    <h3 style={{ fontSize: 'var(--type-l4)', fontWeight: 500, color: '#1A1A1A', marginBottom: '12px' }}>Impact</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-[15px] text-gray-600"><ArrowRight size={14} /> Warmth becomes agency.</li>
                      <li className="flex items-center gap-2 text-[15px] text-gray-600"><ArrowRight size={14} /> Data becomes visibility.</li>
                      <li className="flex items-center gap-2 text-[15px] text-gray-600"><ArrowRight size={14} /> Visibility becomes solidarity.</li>
                    </ul>
                </motion.div>
                </div>
              </div>

              {/* DISCOVER — The Invisible Bias */}
              <div id="discover" style={{ marginBottom: styles.sectionPaddingBottom }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{ 
                    backgroundColor: '#1A1A1A', 
                    borderRadius: '24px', 
                    padding: '60px 40px',
                    color: '#FFFFFF'
                      }}
                    >
                  <h2 style={{ ...styles.headingH2, color: '#FFFFFF', marginBottom: '40px' }}>Discover — The Invisible Bias</h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <p style={{ fontSize: 'var(--type-l4)', fontWeight: 500, color: '#E0E0E0', lineHeight: '1.6', marginBottom: '24px' }}>
                        “Universal comfort” is often just “default male comfort.”
                      </p>
                      <p style={{ fontSize: 'var(--type-l3)', color: '#B0B0B0', marginBottom: '16px' }}>
                        Women adapt daily:
                      </p>
                      <ul className="space-y-3 mb-8">
                        {['Cardigans', 'Desk blankets', 'Apologizing for asking', 'Pretending it’s fine'].map((item, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3 text-neutral-300"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#B3B2FF]" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                      <p style={{ fontSize: 'var(--type-l4)', fontWeight: 500, color: '#FFFFFF' }}>
                        Thermal discomfort is accumulated evidence that the environment wasn’t designed for you.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                       {[
                         { icon: Layers, label: 'Layering Up' },
                         { icon: Thermometer, label: 'Space Heaters' },
                         { icon: MessageCircle, label: 'Silent Endurance' }
                       ].map((card, i) => (
                         <motion.div
                           key={i}
                           whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      style={{
                             backgroundColor: 'rgba(255,255,255,0.05)',
                             padding: '20px',
                             borderRadius: '12px',
                             display: 'flex',
                             alignItems: 'center',
                             gap: '16px'
                      }}
                    >
                           <card.icon color="#B3B2FF" size={20} />
                           <span className="text-white font-medium">{card.label}</span>
                         </motion.div>
                       ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* HMW */}
              <div id="hmw" style={{ marginBottom: styles.sectionPaddingBottom }}>
                 <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                   className="text-center max-w-[700px] mx-auto mb-16"
                 >
                   <h3 style={{ fontSize: 'var(--type-l2)', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', marginBottom: '24px' }}>
                     How Might We
                   </h3>
                   <p style={{ fontSize: 'var(--type-l5)', fontWeight: 500, lineHeight: '1.4', color: '#1A1A1A' }}>
                     How might we give warmth back its dignity—and turn a quiet gesture into shared recognition?
                  </p>
                </motion.div>

                 {/* Principles */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {[
                     { icon: Heart, title: 'Unseen, not hidden', text: 'Comfort without performance.' },
                     { icon: Users, title: 'The body as interface', text: 'Use gestures people already trust.' },
                     { icon: Activity, title: 'Make the invisible legible', text: 'Patterns, not pressure.' }
                   ].map((item, i) => (
                <motion.div
                       key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: i * 0.15 }}
                       whileHover={{ y: -4 }}
                       style={{ ...styles.cardSurface, textAlign: 'center' }}
                     >
                       <div className="mx-auto w-12 h-12 flex items-center justify-center bg-[#F5F5F5] rounded-full mb-4">
                         <item.icon size={20} color="#1A1A1A" />
                       </div>
                       <h4 style={{ fontWeight: 600, fontSize: 'var(--type-l4)', marginBottom: '8px' }}>{item.title}</h4>
                       <p style={styles.captionText}>{item.text}</p>
                </motion.div>
                   ))}
                 </div>
              </div>

              {/* EXPERIENCE */}
              <div id="experience" style={{ marginBottom: styles.sectionPaddingBottom }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  style={styles.headingH2}
                >
                  Experience — A Day with Huuuuu!
                </motion.h2>

                {/* Timeline */}
                <div className="relative py-12">
                  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#F0F0F0] -z-10 hidden md:block" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { time: 'Commute', title: 'Cold platforms, warm breath.', desc: 'Small relief that doesn’t demand attention.' },
                      { time: 'Office', title: 'Over-cooled rooms.', desc: 'The glove gives control without apology.' },
                      { time: 'Evening', title: 'Temperature drops.', desc: 'Warmth that follows you, not a space that excludes you.' }
                    ].map((step, i) => (
                <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        style={styles.floatingCard}
                >
                        <div className="text-xs font-bold tracking-wider text-[#B3B2FF] uppercase mb-2">{step.time}</div>
                        <h4 style={{ fontSize: 'var(--type-l4)', fontWeight: 600, marginBottom: '8px' }}>{step.title}</h4>
                        <p style={styles.bodyText}>{step.desc}</p>
                </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  style={{ ...styles.imageCard, marginTop: '40px', borderLeft: '4px solid #B3B2FF' }}
                >
                  <p style={{ fontSize: 'var(--type-l4)', fontStyle: 'italic', color: '#4A4A4A', textAlign: 'center', margin: '20px 0' }}>
                    “I don’t have to apologize for being cold anymore.”
                  </p>
                </motion.div>
              </div>

              {/* PROTOTYPING */}
              <div id="ideation" style={{ marginBottom: styles.sectionPaddingBottom }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                  <h2 style={styles.headingH2}>Ideation & Prototyping</h2>
                  <p style={styles.bodyText}>From isolation → shared warmth</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div>
                      <p style={styles.bodyText}>Early sketches explored the emotional landscape of being cold: smallness, silence, endurance.</p>
                      <p style={styles.bodyText}>Later diagrams reframed warmth as something communal.</p>
                    </div>
                  </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                    className="overflow-x-auto pb-4 mb-12"
                  >
                    <div style={{ minWidth: '800px', ...styles.imageCard }}>
                      <ImageWithFallback src={sketchImage} alt="Sketches" style={{ width: '100%', borderRadius: '8px' }} />
                    </div>
                </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                    <div>
                      <h3 style={styles.headingH3}>Prototyping the gesture</h3>
                      <p style={styles.bodyText}>We mapped breath humidity, response time, heating curves.</p>
                      <p style={styles.bodyText}>The goal: make warmth feel immediate and soft—not mechanical, not delayed, not clinical.</p>
                    </div>
                    <div className="grid gap-6">
                      <motion.div whileHover={{ y: -4 }} style={styles.floatingCard}>
                        <ImageWithFallback src={prototypeImage} alt="Prototype" style={{ borderRadius: '8px' }} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* SYSTEM */}
              <div id="system" style={{ marginBottom: styles.sectionPaddingBottom }}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 style={styles.headingH2}>System Integration</h2>
                  <h3 style={{ ...styles.headingH3, fontSize: 'var(--type-l4)', marginBottom: '40px' }}>Breath → Heat → Data → Solidarity</h3>

                  <motion.div style={{ y: systemParallax }} className="mb-12">
                    <div style={styles.imageCard}>
                      <ImageWithFallback src={systemDiagramImage} alt="System Diagram" style={{ width: '100%', borderRadius: '8px' }} />
                      
                      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                        {[
                          "Exhale triggers humidity spike",
                          "Sensor → Arduino",
                          "Heating modules activate instantly",
                          "Bluetooth logs a “comfort event”",
                          "App visualizes patterns",
                          "Shared data reveals collective bias"
                        ].map((step, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#B3B2FF]" />
                            {step}
                          </div>
                        ))}
                    </div>
                    </div>
                  </motion.div>

                  {/* App Showcase - iPhone with Interactive Backgrounds */}
                  <div className="mb-20" style={{ marginTop: '60px' }}>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '12px', 
                        marginBottom: '40px' 
                      }}
                    >
                      <div style={{
                        width: '4px',
                        height: '28px',
                        background: 'linear-gradient(180deg, #B3B2FF 0%, #8B7FFF 100%)',
                        borderRadius: '2px',
                        boxShadow: '0 2px 8px rgba(179, 178, 255, 0.3)'
                      }}></div>
                      <h3 style={{ ...styles.headingH3, marginBottom: 0, fontSize: 'var(--type-l5)' }}>App Showcase</h3>
                    </motion.div>

                    {/* iPhone Mockup Showcase */}
                    {(() => {
                      const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
                      
                      const backgroundScreens = [
                        { src: screen497, alt: 'Map View', position: { top: '10%', left: '5%' }, delay: 0.2 },
                        { src: screen499, alt: 'User Profile', position: { top: '15%', right: '8%' }, delay: 0.4 },
                        { src: screen498, alt: 'Temperature Data', position: { bottom: '15%', left: '10%' }, delay: 0.6 }
                      ];

                      return (
                        <>
                          {/* Main Showcase Container */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                              position: 'relative',
                              minHeight: '700px',
                              background: 'radial-gradient(circle at 50% 30%, #F8F7FF 0%, #FAFAFF 50%, #FFFFFF 100%)',
                              borderRadius: '32px',
                              padding: '80px 40px',
                              overflow: 'hidden',
                              boxShadow: '0 20px 60px rgba(179, 178, 255, 0.15), inset 0 1px 0 rgba(255,255,255,0.8)',
                              border: '1px solid rgba(179, 178, 255, 0.1)'
                            }}
                          >
                            {/* Floating Background Screens */}
                            {backgroundScreens.map((screen, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: screen.delay }}
                                whileHover={{ scale: 1.05, zIndex: 10 }}
                                onClick={() => setSelectedImage(screen.src)}
                                tabIndex={0}
                                role="button"
                                aria-label={`View ${screen.alt} in full screen`}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setSelectedImage(screen.src);
                                  }
                                }}
                                style={{
                                  position: 'absolute',
                                  ...screen.position,
                                  width: '220px',
                                  cursor: 'pointer',
                                  borderRadius: '16px',
                                  overflow: 'hidden',
                                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                                  transition: 'all 0.3s ease',
                                  border: '2px solid rgba(255,255,255,0.8)',
                                  backdropFilter: 'blur(8px)'
                                }}
                              >
                                <img
                                  src={screen.src}
                                  alt={screen.alt}
                                  style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    opacity: 0.8,
                                    transition: 'opacity 0.3s ease'
                                  }}
                                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                                />
                              </motion.div>
                            ))}

                            {/* Main iPhone Mockup */}
                            <motion.div
                              initial={{ opacity: 0, y: 40, rotateY: -15 }}
                              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                              style={{
                                position: 'relative',
                                zIndex: 5,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                perspective: '1000px'
                              }}
                            >
                              <motion.div
                                whileHover={{ 
                                  scale: 1.02,
                                  rotateY: 5,
                                  rotateX: -2
                                }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                style={{
                                  transformStyle: 'preserve-3d',
                                  filter: 'drop-shadow(0 30px 60px rgba(139, 127, 255, 0.3))'
                                }}
                              >
                                <img
                                  src={iPhoneMockup}
                                  alt="Huuuuu! App on iPhone 15 Pro"
                                  style={{
                                    width: '100%',
                                    maxWidth: '400px',
                                    height: 'auto',
                                    display: 'block'
                                  }}
                                />
                              </motion.div>
                            </motion.div>

                            {/* Ambient Light Effect */}
                            <div
                              style={{
                                position: 'absolute',
                                top: '20%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '500px',
                                height: '500px',
                                background: 'radial-gradient(circle, rgba(179, 178, 255, 0.15) 0%, transparent 70%)',
                                pointerEvents: 'none',
                                filter: 'blur(60px)'
                              }}
                            />
                          </motion.div>

                          {/* Image Lightbox Modal */}
                          <AnimatePresence>
                            {selectedImage && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedImage(null)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Escape') {
                                    setSelectedImage(null);
                                  }
                                }}
                                tabIndex={0}
                                role="dialog"
                                aria-label="Image preview"
                                aria-modal="true"
                                style={{
                                  position: 'fixed',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  backgroundColor: 'rgba(0,0,0,0.9)',
                                  zIndex: 1000,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  padding: '40px',
                                  cursor: 'zoom-out'
                                }}
                              >
                                <motion.img
                                  src={selectedImage}
                                  alt="Full screen preview"
                                  initial={{ scale: 0.8 }}
                                  animate={{ scale: 1 }}
                                  exit={{ scale: 0.8 }}
                                  transition={{ duration: 0.3 }}
                                  style={{
                                    maxWidth: '90%',
                                    maxHeight: '90%',
                                    borderRadius: '12px',
                                    boxShadow: '0 20px 80px rgba(0,0,0,0.5)'
                                  }}
                                  onClick={(e) => e.stopPropagation()}
                                />
                                <button
                                  onClick={() => setSelectedImage(null)}
                                  aria-label="Close preview"
                                  style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    background: 'rgba(255,255,255,0.9)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    fontSize: 'var(--type-l4)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                                  }}
                                >
                                  ×
                                </button>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Feature Tags */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            style={{
                              marginTop: '32px',
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '12px',
                              justifyContent: 'center'
                            }}
                          >
                            {['Real-time Sensing', 'Social Connection', 'Environment Mapping'].map((feature, idx) => (
                              <div
                                key={idx}
                                style={{
                                  padding: '10px 20px',
                                  background: 'linear-gradient(135deg, rgba(179, 178, 255, 0.1) 0%, rgba(139, 127, 255, 0.05) 100%)',
                                  borderRadius: '20px',
                                  border: '1px solid rgba(179, 178, 255, 0.2)',
                                  fontSize: 'var(--type-l2)',
                                  color: '#666',
                                  fontWeight: 500
                                }}
                              >
                                {feature}
                    </div>
                            ))}
                          </motion.div>
                        </>
                      );
                    })()}
                  </div>

                  {/* Solidarity Ladder */}
                  <div>
                    <h3 style={styles.headingH3}>Solidarity Ladder</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                      {['Individual', 'Local', 'Community', 'Advocacy'].map((step, i) => (
                <motion.div
                          key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.15 }}
                          style={{ ...styles.cardSurface, textAlign: 'center', padding: '20px' }}
                        >
                          <div className="text-2xl font-bold text-[#B3B2FF] mb-2">0{i + 1}</div>
                          <div className="font-semibold">{step}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* REFLECTION */}
              <div id="reflection" style={{ marginBottom: '160px' }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                  <h2 style={styles.headingH2}>Reflection</h2>

                  <div style={{ ...styles.cardSurface, padding: '32px', marginBottom: '32px' }}>
                    <h3 style={styles.headingH3}>Growth & Learning</h3>
                    <p style={styles.bodyText}>
                      This project taught me that interaction design isn't just about interfaces — it's about reimagining how technology can reshape social norms. By designing a system that makes thermal discomfort discussable, I learned how to translate an invisible social issue into a tangible, shared experience.
                    </p>
                    <img
                      src={skillGrowthImage}
                      alt="Skill growth visualization"
                      style={{ width: '100%', marginTop: '24px', borderRadius: '12px' }}
                    />
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
