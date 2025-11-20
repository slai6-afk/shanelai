import { motion } from 'motion/react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { DecisionPill } from '../../components/case-study/DecisionPill';
import { TLDRCard } from '../../components/case-study/TLDRCard';
import { InsightCard } from '../../components/case-study/InsightCard';
import { MethodBlock } from '../../components/case-study/MethodBlock';
import { FigureWithCaption } from '../../components/case-study/FigureWithCaption';
import { NextSteps } from '../../components/case-study/NextSteps';
import { StickyTOC } from '../../components/case-study/StickyTOC';
import { SkillChart } from '../../components/case-study/SkillChart';
import { AccessibilityDiagram } from '../../components/case-study/AccessibilityDiagram';
import { AlertCircle, Target, TrendingUp, Palette, Gamepad2, Users } from 'lucide-react';
import imgUserReportIssues from 'figma:asset/a8276e897fcf9fa38bd1bea21da5d7a60fda47d0.png';
import imgTwoModes from 'figma:asset/f2dd88065c1de01d1bbadd5728203917f47d848a.png';
import imgInternalUserTest from 'figma:asset/991ae09aad95b7da8fe51320eb46bde4e45ff4da.png';
import imgCalibrationDesign from 'figma:asset/e08ac9d96f4ab225e350ab31a03a92663887f365.png';
import imgComfortReach from 'figma:asset/a672b43739c45ea0135eb6167fea43b8a0084267.png';
import imgMidStretch from 'figma:asset/1c8f78cebe8e96a24b2fd05589454b12672f5299.png';
import imgMaxStretch from 'figma:asset/52fa7b0eec6a86ab15ae54e14ea0ae2fb3e415c1.png';
import imgPersonalCalibrationHero from 'figma:asset/89118d14ba53305ac06c41d50a99f512aef426bd.png';
import imgWhatsNewUpdates from 'figma:asset/a387fbe921a65dbef16af07dc1bdb09361da6a31.png';
import imgCalibrationSettings from 'figma:asset/a62b9f9ef7257c612bb8133a2cabb925087fad8f.png';
import imgCalibrationDemo from 'figma:asset/597981600c26243de56b615582f112500328f872.png';
import Frame3465176 from '../../imports/Frame3465176-57-479';
import imgExperiments from 'figma:asset/c427a35dab302ee2bcc37d79da015483ff4a9d32.png';
import imgProductOverview from 'figma:asset/bebbc88443fdebed4e56ae9980488dadc3739961.png';
import imgTargetInteraction from 'figma:asset/e90cc5d1053e7b5bd2df1638fbb42ebdcffaed63.png';
import imgPOVFunfitland from 'figma:asset/e97e7566dbb21b415eacbe0aec448a177ae1a78e.png';
import imgDesignProcess from 'figma:asset/7889a6fa0f2d5f342230a3de8bdf0bdbd4446c9f.png';
import imgUserFeedback from 'figma:asset/bc8f2e00e443eba4f1f54b820dc44fc838b9f23e.png';

export function FunFitLandCaseStudy() {
  const tocItems = [
    { id: 'tldr', label: 'Overview' },
    { id: 'context', label: 'Context' },
    { id: 'problem', label: 'The Problem' },
    { id: 'research', label: 'Research & Discovery' },
    { id: 'insights', label: 'Key Insights' },
    { id: 'solution', label: 'The Solution' },
    { id: 'impact', label: 'Impact' },
    { id: 'reflection', label: 'Reflection' },
    { id: 'credits', label: 'Credits' }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navigation />

      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{
              color: '#000000',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 400,
              lineHeight: '1.2',
              marginBottom: '16px'
            }}>
              FunFitLand (UFit)
            </h1>

            <p style={{
              color: '#666666',
              fontSize: 'clamp(16px, 2vw, 20px)',
              fontWeight: 400,
              lineHeight: '1.6',
              marginBottom: '32px',
              maxWidth: '800px'
            }}>
              When 40 users said "I can't reach that target," I learned that listening is just as important as designing.
            </p>

            <div style={{ marginBottom: '32px' }}>
              <a 
                href="https://www.funfitland.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#ED964F',
                  fontSize: '16px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Visit FunFitLand.com →
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              <span style={{
                padding: '8px 16px',
                backgroundColor: '#FFA789',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                borderRadius: '8px'
              }}>
                Product Design
              </span>
              <span style={{
                padding: '8px 16px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                border: '1px solid rgba(0, 0, 0, 0.2)',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-xs)'
              }}>
                VR · Accessibility · User Research
              </span>
              <span style={{
                padding: '8px 16px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                border: '1px solid rgba(0, 0, 0, 0.2)',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-xs)'
              }}>
                12 Weeks · Startup Project
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <DecisionPill text="Personalized calibration for all body types" index={0} />
              <DecisionPill text="Evidence-based problem definition" index={1} />
              <DecisionPill text="Accessibility as a design principle" index={2} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Preview Section */}
      <section className="pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 style={{
              color: '#ED964F',
              fontSize: 'clamp(20px, 3vw, 24px)',
              fontWeight: 600,
              marginBottom: '32px',
              textAlign: 'center'
            }}>
              The Solution: Personalized Calibration System
            </h2>
            
            <div style={{
              backgroundColor: '#1a1f2e',
              padding: 'clamp(24px, 5vw, 48px) clamp(20px, 4vw, 40px)',
              marginBottom: '24px',
              borderRadius: '14px',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{ 
                maxWidth: '800px', 
                margin: '0 auto',
                position: 'relative',
                minHeight: '300px'
              }}>
                <Frame3465176 />
              </div>
            </div>
            
            <p style={{
              color: '#666666',
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              lineHeight: '1.8',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              A personalized system that measures each user's comfortable reach and automatically adjusts target placement, making VR fitness accessible for users of all heights, ages, and mobility levels.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
            <div className="hidden lg:block">
              <StickyTOC items={tocItems} />
            </div>

            <div className="max-w-[900px] w-full">
              {/* Overview */}
              <div id="tldr" style={{ marginBottom: '80px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#000000', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, marginBottom: '32px' }}
                >
                  Overview
                </motion.h2>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: '20px' 
                }}>
                  <TLDRCard
                    icon={AlertCircle}
                    title="Challenge"
                    content="40 users reported they couldn't reach targets in our VR fitness game. My first instinct? Assume it was their devices. That assumption nearly cost us our most vulnerable users."
                    index={0}
                  />
                  <TLDRCard
                    icon={Target}
                    title="Approach"
                    content="I moved beyond assumptions and directly engaged with users by interviewing those who reported problems, running controlled experiments, and using data to validate what users told me."
                    index={1}
                  />
                  <TLDRCard
                    icon={TrendingUp}
                    title="Impact"
                    content="Designed a personalized calibration system that adapts targets to each user's physical capabilities. This transformed accessibility from an afterthought into a core product feature."
                    index={2}
                  />
                </div>
              </div>

              {/* Context Section */}
              <div id="context" style={{ marginBottom: '80px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#000000', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, marginBottom: '24px' }}
                >
                  Context: What is FunFitLand?
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#666666', fontSize: '16px', fontWeight: 400, lineHeight: '1.8', marginBottom: '40px' }}
                >
                  <p style={{ marginBottom: '20px' }}>
                    FunFitLand is a VR fitness platform for Meta Quest that combines rhythm-based exercise with immersive environments. The DanceFit mode challenges users to hit floating targets in sync with music, an experience designed to make fitness feel like play.
                  </p>
                  <p>
                    As part of the product team at a 30-person startup, I wore multiple hats: product manager, designer, and sometimes data analyst. What started as a routine bug investigation became a transformative lesson in accessibility and inclusive design.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ marginBottom: '40px' }}
                >
                  <h3 style={{ color: '#ED964F', fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>
                    How It Works
                  </h3>
                  <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                    Users see targets floating in a 39-inch (100cm) radius around them. To score points, they must reach out and hit targets as they appear, combining cardio with coordination.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ 
                    backgroundColor: '#1a1f2e',
                    padding: 'clamp(24px, 5vw, 48px) clamp(20px, 4vw, 40px)',
                    marginBottom: '40px',
                    borderRadius: '14px',
                    boxShadow: 'var(--shadow-md)',
                    maxWidth: '100%'
                  }}
                >
                  <img 
                    src={imgPOVFunfitland} 
                    alt="First-person view of user reaching for floating targets in VR environment"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      borderRadius: '12px'
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                    gap: 'clamp(24px, 4vw, 40px)',
                    alignItems: 'center',
                    marginBottom: '40px'
                  }}
                >
                  <div style={{ color: '#666666', fontSize: '16px', fontWeight: 400, lineHeight: '1.8' }}>
                    <h3 style={{ color: '#ED964F', fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>
                      Multi-Modal Feedback
                    </h3>
                    <p>
                      Targets use both sound and visuals to guide players. Since humans process audio faster than visuals, sound cues have a larger trigger radius (79 inches/200cm vs 28 inches/70cm), creating smoother, more intuitive interactions.
                    </p>
                  </div>

                  <div style={{ 
                    backgroundColor: '#1a1f2e',
                    padding: 'clamp(20px, 4vw, 32px)',
                    borderRadius: '14px',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <img 
                      src={imgTargetInteraction} 
                      alt="Diagram showing audio radius (200cm) vs visual radius (70cm)"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        borderRadius: '12px'
                      }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ 
                    backgroundColor: '#1a1f2e',
                    padding: 'clamp(24px, 5vw, 48px) clamp(20px, 4vw, 40px)',
                    marginBottom: '40px',
                    borderRadius: '14px',
                    boxShadow: 'var(--shadow-md)',
                    maxWidth: '100%'
                  }}
                >
                  <img 
                    src={imgProductOverview} 
                    alt="Circular target layout showing 100cm radius and shoulder span considerations"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      borderRadius: '12px'
                    }}
                  />
                </motion.div>
              </div>

              {/* Problem Section */}
              <div id="problem" style={{ marginBottom: '80px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#000000', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, marginBottom: '24px' }}
                >
                  The Problem
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}
                >
                  <p style={{ marginBottom: '20px' }}>
                    Over three months, we received reports from <strong style={{ color: '#000000' }}>40 users</strong> saying they couldn't reach targets. My initial assumption? Equipment issues, like maybe their device calibration was off, or they were using broken controllers.
                  </p>
                  <p>
                    <strong style={{ color: '#000000' }}>I was wrong.</strong> It wasn't about technology. It was about people, specifically people whose bodies didn't match the "average user" we designed for.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ 
                    backgroundColor: '#FFF4F0',
                    padding: 'clamp(24px, 4vw, 32px)',
                    borderRadius: '20px',
                    marginBottom: '40px',
                    border: '1px solid rgba(237, 150, 79, 0.2)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <h3 style={{ color: '#ED964F', fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>
                    The Real Issue
                  </h3>
                  <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8' }}>
                    Our game placed targets in a fixed 39-inch (100cm) radius, comfortable for an average-height adult male, but unreachable for:<br />
                    • Users under 5'2" (157cm) or over 6'2" (188cm)<br />
                    • Users with limited shoulder mobility<br />
                    • Older adults and children<br />
                    • Users with physical disabilities
                  </p>
                </motion.div>
              </div>

              {/* Research & Discovery Section */}
              <div id="research" style={{ marginBottom: '80px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#000000', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, marginBottom: '24px' }}
                >
                  Research & Discovery
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#666666', fontSize: '16px', fontWeight: 400, lineHeight: '1.8', marginBottom: '32px' }}
                >
                  <p>
                    I needed to move beyond assumptions. Instead of defending our design, I went directly to the users who reported problems and listened.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ 
                    backgroundColor: '#1a1f2e',
                    padding: 'clamp(24px, 5vw, 48px) clamp(20px, 4vw, 40px)',
                    marginBottom: '40px',
                    borderRadius: '14px',
                    boxShadow: 'var(--shadow-md)',
                    maxWidth: '100%'
                  }}
                >
                  <img 
                    src={imgDesignProcess} 
                    alt="Research process: user reports → interviews → data analysis → problem definition → solution"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      borderRadius: '12px'
                    }}
                  />
                </motion.div>

                <MethodBlock
                  icon={Users}
                  title="User Interviews"
                  description="I reached out to users who reported difficulties and conducted remote interviews to understand their actual experiences."
                  details={[
                    "Connected with users across different age groups and body types",
                    "Asked open-ended questions about their physical experience",
                    "Validated that the problem wasn't equipment but design"
                  ]}
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ marginTop: '40px' }}
                >
                  <h3 style={{
                    color: '#ED964F',
                    fontSize: '20px',
                    fontWeight: 600,
                    marginBottom: '16px'
                  }}>
                    Testing Hypotheses
                  </h3>
                  <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
                    Rather than jump to solutions, I designed three experiments to systematically test why users struggled.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ 
                    backgroundColor: '#1a1f2e',
                    padding: 'clamp(24px, 5vw, 48px) clamp(20px, 4vw, 40px)',
                    marginBottom: '40px',
                    borderRadius: '14px',
                    boxShadow: 'var(--shadow-md)'
                  }}
                >
                  <img 
                    src={imgExperiments} 
                    alt="Three experiments: rhythm perception, reach capability, and mobility testing"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      borderRadius: '12px'
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ 
                    color: '#666666', 
                    fontSize: '15px', 
                    fontWeight: 400, 
                    lineHeight: '1.8',
                    backgroundColor: '#FFFFFF',
                    padding: 'clamp(24px, 4vw, 32px)',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '20px',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <p style={{ marginBottom: '20px' }}>
                    <strong style={{ color: '#ED964F' }}>Hypothesis 1: Rhythm Perception</strong><br />
                    Maybe players perceived timing differently? Testing revealed this wasn't a significant factor; users could identify when targets appeared, they just couldn't reach them.
                  </p>

                  <p style={{ marginBottom: '20px' }}>
                    <strong style={{ color: '#ED964F' }}>Hypothesis 2: Physical Reach Limitations</strong><br />
                    This was the key insight. Users had different maximum reach distances based on height, arm length, and mobility. Our fixed 39-inch (100cm) radius simply wasn't universal.
                  </p>

                  <p>
                    <strong style={{ color: '#ED964F' }}>Hypothesis 3: Movement Speed & Mobility</strong><br />
                    Some users moved more slowly due to age or physical conditions. Testing showed this compounded the reach issue: if a target was already at the edge of reach, slower movement made it impossible.
                  </p>
                </motion.div>
              </div>

              {/* Key Insights Section */}
              <div id="insights" style={{ marginBottom: '80px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#000000', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, marginBottom: '32px' }}
                >
                  Key Insights
                </motion.h2>

                <div style={{ 
                  display: 'grid', 
                  gap: '24px' 
                }}>
                  <InsightCard
                    number="01"
                    title="The 'Average User' Doesn't Exist"
                    content="Designing for a hypothetical average user meant excluding real users. Shoulder reach varies by up to 12 inches (30cm) between adults, a massive difference in VR."
                    index={0}
                  />
                  <InsightCard
                    number="02"
                    title="Accessibility Isn't Edge Cases"
                    content="40 users isn't a small number. This wasn't about rare outliers; it was about a diverse user base we weren't serving."
                    index={1}
                  />
                  <InsightCard
                    number="03"
                    title="Physical Design Requires Physical Testing"
                    content="You can't simulate body diversity from a desk. Real testing with real users revealed problems we'd never have caught otherwise."
                    index={2}
                  />
                </div>
              </div>

              {/* Solution Section */}
              <div id="solution" style={{ marginBottom: '80px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#000000', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, marginBottom: '24px' }}
                >
                  The Solution: Personalized Calibration
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8', marginBottom: '48px' }}
                >
                  <p style={{ marginBottom: '20px' }}>
                    Instead of assuming one-size-fits-all, I designed a personalized calibration system that adapts to each user's unique reach and comfort level.
                  </p>
                  <p>
                    The system measures three reach zones: comfortable reach, mid-stretch, and maximum stretch. Users can calibrate their experience based on their current energy, mobility, and fitness goals.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ marginBottom: '48px' }}
                >
                  <h3 style={{
                    color: '#ED964F',
                    fontSize: '20px',
                    fontWeight: 600,
                    marginBottom: '24px'
                  }}>
                    Calibration Experience
                  </h3>

                  <div style={{
                    backgroundColor: '#1a1f2e',
                    padding: 'clamp(24px, 5vw, 48px) clamp(20px, 4vw, 40px)',
                    marginBottom: '32px',
                    borderRadius: '14px',
                    boxShadow: 'var(--shadow-md)'
                  }}>
                    <div style={{ 
                      maxWidth: '900px', 
                      margin: '0 auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'visible',
                      width: '100%'
                    }}>
                      <Frame3465176 />
                    </div>
                  </div>

                  <p style={{ color: '#666666', fontSize: '15px', lineHeight: '1.8', fontStyle: 'italic' }}>
                    New users are guided through a brief calibration flow where they reach in different directions to establish their personal comfort zones.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ marginBottom: '48px' }}
                >
                  <h3 style={{
                    color: '#ED964F',
                    fontSize: '20px',
                    fontWeight: 600,
                    marginBottom: '24px'
                  }}>
                    Adjustable Difficulty System
                  </h3>

                  <div style={{
                    backgroundColor: '#1a1f2e',
                    padding: 'clamp(24px, 4vw, 40px)',
                    borderRadius: '14px',
                    boxShadow: 'var(--shadow-md)'
                  }}>
                    <div style={{ marginBottom: '32px' }}>
                      <p style={{
                        color: '#ED964F',
                        fontSize: '14px',
                        fontWeight: 600,
                        marginBottom: '12px'
                      }}>
                        What's New Updates:
                      </p>
                      <img 
                        src={imgWhatsNewUpdates} 
                        alt="Feature announcement for calibration system"
                        style={{ width: '100%', height: 'auto', marginBottom: '16px', borderRadius: '12px' }}
                      />
                      <p style={{
                        color: '#CCCCCC',
                        fontSize: '14px',
                        lineHeight: '1.6'
                      }}>
                        Introducing personalized reach calibration, adapting the game to your body, not forcing your body to adapt to the game.
                      </p>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                      <p style={{
                        color: '#ED964F',
                        fontSize: '14px',
                        fontWeight: 600,
                        marginBottom: '12px'
                      }}>
                        Calibration Settings:
                      </p>
                      <img 
                        src={imgCalibrationSettings} 
                        alt="User interface for calibration settings"
                        style={{ width: '100%', height: 'auto', marginBottom: '16px', borderRadius: '12px' }}
                      />
                    </div>

                    <div>
                      <p style={{
                        color: '#ED964F',
                        fontSize: '14px',
                        fontWeight: 600,
                        marginBottom: '12px'
                      }}>
                        Difficulty Adjustment:
                      </p>
                      <img 
                        src={imgCalibrationDemo} 
                        alt="Visual demonstration of Easy, Medium, and Hard difficulty ranges"
                        style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                      />
                      <p style={{
                        color: '#CCCCCC',
                        fontSize: '13px',
                        lineHeight: '1.6',
                        marginTop: '12px',
                        fontStyle: 'italic'
                      }}>
                        Easy mode keeps targets within comfortable reach. Medium adds gentle stretching. Hard pushes to maximum range for intense workouts.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h3 style={{
                    color: '#000000',
                    fontSize: '20px',
                    fontWeight: 600,
                    marginBottom: '16px'
                  }}>
                    How It Works
                  </h3>
                  <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                    The calibration creates three personalized zones based on the user's actual reach:
                  </p>

                  <div style={{ display: 'grid', gap: '16px' }}>
                    <div style={{ 
                      backgroundColor: '#FFFFFF',
                      padding: '24px',
                      borderRadius: '20px',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      <h4 style={{ color: '#ED964F', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>
                        Zone 1: Comfortable Reach
                      </h4>
                      <p style={{ color: '#666666', fontSize: '15px', lineHeight: '1.6' }}>
                        Targets placed where users can reach without strain. Ideal for warm-ups and accessibility.
                      </p>
                    </div>

                    <div style={{ 
                      backgroundColor: '#FFFFFF',
                      padding: '24px',
                      borderRadius: '20px',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      <h4 style={{ color: '#ED964F', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>
                        Zone 2: Mid-Stretch
                      </h4>
                      <p style={{ color: '#666666', fontSize: '15px', lineHeight: '1.6' }}>
                        Requires gentle stretching. Balances challenge and comfort for most gameplay.
                      </p>
                    </div>

                    <div style={{ 
                      backgroundColor: '#FFFFFF',
                      padding: '24px',
                      borderRadius: '20px',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      <h4 style={{ color: '#ED964F', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>
                        Zone 3: Maximum Stretch
                      </h4>
                      <p style={{ color: '#666666', fontSize: '15px', lineHeight: '1.6' }}>
                        Pushes to the user's physical limits. Used sparingly for intense workouts.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Impact Section */}
              <div id="impact" style={{ marginBottom: '80px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#000000', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, marginBottom: '24px' }}
                >
                  Impact
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ marginBottom: '40px' }}
                >
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                    gap: '28px',
                    marginBottom: '40px'
                  }}>
                    <div style={{
                      backgroundColor: '#FFFFFF',
                      padding: '40px 28px',
                      borderRadius: '20px',
                      textAlign: 'center',
                      border: '2px solid #ED964F',
                      boxShadow: '0 8px 24px rgba(237, 150, 79, 0.15)',
                      transition: 'transform 0.2s ease'
                    }}>
                      <div style={{ 
                        fontSize: 'clamp(48px, 6vw, 64px)', 
                        fontWeight: 700, 
                        color: '#ED964F', 
                        marginBottom: '12px',
                        lineHeight: '1'
                      }}>
                        85%
                      </div>
                      <div style={{ fontSize: '15px', color: '#666666', lineHeight: '1.5', fontWeight: 500 }}>
                        Reduction in "can't reach" complaints
                      </div>
                    </div>

                    <div style={{
                      backgroundColor: '#FFFFFF',
                      padding: '40px 28px',
                      borderRadius: '20px',
                      textAlign: 'center',
                      border: '2px solid #ED964F',
                      boxShadow: '0 8px 24px rgba(237, 150, 79, 0.15)',
                      transition: 'transform 0.2s ease'
                    }}>
                      <div style={{ 
                        fontSize: 'clamp(48px, 6vw, 64px)', 
                        fontWeight: 700, 
                        color: '#ED964F', 
                        marginBottom: '12px',
                        lineHeight: '1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}>
                        <span>4.2</span>
                        <span style={{ fontSize: '32px', color: '#999' }}>→</span>
                        <span>4.6</span>
                      </div>
                      <div style={{ fontSize: '15px', color: '#666666', lineHeight: '1.5', fontWeight: 500 }}>
                        Star rating improvement
                      </div>
                    </div>

                    <div style={{
                      backgroundColor: '#FFFFFF',
                      padding: '40px 28px',
                      borderRadius: '20px',
                      textAlign: 'center',
                      border: '2px solid #ED964F',
                      boxShadow: '0 8px 24px rgba(237, 150, 79, 0.15)',
                      transition: 'transform 0.2s ease'
                    }}>
                      <div style={{ 
                        fontSize: 'clamp(48px, 6vw, 64px)', 
                        fontWeight: 700, 
                        color: '#ED964F', 
                        marginBottom: '12px',
                        lineHeight: '1'
                      }}>
                        100%
                      </div>
                      <div style={{ fontSize: '15px', color: '#666666', lineHeight: '1.5', fontWeight: 500 }}>
                        Of new users complete calibration
                      </div>
                    </div>
                  </div>

                  <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8' }}>
                    The calibration system became a core feature, not an afterthought. It demonstrated that accessibility improvements benefit all users, not just those who initially reported problems.
                  </p>
                </motion.div>
              </div>

              {/* Reflection Section */}
              <div id="reflection" style={{ marginBottom: '80px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#000000', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, marginBottom: '24px' }}
                >
                  Reflection
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ marginBottom: '48px' }}
                >
                  <h3 style={{ color: '#000000', fontSize: '20px', fontWeight: 400, marginBottom: '20px' }}>
                    What I Learned
                  </h3>

                  <blockquote style={{ 
                    color: '#333333', 
                    fontSize: '18px', 
                    fontWeight: 400, 
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                    marginBottom: '32px',
                    paddingLeft: '24px',
                    borderLeft: '3px solid #000000'
                  }}>
                    "I've grown from designing interfaces to designing the systems that make those interfaces accessible to everyone."
                  </blockquote>

                  <SkillChart />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ marginBottom: '48px' }}
                >
                  <h3 style={{ color: '#000000', fontSize: '20px', fontWeight: 400, marginBottom: '16px' }}>
                    The Power of Listening
                  </h3>
                  <p style={{ color: '#666666', fontSize: '16px', fontWeight: 400, lineHeight: '1.8', marginBottom: '32px' }}>
                    This project taught me that inclusive design isn't about accommodating edge cases; it's about respecting the full diversity of human experience. When 40 users say something isn't working, the problem isn't with them.
                  </p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ 
                      backgroundColor: '#1a1f2e',
                      padding: 'clamp(24px, 5vw, 48px) clamp(20px, 4vw, 40px)',
                      borderRadius: '14px',
                      boxShadow: 'var(--shadow-md)',
                      maxWidth: '100%'
                    }}
                  >
                    <img 
                      src={imgUserFeedback} 
                      alt="User feedback from global community"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        borderRadius: '12px'
                      }}
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h3 style={{ color: '#000000', fontSize: '20px', fontWeight: 400, marginBottom: '16px' }}>
                    Looking Forward
                  </h3>
                  <NextSteps
                    steps={[
                      "Expand calibration to other game modes beyond DanceFit",
                      "Research additional accessibility needs (colorblind modes, audio alternatives)",
                      "Develop adaptive difficulty that learns from player performance over time"
                    ]}
                  />
                </motion.div>
              </div>

              {/* Credits Section */}
              <div id="credits" style={{ marginBottom: '40px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#000000', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, marginBottom: '24px' }}
                >
                  Credits
                </motion.h2>

                <div style={{ 
                  backgroundColor: '#FFFFFF',
                  padding: 'clamp(24px, 4vw, 32px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ color: '#000000', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>
                      My Role
                    </h3>
                    <p style={{ color: '#666666', fontSize: '15px', lineHeight: '1.6' }}>
                      Product Team Member (Product Manager, Designer, Data Analyst) - Led user research, problem definition, prototyping, and calibration system design
                    </p>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ color: '#000000', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>
                      Team
                    </h3>
                    <p style={{ color: '#666666', fontSize: '15px', lineHeight: '1.6' }}>
                      30-person startup team including product managers, engineers, and game designers
                    </p>
                  </div>

                  <div>
                    <h3 style={{ color: '#000000', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>
                      Timeline & Company
                    </h3>
                    <p style={{ color: '#666666', fontSize: '15px', lineHeight: '1.6', marginBottom: '8px' }}>
                      12 weeks (2023)
                    </p>
                    <a 
                      href="https://www.funfitland.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        color: '#ED964F',
                        fontSize: '15px',
                        fontWeight: 500,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      FunFitLand.com →
                    </a>
                  </div>
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
