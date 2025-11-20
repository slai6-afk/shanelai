import { motion } from 'motion/react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { DecisionPill } from '../../components/case-study/DecisionPill';
import { TLDRCard } from '../../components/case-study/TLDRCard';
import { InsightCard } from '../../components/case-study/InsightCard';
import { StickyTOC } from '../../components/case-study/StickyTOC';
import { AlertCircle, Target, TrendingUp } from 'lucide-react';

export function TalkieCaseStudy() {
  const tocItems = [
    { id: 'tldr', label: 'TL;DR' },
    { id: 'background', label: 'Background' },
    { id: 'findings', label: 'Insights' },
    { id: 'credits', label: 'Credits' }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navigation />
      <section className="pt-40 pb-20 px-8 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 style={{ color: '#000000', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, lineHeight: '1.2', marginBottom: '16px' }}>Talkie</h1>
            <p style={{ color: '#666666', fontSize: '20px', fontWeight: 400, lineHeight: '1.6', marginBottom: '32px', maxWidth: '800px' }}>AI voice companion for truck drivers designed through empathy-driven research</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              <span style={{ padding: '8px 16px', backgroundColor: '#1D0024', color: '#FFFFFF', fontSize: '12px', fontWeight: 500, textTransform: 'uppercase' }}>Research</span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFFFFF', color: '#000000', fontSize: '12px', fontWeight: 500, border: '1px solid rgba(0, 0, 0, 0.2)' }}>AI · Voice · Ethnographic Research</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <DecisionPill text="Conversational over transactional AI" index={0} />
              <DecisionPill text="Context-aware mood adaptation" index={1} />
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
                  <TLDRCard icon={AlertCircle} title="Problem" content="Long-haul truck drivers face isolation, fatigue, and safety risks during 10-14 hour shifts. Existing voice assistants are task-focused, not companionship-oriented." index={0} />
                  <TLDRCard icon={Target} title="Approach" content="Conducted 8 ethnographic interviews and 3 ride-alongs with truck drivers. Mapped emotional journey and identified moments where AI companion could provide support." index={1} />
                  <TLDRCard icon={TrendingUp} title="Impact" content="Insights informed AI product team at Minimax. Research findings shaped conversational design framework for long-duration voice interactions." index={2} />
                </div>
              </div>
              <div id="background" style={{ marginBottom: '80px' }}>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '24px' }}>Research Context</motion.h2>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#666666', fontSize: '16px', fontWeight: 400, lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '20px' }}><strong style={{ color: '#000000' }}>Study Design:</strong> Mixed-methods research combining interviews (n=8), ride-alongs (n=3), and diary studies (n=5, 2 weeks each). Recruited via trucking forums and logistics companies.</p>
                  <p style={{ marginBottom: '20px' }}><strong style={{ color: '#000000' }}>Research Questions:</strong> What emotional needs do drivers experience during long shifts? When do they seek human connection? What conversational patterns build trust?</p>
                  <p><strong style={{ color: '#000000' }}>Methods:</strong> Semi-structured interviews, contextual observation, affinity mapping, journey mapping.</p>
                </motion.div>
              </div>
              <div id="findings" style={{ marginBottom: '80px' }}>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '32px' }}>Key Insights</motion.h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <InsightCard
                    title="Drivers want conversation, not commands"
                    evidence="I don't need another GPS. I need someone to talk to who doesn't judge me when I'm having a rough day. — P3, 12 years experience"
                    recommendation="Design AI persona as empathetic listener rather than task assistant. Prioritize open-ended conversation over efficiency."
                    impact="Shift from transactional to conversational AI design. Inform voice personality development."
                    confidence="High" effort="Medium" impactLevel="High" index={0}
                  />
                  <InsightCard
                    title="Context awareness builds trust"
                    evidence="Diary studies revealed drivers value AI that adapts to time of day, weather, and emotional state. Generic responses felt robotic."
                    recommendation="Implement context-aware mood detection and adaptive conversation style based on driving conditions and user signals."
                    impact="Improved perceived empathy and user retention in subsequent product development."
                    confidence="High" effort="High" impactLevel="Medium" index={1}
                  />
                </div>
              </div>
              <div id="credits" style={{ marginBottom: '40px' }}>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '24px' }}>Credits & Ethics</motion.h2>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(0, 0, 0, 0.08)', padding: '32px' }}>
                  <p style={{ color: '#666666', fontSize: '15px', lineHeight: '1.8', marginBottom: '16px' }}><strong style={{ color: '#000000' }}>Team:</strong> Shane Lai (Lead Researcher), UX Research Team at Minimax</p>
                  <p style={{ color: '#666666', fontSize: '15px', lineHeight: '1.8', margin: 0 }}><strong style={{ color: '#000000' }}>Ethics:</strong> All participants provided informed consent. Data anonymized. $100 compensation per session. Research approved by company ethics review.</p>
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
