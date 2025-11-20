import { motion } from 'motion/react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { DecisionPill } from '../../components/case-study/DecisionPill';
import { TLDRCard } from '../../components/case-study/TLDRCard';
import { InsightCard } from '../../components/case-study/InsightCard';
import { StickyTOC } from '../../components/case-study/StickyTOC';
import { AlertCircle, Target, TrendingUp } from 'lucide-react';

export function FunFitLandResearchCaseStudy() {
  const tocItems = [
    { id: 'tldr', label: 'TL;DR' },
    { id: 'background', label: 'Background' },
    { id: 'findings', label: 'Findings' },
    { id: 'credits', label: 'Credits' }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navigation />
      <section className="pt-40 pb-20 px-8 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 style={{ color: '#000000', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, lineHeight: '1.2', marginBottom: '16px' }}>FunFitLand Research</h1>
            <p style={{ color: '#666666', fontSize: '20px', fontWeight: 400, lineHeight: '1.6', marginBottom: '32px', maxWidth: '800px' }}>User research exploring accessibility barriers in VR fitness experiences</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              <span style={{ padding: '8px 16px', backgroundColor: '#1D0024', color: '#FFFFFF', fontSize: '12px', fontWeight: 500, textTransform: 'uppercase' }}>Research</span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFFFFF', color: '#000000', fontSize: '12px', fontWeight: 500, border: '1px solid rgba(0, 0, 0, 0.2)' }}>VR · Accessibility · User Research</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <DecisionPill text="Co-design with disability community" index={0} />
              <DecisionPill text="Document barriers for design teams" index={1} />
            </div>
          </motion.div>
        </div>
      </section>
      <section className="pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
            <div className="hidden lg:block"><StickyTOC items={tocItems} /></div>
            <div className="max-w-[900px]">
              <div id="tldr" style={{ marginBottom: '80px' }}>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '32px' }}>TL;DR</motion.h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <TLDRCard icon={AlertCircle} title="Research Gap" content="VR fitness apps lack accessibility considerations, yet little research documents specific barriers faced by users with disabilities." index={0} />
                  <TLDRCard icon={Target} title="Study Design" content="Conducted interviews (n=15), usability testing with competitive products (n=8), and co-design workshops to identify barriers and solutions." index={1} />
                  <TLDRCard icon={TrendingUp} title="Impact" content="Published accessibility guidelines adopted by 2 VR fitness startups. Findings directly informed FunFitLand (UFit) design project." index={2} />
                </div>
              </div>
              <div id="background" style={{ marginBottom: '80px' }}>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '24px' }}>Research Objectives</motion.h2>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#666666', fontSize: '16px', fontWeight: 400, lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '20px' }}><strong style={{ color: '#000000' }}>Goals:</strong> Document accessibility barriers in existing VR fitness apps. Understand diverse movement capabilities and sensory needs. Co-create design principles for inclusive VR fitness.</p>
                  <p style={{ marginBottom: '20px' }}><strong style={{ color: '#000000' }}>Participants:</strong> 15 interviews (wheelchair users, low vision, chronic pain, elderly). 8 usability testers (testing Beat Saber, Supernatural, FitXR).</p>
                  <p><strong style={{ color: '#000000' }}>Methods:</strong> Semi-structured interviews, competitive usability testing, co-design workshops, affinity mapping.</p>
                </motion.div>
              </div>
              <div id="findings" style={{ marginBottom: '80px' }}>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '32px' }}>Key Findings</motion.h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <InsightCard
                    title="Movement assumptions exclude 40% of testers"
                    evidence="Apps assume full range of motion. 40% of participants couldn't complete onboarding due to standing requirements or overhead arm movements."
                    recommendation="Design movement calibration that maps to individual range of motion. Support seated mode from the start."
                    impact="Directly informed FunFitLand adaptive mechanics and seated-first design approach."
                    confidence="High" effort="High" impactLevel="High" index={0}
                  />
                  <InsightCard
                    title="Single-channel feedback creates gaps"
                    evidence="Audio-only cues exclude deaf users. Visual-only cues fail for low vision users. Haptic-only overwhelming for some."
                    recommendation="Implement redundant, multi-modal feedback (visual + audio + haptic) with independent customization."
                    impact="Became core design principle for FunFitLand and published in accessibility guidelines."
                    confidence="High" effort="Medium" impactLevel="High" index={1}
                  />
                </div>
              </div>
              <div id="credits" style={{ marginBottom: '40px' }}>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '24px' }}>Credits & Ethics</motion.h2>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(0, 0, 0, 0.08)', padding: '32px' }}>
                  <p style={{ color: '#666666', fontSize: '15px', lineHeight: '1.8', marginBottom: '16px' }}><strong style={{ color: '#000000' }}>Team:</strong> Shane Lai (Lead Researcher), Accessibility Research Lab at Pratt Institute</p>
                  <p style={{ color: '#666666', fontSize: '15px', lineHeight: '1.8', margin: 0 }}><strong style={{ color: '#000000' }}>Ethics:</strong> All participants provided informed consent. Compensated $50 per session. Research adhered to disability-inclusive research principles (nothing about us without us).</p>
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
