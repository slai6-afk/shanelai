import { motion } from 'motion/react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { DecisionPill } from '../../components/case-study/DecisionPill';
import { TLDRCard } from '../../components/case-study/TLDRCard';
import { MethodBlock } from '../../components/case-study/MethodBlock';
import { FigureWithCaption } from '../../components/case-study/FigureWithCaption';
import { NextSteps } from '../../components/case-study/NextSteps';
import { StickyTOC } from '../../components/case-study/StickyTOC';
import { SkillChart } from '../../components/case-study/SkillChart';
import { AccessibilityDiagram } from '../../components/case-study/AccessibilityDiagram';
import { CaseStudyHero } from '../../components/case-study/CaseStudyHero';
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
import imgCalibrationDemo from 'figma:asset/597981600c26243de56b615582f112500328f872.png';
import Frame3465176 from '../../imports/Frame3465176-57-479';
import imgExperiments from 'figma:asset/c427a35dab302ee2bcc37d79da015483ff4a9d32.png';
import imgProductOverview from 'figma:asset/bebbc88443fdebed4e56ae9980488dadc3739961.png';
import imgTargetInteraction from 'figma:asset/e90cc5d1053e7b5bd2df1638fbb42ebdcffaed63.png';
import imgDesignProcess from 'figma:asset/7889a6fa0f2d5f342230a3de8bdf0bdbd4446c9f.png';
import imgUserFeedback from 'figma:asset/bc8f2e00e443eba4f1f54b820dc44fc838b9f23e.png';

export function FunFitLandCaseStudy() {
  const tocItems = [
    { id: 'tldr', label: 'Overview' },
    { id: 'context', label: 'Context' },
    { id: 'problem', label: 'The Problem' },
    { id: 'research', label: 'Research & Discovery' },
    { id: 'solution', label: 'The Solution' },
    { id: 'impact', label: 'Impact' },
    { id: 'reflection', label: 'Reflection' }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navigation />

      <CaseStudyHero
        title="FunFitLand"
        description=""
        mediaType="video"
        mediaSrc="https://cdn.builder.io/o/assets%2F46b2761d61834692828a7f7e644854fc%2F12f602c331974b6a80f9c9034a740790?alt=media&token=0110fa1e-2440-40b4-845a-2032514a4142&apiKey=46b2761d61834692828a7f7e644854fc"
        descriptionLink={{
          href: 'https://a378b32952bb4365821281b3623c6cd1-e9a7ea443472457392199db97.projects.builder.codes/case-study/funfitland',
          label:
            'I designed calibration system in VR games that fits users with diverse physical mobilities, providing users with different motion range and targets size.'
        }}
        visitLink={{
          href: 'https://www.funfitland.com',
          label: 'Visit FunFitLand.com'
        }}
        tags={[
          { label: 'Product Design', variant: 'primary' },
          { label: 'Accessibility', variant: 'secondary' },
          { label: 'Startup', variant: 'secondary' },
          { label: 'VR/MR', variant: 'secondary' },
          { label: '15weeks Internship', variant: 'secondary' }
        ]}
      />

      <section className="pb-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 lg:gap-4">
            <div className="hidden lg:block">
              <StickyTOC items={tocItems} />
            </div>

            <div className="case-study-content-wrapper max-w-[900px] w-full">
              {/* Overview */}
              <div id="tldr" className="funfit-section funfit-overview-section">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-section-title funfit-section-title--overview"
                >
                  Overview
                </motion.h2>

                <div className="funfit-overview-meta-card">
                  <div className="funfit-overview-meta-group">
                    <h3 className="funfit-meta-heading">My Role</h3>
                    <p className="funfit-meta-text">
                      Product Intern (Product Manager, Designer, Data Analyst)
                    </p>
                  </div>
                  <div>
                    <h3 className="funfit-meta-heading">Team</h3>
                    <p className="funfit-meta-text">
                      30-person startup team including CEO, product managers, engineers, and game designers
                    </p>
                  </div>
                </div>

                <div className="funfit-tldr-grid">
                  <TLDRCard
                    icon={AlertCircle}
                    title="Challenge"
                    content="About 40 users reported they couldn't reach targets in our VR fitness game. Our rates went down from <strong>4.6</strong> to <strong>4.1</strong>"
                    index={0}
                  />
                  <TLDRCard
                    icon={Target}
                    title="Approach"
                    content="I used gameplay <strong>log analysis</strong> and <strong>user pattern insights</strong> to define the root cause, then translated findings into UX directions and engineering requirements."
                    index={1}
                  />
                  <TLDRCard
                    icon={TrendingUp}
                    title="Impact"
                    content="We improved our rating from <strong>4.1 to 4.7</strong>, and users stopped reporting issues about not being able to hit the targets. <strong>Older users</strong> also told us they enjoy the experience much more now."
                    index={2}
                  />
                </div>
              </div>

              {/* Context Section */}
              <div id="context" className="funfit-section funfit-context-section">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-section-title funfit-section-title--standard"
                >
                  Context: What is FunFitLand?
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-context-intro"
                >
                  <p className="funfit-context-paragraph">
                    FunFitLand is a VR fitness platform for Meta Quest that combines exercise with immersive environments. The <strong>DanceFit mode</strong> challenges users to <strong>hit floating targets</strong> in sync with music, an experience designed to make fitness feel like play.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-subsection"
                >
                  <h3 className="funfit-section-subtitle-accent funfit-section-subtitle-accent--md">
                    How It Works
                  </h3>
                  <p className="funfit-body-text funfit-body-text--spaced-md">
                    Users see targets floating in a 39-inch (100cm) radius around them. To score points, they must reach out and hit targets, combining cardio with coordination.
                  </p>

                  <div className="funfit-dark-panel funfit-dark-panel--compact">
                    <img
                      src={imgTargetInteraction}
                      alt="Diagram showing audio radius (200cm) vs visual radius (70cm)"
                      className="funfit-image-full"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-context-grid"
                >
                  <div className="funfit-context-text-block">
                    <h3 className="funfit-section-subtitle-accent funfit-section-subtitle-accent--md">
                      Multi-Modal Feedback
                    </h3>
                    <p className="funfit-body-text">
                      Targets use both sound and visuals to guide players. Since humans process audio faster than visuals, sound cues have a larger trigger radius, creating more intuitive interactions.
                    </p>
                  </div>

                  <div className="funfit-dark-panel">
                    <img
                      src={imgProductOverview}
                      alt="Circular target layout showing 100cm radius and shoulder span considerations"
                      className="funfit-image-full"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Problem Section */}
              <div id="problem" className="funfit-section">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-section-title funfit-section-title--standard"
                >
                  The Problem
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-problem-grid"
                >
                  <div className="funfit-problem-text-block funfit-body-text">
                    <p className="funfit-body-paragraph">
                      Over three months, we received reports from <strong>47</strong> users saying they <strong>couldn't reach targets</strong>. We thought it is an equipment issue, like maybe their device calibration was off, or they were using broken controllers.
                    </p>
                    <p className="funfit-body-paragraph funfit-problem-secondary-paragraph">
                      <strong>I was wrong. So we have to dig into it...</strong> It wasn't about technology. It was about people, specifically people whose bodies didn't match the "average user" we assumed.
                    </p>
                  </div>

                  <div className="funfit-dark-panel funfit-dark-panel--compact">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2F8b7d2da35c8445b8ae26ebf464b8631f"
                      alt="Diagram showing audio radius (200cm) vs visual radius (70cm)"
                      className="funfit-image-full"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Research & Discovery Section */}
              <div id="research" className="funfit-section">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-section-title funfit-section-title--standard"
                >
                  Research & Discovery
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-body-text funfit-body-text--spaced-md"
                >
                  <p>
                    To understand why users consistently failed to reach targets, I pulled <strong>two weeks of historical gameplay logs</strong> from the product backend. I sampled <strong>around 200 users</strong> and extracted their <strong>headset and controller telemetry.</strong>
                  </p>
                </motion.div>

                <MethodBlock
                  icon={Users}
                  title="User logs data analysis"
                  description="I analyzed backend gameplay logs to diagnose why users failed to reach targets."
                  details={[
                    '3D positional data (x, y, z)',
                    'Hand velocity and movement vectors',
                    'Target hit and miss events',
                    'Session context (time, game mode, difficulty)',
                    'User attributes (gender, age group)'
                  ]}
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-research-summary"
                >
                  <p className="funfit-research-caption">
                    Here is how I used these data to find where the real problem is:
                  </p>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2F9f65e5ddb46b489bb44fa304a78eda89"
                    alt="Visualization of gameplay log analysis showing target reach patterns and user clusters"
                    className="funfit-image-full"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-subsection funfit-subsection--with-top"
                >
                  <h3 className="funfit-section-subtitle-accent funfit-section-subtitle-accent--lg">
                    Testing Hypotheses
                  </h3>
                  <p className="funfit-body-text funfit-body-text--spaced-lg">
                    With all the data, we could now systematically test each hypothesis from the product team.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-dark-panel"
                >
                  <img
                    src={imgExperiments}
                    alt="Three experiments: rhythm perception, reach capability, and mobility testing"
                    className="funfit-image-full"
                  />
                </motion.div>

                <div className="funfit-hypothesis-card">
                  <p className="hypothesis-callout">
                    <em>
                      Bang!!! It is the hypothesis 3. So people with mobility issues and older age "feel" they can't hit it.
                    </em>
                  </p>
                </div>
              </div>

              {/* Solution Section */}
              <div id="solution" className="funfit-section">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-section-title funfit-section-title--standard"
                >
                  The Solution: Personalized Calibration
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-body-text funfit-solution-intro"
                >
                  <p className="funfit-body-paragraph">
                    Instead of assuming one-size-fits-all, I designed a personalized calibration system that adapts to each user's unique reach and comfort level.
                  </p>
                  <p className="funfit-body-paragraph">
                    The system measures three reach zones: comfortable reach, mid-stretch, and maximum stretch. Users can calibrate their experience based on their current energy, mobility, and fitness goals.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-solution-subsection"
                >
                  <h3 className="funfit-section-subtitle-accent funfit-section-subtitle-accent--lg">
                    Calibration Experience
                  </h3>

                  <div className="funfit-calibration-visual">
                    <div className="funfit-calibration-frame">
                      <Frame3465176 />
                    </div>
                  </div>

                  <p className="funfit-body-note">
                    New users are guided through a brief calibration flow where they reach in different directions to establish their personal comfort zones.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-solution-subsection"
                >
                  <h3 className="funfit-section-subtitle-accent funfit-section-subtitle-accent--lg">
                    Adjustable Difficulty System
                  </h3>

                  <div className="funfit-difficulty-panel">
                    <div className="funfit-difficulty-group">
                      <p className="funfit-difficulty-label">What's New Updates:</p>
                      <img
                        src={imgWhatsNewUpdates}
                        alt="Feature announcement for calibration system"
                        className="funfit-image-full funfit-image-with-margin"
                      />
                      <p className="funfit-difficulty-text">
                        Introducing personalized reach calibration, adapting the game to your body, not forcing your body to adapt to the game.
                      </p>
                    </div>

                    <div className="funfit-difficulty-group">
                      <p className="funfit-difficulty-label">Calibration Settings:</p>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2F3a0ca8791c8244acb354439fdbcca760"
                        alt="User interface for calibration settings"
                        className="funfit-image-full funfit-image-with-margin"
                      />
                    </div>

                    <div>
                      <p className="funfit-difficulty-label">Difficulty Adjustment:</p>
                      <img
                        src={imgCalibrationDemo}
                        alt="Visual demonstration of Easy, Medium, and Hard difficulty ranges"
                        className="funfit-image-full"
                      />
                      <p className="funfit-difficulty-note">
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
                  <h3 className="funfit-section-subtitle-neutral">How It Works</h3>
                  <p className="funfit-body-text funfit-body-text--spaced-md">
                    The calibration creates three personalized zones based on the user's actual reach:
                  </p>

                  <div className="funfit-zones-grid">
                    <div className="funfit-zone-card">
                      <h4 className="funfit-zone-title">Zone 1: Comfortable Reach</h4>
                      <p className="funfit-zone-text">
                        Targets placed where users can reach without strain. Ideal for warm-ups and accessibility.
                      </p>
                    </div>

                    <div className="funfit-zone-card">
                      <h4 className="funfit-zone-title">Zone 2: Mid-Stretch</h4>
                      <p className="funfit-zone-text">
                        Requires gentle stretching. Balances challenge and comfort for most gameplay.
                      </p>
                    </div>

                    <div className="funfit-zone-card">
                      <h4 className="funfit-zone-title">Zone 3: Maximum Stretch</h4>
                      <p className="funfit-zone-text">
                        Pushes to the user's physical limits. Used sparingly for intense workouts.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Impact Section */}
              <div id="impact" className="funfit-section">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-section-title funfit-section-title--standard"
                >
                  Impact
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-impact-stats-block"
                >
                  <div className="funfit-impact-grid">
                    <div className="funfit-impact-card">
                      <div className="funfit-impact-value">85%</div>
                      <div className="funfit-impact-label">Reduction in "can't reach" complaints</div>
                    </div>

                    <div className="funfit-impact-card">
                      <div className="funfit-impact-value funfit-impact-value-range">
                        <span>4.2</span>
                        <span className="funfit-impact-arrow">
                          →
                        </span>
                        <span>4.6</span>
                      </div>
                      <div className="funfit-impact-label">Star rating improvement</div>
                    </div>

                    <div className="funfit-impact-card">
                      <div className="funfit-impact-value">100%</div>
                      <div className="funfit-impact-label">Of new users complete calibration</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Reflection Section */}
              <div id="reflection" className="funfit-section">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-section-title funfit-section-title--standard"
                >
                  Reflection
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-reflection-block"
                >
                  <h3 className="funfit-reflection-heading">What I Learned</h3>

                  <blockquote className="funfit-reflection-quote">
                    "I've grown from designing interfaces to designing the systems that make those interfaces accessible to everyone."
                  </blockquote>

                  <SkillChart />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="funfit-reflection-block"
                >
                  <h3 className="funfit-reflection-subheading">The Power of Listening</h3>
                  <p className="funfit-reflection-text">
                    This project taught me that inclusive design isn't about accommodating edge cases; it's about respecting the full diversity of human experience. When 40 users say something isn't working, the problem isn't with them.
                  </p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="funfit-reflection-panel"
                  >
                    <img
                      src={imgUserFeedback}
                      alt="User feedback from global community"
                      className="funfit-image-full"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="funfit-looking-forward-heading">Looking Forward</h3>
                  <NextSteps
                    steps={[
                      'Expand calibration to other game modes beyond DanceFit',
                      'Research additional accessibility needs (colorblind modes, audio alternatives)',
                      'Develop adaptive difficulty that learns from player performance over time'
                    ]}
                  />
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
