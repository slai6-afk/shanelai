import { motion } from 'motion/react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { DecisionPill } from '../../components/case-study/DecisionPill';
import { TLDRCard } from '../../components/case-study/TLDRCard';
import { StickyTOC } from '../../components/case-study/StickyTOC';
import { HowMightWeCard } from '../../components/case-study/HowMightWeCard';
import { FigureWithCaption } from '../../components/case-study/FigureWithCaption';
import { AlertCircle, Lightbulb, Heart, Wind } from 'lucide-react';
const heroImage = 'https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2Febad1e3d1c1241e789cd0daeabbe07d6';
import contextImage from 'figma:asset/d4bf212ef865fe4182e7ced9ce71b8bf36c22642.png';
import journeyImage from 'figma:asset/cc6bc14b9d6434396b8eb07e9faa8762d280941f.png';
import sketchImage from 'figma:asset/d1e347e43af72a40623246a4fee6da3508a68413.png';
import prototypeImage from 'figma:asset/437f5d0dae91f7a06abb903106da28ae15c8919c.png';
import systemImage from 'figma:asset/937b2153b646a9476356596579ddfbe49fa07e32.png';
import systemDiagramImage from 'figma:asset/45ae3828a113ea2be8e5fad5040574f18c5648f7.png';
import appInterfaceImage from 'figma:asset/45f782885666d298edfc7a7b70d28e62bf047b5e.png';
import skillGrowthImage from 'figma:asset/76a71ff5aecddb8a8cf62925eb5d54b265006070.png';

export function HuuuuuCaseStudy() {
  const tocItems = [
    { id: 'tldr', label: 'TL;DR' },
    { id: 'discover', label: 'Discover' },
    { id: 'experience', label: 'Experience' },
    { id: 'ideation', label: 'Ideation & Prototyping' },
    { id: 'system', label: 'System Integration' },
    { id: 'reflection', label: 'Reflection & Impact' }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-8 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 style={{ color: '#000000', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, lineHeight: '1.2', marginBottom: '16px' }}>
              Huuuuu!
            </h1>

            <p style={{ color: '#666666', fontSize: '20px', fontWeight: 400, lineHeight: '1.6', marginBottom: '32px', maxWidth: '800px' }}>
              A breath-activated wearable that transforms personal warmth into collective empowerment
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              <span style={{ padding: '8px 16px', backgroundColor: '#B3B2FF', color: '#FFFFFF', fontSize: '12px', fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase' }}>Design</span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFFFFF', color: '#000000', fontSize: '12px', fontWeight: 500, letterSpacing: '0.02em', border: '1px solid rgba(0, 0, 0, 0.2)' }}>Arduino · Wearable · IoT</span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFFFFF', color: '#000000', fontSize: '12px', fontWeight: 500, letterSpacing: '0.02em', border: '1px solid rgba(0, 0, 0, 0.2)' }}>Interaction Designer</span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFFFFF', color: '#000000', fontSize: '12px', fontWeight: 500, letterSpacing: '0.02em', border: '1px solid rgba(0, 0, 0, 0.2)' }}>10 Days</span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFFFFF', color: '#000000', fontSize: '12px', fontWeight: 500, letterSpacing: '0.02em', border: '1px solid rgba(0, 0, 0, 0.2)' }}>Gender Equity · Social Design</span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <DecisionPill text="Breath detection via humidity sensor" index={0} />
              <DecisionPill text="Discreet warmth without stigma" index={1} />
              <DecisionPill text="Solidarity through shared experience" index={2} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
            <div className="hidden lg:block"><StickyTOC items={tocItems} /></div>

            <div className="max-w-[900px]">
              {/* Section 1 — TL;DR + Visual Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ marginBottom: '96px' }}
              >
                <div style={{ marginBottom: '56px' }}>
                  <h2 style={{
                    color: '#000000',
                    fontSize: 'clamp(26px, 3.5vw, 40px)',
                    fontWeight: 400,
                    lineHeight: '1.25',
                    marginBottom: '24px',
                    maxWidth: '900px'
                  }}>
                    How might warmth become empowerment?
                  </h2>
                  
                  <p style={{
                    color: '#666666',
                    fontSize: '19px',
                    fontWeight: 400,
                    lineHeight: '1.7',
                    maxWidth: '760px'
                  }}>
                    Exploring the intersection of comfort, empathy, and gender bias through a breath-sensing glove that brings warmth to cold office spaces & transforms a private experience into a shared statement.
                  </p>
                </div>

                {/* Hero Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    marginBottom: '56px'
                  }}
                >
                  <img
                    src={heroImage}
                    alt="Woman breathing warmth into her hands in a bright office environment"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* TL;DR Section */}
              <div id="tldr" style={{ marginBottom: '80px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '32px' }}
                >
                  TL;DR
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <TLDRCard
                    icon={AlertCircle}
                    title="Challenge"
                    content="Office HVAC systems are calibrated to male metabolic rates, creating environments where women feel 2–3°C colder. This isn't personal preference — it's engineered exclusion that forces women to adapt, self-censor, and endure discomfort silently."
                    index={0}
                  />
                  <TLDRCard
                    icon={Lightbulb}
                    title="Solution"
                    content="A breath-activated wearable glove that provides personalized warmth through discreet design. By blending engineering, empathy, and social design, it restores comfort while creating a quiet platform for solidarity."
                    index={1}
                  />
                </div>
              </div>

              {/* Section 2 — Discover: Context and Empathy */}
              <div id="discover" style={{ marginBottom: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '48px' }}
                >
                  Discover: The Invisible Barrier
                </motion.h2>

                {/* Context Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  style={{ marginBottom: '48px' }}
                >
                  <FigureWithCaption
                    src={contextImage}
                    alt="Woman wrapped in a heavy blanket while working at her office desk"
                    caption="A common sight: women adapting to environments designed for others"
                  />
                </motion.div>

                {/* Research Insight */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  style={{ marginBottom: '40px' }}
                >
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: '1.8', marginBottom: '24px' }}>
                    Standard office temperatures are based on the metabolic rate of a 40-year-old, 154-pound man. Women's metabolic rates average <strong>20–30% lower</strong>, meaning they experience the same environment as significantly colder.
                  </p>

                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: '1.8', marginBottom: '24px' }}>
                    This isn't just about thermal comfort. It's about whose bodies are centered in "universal" design. Women bring cardigans, blankets, and space heaters to work. They avoid speaking up to prevent being labeled "too sensitive." They internalize systemic bias as personal failure.
                  </p>

                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: '1.8' }}>
                    The quiet frustration of being cold at work every single day isn't trivial. It's a daily reminder that the environment wasn't designed with you in mind.
                  </p>
                </motion.div>

                {/* How Might We */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ marginBottom: '40px' }}
                >
                  <HowMightWeCard
                    question="How might we transform warmth — from a private coping mechanism — into a discreet, empowering expression of agency?"
                    accentColor="#B3B2FF"
                  />
                </motion.div>

                {/* Design Intentions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div style={{ display: 'grid', gap: '16px' }} className="md:grid-cols-2 grid-cols-1">
                    <div
                      style={{
                        backgroundColor: '#FFFFFF',
                        padding: '28px',
                        borderRadius: '8px',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)'
                      }}
                    >
                      <Heart size={28} color="#B3B2FF" strokeWidth={1.5} style={{ marginBottom: '16px' }} />
                      <h3 style={{ fontSize: '17px', fontWeight: 500, color: '#000000', marginBottom: '8px' }}>
                        Restore comfort without stigma
                      </h3>
                      <p style={{ fontSize: '15px', color: '#666666', lineHeight: '1.7' }}>
                        Create an aesthetically pleasing solution that allows women to regulate warmth discreetly, without drawing attention or judgment.
                      </p>
                    </div>

                    <div
                      style={{
                        backgroundColor: '#FFFFFF',
                        padding: '28px',
                        borderRadius: '8px',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)'
                      }}
                    >
                      <Wind size={28} color="#B3B2FF" strokeWidth={1.5} style={{ marginBottom: '16px' }} />
                      <h3 style={{ fontSize: '17px', fontWeight: 500, color: '#000000', marginBottom: '8px' }}>
                        Reframe warmth as agency
                      </h3>
                      <p style={{ fontSize: '15px', color: '#666666', lineHeight: '1.7' }}>
                        Use design to challenge gendered defaults and foster awareness about invisible inequities in everyday environments.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Section 3 — Experience Journey */}
              <div id="experience" style={{ marginBottom: '80px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '24px' }}
                >
                  Experience: Warmth Through the Day
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ fontSize: '16px', color: '#666666', lineHeight: '1.8', marginBottom: '40px', maxWidth: '700px' }}
                >
                  The glove travels with the user through different temperature zones — adapting to context, providing comfort, and creating continuity across their day.
                </motion.p>

                {/* Journey Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  style={{ marginBottom: '40px' }}
                >
                  <FigureWithCaption
                    src={journeyImage}
                    alt="Timeline showing temperature changes and user experiences across Commute, Work, and Relax scenarios"
                    caption="Temperature journey through different contexts: subway → office → outdoor relaxation"
                  />
                </motion.div>

                {/* User Insight */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '32px',
                    borderRadius: '8px',
                    borderLeft: '4px solid #B3B2FF',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    marginBottom: '32px'
                  }}
                >
                  <p style={{ fontSize: '19px', color: '#333333', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '12px' }}>
                    "I don't have to apologize for being cold anymore."
                  </p>
                  <p style={{ fontSize: '14px', color: '#999999' }}>
                    — Workshop participant
                  </p>
                </motion.div>

                {/* Experience Data */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{
                    backgroundColor: 'rgba(179, 178, 255, 0.05)',
                    padding: '28px 32px',
                    borderRadius: '8px',
                    border: '1px solid rgba(179, 178, 255, 0.2)'
                  }}
                >
                  <p style={{ fontSize: '16px', color: '#666666', lineHeight: '1.8' }}>
                    Users reported <strong>less discomfort across varying environments</strong> and noted feeling more confident in their ability to self-regulate without external judgment. The glove became more than a tool — it was a quiet assertion of control.
                  </p>
                </motion.div>
              </div>

              {/* Section 4 — Ideation & Prototyping */}
              <div id="ideation" style={{ marginBottom: '80px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '24px' }}
                >
                  Ideation & Prototyping: Making Warmth Tangible
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ fontSize: '16px', color: '#666666', lineHeight: '1.8', marginBottom: '56px', maxWidth: '700px' }}
                >
                  The design evolved through rapid sketching, material testing, and circuit prototyping — turning breath into a responsive medium.
                </motion.p>

                {/* Ideation: Sketches */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  style={{ marginBottom: '64px' }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#000000', marginBottom: '20px' }}>
                    Ideation: From Isolation to Community
                  </h3>
                  <p style={{ fontSize: '15px', color: '#666666', lineHeight: '1.8', marginBottom: '28px', maxWidth: '640px' }}>
                    Early sketches explored how individual discomfort could transform into collective visibility. The progression shows a shift from solitary coping to shared empowerment.
                  </p>
                  <FigureWithCaption
                    src={sketchImage}
                    alt="Sketch progression showing evolution from individual struggle to collective warmth"
                    caption="Design evolution: from isolated adaptation → communal awareness"
                  />
                </motion.div>

                {/* Prototyping: Technical Development */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  style={{ marginBottom: '64px' }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#000000', marginBottom: '20px' }}>
                    Prototyping: Engineering Empathy
                  </h3>
                  <p style={{ fontSize: '15px', color: '#666666', lineHeight: '1.8', marginBottom: '28px', maxWidth: '640px' }}>
                    Testing revealed the importance of immediate tactile feedback. The glove needed to feel responsive — not mechanical — creating a seamless extension of the user's intention.
                  </p>

                  {/* Prototype Testing Images */}
                  <div style={{ marginBottom: '40px' }}>
                    <FigureWithCaption
                      src={prototypeImage}
                      alt="Hands testing the breath-activated heating glove prototype"
                      caption="Early prototypes exploring breath detection and heating response"
                    />
                  </div>

                  {/* System Diagram */}
                  <FigureWithCaption
                    src={systemImage}
                    alt="Arduino circuit diagram and assembled prototype components"
                    caption="System architecture: humidity sensor → Arduino → heating elements integrated into glove"
                  />
                </motion.div>

                {/* Reflection: Design Insight */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '32px',
                    borderRadius: '8px',
                    border: '1px solid rgba(179, 178, 255, 0.2)',
                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#000000', marginBottom: '16px' }}>
                    Reflection: Breath as Interface
                  </h3>
                  <p style={{ fontSize: '15px', color: '#666666', lineHeight: '1.8' }}>
                    The most critical insight came from observing how naturally users exhaled into their hands when cold. By detecting humidity from breath, the design became intuitive — requiring no learning curve, no buttons, no conscious activation. Warmth emerged from the body's own gesture of seeking comfort.
                  </p>
                </motion.div>
              </div>

              {/* Section 5 — System Integration & Digital Experience */}
              <div id="system" style={{ marginBottom: '80px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '24px' }}
                >
                  From Physical Warmth to Digital Connection
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ fontSize: '16px', color: '#666666', lineHeight: '1.8', marginBottom: '56px', maxWidth: '760px' }}
                >
                  Integrating Huuuuu!'s wearable technology with a mobile ecosystem that visualizes, shares, and celebrates women's comfort experiences.
                </motion.p>

                {/* Stage 1: How It Works */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  style={{ marginBottom: '64px' }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#000000', marginBottom: '20px' }}>
                    How It Works: Breath → Data → Warmth
                  </h3>
                  <p style={{ fontSize: '15px', color: '#666666', lineHeight: '1.8', marginBottom: '28px', maxWidth: '640px' }}>
                    Breath activates warmth — the glove syncs with your phone via Bluetooth, turning humidity into personalized comfort.
                  </p>
                  <FigureWithCaption
                    src={systemDiagramImage}
                    alt="System diagram showing breath detection, Bluetooth connection, and mobile app integration"
                    caption="System flow: exhale into glove → sensor detects humidity → heating activates → data syncs to phone"
                    imgStyle={{
                      '@media (max-width: 991px)': {
                        backgroundColor: 'rgba(255, 255, 255, 1)'
                      }
                    }}
                  />
                </motion.div>

                {/* Stage 2: Interface Design */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  style={{ marginBottom: '64px' }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#000000', marginBottom: '20px' }}>
                    Interface Design: Visualizing Personal Comfort
                  </h3>
                  <p style={{ fontSize: '15px', color: '#666666', lineHeight: '1.8', marginBottom: '28px', maxWidth: '640px' }}>
                    The app provides a simple, breathable interface that tracks comfort patterns — revealing how environment affects emotional wellbeing.
                  </p>
                  <FigureWithCaption
                    src={appInterfaceImage}
                    alt="Mobile app screens showing comfort tracking, temperature visualization, and community features"
                    caption="App experience: track personal warmth patterns, discover comfort zones, and connect with nearby users"
                  />
                </motion.div>

                {/* Stage 3: Shared Empathy */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{ marginBottom: '56px' }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#000000', marginBottom: '20px' }}>
                    Shared Empathy: Solidarity Through Temperature
                  </h3>
                  <p style={{ fontSize: '15px', color: '#666666', lineHeight: '1.8', marginBottom: '28px', maxWidth: '640px' }}>
                    Women exchange warmth and recognition through a digital network — transforming individual discomfort into collective awareness.
                  </p>

                  {/* Community Connection Visual */}
                  <motion.figure
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ margin: '32px 0' }}
                  >
                    <div style={{
                      backgroundColor: 'transparent',
                      overflow: 'hidden',
                      borderRadius: '8px'
                    }}>
                      <svg
                        viewBox="0 0 1000 280"
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block'
                        }}
                        aria-label="Roadmap showing progression from Individual Warmth to Collective Advocacy"
                      >
                        {/* Stage 1: Individual Warmth */}
                        <g>
                          <circle cx="80" cy="80" r="50" fill="#B3B2FF" opacity="0.15" />
                          <circle cx="80" cy="80" r="32" fill="#B3B2FF" />
                          <text x="80" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="500">1</text>
                          <text x="80" y="160" textAnchor="middle" fill="#000000" fontSize="16" fontWeight="500">Individual</text>
                          <text x="80" y="185" textAnchor="middle" fill="#000000" fontSize="16" fontWeight="500">Warmth</text>
                          <text x="80" y="220" textAnchor="middle" fill="#666666" fontSize="13">Personal comfort</text>
                          <text x="80" y="240" textAnchor="middle" fill="#666666" fontSize="13">and agency</text>
                        </g>

                        {/* Arrow 1 */}
                        <g>
                          <line x1="140" y1="80" x2="200" y2="80" stroke="#B3B2FF" strokeWidth="2" />
                          <polygon points="200,80 190,75 190,85" fill="#B3B2FF" />
                        </g>

                        {/* Stage 2: Local Network */}
                        <g>
                          <circle cx="300" cy="80" r="50" fill="#B3B2FF" opacity="0.15" />
                          <circle cx="300" cy="80" r="32" fill="#B3B2FF" />
                          <text x="300" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="500">2</text>
                          <text x="300" y="160" textAnchor="middle" fill="#000000" fontSize="16" fontWeight="500">Local</text>
                          <text x="300" y="185" textAnchor="middle" fill="#000000" fontSize="16" fontWeight="500">Network</text>
                          <text x="300" y="220" textAnchor="middle" fill="#666666" fontSize="13">Connecting with</text>
                          <text x="300" y="240" textAnchor="middle" fill="#666666" fontSize="13">nearby users</text>
                        </g>

                        {/* Arrow 2 */}
                        <g>
                          <line x1="360" y1="80" x2="420" y2="80" stroke="#B3B2FF" strokeWidth="2" />
                          <polygon points="420,80 410,75 410,85" fill="#B3B2FF" />
                        </g>

                        {/* Stage 3: Community Awareness */}
                        <g>
                          <circle cx="520" cy="80" r="50" fill="#B3B2FF" opacity="0.15" />
                          <circle cx="520" cy="80" r="32" fill="#B3B2FF" />
                          <text x="520" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="500">3</text>
                          <text x="520" y="160" textAnchor="middle" fill="#000000" fontSize="16" fontWeight="500">Community</text>
                          <text x="520" y="185" textAnchor="middle" fill="#000000" fontSize="16" fontWeight="500">Awareness</text>
                          <text x="520" y="220" textAnchor="middle" fill="#666666" fontSize="13">Shared patterns</text>
                          <text x="520" y="240" textAnchor="middle" fill="#666666" fontSize="13">become visible</text>
                        </g>

                        {/* Arrow 3 */}
                        <g>
                          <line x1="580" y1="80" x2="640" y2="80" stroke="#B3B2FF" strokeWidth="2" />
                          <polygon points="640,80 630,75 630,85" fill="#B3B2FF" />
                        </g>

                        {/* Stage 4: Collective Advocacy */}
                        <g>
                          <circle cx="740" cy="80" r="50" fill="#B3B2FF" opacity="0.15" />
                          <circle cx="740" cy="80" r="32" fill="#B3B2FF" />
                          <text x="740" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="500">4</text>
                          <text x="740" y="160" textAnchor="middle" fill="#000000" fontSize="16" fontWeight="500">Collective</text>
                          <text x="740" y="185" textAnchor="middle" fill="#000000" fontSize="16" fontWeight="500">Advocacy</text>
                          <text x="740" y="220" textAnchor="middle" fill="#666666" fontSize="13">Systemic change</text>
                          <text x="740" y="240" textAnchor="middle" fill="#666666" fontSize="13">through solidarity</text>
                        </g>
                      </svg>
                    </div>
                    <figcaption style={{
                      color: '#666666',
                      fontSize: '13px',
                      fontWeight: 400,
                      fontStyle: 'italic',
                      marginTop: '12px',
                      textAlign: 'center',
                      lineHeight: '1.5'
                    }}>
                      Building solidarity: shared experiences create pathways for advocacy and systemic change
                    </figcaption>
                  </motion.figure>
                </motion.div>

                {/* Impact Reflection */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{
                    backgroundColor: 'rgba(179, 178, 255, 0.05)',
                    padding: '32px',
                    borderRadius: '8px',
                    border: '1px solid rgba(179, 178, 255, 0.2)'
                  }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#000000', marginBottom: '16px' }}>
                    Impact: Raising Awareness Through Data
                  </h3>
                  <p style={{ fontSize: '15px', color: '#666666', lineHeight: '1.8', marginBottom: '16px' }}>
                    By aggregating comfort data, Huuuuu! makes invisible biases visible. When women see patterns across offices and cities, individual frustration transforms into collective recognition.
                  </p>
                  <p style={{ fontSize: '15px', color: '#666666', lineHeight: '1.8' }}>
                    This sparked conversations among users about advocating for equitable workplace standards — turning a personal device into a platform for systemic awareness.
                  </p>
                </motion.div>
              </div>

              {/* Section 6 — Reflection & Impact */}
              <div id="reflection" style={{ marginBottom: '80px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '56px' }}
                >
                  Reflection & Impact: Designing Empathy Through Technology
                </motion.h2>

                {/* Personal Reflection */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  style={{ marginBottom: '64px' }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#000000', marginBottom: '24px' }}>
                    What I Learned
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '720px' }} />
                </motion.div>

                {/* Skill Growth Visualization */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  style={{ marginBottom: '64px' }}
                >
                  <FigureWithCaption
                    src={skillGrowthImage}
                    alt="Designer skill growth chart showing four quadrants: Empathic Design Thinking, UI/UX & System Integration, Critical Reflection & Gender Awareness, and Physical Computing & Prototyping"
                    caption="Skills developed across empathy, technology, individual focus, and collective impact"
                  />
                </motion.div>

                {/* Impact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{ marginBottom: '64px' }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#000000', marginBottom: '32px' }}>
                    Impact Across Scales
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {/* Individual Impact */}
                    <div style={{
                      backgroundColor: '#FFFFFF',
                      padding: '28px',
                      borderRadius: '8px',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)'
                    }}>
                      <h4 style={{ fontSize: '17px', fontWeight: 500, color: '#000000', marginBottom: '12px' }}>
                        Individual Level
                      </h4>
                      <p style={{ fontSize: '15px', color: '#666666', lineHeight: '1.8' }}>
                        Empowering women to voice comfort needs without stigma. The glove offers agency—restoring control over one's immediate environment in a way that feels personal, not performative.
                      </p>
                    </div>

                    {/* Societal Impact */}
                    <div style={{
                      backgroundColor: '#FFFFFF',
                      padding: '28px',
                      borderRadius: '8px',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)'
                    }}>
                      <h4 style={{ fontSize: '17px', fontWeight: 500, color: '#000000', marginBottom: '12px' }}>
                        Societal Level
                      </h4>
                      <p style={{ fontSize: '15px', color: '#666666', lineHeight: '1.8' }}>
                        Reframing gender bias in workplace ergonomics through interaction design. By making discomfort visible and shareable, the project prompts questions about who benefits from default standards.
                      </p>
                    </div>

                    {/* Technological Impact */}
                    <div style={{
                      backgroundColor: '#FFFFFF',
                      padding: '28px',
                      borderRadius: '8px',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)'
                    }}>
                      <h4 style={{ fontSize: '17px', fontWeight: 500, color: '#000000', marginBottom: '12px' }}>
                        Technological Level
                      </h4>
                      <p style={{ fontSize: '15px', color: '#666666', lineHeight: '1.8' }}>
                        Demonstrating how Arduino + sensor data can serve affective design goals, not just functional purposes. Physical computing becomes a medium for empathy, connection, and social commentary.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Forward Thinking */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  style={{
                    position: 'relative',
                    padding: '48px 40px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid rgba(179, 178, 255, 0.2)'
                  }}
                >
                  {/* Background warmth visual */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(https://images.unsplash.com/photo-1761975269437-9edd4e49dc3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHdhcm0lMjBsaWdodCUyMGdsb3d8ZW58MXx8fHwxNzYyMzEyMDcwfDA&ixlib=rb-4.1.0&q=80&w=1080)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.08,
                    zIndex: 0
                  }} />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#000000', marginBottom: '24px' }}>
                      Looking Forward
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '680px' }}>
                      <p style={{ fontSize: '16px', color: '#333333', lineHeight: '1.9' }}>
                        This experience deepened my commitment to designing technologies that care. Not technologies that solve problems in isolation, but systems that acknowledge the emotional, social, and political dimensions of everyday experiences.
                      </p>
                      
                      <p style={{ fontSize: '16px', color: '#333333', lineHeight: '1.9' }}>
                        In future projects, I aim to continue bridging body-based sensing, data visualization, and collective experience: creating interfaces that feel intuitive because they honor how people already move, breathe, and connect.
                      </p>
                      
                      <p style={{ fontSize: '16px', color: '#333333', lineHeight: '1.9', fontStyle: 'italic', color: '#666666' }}>
                        Warmth, after all, was never just about temperature. It was about being seen, heard, and designed for.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Credits */}
              <div id="credits" style={{ marginBottom: '64px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{
                    color: '#000000',
                    fontSize: '32px',
                    fontWeight: 400,
                    marginBottom: '32px'
                  }}
                >
                  Credits
                </motion.h2>

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
                          fontSize: '16px',
                          fontWeight: 500,
                          marginBottom: '12px',
                          letterSpacing: '0.02em'
                        }}>
                          Team
                        </h3>
                        <p style={{
                          color: '#666666',
                          fontSize: '15px',
                          lineHeight: '1.8',
                          margin: 0
                        }}>
                          Shanshan Lai — Full-Stack Designer & Developer<br />
                          Jeong Ji Yeong — Interaction Designer<br />
                          Yuran Sun — Hardware Engineer
                        </p>
                      </div>

                      <div style={{ marginBottom: '32px' }}>
                        <h3 style={{
                          color: '#000000',
                          fontSize: '16px',
                          fontWeight: 500,
                          marginBottom: '12px',
                          letterSpacing: '0.02em'
                        }}>
                          Advisor
                        </h3>
                        <p style={{
                          color: '#666666',
                          fontSize: '15px',
                          lineHeight: '1.8',
                          margin: 0
                        }}>
                          Prof. Danqing Shi — Professor, Academy of Arts & Design, Tsinghua University
                        </p>
                      </div>

                      <div>
                        <h3 style={{
                          color: '#000000',
                          fontSize: '16px',
                          fontWeight: 500,
                          marginBottom: '12px',
                          letterSpacing: '0.02em'
                        }}>
                          Location
                        </h3>
                        <p style={{
                          color: '#666666',
                          fontSize: '15px',
                          lineHeight: '1.8',
                          margin: 0
                        }}>
                          Beijing, China — Tsinghua University,<br />
                          Department of Information Art & Design
                        </p>
                      </div>
                    </div>

                    {/* Right Column - Special Thanks */}
                    <div>
                      <h3 style={{
                        color: '#000000',
                        fontSize: '16px',
                        fontWeight: 500,
                        marginBottom: '12px',
                        letterSpacing: '0.02em'
                      }}>
                        Special Thanks
                      </h3>
                      <p style={{
                        color: '#666666',
                        fontSize: '15px',
                        lineHeight: '1.8',
                        margin: 0,
                        fontStyle: 'italic'
                      }}>
                        Participants from local coworking communities and office professionals in Beijing who generously shared their experiences and insights during user research and prototype testing.
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
