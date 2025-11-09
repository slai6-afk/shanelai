import { motion } from 'motion/react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { DecisionPill } from '../../components/case-study/DecisionPill';
import { TLDRCard } from '../../components/case-study/TLDRCard';
import { InsightCard } from '../../components/case-study/InsightCard';
import { EvidenceBlock } from '../../components/case-study/EvidenceBlock';
import { MethodBlock } from '../../components/case-study/MethodBlock';
import { FigureWithCaption } from '../../components/case-study/FigureWithCaption';
import { NextSteps } from '../../components/case-study/NextSteps';
import { StickyTOC } from '../../components/case-study/StickyTOC';
import { AlertCircle, Target, TrendingUp, Users, FileText, Search, BarChart3 } from 'lucide-react';

export function NYCTourismCaseStudy() {
  const tocItems = [
    { id: 'tldr', label: 'TL;DR' },
    { id: 'background', label: 'Background & Objectives' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'findings', label: 'Findings & Insights' },
    { id: 'influence', label: 'Influence & Decisions' },
    { id: 'iterations', label: 'Iterations & Limitations' },
    { id: 'outcomes', label: 'Outcomes & Next Steps' },
    { id: 'credits', label: 'Credits & Ethics' }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-8 md:px-16">
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
              NYC Tourism IA Redesign
            </h1>

            <p style={{
              color: '#666666',
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '1.6',
              marginBottom: '32px',
              maxWidth: '800px'
            }}>
              Improving content findability by 30% through evidence-based information architecture redesign
            </p>

            {/* Label Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              <span style={{
                padding: '8px 16px',
                backgroundColor: '#1D0024',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                textTransform: 'uppercase'
              }}>
                Research
              </span>
              <span style={{
                padding: '8px 16px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                border: '1px solid rgba(0, 0, 0, 0.2)'
              }}>
                Information Architecture
              </span>
              <span style={{
                padding: '8px 16px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                border: '1px solid rgba(0, 0, 0, 0.2)'
              }}>
                Card Sorting · Tree Testing
              </span>
              <span style={{
                padding: '8px 16px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                border: '1px solid rgba(0, 0, 0, 0.2)'
              }}>
                UX Researcher
              </span>
              <span style={{
                padding: '8px 16px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                border: '1px solid rgba(0, 0, 0, 0.2)'
              }}>
                8 Weeks
              </span>
              <span style={{
                padding: '8px 16px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                border: '1px solid rgba(0, 0, 0, 0.2)'
              }}>
                NYC Tourism Board
              </span>
              <span style={{
                padding: '8px 16px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                border: '1px solid rgba(0, 0, 0, 0.2)'
              }}>
                Research Report · IA Prototype
              </span>
            </div>

            {/* Decision Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <DecisionPill text="Prioritized IA v2 over v1" index={0} />
              <DecisionPill text="Validated 'Things to Do' as primary category" index={1} />
              <DecisionPill text="Reduced navigation depth from 4 to 3 levels" index={2} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content with TOC */}
      <section className="pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
            {/* Sticky TOC */}
            <div className="hidden lg:block">
              <StickyTOC items={tocItems} />
            </div>

            {/* Content */}
            <div className="max-w-[900px]">
              {/* TL;DR Section */}
              <div id="tldr" style={{ marginBottom: '80px' }}>
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
                  TL;DR
                </motion.h2>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '20px' 
                }}>
                  <TLDRCard
                    icon={AlertCircle}
                    title="Problem"
                    content="International students struggled to find events and attractions on nyctourism.com due to unclear categorization and excessive navigation depth. Task completion rate was below 60%."
                    index={0}
                  />
                  <TLDRCard
                    icon={Target}
                    title="Approach"
                    content="Conducted hybrid card sorting (n=42) to understand mental models, followed by tree testing (n=38) to validate two IA prototypes. Selected methods balance qualitative insight with quantitative validation."
                    index={1}
                  />
                  <TLDRCard
                    icon={TrendingUp}
                    title="Impact"
                    content="IA v2 improved task success by 30% and reduced average clicks from 4.2 to 2.8. Findings directly informed Q2 redesign roadmap and influenced mobile navigation patterns."
                    index={2}
                  />
                </div>
              </div>

              {/* Background & Objectives */}
              <div id="background" style={{ marginBottom: '80px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{
                    color: '#000000',
                    fontSize: '32px',
                    fontWeight: 400,
                    marginBottom: '24px'
                  }}
                >
                  Background & Objectives
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{
                    color: '#666666',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '1.8'
                  }}
                >
                  <p style={{ marginBottom: '20px' }}>
                    <strong style={{ color: '#000000' }}>Product Context:</strong> NYC Tourism's website serves over 5M monthly visitors, with international students representing 18% of traffic. Analytics showed high bounce rates (62%) and low task completion on event discovery pages.
                  </p>

                  <p style={{ marginBottom: '20px' }}>
                    <strong style={{ color: '#000000' }}>Target Users:</strong> International students (18-28 years old) new to NYC, seeking cultural events, affordable activities, and orientation resources. Secondary audience includes families and business travelers.
                  </p>

                  <p style={{ marginBottom: '20px' }}>
                    <strong style={{ color: '#000000' }}>Research Questions:</strong>
                  </p>
                  <ul style={{ marginBottom: '20px', paddingLeft: '24px' }}>
                    <li>How do users mentally categorize NYC tourist content?</li>
                    <li>What labeling resonates with international students?</li>
                    <li>Can we reduce navigation depth without sacrificing discoverability?</li>
                  </ul>

                  <p style={{ marginBottom: '0' }}>
                    <strong style={{ color: '#000000' }}>Success Criteria:</strong> Achieve &gt;75% task success rate in tree testing, reduce average path length by 25%, and gain stakeholder buy-in for Q2 implementation.
                  </p>
                </motion.div>
              </div>

              {/* Methodology */}
              <div id="methodology" style={{ marginBottom: '80px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{
                    color: '#000000',
                    fontSize: '32px',
                    fontWeight: 400,
                    marginBottom: '24px'
                  }}
                >
                  Methodology
                </motion.h2>

                <MethodBlock
                  icon={Users}
                  title="Hybrid Card Sorting"
                  description="Recruited 42 international students (68% remote, 32% moderated) to categorize 65 content items. Chose hybrid approach to balance user mental models with business constraints."
                  details={[
                    "Phase 1: Open card sort (n=20) to discover organic categories",
                    "Phase 2: Closed card sort (n=22) to validate top 8 categories",
                    "Tools: OptimalSort for remote sessions, physical cards for in-person"
                  ]}
                  index={0}
                />

                <MethodBlock
                  icon={Search}
                  title="Tree Testing"
                  description="Tested two IA prototypes with 38 participants across 12 findability tasks. Measured success rate, directness, and time-on-task to compare structures."
                  details={[
                    "IA v1: Category-first (e.g., Museums → By Neighborhood)",
                    "IA v2: Intent-first (e.g., Things to Do → Museums)",
                    "Each participant completed 6 tasks per structure (randomized order)"
                  ]}
                  index={1}
                />

                <MethodBlock
                  icon={BarChart3}
                  title="Data Analysis"
                  description="Combined quantitative metrics with qualitative feedback. Used dendrogram analysis for card sort data and success rate + directness score for tree testing."
                  details={[
                    "Analyzed category agreement using standardized scores",
                    "Identified paths with <60% success for redesign priority",
                    "Cross-referenced analytics data to validate pain points"
                  ]}
                  index={2}
                />

                <FigureWithCaption
                  src="https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2F16b3e088cf8c45a580b69e54618ff54c"
                  alt="IA comparison diagram"
                  caption="Conduct persona spectrum for better design"
                />
              </div>

              {/* Findings & Insights */}
              <div id="findings" style={{ marginBottom: '80px' }}>
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
                  Findings → Insights → Recommendations
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <InsightCard
                    title="Users think by activity intent, not category type"
                    evidence="I don't care if it's a museum or gallery, I just want something cultural to do this weekend that's not too expensive. — P14, Tree Testing"
                    recommendation="Reorganize top-level navigation around user intents ('Things to Do', 'Plan Your Visit', 'NYC Basics') rather than content types ('Museums', 'Galleries', 'Events')."
                    impact="IA v2 showed 30% higher success rate (82% vs 63%) and 35% fewer mis-clicks on intent-driven tasks."
                    confidence="High"
                    effort="Medium"
                    impactLevel="High"
                    index={0}
                  />

                  <InsightCard
                    title="'Events' label caused confusion with 'Things to Do'"
                    evidence="Card sort data showed 'Events' scattered across 3 categories with only 42% agreement. Post-test interviews revealed users conflate recurring activities with one-time events."
                    recommendation="Merge 'Events' into 'Things to Do' with a time-based filter (Today, This Week, Year-Round). Use 'Happenings' for limited-time content."
                    impact="Reduced category ambiguity and improved scannability. Expected 15% decrease in support tickets related to event finding."
                    confidence="High"
                    effort="Low"
                    impactLevel="Medium"
                    index={1}
                  />

                  <InsightCard
                    title="Neighborhood-based navigation underperformed for new users"
                    evidence="Tree testing showed 58% failure rate when tasks required neighborhood knowledge. Users unfamiliar with NYC geography abandoned or guessed randomly."
                    recommendation="Demote neighborhood navigation to secondary level. Provide map-based exploration as alternative. Add 'Popular Areas' quick-start guide."
                    impact="Aligns with personas (international students lack NYC geography knowledge). Tree test v2 improved success to 76% with adjusted structure."
                    confidence="Medium"
                    effort="Medium"
                    impactLevel="High"
                    index={2}
                  />

                  <EvidenceBlock
                    type="quote"
                    content="The first version made me feel stupid. I don't know where SoHo is. The second version let me browse by what I actually wanted to do."
                    source="P22, International Student from Beijing"
                    index={3}
                  />

                  <img
                    alt="Redesigned navigation menu"
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2F3d3f40b893bd4e7781a89c6932dea299"
                    style={{
                      display: 'block',
                      width: '100%'
                    }}
                  />
                </div>
              </div>

              {/* Influence & Decisions */}
              <div id="influence" style={{ marginBottom: '80px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{
                    color: '#000000',
                    fontSize: '32px',
                    fontWeight: 400,
                    marginBottom: '24px'
                  }}
                >
                  Influence & Decisions
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    padding: '32px',
                    marginBottom: '24px'
                  }}
                >
                  <h3 style={{ 
                    color: '#000000', 
                    fontSize: '18px',
                    fontWeight: 500,
                    marginBottom: '16px'
                  }}>
                    Product Impact
                  </h3>

                  <ul style={{ 
                    margin: 0, 
                    paddingLeft: '24px',
                    color: '#666666',
                    fontSize: '15px',
                    lineHeight: '1.8'
                  }}>
                    <li style={{ marginBottom: '12px' }}>
                      <strong style={{ color: '#000000' }}>Roadmap Change:</strong> Findings moved IA redesign from Q3 to Q2 priority. PM allocated 2 sprints for implementation.
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                      <strong style={{ color: '#000000' }}>Scope Adjustment:</strong> Recommendation to deprioritize neighborhood-first navigation influenced mobile app v3.0 navigation pattern.
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                      <strong style={{ color: '#000000' }}>Stakeholder Alignment:</strong> Presented to Marketing, Content, and Engineering leads. 95% vote to proceed with IA v2.
                    </li>
                    <li>
                      <strong style={{ color: '#000000' }}>Documentation:</strong> Research integrated into PRD-2024-Q2-Navigation (internal), with links to Figma prototypes and JIRA tickets (WEB-4521, WEB-4522).
                    </li>
                  </ul>
                </motion.div>

                <FigureWithCaption
                  src="https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2F8d3835f471d341d9901d8a4bdf2a373f"
                  alt="Redesigned navigation menu"
                  caption="Final navigation design implementing IA v2 intent-first structure"
                />
              </div>

              {/* Iterations & Limitations */}
              <div id="iterations" style={{ marginBottom: '80px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{
                    color: '#000000',
                    fontSize: '32px',
                    fontWeight: 400,
                    marginBottom: '24px'
                  }}
                >
                  Iterations & Limitations
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{
                    color: '#666666',
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '1.8'
                  }}
                >
                  <p style={{ marginBottom: '20px' }}>
                    <strong style={{ color: '#000000' }}>Unexpected Results:</strong> Initial card sort showed "Food & Dining" split between "Things to Do" and standalone category. Iteration added clarifying instructions distinguishing experiences (food tours) from directories (restaurant lists).
                  </p>

                  <p style={{ marginBottom: '20px' }}>
                    <strong style={{ color: '#000000' }}>Study Limitations:</strong>
                  </p>
                  <ul style={{ marginBottom: '20px', paddingLeft: '24px' }}>
                    <li>Sample skewed toward younger users (18-28); limited validation for 40+ travelers</li>
                    <li>Remote testing prevented observation of emotional reactions during confusion</li>
                    <li>Did not test mobile-specific patterns; findings assume desktop mental model transfers</li>
                  </ul>

                  <p style={{ marginBottom: '20px' }}>
                    <strong style={{ color: '#000000' }}>Risk Mitigation:</strong> Recommended phased rollout (A/B test IA v2 with 20% traffic before full deploy). Proposed follow-up usability testing post-launch to catch edge cases.
                  </p>

                  <p style={{ marginBottom: '0' }}>
                    <strong style={{ color: '#000000' }}>Next Study:</strong> Plan moderated usability sessions (n=8) to evaluate mobile navigation and gather qualitative feedback on visual design execution.
                  </p>
                </motion.div>
              </div>

              {/* Outcomes & Next Steps */}
              <div id="outcomes" style={{ marginBottom: '80px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{
                    color: '#000000',
                    fontSize: '32px',
                    fontWeight: 400,
                    marginBottom: '24px'
                  }}
                >
                  Outcomes & Next Steps
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    padding: '32px',
                    marginBottom: '24px'
                  }}
                >
                  <h3 style={{
                    color: '#000000',
                    fontSize: '18px',
                    fontWeight: 500,
                    marginBottom: '16px'
                  }}>
                    Product Decisions Made
                  </h3>
                  <ul style={{ 
                    margin: 0, 
                    paddingLeft: '24px',
                    color: '#666666',
                    fontSize: '15px',
                    lineHeight: '1.8'
                  }}>
                    <li>Adopted IA v2 as official structure for Q2 redesign</li>
                    <li>Consolidated "Events" into "Things to Do" with time filters</li>
                    <li>Moved neighborhood navigation to secondary/tertiary levels</li>
                    <li>Greenlit map-based exploration feature for Q3</li>
                  </ul>

                  <h3 style={{
                    color: '#000000',
                    fontSize: '18px',
                    fontWeight: 500,
                    marginTop: '24px',
                    marginBottom: '16px'
                  }}>
                    KPI Movement (Projected)
                  </h3>
                  <ul style={{ 
                    margin: 0, 
                    paddingLeft: '24px',
                    color: '#666666',
                    fontSize: '15px',
                    lineHeight: '1.8'
                  }}>
                    <li>Task success rate: 63% → 82% (tree test validation)</li>
                    <li>Average clicks to content: 4.2 → 2.8 (-33%)</li>
                    <li>Bounce rate: Expected 10-15% reduction based on similar IA changes</li>
                    <li>Support tickets (navigation): Projected 15% decrease in first 3 months</li>
                  </ul>
                </motion.div>

                <h3 style={{
                  color: '#000000',
                  fontSize: '18px',
                  fontWeight: 500,
                  marginBottom: '16px'
                }}>
                  Follow-Up Plan
                </h3>

                <NextSteps
                  steps={[
                    "Conduct post-launch usability testing (n=8 moderated sessions) within 30 days of deploy",
                    "Monitor analytics weekly for first month: track bounce rate, task completion, heatmaps",
                    "Run follow-up tree test with family travelers segment to validate across personas",
                    "Document learnings in UX research repository for future IA projects"
                  ]}
                />
              </div>

              {/* Credits & Ethics */}
              <div id="credits" style={{ marginBottom: '40px' }}>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{
                    color: '#000000',
                    fontSize: '32px',
                    fontWeight: 400,
                    marginBottom: '24px'
                  }}
                >
                  Credits & Ethics
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    padding: '32px'
                  }}
                >
                  <p style={{
                    color: '#666666',
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '1.8',
                    marginBottom: '20px'
                  }}>
                    <strong style={{ color: '#000000' }}>Team:</strong> Shane Lai (Lead Researcher), Maya Chen (Product Manager), Jordan Kim (Content Strategist), Alex Rivera (UX Designer)
                  </p>

                  <p style={{
                    color: '#666666',
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '1.8',
                    marginBottom: '20px'
                  }}>
                    <strong style={{ color: '#000000' }}>Consent & Privacy:</strong> All participants provided informed consent via digital form. Data anonymized; no PII stored. Recruited via university partnerships with $25 Amazon gift card incentive. Study approved by internal ethics review.
                  </p>

                  <p style={{
                    color: '#666666',
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '1.8',
                    margin: 0
                  }}>
                    <strong style={{ color: '#000000' }}>Acknowledgments:</strong> Special thanks to NYU and Columbia international student offices for recruitment support, and to the 80 students who participated across both studies.
                  </p>
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
