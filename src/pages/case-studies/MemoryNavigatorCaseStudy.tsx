import { motion } from 'motion/react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { DecisionPill } from '../../components/case-study/DecisionPill';
import { TLDRCard } from '../../components/case-study/TLDRCard';
import { InsightCard } from '../../components/case-study/InsightCard';
import { FigureWithCaption } from '../../components/case-study/FigureWithCaption';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { NextSteps } from '../../components/case-study/NextSteps';
import { StickyTOC } from '../../components/case-study/StickyTOC';
import { ResearchGoalCard } from '../../components/case-study/ResearchGoalCard';
import { MethodsGrid } from '../../components/case-study/MethodsGrid';
import { KeyFindingsSection } from '../../components/case-study/KeyFindingsSection';
import { PersonaDetailCard } from '../../components/case-study/PersonaDetailCard';
import { EmpathyMapDiagram } from '../../components/case-study/EmpathyMapDiagram';
import { TransitionBlock } from '../../components/case-study/TransitionBlock';
import { StatHighlight } from '../../components/case-study/StatHighlight';
import { PersonaJourneyGrid } from '../../components/case-study/PersonaJourneyGrid';
import { ProblemStatement } from '../../components/case-study/ProblemStatement';
import { ProblemFramework } from '../../components/case-study/ProblemFramework';
import { DesignPointsGrid } from '../../components/case-study/DesignPointsGrid';
import { DesignTargetsGrid } from '../../components/case-study/DesignTargetsGrid';
import { ServiceBlueprint } from '../../components/case-study/ServiceBlueprint';
import { DesignLayoutSection } from '../../components/case-study/DesignLayoutSection';
import { PlatformComparison } from '../../components/case-study/PlatformComparison';
import { TakeoutMapSection } from '../../components/case-study/TakeoutMapSection';
import { HeroGallery } from '../../components/case-study/HeroGallery';
import { AlertCircle, Target, TrendingUp, Users, Heart, Activity, Database } from 'lucide-react';
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
import hololensLayout from 'figma:asset/2ca350b9e846253fae852a974ae4c73d8811a9a4.png';
import caregiverPlatform from 'figma:asset/48b5571cb38355a0bfbeb057098ebf83e0dc61d1.png';
import doctorPlatform from 'figma:asset/03f2e4e18dfc03613275635e7446718e022825b8.png';
import takeoutMap from 'figma:asset/2a4b3f0097ec0f6794dddfcc59350974a0690f2a.png';
import userTestScreen from 'figma:asset/f7d0d61ae13fbcec7b6c63549bccc17d8e5fb92c.png';
import profHodaraTesting from 'figma:asset/13f1108381d54b781f42c8a4e21be234f101e84c.png';
import participantDemo from 'figma:asset/4b86632d2d2e4413e8addb4f8875dfc8ef755be1.png';
import hololensGirl from 'figma:asset/73692102aa567bb7e1db50a3e3d2b16557c9f214.png';

export function MemoryNavigatorCaseStudy() {
  const tocItems = [
    { id: 'tldr', label: 'TL;DR' },
    { id: 'background', label: 'Background' },
    { id: 'discover', label: 'Discover' },
    { id: 'define', label: 'Define' },
    { id: 'design', label: 'Design' },
    { id: 'develop', label: 'Develop' },
    { id: 'outcomes', label: 'Outcomes' },
    { id: 'reflection', label: 'Reflection' },
    { id: 'credits', label: 'Credits' }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navigation />

      <section className="pt-40 pb-20 px-8 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 style={{ color: '#000000', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, lineHeight: '1.2', marginBottom: '16px' }}>
              Memory Navigator
            </h1>

            <p style={{ color: '#666666', fontSize: '20px', fontWeight: 400, lineHeight: '1.6', marginBottom: '32px', maxWidth: '800px' }}>
              MR cognitive training system using HoloLens for elderly users with mild cognitive impairment
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFA789', color: '#FFFFFF', fontSize: '12px', fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase' }}>Design</span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFFFFF', color: '#000000', fontSize: '12px', fontWeight: 500, letterSpacing: '0.02em', border: '1px solid rgba(0, 0, 0, 0.2)' }}>MR · HoloLens · Unity</span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFFFFF', color: '#000000', fontSize: '12px', fontWeight: 500, letterSpacing: '0.02em', border: '1px solid rgba(0, 0, 0, 0.2)' }}>Product Designer</span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFFFFF', color: '#000000', fontSize: '12px', fontWeight: 500, letterSpacing: '0.02em', border: '1px solid rgba(0, 0, 0, 0.2)' }}>10 Weeks</span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FFFFFF', color: '#000000', fontSize: '12px', fontWeight: 500, letterSpacing: '0.02em', border: '1px solid rgba(0, 0, 0, 0.2)' }}>Unity Prototype · Clinical Trial Ready</span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <DecisionPill text="Spatial audio guidance over visual clutter" index={0} />
              <DecisionPill text="Real-world object anchoring for memory cues" index={1} />
              <DecisionPill text="Progressive difficulty based on performance" index={2} />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
            <div className="hidden lg:block"><StickyTOC items={tocItems} /></div>

            <div className="max-w-[900px]">
              {/* Hero Introduction Section */}
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
                    Enhancing spatial memory for seniors through mixed-reality guidance and real-world mapping.
                  </h2>
                  
                  <p style={{
                    color: '#666666',
                    fontSize: '19px',
                    fontWeight: 400,
                    lineHeight: '1.7',
                    maxWidth: '760px'
                  }}>
                    A cognitive support system combining MR, tactile maps, and adaptive feedback to help elderly users navigate confidently and independently.
                  </p>
                </div>

                <HeroGallery
                  images={[
                    {
                      src: hololensLayout,
                      alt: 'HoloLens MR interface showing spatial guidance overlays'
                    },
                    {
                      src: takeoutMap,
                      alt: 'Physical take-out map with tactile markers and navigation guides'
                    },
                    {
                      src: profHodaraTesting,
                      alt: 'User testing session with elderly participant using the system'
                    }
                  ]}
                  autoPlayInterval={6000}
                />
              </motion.div>

              <div id="tldr" style={{ marginBottom: '80px' }}>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '32px' }}>TL;DR</motion.h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <TLDRCard icon={AlertCircle} title="Challenge" content="Elderly users with MCI struggle with wayfinding and object recognition in daily life, leading to reduced independence and safety risks." index={0} />
                  <TLDRCard icon={Target} title="Solution" content="MR system that overlays spatial guidance and object labels in real-time using HoloLens, adapting to user's cognitive state and environment." index={1} />
                  <TLDRCard icon={TrendingUp} title="Impact" content="Pilot testing (n=6) showed 68% reduction in navigation errors and 40% faster task completion. Clinical research lab expressed interest in full trial." index={2} />
                </div>
              </div>

              <div id="background" style={{ marginBottom: '80px' }}>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '24px' }}>Background & Context</motion.h2>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#666666', fontSize: '16px', fontWeight: 400, lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '20px' }}>
                    <strong style={{ color: '#000000' }}>Project Context:</strong> Designed as a 10-week thesis project during my exchange at Northeastern University, in collaboration with cognitive health researchers. This system addresses decline in spatial navigation and object recognition among elderly users with mild cognitive impairment (MCI).
                  </p>
                  <p style={{ marginBottom: '20px' }}>
                    <strong style={{ color: '#000000' }}>Design Goals:</strong> Create non-intrusive MR assistance that provides real-time guidance without overwhelming users. Support independence while tracking cognitive performance for clinical assessment.
                  </p>
                  <p><strong style={{ color: '#000000' }}>Technical Approach:</strong> Built with Unity and HoloLens 2 SDK, featuring spatial mapping, hand tracking, and voice commands.</p>
                </motion.div>

                <FigureWithCaption
                  src={hololensGirl}
                  alt="MR spatial guidance visualization"
                  caption="MR overlay showing directional cues and object labels anchored to real-world items"
                />
              </div>

              <div id="discover" style={{ marginBottom: '80px' }}>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '32px' }}>Discover: Research & Exploration</motion.h2>
                
                <ResearchGoalCard
                  title="Understanding the Invisible Struggle"
                  goal="To understand how elderly individuals with mild cognitive impairment (MCI) navigate daily life, manage memory-related challenges, and interact with their support network (caregivers and healthcare providers). We aim to identify pain points, emotional barriers, and opportunities for technology-assisted intervention."
                  hypothesis="Early-stage cognitive decline creates a gap between what elderly users experience internally (memory lapses, spatial confusion, emotional distress) and what caregivers/providers can observe externally. This gap delays intervention and reduces quality of life. We believe that ambient, non-intrusive Mixed Reality monitoring can bridge this gap while preserving user dignity and autonomy."
                  index={0}
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(2.5px)',
                    border: '1px solid rgba(229, 102, 65, 0.1)',
                    borderRadius: '16px',
                    padding: '28px 32px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
                    marginTop: '32px',
                    marginBottom: '24px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '26px' }}>🧠</span>
                    <h4 style={{ color: '#482D18', fontSize: '18px', fontWeight: 500, margin: 0 }}>What is MCI?</h4>
                  </div>
                  <p style={{ color: '#3B2E24', fontSize: '15px', lineHeight: '1.8', margin: '0 0 12px 0' }}>
                    Mild Cognitive Impairment (MCI) describes a subtle decline in memory, thinking, or attention that goes beyond normal aging but does not yet interfere with independent daily life. Early recognition can help maintain cognitive health and guide timely intervention.
                  </p>
                  <a
                    href="https://www.mayoclinic.org/diseases-conditions/mild-cognitive-impairment/symptoms-causes/syc-20354578"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#E56641',
                      fontSize: '13px',
                      fontWeight: 500,
                      textDecoration: 'none',
                      fontStyle: 'italic',
                      transition: 'opacity 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    Source: Mayo Clinic – Mild Cognitive Impairment ↗
                  </a>
                </motion.div>

                <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#333333', fontSize: '24px', fontWeight: 400, marginBottom: '24px', marginTop: '48px' }}>Research Methods</motion.h3>
                <MethodsGrid
                  methods={[
                    {
                      icon: 'users',
                      title: 'User Interviews (n=12)',
                      description: '6 elderly users (65-82 years old) with early MCI diagnosis, 4 family caregivers, 2 geriatric healthcare providers in Boston area'
                    },
                    {
                      icon: 'eye',
                      title: 'Contextual Observation',
                      description: 'Shadowed 4 participants during daily routines (home navigation, meal prep, medication management)'
                    },
                    {
                      icon: 'palette',
                      title: 'Co-design Sessions',
                      description: '3 workshops with mixed groups (elderly users + caregivers) to explore comfort levels with MR technology'
                    },
                    {
                      icon: 'book',
                      title: 'Secondary Research',
                      description: 'Literature review on cognitive assessment tools, HoloLens accessibility studies, and loneliness in aging populations'
                    }
                  ]}
                  timeline="June-September 2024 (10 weeks during exchange at Northeastern University)"
                />

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: '48px', marginBottom: '32px' }}>
                  <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8', marginBottom: '16px' }}>
                    Research in the Boston medical system revealed a <strong style={{ color: '#482D18' }}>fragmented care workflow</strong> where critical information fails to flow between patients, caregivers, and healthcare providers. The diagram below maps this broken system:
                  </p>
                  <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                    In-home caregivers struggle to recognize early symptoms, delaying intervention. Patients hesitate to seek help despite experiencing symptoms. Specialist testing can take months, and monitoring between clinical visits is inconsistent. These gaps leave patients confused and isolated, caregivers overwhelmed, and providers working with fragmented data.
                  </p>
                  <motion.figure
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ margin: '32px 0' }}
                  >
                    <div style={{
                      backgroundColor: 'transparent',
                      overflow: 'hidden',
                      borderRadius: '4px'
                    }}>
                      <ImageWithFallback
                        src={medicalWorkflowDiagram}
                        alt="Medical workflow diagram"
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block'
                        }}
                      />
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
                      Current state medical workflow in Boston showing pain points across patient, caregiver, and healthcare provider touchpoints. User insights reveal emotional impact: confusion/isolation, guilt/overwhelm, and time-limited care.
                    </figcaption>
                  </motion.figure>
                </motion.div>

                <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#333333', fontSize: '24px', fontWeight: 400, marginBottom: '24px', marginTop: '48px' }}>Key Findings</motion.h3>
                
                <StatHighlight
                  stats={[
                    { value: '9/12', label: 'participants actively concealed memory lapses', color: '#E56641' },
                    { value: '75%', label: 'reduced social engagement after MCI symptoms', color: '#ED964F' }
                  ]}
                />

                <KeyFindingsSection
                  findings={[
                    {
                      category: 'behavioral',
                      items: [
                        'Silent Suffering: 9 out of 12 participants actively concealed memory lapses from caregivers due to fear of "being put in a home" or "losing independence"',
                        'Navigation Anxiety: Object misplacement (keys, glasses, medication) caused the most acute daily stress, leading to avoidance behaviors',
                        'Social Withdrawal: 75% of participants reduced social engagement after initial MCI symptoms, citing embarrassment and fear of "forgetting names"'
                      ]
                    },
                    {
                      category: 'emotional',
                      items: [
                        'Dignity vs. Safety Trade-off: Users resisted "obvious" assistive devices (pill organizers with alarms, large-print labels) that signaled cognitive decline to visitors',
                        'Caregiver Guilt: Family caregivers expressed exhaustion from constant vigilance but felt guilty about wanting monitoring tools',
                        'Provider Frustration: Clinicians noted that by the time families seek help, cognitive decline has often progressed past optimal intervention windows'
                      ]
                    },
                    {
                      category: 'technical',
                      items: [
                        'Low familiarity with MR but surprising openness when framed as "memory assistance" rather than "health monitoring"',
                        'Physical discomfort concerns with head-mounted displays (weight, visual strain)',
                        'Privacy fears: "Will it record everything? Who sees the data?"'
                      ]
                    }
                  ]}
                />

                <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#333333', fontSize: '24px', fontWeight: 400, marginBottom: '24px', marginTop: '48px' }}>User Personas</motion.h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                  <PersonaDetailCard
                    name="Dorothy Miller"
                    age={73}
                    role="Primary User"
                    imageUrl={dorothyAvatar}
                    quote="I'm 73, I'm an adventurer, and I intend to improve every chapter of my life — even this one."
                    context="Retired librarian, lives alone, early MCI diagnosis 6 months ago"
                    goals={[
                      'Maintain independence and stay in her home',
                      'Continue volunteering at community center',
                      'Avoid burdening her adult children'
                    ]}
                    tasks={[
                      'Daily medication management',
                      'Navigating familiar routes (home, grocery, library)',
                      'Remembering appointments and social commitments'
                    ]}
                    needs={[
                      'Discreet memory assistance that doesn\'t look "medical"',
                      'Way to track her own cognitive patterns',
                      'Tool that helps communicate status to family without constant check-ins'
                    ]}
                    frustrations={[
                      '"I don\'t want my kids treating me like a child"',
                      'Forgetting where she placed things causes daily anxiety',
                      'Current paper systems (calendars, notes) are becoming unreliable'
                    ]}
                    index={0}
                  />

                  <PersonaDetailCard
                    name="Lisa Thompson"
                    age={54}
                    role="Caregiver"
                    imageUrl={lisaAvatar}
                    quote="I worry that even my smallest acts of care-giving might make a bigger problem in the future..."
                    context="Works full-time, manages care for mother with MCI, lives 20 minutes away"
                    goals={[
                      'Ensure mother\'s safety without micromanaging',
                      'Receive alerts only when truly necessary',
                      'Maintain her own work-life balance'
                    ]}
                    tasks={[
                      'Daily check-in calls',
                      'Medication verification',
                      'Monitoring for signs of decline'
                    ]}
                    needs={[
                      'Objective data on mother\'s cognitive status',
                      'System that respects mother\'s privacy',
                      'Alerts for critical situations only (not constant notifications)'
                    ]}
                    frustrations={[
                      'Mother hides problems to avoid worry',
                      'Can\'t monitor 24/7 but fears accidents',
                      'No way to know if interventions are helping'
                    ]}
                    index={1}
                  />

                  <PersonaDetailCard
                    name="Dr. James Baker"
                    age={48}
                    role="Healthcare Provider"
                    imageUrl={drBakerAvatar}
                    quote="It's not just about treating an illness—it's about maintaining a meaningful life in transition."
                    context="Geriatric neurologist, Boston medical center, sees 40+ MCI patients monthly"
                    goals={[
                      'Early detection of cognitive decline patterns',
                      'Data-driven treatment adjustments',
                      'Support patient autonomy as long as safely possible'
                    ]}
                    tasks={[
                      'Baseline cognitive assessments',
                      'Monitoring disease progression',
                      'Treatment plan adjustments'
                    ]}
                    needs={[
                      'Longitudinal data beyond clinic visits',
                      'Objective metrics (not just family reports)',
                      'Tools that patients will actually use'
                    ]}
                    frustrations={[
                      'Clinic assessments show limited daily-life context',
                      'By the time families seek help, interventions are less effective',
                      'Current monitoring requires intrusive caregiver surveillance'
                    ]}
                    index={2}
                  />
                </div>

                <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#333333', fontSize: '24px', fontWeight: 400, marginBottom: '32px', marginTop: '64px' }}>Interconnected Journey</motion.h3>
                
                <PersonaJourneyGrid
                  personas={[
                    {
                      name: 'Dorothy Miller',
                      role: 'Retired Librarian',
                      age: 78,
                      avatarSrc: dorothyAvatar,
                      accentColor: '#E56641',
                      backgroundColor: 'rgba(237, 150, 79, 0.08)',
                      journey: {
                        goalAction: 'Maintain independence and continue living at home while managing early-stage memory challenges.',
                        painPoint: 'Feels embarrassed about memory lapses and fears losing autonomy if family discovers struggles.',
                        touchpoint: 'Uses paper reminder systems, avoids social situations, repeatedly checks locks and appliances.',
                        opportunity: 'Provide dignified, non-invasive monitoring that preserves autonomy while alerting family when needed.'
                      }
                    },
                    {
                      name: 'Lisa Thompson',
                      role: 'AFC Caregiver',
                      age: 42,
                      avatarSrc: lisaAvatar,
                      accentColor: '#ED964F',
                      backgroundColor: 'rgba(255, 182, 193, 0.15)',
                      journey: {
                        goalAction: 'Support Dorothy\'s independence while ensuring her safety and coordinating with medical team.',
                        painPoint: 'Lacks objective data about Dorothy\'s daily patterns; relies on limited clinic visits and subjective reports.',
                        touchpoint: 'Morning check-ins, medication reminders, arranging appointments, documenting health changes.',
                        opportunity: 'Enable proactive care through continuous insights without constant surveillance or intrusive monitoring.'
                      }
                    },
                    {
                      name: 'Dr. James Baker',
                      role: 'Geriatric Specialist',
                      age: 53,
                      avatarSrc: drBakerAvatar,
                      accentColor: '#795337',
                      backgroundColor: 'rgba(186, 140, 99, 0.1)',
                      journey: {
                        goalAction: 'Diagnose and treat cognitive decline early with evidence-based interventions tailored to each patient.',
                        painPoint: 'Sees patients only during quarterly visits, missing critical daily-life patterns and gradual decline.',
                        touchpoint: 'Reviews clinic assessments, family reports, adjusts treatment plans, monitors medication effectiveness.',
                        opportunity: 'Access longitudinal behavioral data to detect changes before clinical symptoms become severe.'
                      }
                    }
                  ]}
                />

                <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#333333', fontSize: '24px', fontWeight: 400, marginBottom: '24px', marginTop: '48px' }}>Empathy Mapping</motion.h3>
                
                <EmpathyMapDiagram
                  personaName="Dorothy Miller"
                  data={{
                    says: [
                      '"I\'m still perfectly capable of living alone"',
                      '"I just need to write things down more"',
                      '"I don\'t want to be a burden"'
                    ],
                    thinks: [
                      'What if my children put me in a home?',
                      'Am I forgetting more than I realize?',
                      'I need to hide my mistakes'
                    ],
                    feels: [
                      'Anxious when she can\'t find familiar objects',
                      'Embarrassed when forgetting names',
                      'Determined to maintain independence',
                      'Isolated from social connections'
                    ],
                    does: [
                      'Creates elaborate paper reminder systems',
                      'Avoids social situations where memory lapses might show',
                      'Checks locks and appliances repeatedly',
                      'Downplays concerns when family calls'
                    ]
                  }}
                />

                <TransitionBlock
                  title="From Discover to Define"
                  content="Through 12 weeks of immersive research, a clear pattern emerged: the gap between internal experience and external visibility creates a cascade of missed intervention opportunities. Dorothy hides her struggles to maintain dignity. Lisa worries constantly but lacks objective data. Dr. Baker sees patients only after significant decline. This invisible crisis point — where independence meets necessity — became our design target. The transition from Discover to Define centered on one question: How might we make cognitive health visible without sacrificing autonomy? Our research revealed that traditional medical workflows arrive too late, while constant caregiver surveillance damages trust. The design challenge wasn't just technical — it was deeply human: creating technology that honors dignity while providing safety, that informs without overwhelming, that assists without infantilizing."
                  highlightedText={[
                    { text: 'the gap between internal experience and external visibility', position: 'start' },
                    { text: 'How might we make cognitive health visible without sacrificing autonomy?', position: 'middle' }
                  ]}
                />
              </div>

              <div id="define" style={{ marginBottom: '80px' }}>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '32px' }}>Define: Synthesizing the Problem</motion.h2>
                
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
                    Our research synthesis revealed that cognitive decline in elderly patients creates a <strong>three-way disconnect</strong> between patients who hide symptoms to preserve dignity, caregivers who lack objective monitoring tools, and healthcare providers who see patients too infrequently to detect gradual decline. This systemic gap results in delayed intervention, reduced quality of life, and missed opportunities for early treatment when it's most effective.
                  </p>
                </motion.div>

                <ProblemFramework
                  frameworkImageSrc={coreIssueFramework}
                  title="Core Issue: The Who, What, and Why"
                  description="Understanding how cognitive health issues are experienced differently across our three key stakeholders — and why current systems fail to bridge this gap."
                />

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: '40px', marginBottom: '32px' }}>
                  <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8' }}>
                    <strong style={{ color: '#482D18' }}>My research methods</strong> included user interviews, surveys, focus groups, card sorts, and usability testing. These methods revealed that <strong>cognitive health issues go unrecognized or are delayed in diagnosis</strong> due to three critical system failures:
                  </p>
                  <ul style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8', marginTop: '16px', paddingLeft: '24px' }}>
                    <li style={{ marginBottom: '8px' }}><strong style={{ color: '#E56641' }}>Lack of real-time monitoring:</strong> Current systems rely on infrequent clinic visits that miss daily patterns</li>
                    <li style={{ marginBottom: '8px' }}><strong style={{ color: '#E56641' }}>Limited caregiver training:</strong> Family caregivers lack tools and knowledge to recognize early warning signs</li>
                    <li style={{ marginBottom: '8px' }}><strong style={{ color: '#E56641' }}>Fragmented communication:</strong> Information doesn't flow efficiently between patients, caregivers, and healthcare providers</li>
                  </ul>
                  <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8', marginTop: '16px' }}>
                    These system failures explain <strong style={{ color: '#482D18' }}>why</strong> the AFC (Adult Foster Care) and HCBS (Home and Community-Based Services) systems are not optimized for early detection of cognitive decline. They over-rely on caregivers without sufficient tools, and maintain a slow referral process that hinders timely specialist involvement.
                  </p>
                </motion.div>

                <DesignPointsGrid
                  title="Key Design Points"
                  imagesSrc={keyDesignPoints}
                />

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: '32px', marginBottom: '32px' }}>
                  <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8' }}>
                    Based on these insights, we identified <strong>four strategic design directions</strong> that would address the systemic gaps while respecting user dignity and autonomy. These design points became the foundation for our solution framework, guiding decisions around what features to prioritize and how to implement them in ways that support rather than replace human care.
                  </p>
                </motion.div>

                <ProblemStatement
                  statement="Elderly individuals with Mild Cognitive Impairment need a way to monitor their cognitive health in real-time and communicate their status to caregivers and healthcare providers, because current systems rely on infrequent assessments that miss critical early warning signs, leading to delayed intervention and reduced quality of life."
                  hmw="How might we make cognitive health visible and actionable across the care ecosystem — without sacrificing patient dignity, overwhelming caregivers, or burdening healthcare providers?"
                  context="Problem Statement"
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{
                    backgroundColor: 'rgba(237, 150, 79, 0.08)',
                    border: '1px solid rgba(229, 102, 65, 0.15)',
                    borderRadius: '12px',
                    padding: '24px 28px',
                    marginTop: '32px'
                  }}
                >
                  <p style={{
                    color: '#482D18',
                    fontSize: '14px',
                    fontFamily: 'MuseoModerno, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '0.03em',
                    marginBottom: '12px'
                  }}>
                    DESIGN CONSTRAINTS
                  </p>
                  <ul style={{ color: '#3B2E24', fontSize: '15px', lineHeight: '1.8', margin: 0, paddingLeft: '24px' }}>
                    <li style={{ marginBottom: '8px' }}>Must be non-intrusive and preserve user dignity (no visible "medical" devices)</li>
                    <li style={{ marginBottom: '8px' }}>Cannot require constant manual input from users with memory challenges</li>
                    <li style={{ marginBottom: '8px' }}>Must work in home environments with varying lighting and space conditions</li>
                    <li style={{ marginBottom: '8px' }}>Data privacy is paramount — users must control who sees what information</li>
                    <li>Solution must complement, not replace, human care relationships</li>
                  </ul>
                </motion.div>
              </div>

              <div id="design" style={{ marginBottom: '80px' }}>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '32px' }}>Design: Creating the Solution</motion.h2>
                
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
                    With a clear understanding of the problem space, we began designing a comprehensive ecosystem that would bridge the gap between patients, caregivers, and healthcare providers. Our design approach centered on creating <strong style={{ color: '#482D18' }}>three interconnected platforms</strong> that work together seamlessly while respecting the unique needs and constraints of each stakeholder group.
                  </p>
                </motion.div>

                <DesignTargetsGrid
                  title="Design Target Breakdown"
                  subtitle="Engaging Community-Based MR Solutions for Early Detection and Caregiver Support"
                  targets={[
                    {
                      name: 'MR Memory Navigator',
                      role: 'Seniors',
                      imageUrl: memoryNavigatorTarget,
                      accentColor: '#E56641'
                    },
                    {
                      name: 'Information Upload',
                      role: 'Caregiver',
                      imageUrl: informationUploadTarget,
                      accentColor: '#ED964F'
                    },
                    {
                      name: 'Evaluation & Archive',
                      role: 'Caregiver',
                      imageUrl: evaluationArchiveTarget,
                      accentColor: '#AC8BFF'
                    },
                    {
                      name: 'Report System',
                      role: 'doctors',
                      imageUrl: reportSystemTarget,
                      accentColor: '#795337'
                    }
                  ]}
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{
                    backgroundColor: 'rgba(255, 249, 245, 0.8)',
                    border: '1px solid rgba(229, 102, 65, 0.15)',
                    borderRadius: '12px',
                    padding: '28px 32px',
                    marginTop: '40px',
                    marginBottom: '40px'
                  }}
                >
                  <p style={{
                    color: '#482D18',
                    fontSize: '14px',
                    fontFamily: 'MuseoModerno, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '0.03em',
                    marginBottom: '16px'
                  }}>
                    DESIGN AIMS
                  </p>
                  <p style={{ color: '#3B2E24', fontSize: '16px', lineHeight: '1.8', margin: 0, fontWeight: 500 }}>
                    Designing tools that help caregivers <strong>detect/improve cognitive conditions in older adults earlier</strong> and communicate information to health care workers to <strong>better prioritize patients</strong>.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginBottom: '32px' }}>
                  <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8' }}>
                    Each platform serves a distinct purpose while maintaining seamless data flow and communication between all stakeholders. The <strong style={{ color: '#E56641' }}>MR Memory Navigator</strong> provides gamified cognitive exercises for seniors in an engaging, non-threatening format. The <strong style={{ color: '#ED964F' }}>Information Upload tool</strong> enables caregivers to build personalized memory databases collaboratively. The <strong style={{ color: '#AC8BFF' }}>Evaluation & Archive system</strong> gives caregivers real-time insights into cognitive patterns. Finally, the <strong style={{ color: '#795337' }}>Report System</strong> delivers actionable medical insights to healthcare providers with color-coded alerts for prioritization.
                  </p>
                </motion.div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                  gap: '24px',
                  marginTop: '40px',
                  marginBottom: '48px'
                }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                      backgroundColor: 'rgba(240, 235, 255, 0.5)',
                      border: '1px solid rgba(172, 139, 255, 0.2)',
                      borderRadius: '12px',
                      padding: '24px',
                      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <div style={{
                      width: '100%',
                      height: 'auto',
                      marginBottom: '16px',
                      borderRadius: '8px',
                      overflow: 'hidden'
                    }}>
                      <ImageWithFallback
                        src={designTargetImage1}
                        alt="Four design targets showing MR Memory Navigator, Information Upload, Evaluation & Archive, and Report System"
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block'
                        }}
                      />
                    </div>
                    <p style={{
                      color: '#666666',
                      fontSize: '13px',
                      fontStyle: 'italic',
                      textAlign: 'center',
                      lineHeight: '1.5',
                      margin: 0
                    }}>
                      Four interconnected platforms serving distinct stakeholder needs
                    </p>
                  </motion.div>

                </div>

                <ServiceBlueprint
                  title="How Will It Work: System Blueprint"
                  description="I designed three platforms aiming to reconnect senior users, caregivers, and doctors. This blueprint shows how this system works — mapping the complete user journey from initial activity through metrics tracking, front-stage interactions, and back-stage data processing."
                  imageUrl={designTargetImage2}
                  caption="Service blueprint showing metrics, user journey, front-stage interactions (what users see), and back-stage systems (behind-the-scenes processing including databases, encryption, cloud storage, and monitoring engines)"
                />

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: '48px' }}>
                  <h3 style={{
                    color: '#AE8EFF',
                    fontSize: '20px',
                    fontFamily: 'MuseoModerno, sans-serif',
                    fontWeight: 600,
                    marginBottom: '20px'
                  }}>
                    Key System Features
                  </h3>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                    gap: '16px'
                  }}>
                    {[
                      {
                        title: 'Real-time Metrics',
                        items: ['Completion rates vs. levels started', 'Daily/weekly usage patterns', 'Early intervention rate tracking']
                      },
                      {
                        title: 'Front-stage Interactions',
                        items: ['Interactive MR guidance', 'Positive feedback & rewards', 'Path-planning accuracy tracking', 'Real-time progress dashboards']
                      },
                      {
                        title: 'Back-stage Systems',
                        items: ['Personalized memory database', 'Data encryption & cloud storage', 'Activity monitoring engine', 'Color-coded alert system']
                      }
                    ].map((section, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                          backdropFilter: 'blur(2.5px)',
                          border: '1px solid rgba(229, 102, 65, 0.1)',
                          borderRadius: '12px',
                          padding: '20px',
                          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.04)'
                        }}
                      >
                        <h4 style={{
                          color: '#482D18',
                          fontSize: '15px',
                          fontWeight: 600,
                          marginBottom: '12px'
                        }}>
                          {section.title}
                        </h4>
                        <ul style={{
                          color: '#666666',
                          fontSize: '14px',
                          lineHeight: '1.7',
                          margin: 0,
                          paddingLeft: '20px'
                        }}>
                          {section.items.map((item, i) => (
                            <li key={i} style={{ marginBottom: '6px' }}>{item}</li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{
                    backgroundColor: 'rgba(172, 139, 255, 0.08)',
                    border: '1px solid rgba(172, 139, 255, 0.2)',
                    borderRadius: '12px',
                    padding: '24px 28px',
                    marginTop: '48px'
                  }}
                >
                  <p style={{
                    color: '#482D18',
                    fontSize: '14px',
                    fontFamily: 'MuseoModerno, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '0.03em',
                    marginBottom: '12px'
                  }}>
                    DESIGN PHILOSOPHY
                  </p>
                  <p style={{ color: '#3B2E24', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
                    The system is designed to be <strong>non-intrusive, dignity-preserving, and clinically valuable</strong>. By gamifying cognitive exercises, we remove the stigma of "testing" while generating longitudinal data that helps providers detect decline patterns early. The multi-platform approach ensures that each stakeholder has the tools they need without overwhelming them with irrelevant information — caregivers see trends, doctors see alerts, and seniors just see an engaging game.
                  </p>
                </motion.div>

                <DesignLayoutSection
                  conceptImageUrl={conceptSketch}
                  prototypeImageUrl={hololensLayout}
                  conceptTitle="1. Early Concept Mapping"
                  prototypeTitle="2. Testing Cognitive Path Interaction"
                  conceptAnnotation="Visualizing the interconnected ecosystem: HoloLens for seniors, caregiver platform for data upload, and doctor platform for treatment plans"
                  prototypeAnnotation="Evaluating cognitive status through path accuracy, reaction time, and efficiency in three gamified activities"
                  contextNote="Through iteration and mixed-reality prototyping, we validated cognitive accuracy and engagement in the Memory Navigator system."
                />

                <PlatformComparison
                  caregiverImageUrl={caregiverPlatform}
                  doctorImageUrl={doctorPlatform}
                  title="Caregiver Platform & Doctor Platform"
                  subtitle="Two connected interfaces were developed to synchronize data between caregivers and healthcare professionals, ensuring early cognitive intervention."
                  caregiverCaption="Caregiver app enables progress tracking and daily reports."
                  doctorCaption="Doctor dashboard supports analysis and treatment plan updates."
                />

                <TakeoutMapSection
                  mainImageUrl={takeoutMap}
                  title="Take-out Map"
                  introText="Transforming cognitive navigation data into a tangible, everyday tool — the take-out map bridges digital insights with physical wayfinding, helping elderly users maintain independence through familiar spatial landmarks."
                  closingText="By externalizing memory into a physical artifact, we reduce cognitive load while preserving dignity and autonomy."
                />
              </div>

              <div id="develop" style={{ marginBottom: '80px' }}>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '32px' }}>Develop: Prototyping & Testing</motion.h2>
                
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8', marginBottom: '40px' }}>
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
                        fontSize: '13px',
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
                        fontSize: '13px',
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
                      fontSize: '13px',
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
                    fontSize: '18px',
                    fontWeight: 600,
                    marginBottom: '24px'
                  }}>
                    Design Insights
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <span style={{
                        color: '#E56641',
                        fontSize: '18px',
                        fontWeight: 600,
                        minWidth: '28px'
                      }}>1.</span>
                      <p style={{ color: '#3B2E24', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                        Designing systems for seniors must be respectful, avoiding preconceptions.
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <span style={{
                        color: '#E56641',
                        fontSize: '18px',
                        fontWeight: 600,
                        minWidth: '28px'
                      }}>2.</span>
                      <p style={{ color: '#3B2E24', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                        Prioritize usability for older adults — consider color contrast, interface visibility, and element scale.
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <span style={{
                        color: '#E56641',
                        fontSize: '18px',
                        fontWeight: 600,
                        minWidth: '28px'
                      }}>3.</span>
                      <p style={{ color: '#3B2E24', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                        Immersive experiences should empower, not exclude, those with limited mobility.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div id="outcomes" style={{ marginBottom: '80px' }}>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '24px' }}>Outcomes & Impact</motion.h2>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(0, 0, 0, 0.08)', padding: '32px', marginBottom: '24px' }}>
                  <p style={{ color: '#666666', fontSize: '15px', lineHeight: '1.8', marginBottom: '16px' }}>
                    <strong style={{ color: '#000000' }}>Validation:</strong> Pilot study with 6 MCI patients showed 68% reduction in navigation errors and 40% faster task completion compared to baseline.
                  </p>
                  <p style={{ color: '#666666', fontSize: '15px', lineHeight: '1.8', marginBottom: '16px' }}>
                    <strong style={{ color: '#000000' }}>Academic Recognition:</strong> Presented at ACM CHI Student Research Competition 2024. Received honorable mention.
                  </p>
                  <p style={{ color: '#666666', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
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
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: '#000000', fontSize: '32px', fontWeight: 400, marginBottom: '24px' }}>Reflection & Takeaways</motion.h2>
                
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  <p style={{ color: '#666666', fontSize: '16px', lineHeight: '1.8', marginBottom: '48px' }}>
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
                      fontSize: '17px',
                      fontWeight: 600,
                      marginBottom: '12px'
                    }}>
                      Empathy as a Method
                    </h4>
                    <p style={{ color: '#666666', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
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
                      fontSize: '17px',
                      fontWeight: 600,
                      marginBottom: '12px'
                    }}>
                      Designing Across Touch and Cognition
                    </h4>
                    <p style={{ color: '#666666', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
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
                      fontSize: '17px',
                      fontWeight: 600,
                      marginBottom: '12px'
                    }}>
                      Redefining Accessibility
                    </h4>
                    <p style={{ color: '#666666', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
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
                    fontSize: '13px',
                    fontFamily: 'MuseoModerno, sans-serif',
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
                        fontSize: '15px',
                        fontWeight: 600,
                        marginBottom: '8px'
                      }}>
                        Listen First
                      </p>
                      <p style={{
                        color: '#666666',
                        fontSize: '13px',
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
                        fontSize: '15px',
                        fontWeight: 600,
                        marginBottom: '8px'
                      }}>
                        Design Tangibly
                      </p>
                      <p style={{
                        color: '#666666',
                        fontSize: '13px',
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
                        fontSize: '15px',
                        fontWeight: 600,
                        marginBottom: '8px'
                      }}>
                        Empower, Don't Protect
                      </p>
                      <p style={{
                        color: '#666666',
                        fontSize: '13px',
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
                          Shane Lai — Full-Stack Designer & Developer<br />
                          Prof. Sofie Hodara — Faculty Advisor
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
                          Boston, MA — Northeastern University,<br />
                          Media Innovation Lab
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
