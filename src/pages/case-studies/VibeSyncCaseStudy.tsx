import { motion } from 'motion/react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AlertCircle, ArrowUpRight, BarChart2, CheckCircle2, Compass, Cpu, Heart, MessageCircle, TrendingUp, Users } from 'lucide-react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { TLDRCard } from '../../components/case-study/TLDRCard';
import { StickyTOC } from '../../components/case-study/StickyTOC';
import { MobileTOC } from '../../components/case-study/MobileTOC';
import { CaseStudyHero } from '../../components/case-study/CaseStudyHero';
import { DraggableQuarterImage } from '../../components/case-study/DraggableQuarterImage';
import {
  CardCornerVector,
  pickFlowVertical,
  VectorDecor,
  WordBackdropDecor,
} from '../../components/vector-decor';

import heroVideo from '../../assets/AMM_video.mp4';
import gallery1 from '../../assets/vibes1.png';
import gallery2 from '../../assets/vibes2.png';
import gallery3 from '../../assets/vibes3.png';
import problemAmazonStrip from '../../assets/Screenshot 2026-04-05 at 3.27.50 PM 1.png';

import research1 from '../../assets/research1.png';
import research2 from '../../assets/research2.png';
import research3 from '../../assets/research3.png';
import research4 from '../../assets/research4.png';

import linkFrom from '../../assets/solution1.png';
import linkTo from '../../assets/solution2.png';

import retentionA from '../../assets/user1.png';
import retentionB from '../../assets/user2.png';
import playlistsExpressive from '../../assets/Playlists Expressive Image.png';
import playlistsExpressiveHover from '../../assets/Playlists Expressive Image2.png';
import overlay2 from '../../assets/Overlay2.png';
import currentJourneyMap from '../../assets/currentjourney.png';
import userFlowMap from '../../assets/userflow.png';
import dataMetricsImage from '../../assets/data.png';

import clientImage from '../../assets/Client Image.png';
import hmwDecor from '../../assets/HMW Image.png';
import userJourneyDecor from '../../assets/User Journey Image.png';
import userFlowDecor from '../../assets/User Flow Image.png';

import sketchBoard from '../../assets/sketch 1.png';
import prototypeSpread from '../../assets/prototype.png';

import showcaseFirst from '../../assets/showcase1.png';
import showcaseRegular from '../../assets/showcase2.png';

import methodology1 from '../../assets/design1.png';

import successWide from '../../assets/success.png';
import thankyou from '../../assets/thankyou.png';
import designSystemBoard from '../../assets/design-system.png';

const PROTOTYPE_HREF =
  'https://www.figma.com/proto/I7h5TbtKGoPjvKTM5SOptr/Vibe-Sync---2026-Amazon-Music-Challenge--presented-by-All-Ears-?node-id=1-128&t=WL4rCVUuGfeyFHhV-1&starting-point-node-id=1%3A128';

const VIBE_CYAN = '#00d5dd';
const methodology2 = 'https://www.figma.com/api/mcp/asset/a3a9aac4-363a-49d9-89a5-9bc59cffcda5';
const methodology3 = 'https://www.figma.com/api/mcp/asset/32baa5e9-ba7c-48d5-a274-185e45f67e97';
const methodology4 = 'https://www.figma.com/api/mcp/asset/312efa0c-d862-43e0-9e8d-5203b9e8cf61';
const methodology5 = 'https://www.figma.com/api/mcp/asset/3c20764a-7e8e-4387-8868-dda55395a68a';

/** Same wheel → scrollLeft mapping for hero gallery + methodology strip (must match method-strip UX). */
function normalizeWheelDelta(event: WheelEvent): number {
  let dy = event.deltaY;
  let dx = event.deltaX;
  if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
    dy *= 16;
    dx *= 16;
  } else if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
    dy *= 800;
    dx *= 800;
  }
  if (dy === 0 && dx === 0 && 'wheelDelta' in event) {
    const w = (event as unknown as { wheelDelta: number }).wheelDelta;
    if (w) dy = -w / 40;
  }
  return Math.abs(dy) >= Math.abs(dx) ? dy : dx;
}

function bindHorizontalWheelToEl(el: HTMLElement): () => void {
  const onWheel = (event: WheelEvent) => {
    const delta = normalizeWheelDelta(event);
    if (Math.abs(delta) < 0.5) return;

    const overflow = el.scrollWidth - el.clientWidth;
    if (overflow <= 1) return;

    const maxScrollLeft = overflow;
    const next = Math.min(Math.max(el.scrollLeft + delta, 0), maxScrollLeft);
    if (Math.abs(next - el.scrollLeft) > 0.5) {
      event.preventDefault();
      event.stopPropagation();
      el.scrollLeft = next;
    }
  };

  el.addEventListener('wheel', onWheel, { passive: false, capture: true });
  return () => el.removeEventListener('wheel', onWheel, { capture: true });
}

function bindDragScrollToEl(el: HTMLElement): () => void {
  let isDragging = false;
  let pointerId: number | null = null;
  let startX = 0;
  let startScrollLeft = 0;

  const onPointerDown = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    isDragging = true;
    pointerId = event.pointerId;
    startX = event.clientX;
    startScrollLeft = el.scrollLeft;
    el.classList.add('is-dragging');
    el.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent) => {
    if (!isDragging || pointerId !== event.pointerId) return;
    const dx = event.clientX - startX;
    el.scrollLeft = startScrollLeft - dx;
    event.preventDefault();
  };

  const stopDragging = () => {
    isDragging = false;
    pointerId = null;
    el.classList.remove('is-dragging');
  };

  const onPointerUp = (event: PointerEvent) => {
    if (pointerId === event.pointerId) stopDragging();
  };

  el.addEventListener('pointerdown', onPointerDown);
  el.addEventListener('pointermove', onPointerMove);
  el.addEventListener('pointerup', onPointerUp);
  el.addEventListener('pointercancel', stopDragging);
  el.addEventListener('pointerleave', onPointerUp);

  return () => {
    el.removeEventListener('pointerdown', onPointerDown);
    el.removeEventListener('pointermove', onPointerMove);
    el.removeEventListener('pointerup', onPointerUp);
    el.removeEventListener('pointercancel', stopDragging);
    el.removeEventListener('pointerleave', onPointerUp);
  };
}

export function VibeSyncCaseStudy() {
  const tocTriggerRef = useRef<HTMLDivElement>(null);
  const heroGalleryRef = useRef<HTMLDivElement>(null);
  const methodStripRef = useRef<HTMLDivElement>(null);
  const [tocFixed, setTocFixed] = useState(false);

  const tocItems = [
    { id: 'tldr', label: 'Overview (TL;DR)' },
    { id: 'problem', label: 'Situation' },
    { id: 'goal', label: 'Goal' },
    { id: 'research', label: 'Complication' },
    { id: 'solution', label: 'The Pivot' },
    { id: 'define', label: 'Define' },
    { id: 'iteration', label: 'The Ecosystem' },
    { id: 'showcase', label: 'The Happy Path' },
    { id: 'metrics', label: 'Success Metrics & System' },
    { id: 'reflection', label: 'Reflection' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!tocTriggerRef.current) return;
      const triggerRect = tocTriggerRef.current.getBoundingClientRect();
      setTocFixed(triggerRect.top <= 120);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Direct wheel listeners on the scroll containers (same pattern as working methodology strip).
   * Document-level + coordinate hit-testing failed for the hero when scrollWidth was mis-measured.
   */
  useLayoutEffect(() => {
    const cleanups: Array<() => void> = [];
    const hero = heroGalleryRef.current;
    const method = methodStripRef.current;
    if (hero) {
      cleanups.push(bindHorizontalWheelToEl(hero));
      cleanups.push(bindDragScrollToEl(hero));
    }
    if (method) cleanups.push(bindHorizontalWheelToEl(method));
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="vibesync-page min-h-screen bg-[var(--ds-bg-page)]">
      <Navigation />

      <CaseStudyHero
        title='Amazon Music: Bridging the "Gen-Z Discovery Gap" through expressive social ecosystems'
        description={
          <>
            How I redesigned{' '}
            <a
              href="https://music.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="vibesync-amazon-inline"
            >
              Amazon Music&apos;s
            </a>{' '}
            social ecosystem to bridge the{' '}
            <WordBackdropDecor vector="highlight2">&apos;Discovery Gap&apos;</WordBackdropDecor> for Gen Z, increasing
            perceived
            social value by <WordBackdropDecor vector="highlight2">40%</WordBackdropDecor>.
          </>
        }
        mediaType="video"
        mediaSrc={heroVideo}
        showVideoCaption={false}
        tags={[
          { label: 'Product Design', variant: 'vibe' },
          { label: 'Product Thinking', variant: 'secondary' },
          { label: 'Social Media', variant: 'secondary' },
          { label: 'Music', variant: 'secondary' },
          { label: 'Design challenge', variant: 'secondary' },
        ]}
      />

      <section className="px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="vibesync-hero-gallery-shell">
          <div ref={heroGalleryRef} className="vibesync-hero-gallery-row">
            {[gallery1, gallery2, gallery3].map((img, idx) => (
              <div className="vibesync-hero-gallery-item" key={idx}>
                <img src={img} alt="" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
          <div className="vibesync-prototype-block">
            <a
              href={PROTOTYPE_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="vibesync-prototype-cta"
            >
              <span>Open interactive prototype</span>
              <ArrowUpRight className="h-5 w-5 shrink-0" strokeWidth={2.25} aria-hidden />
            </a>
            <p className="vibesync-prototype-hint">Full click-through flow · Figma</p>
          </div>
        </div>
      </section>

      <MobileTOC items={tocItems} />

      <section className="pb-32 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 lg:gap-4">
            <div className="hidden lg:block">
              <StickyTOC items={tocItems} isFixed={tocFixed} />
            </div>

            <div className="case-study-content-wrapper max-w-[848px] w-full">
              <div ref={tocTriggerRef} style={{ height: 1 }} />

              <div id="tldr" className="funfit-section">
                <div className="funfit-overview-meta-card vibesync-meta-row-card relative">
                  <CardCornerVector name="highlight1" />
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="funfit-meta-heading">My Role</h3>
                      <p className="funfit-meta-text">Strategy Lead and Product Designer</p>
                    </div>
                    <div>
                      <h3 className="funfit-meta-heading">Team</h3>
                      <p className="funfit-meta-text">Yung-Wei Chen, Cherry Li, Madison Magnani, Shane Lai</p>
                    </div>
                  </div>
                </div>

                <div className="funfit-overview-meta-card vibesync-client-row-card">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <img
                      src={clientImage}
                      alt="Amazon Music client logo"
                      className="vibesync-client-logo"
                    />
                    <div className="flex-1">
                      <h3 className="funfit-meta-heading">Client</h3>
                      <p className="funfit-meta-text">
                        <a
                          href="https://music.amazon.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: VIBE_CYAN, marginRight: 20 }}
                        >
                          Visit Amazon Music -&gt;
                        </a>
                        Amazon Music is an audio entertainment service that connects fans, artists, and creators through music, podcasts, and culture.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="vibesync-tldr-layout">
                  <div className="vibesync-tldr-row">
                    <TLDRCard icon={AlertCircle} emoji="🎯" title="Situation" index={0}>
                      <a
                        href="https://music.amazon.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="vibesync-amazon-inline"
                      >
                        Amazon Music
                      </a>{' '}
                      is <WordBackdropDecor vector="highlight2">losing Gen Z</WordBackdropDecor> to TikTok. While infrastructure
                      is robust, the platform acts as a passive utility, resulting in{' '}
                      <WordBackdropDecor vector="highlight2">high churn</WordBackdropDecor> after music discovery.
                    </TLDRCard>
                    <TLDRCard icon={Compass} emoji="🧭" title="Task" index={1}>
                      Transform the app from a &apos;Music Player&apos; to a &apos;Social Expression Hub&apos; by architecting
                      an <WordBackdropDecor vector="highlight2">end-to-end sharing ecosystem</WordBackdropDecor> within 4
                      weeks.
                    </TLDRCard>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="vibesync-tldr-impact-card"
                  >
                    <div className="vibesync-tldr-impact-card__head">
                      <div className="tldr-card-top">
                        <span className="tldr-emoji" aria-hidden>
                          🏆
                        </span>
                        <div className="tldr-icon-circle">
                          <TrendingUp size={20} className="tldr-icon" />
                        </div>
                      </div>
                      <h3 className="tldr-title">Action &amp; Result</h3>
                    </div>

                    <div className="funfit-impact-stats-block !mb-0 mt-2">
                      <div className="funfit-impact-grid vibesync-tldr-impact-mini-grid items-stretch">
                        <div className="funfit-impact-card vibesync-impact-card vibesync-tldr-metric-card flex h-full flex-col items-stretch gap-6">
                          <div className="flex shrink-0 justify-center pt-0.5">
                            <CheckCircle2 className="h-8 w-8 text-[#00a8b0]" strokeWidth={2} aria-hidden />
                          </div>
                          <div className="vibesync-tldr-metric-slot flex min-h-[4rem] flex-1 items-center justify-center px-2">
                            <div className="vibesync-tldr-metric-ember" aria-label="100 percent success">
                              <span className="vibesync-tldr-metric-ember-num">100%</span>
                              <span className="vibesync-tldr-metric-ember-rest"> SUCCESS</span>
                            </div>
                          </div>
                          <div className="funfit-impact-label shrink-0">Retention Engineering</div>
                          <p className="funfit-body-text !mb-0 shrink-0 text-center text-[length:var(--type-l2)] leading-relaxed text-[var(--ds-text-secondary)]">
                            Task success in testing — pipeline-ready for live retention experiments.
                          </p>
                        </div>
                        <div className="vibesync-tldr-metric-card--lift funfit-impact-card vibesync-impact-card vibesync-tldr-metric-card relative flex h-full min-h-0 flex-col overflow-hidden">
                          <span className="vibesync-tldr-lift-card-decor" aria-hidden>
                            <VectorDecor name="up1" className="vector-decor--mark vibesync-tldr-lift-card-vector" />
                          </span>
                          <div className="relative z-[1] flex min-h-0 flex-1 flex-col gap-6">
                            <div className="flex shrink-0 justify-center pt-0.5">
                              <Users className="h-8 w-8 text-[#00a8b0]" strokeWidth={2} aria-hidden />
                            </div>
                            <div className="vibesync-tldr-metric-slot flex min-h-[4rem] flex-1 items-center justify-center px-2">
                              <div className="vibesync-tldr-metric-ember text-center" aria-label="40 percent lift">
                                <span className="vibesync-tldr-metric-ember-num">40%</span>
                                <span className="vibesync-tldr-metric-ember-rest"> LIFT</span>
                              </div>
                            </div>
                            <div className="funfit-impact-label shrink-0">Gen Z Micro-moments</div>
                            <p className="funfit-body-text !mb-0 shrink-0 text-center text-[length:var(--type-l2)] leading-relaxed text-[var(--ds-text-secondary)]">
                              Lift in perceived social value vs. baseline utility framing.
                            </p>
                          </div>
                        </div>
                        <div className="funfit-impact-card vibesync-impact-card vibesync-tldr-metric-card flex h-full flex-col items-stretch gap-6">
                          <div className="flex shrink-0 justify-center pt-0.5">
                            <MessageCircle className="h-8 w-8 text-[#00a8b0]" strokeWidth={2} aria-hidden />
                          </div>
                          <div className="vibesync-tldr-metric-slot flex min-h-[4rem] flex-1 items-center justify-center px-2">
                            <div className="vibesync-tldr-metric-ember" aria-label="25 percent share intent lift">
                              <span className="vibesync-tldr-metric-ember-num">+25%</span>
                              <span className="vibesync-tldr-metric-ember-rest"> SHARE INTENT</span>
                            </div>
                          </div>
                          <div className="funfit-impact-label shrink-0">Social engagement</div>
                          <p className="funfit-body-text !mb-0 shrink-0 text-center text-[length:var(--type-l2)] leading-relaxed text-[var(--ds-text-secondary)]">
                            <span className="mb-2.5 block text-[length:var(--type-l3)] tabular-nums leading-snug text-[var(--ds-text-tertiary)]">
                              <span className="text-[#c45c6a]" aria-hidden>
                                ♥
                              </span>{' '}
                              1.2k · <span className="text-[var(--ds-text-secondary)]">↻</span> 428
                            </span>
                            Social reactions &amp; reshares from validated share flows — intent to share trending up.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="vibesync-tldr-impact-card__expand mt-6">
                      <p
                        className="vibesync-tldr-impact-card__expand-text"
                        dangerouslySetInnerHTML={{
                          __html:
                            '100% Task Success Rate in testing. UX rated as &quot;Instagram-native,&quot; significantly boosting retention proxies and social intent.',
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              <div id="problem" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard flex flex-wrap items-end gap-3">
                  <span>Situation: Music Discovery Has Left the Streaming App</span>
                  <img src={problemAmazonStrip} alt="Amazon Music text treatment" className="h-[41px] w-auto object-contain" />
                </h2>
                <div className="vibesync-cyan-callout">
                  <div className="vibesync-problem-label-row">
                    <span className="vibesync-problem-bullet" />
                    <p className="vibesync-problem-label">Situation</p>
                  </div>
                  <p className="vibesync-problem-text">
                    Today&apos;s Gen Z listeners don&apos;t search for music; music finds them. They are highly social, heavily reliant on visual platforms (TikTok, Instagram Reels), and treat music as an extension of their personal identity.
                  </p>
                </div>
                <div className="funfit-zone-grid mt-10">
                  <div className="funfit-zone-card">
                    <h4 className="funfit-zone-title">Who they are</h4>
                    <p className="funfit-zone-text">Gen Z and young millennials (ages 16-25) seeking emotional connection.</p>
                  </div>
                  <div className="funfit-zone-card">
                    <h4 className="funfit-zone-title">Daily behavior</h4>
                    <p className="funfit-zone-text">
                      They associate specific songs with daily micro-moments: a late-night drive, a gym PR, or a hangout with friends.
                    </p>
                  </div>
                  <div className="funfit-zone-card">
                    <h4 className="funfit-zone-title">The disconnect</h4>
                    <p className="funfit-zone-text">
                      They discover a trending sound on a social app, but the journey to save and replay that track on a streaming platform is completely fractured.
                    </p>
                  </div>
                </div>
              </div>

              <div id="goal" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">Goal: Move the Metrics That Matter</h2>
                <p className="funfit-body-text funfit-body-text--spaced-md max-w-[820px]">
                  The sprint aligned the team on one measurable north star: grow meaningful engagement inside Amazon Music by closing the discovery-to-retention loop for Gen Z — not just more plays, but more reasons to return and share.
                </p>
                <div className="vibesync-goal-metrics-frame relative">
                  <CardCornerVector name="up1" />
                  <img src={dataMetricsImage} alt="Business metrics and goals for engagement and retention" className="block h-auto w-full object-contain" />
                </div>
              </div>

              <div id="research" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">
                  Complication: The &quot;Listening Gap&quot; Costing Amazon Music Its Future
                </h2>

                <div className="vibesync-finding-grid">
                  <div className="vibesync-finding-row">
                    <div className="vibesync-finding-text">
                      <h3 className="funfit-section-subtitle-neutral">Business Problem</h3>
                      <p className="funfit-body-text">
                        Despite a massive song library and deep Amazon ecosystem integration, Amazon Music struggles with <span className="marker-highlight marker-highlight--cyan">youth retention</span>. We are losing the cultural conversation to competitors who prioritize social sharing.
                      </p>
                    </div>
                    <div className="vibesync-finding-media vibesync-finding-media--r1">
                      <img src={research1} alt="Social music discovery data chart" className="block w-full h-auto object-contain" />
                    </div>
                  </div>

                  <div className="vibesync-finding-row vibesync-finding-row--reverse">
                    <div className="vibesync-finding-media vibesync-finding-media--r2">
                      <img src={research2} alt="Streaming discovery behavior data" className="block w-full h-auto object-contain" />
                    </div>
                    <div className="vibesync-finding-text">
                      <h3 className="funfit-section-subtitle-neutral">Where the Gap Widens</h3>
                      <p className="funfit-body-text">
                        Discovery starts inside fast-moving visual feeds, while streaming apps receive users only after the emotional context is already formed elsewhere.
                      </p>
                    </div>
                  </div>

                  <div className="vibesync-finding-row">
                    <div className="vibesync-finding-text">
                      <h3 className="funfit-section-subtitle-neutral">User Pain Point (The Friction)</h3>
                      <figure className="vibesync-quote-bubble vibesync-quote-bubble--cyan mt-6">
                        <blockquote className="vibesync-quote-bubble__text">
                          &quot;I hear a song on a story, but sharing how it makes me feel on Amazon Music feels like{' '}
                          <span className="marker-highlight marker-highlight--cyan">filling out a spreadsheet</span>.&quot;
                        </blockquote>
                        <figcaption className="vibesync-quote-bubble__meta">From research</figcaption>
                      </figure>
                      <p className="funfit-body-text mt-5">
                        There is a severe lack of tools for emotional expression and social currency within the current app architecture. Users are forced to leave Amazon Music to share their vibe.
                      </p>
                    </div>
                    <div className="vibesync-finding-media vibesync-finding-media--r3">
                      <img src={research3} alt="Contextual music discovery evidence" className="block w-full h-auto object-contain" />
                    </div>
                  </div>

                  <div className="vibesync-finding-row vibesync-finding-row--reverse">
                    <div className="vibesync-finding-media vibesync-finding-media--r4">
                      <img src={research4} alt="Emotional pulse testing result" className="block w-full h-auto object-contain" />
                    </div>
                    <div className="vibesync-finding-text">
                      <h3 className="funfit-section-subtitle-neutral">What the Current Experience Misses</h3>
                      <p className="funfit-body-text">
                        Playback alone is not enough. Gen Z expects products to support <span className="marker-highlight marker-highlight--cyan">emotional expression</span>, visible identity, and easy sharing inside the same flow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="solution" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">The Pivot: Redefining the Experience</h2>

                <h3 className="funfit-section-subtitle-neutral">How Might We...</h3>
                <div className="rounded-[20px] bg-[#f8f8f8] px-6 py-10 shadow-[0_4px_10px_rgba(0,0,0,0.2)] sm:px-8 sm:py-12">
                  <div className="flex flex-col gap-12 lg:gap-16">
                    <div className="vibesync-cyan-callout">
                      <div className="vibesync-problem-label-row">
                        <span className="vibesync-problem-bullet" />
                        <p className="vibesync-problem-label">Pivot question</p>
                      </div>
                      <p className="vibesync-problem-text vibesync-pivot-question-text">
                        How might we transform Amazon Music from a passive utility app into an expressive social hub, enabling Gen Z to seamlessly capture, curate, and share their life moments through music?
                      </p>
                    </div>

                    <div className="vibesync-solution-pair mx-auto flex w-full max-w-[666px] flex-col items-center gap-12 text-center lg:gap-14">
                      <img src={linkFrom} alt="From journey map" className="h-auto w-full object-contain" />
                      <div
                        className="flex w-full max-w-[520px] flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-5"
                        aria-hidden
                      >
                        <span className="w-full rounded-full border border-black/10 bg-white px-5 py-3.5 text-center text-[length:var(--type-l2)] font-semibold text-[#555555] shadow-sm sm:w-auto">
                          Passive utility
                        </span>
                        <VectorDecor
                          name={pickFlowVertical(0)}
                          className="vector-decor--connector sm:hidden"
                        />
                        <span
                          className="w-full rounded-full border-2 px-5 py-3.5 text-center text-[length:var(--type-l2)] font-semibold text-black shadow-sm sm:w-auto"
                          style={{ borderColor: VIBE_CYAN, backgroundColor: 'rgba(0,213,221,0.08)' }}
                        >
                          Expressive social hub
                        </span>
                      </div>
                      <img src={linkTo} alt="To future social music experience" className="h-auto w-full object-contain" />
                    </div>
                  </div>
                </div>

                <div className="funfit-subsection funfit-subsection--with-top">
                  <h2 className="funfit-section-title funfit-section-title--standard">The Retention Opportunity</h2>
                  <div className="rounded-[20px] bg-black px-0 py-[34px]">
                    <div className="space-y-[61px] px-4 md:px-6">
                      <div className="mx-auto w-full max-w-[1164px] overflow-hidden rounded-[20px]">
                        <img src={retentionA} alt="User retention quote panel one" className="block w-full h-auto object-contain" />
                      </div>
                      <div className="mx-auto w-full max-w-[1164px] overflow-hidden rounded-[20px]">
                        <img src={retentionB} alt="User retention quote panel two" className="block w-full h-auto object-contain" />
                      </div>
                      <div className="px-2 py-8 text-center md:px-6">
                        <h4 className="text-[length:var(--ds-text-display)] leading-[1.1] text-[#00d5dd]">Music as Identity Expression + Social Currency</h4>
                        <p className="mx-auto mt-6 max-w-[582px] font-normal leading-[1.85] text-white/90" style={{ fontSize: 'var(--type-l3)', letterSpacing: 'var(--type-track-body)' }}>
                          Social sharing brings users in, but expressive ownership is what gives them a reason to stay and keep shaping their profile inside the product.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="funfit-section-subtitle-neutral">Designing for Emotional Return</h3>
                <div className="space-y-8">
                  <div className="vibesync-cyan-callout">
                    <div className="vibesync-problem-label-row">
                      <span className="vibesync-problem-bullet" />
                      <p className="vibesync-problem-label">Design intent</p>
                    </div>
                    <p className="vibesync-problem-text">
                      Make playlists <WordBackdropDecor vector="highlight2">expressive</WordBackdropDecor> and{' '}
                      <WordBackdropDecor vector="love">shareable</WordBackdropDecor>.
                    </p>
                  </div>
                  <div className="rounded-[20px] bg-white px-4 py-6 shadow-[0_4px_10px_rgba(0,0,0,0.12)] sm:px-6 sm:py-8">
                    <div className="group vibesync-swap-shell mx-auto w-full max-w-[981px] cursor-pointer">
                      <img
                        src={playlistsExpressive}
                        alt="Playlist expression feature board"
                        className="vibesync-swap-shell__img vibesync-swap-shell__img--base"
                      />
                      <img
                        src={playlistsExpressiveHover}
                        alt="Playlist expression — alternate explorations"
                        className="vibesync-swap-shell__img vibesync-swap-shell__img--overlay"
                      />
                      <p className="vibesync-swap-shell__hint vibesync-swap-shell__hint--base">Default view</p>
                      <p className="vibesync-swap-shell__hint vibesync-swap-shell__hint--hover">Hover: from usable to pleasurable</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="define" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">Define</h2>

                <div className="vibesync-define-shell">
                  <div className="vibesync-define-stack">
                    <div className="vibesync-define-block">
                      <div className="vibesync-define-heading-row">
                        <h3 className="vibesync-define-heading">HMW</h3>
                        <img src={hmwDecor} alt="" className="h-[122px] w-[114px] object-cover" />
                      </div>
                      <div className="flex flex-col gap-14">
                        <div>
                          <p className="vibesync-define-inter-label">For New User Acquisition</p>
                          <ul className="vibesync-define-bullet-list">
                            <li>Capture a life moment and turn it into something worth sharing.</li>
                          </ul>
                        </div>
                        <div>
                          <p className="vibesync-define-inter-label">For Retention</p>
                          <ul className="vibesync-define-bullet-list">
                            <li>Turn playlists into expressive spaces users want to revisit and update.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="vibesync-define-block">
                      <div className="vibesync-define-heading-row py-5">
                        <h3 className="vibesync-define-heading">User Journey</h3>
                        <img src={userJourneyDecor} alt="" className="h-[108px] w-[105px] object-cover" />
                      </div>
                      <div className="group vibesync-swap-shell vibesync-swap-shell--dark w-full">
                        <img
                          src={currentJourneyMap}
                          alt="User journey map for Vibe Sync"
                          className="vibesync-swap-shell__img vibesync-swap-shell__img--base"
                        />
                        <img
                          src={overlay2}
                          alt="User journey map — annotated comparison"
                          className="vibesync-swap-shell__img vibesync-swap-shell__img--overlay"
                        />
                        <VectorDecor name="love" className="vibesync-journey-love-badge" />
                        <p className="vibesync-swap-shell__hint vibesync-swap-shell__hint--base">Baseline journey</p>
                        <p className="vibesync-swap-shell__hint vibesync-swap-shell__hint--hover">Hover: annotated layer</p>
                      </div>
                    </div>

                    <div className="vibesync-define-block">
                      <div className="vibesync-define-heading-row py-5">
                        <h3 className="vibesync-define-heading">User Flow</h3>
                        <img src={userFlowDecor} alt="" className="h-[108px] w-[105px] object-cover" />
                      </div>
                      <div className="vibesync-define-diagram">
                        <img src={userFlowMap} alt="User flow map for Vibe Sync" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="iteration" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">The Ecosystem: Introducing Vibe Sync</h2>
                <div className="funfit-subsection">
                  <h3 className="funfit-section-subtitle-accent funfit-section-subtitle-accent--lg">Iterating for Intuitive Expression (Low-Fi to High-Fi)</h3>
                  <p className="funfit-body-text funfit-body-text--spaced-lg max-w-[820px]">
                    We started with rapid wireframing to test the core mental model of &apos;Moment -&gt; Music -&gt; Share.&apos; Early user feedback (v1) revealed that the sharing flow felt too heavy. In our High-Fi iterations (v2), we stripped away secondary actions, prioritizing a one-tap contextual sharing experience and rich visual customizability.
                  </p>
                  <div className="mx-auto w-full max-w-[1169px] overflow-hidden">
                    <img src={sketchBoard} alt="From sketches exploration board" className="block h-auto w-full object-contain" />
                  </div>
                  <div className="my-8 flex flex-col items-center gap-3 text-center">
                    <p
                      className="m-0 font-sans text-[length:var(--type-l3)] font-semibold leading-[var(--type-l3-lh)] text-black/85"
                      style={{ letterSpacing: 'var(--type-track-body)' }}
                    >
                      From Sketches
                    </p>
                    <VectorDecor name={pickFlowVertical(9)} className="vector-decor--connector" />
                    <p
                      className="m-0 font-sans text-[length:var(--type-l3)] font-semibold leading-[var(--type-l3-lh)] text-black/85"
                      style={{ letterSpacing: 'var(--type-track-body)' }}
                    >
                      Prototype
                    </p>
                  </div>
                  <div className="mx-auto w-full max-w-[1162px] overflow-hidden">
                    <img src={prototypeSpread} alt="High fidelity prototype spread" className="block h-auto w-full object-contain" />
                  </div>
                </div>

                <div className="funfit-subsection">
                  <h3 className="funfit-section-subtitle-neutral">From System Thinking to Interface Expression</h3>
                  <p className="funfit-body-text max-w-[760px]">Each round translated the same social layer into clearer flows, more legible components, and a more effortless share experience.</p>
                </div>
              </div>

              <div id="showcase" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">The Happy Path</h2>
                <div className="funfit-subsection">
                  <h3 className="funfit-section-subtitle-neutral">The Happy Path: Translating a Moment into Music</h3>
                  <p className="funfit-body-text funfit-body-text--spaced-md">
                    The core journey focused on helping users move from emotion to expression without breaking the flow:
                  </p>
                  <div className="funfit-zone-grid funfit-zone-grid--vibesync-showcase mb-12">
                    <div className="funfit-zone-card">
                      <h4 className="funfit-zone-title">Capture the Vibe</h4>
                      <p className="funfit-zone-text">
                        Intuitive creation tools that link camera rolls/moods directly to generated playlists.
                      </p>
                    </div>
                    <div className="funfit-zone-card">
                      <h4 className="funfit-zone-title">Express &amp; Customize</h4>
                      <p className="funfit-zone-text">
                        Dynamic typography and visual assets that allow users to own the aesthetic of their music.
                      </p>
                    </div>
                    <div className="funfit-zone-card">
                      <h4 className="funfit-zone-title">Frictionless Sharing</h4>
                      <p className="funfit-zone-text">
                        Deep-linked social exports that drive new users back to the Amazon Music ecosystem.
                      </p>
                    </div>
                  </div>
                  <h4 className="mb-4 text-[length:var(--ds-text-title)] leading-[1.5] text-black">First-time user</h4>
                  <div className="mx-auto w-full max-w-[1161px] overflow-hidden">
                    <img src={showcaseFirst} alt="First-time user showcase screens" className="block h-auto w-full object-contain" />
                  </div>

                  <h4 className="mb-4 mt-12 text-[length:var(--ds-text-title)] leading-[1.5] text-black">Regular Users</h4>
                  <div className="mx-auto w-full max-w-[1162px] overflow-hidden">
                    <img src={showcaseRegular} alt="Regular user showcase screens" className="block h-auto w-full object-contain" />
                  </div>
                </div>
              </div>

              <div id="metrics" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">Success Metrics &amp; System</h2>
                <div className="funfit-subsection">
                  <h3 className="funfit-section-subtitle-neutral">Design Methodology - Behind the Scene</h3>
                  <p className="text-center text-xl font-medium text-black mb-6">(Scroll to discover)</p>
                  <div ref={methodStripRef} className="vibesync-method-strip">
                    {[methodology1, methodology2, methodology3, methodology4, methodology5].map((img, idx) => (
                      <div key={idx} className="vibesync-method-frame">
                        <img src={img} alt={`Design methodology panel ${idx + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="funfit-subsection">
                  <h3 className="funfit-section-subtitle-neutral">Beyond the Pixels: Design System &amp; Developer Handoff</h3>
                  <p className="funfit-body-text funfit-body-text--spaced-md">
                    To ensure scalability, I didn&apos;t just design standalone screens; I integrated Vibe Sync into Amazon&apos;s existing infrastructure.
                  </p>
                  <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                    <div className="funfit-overview-meta-card !mb-0">
                      <p className="funfit-meta-heading">
                        <span className="marker-highlight marker-highlight--cyan">Expanding the Design System</span>
                      </p>
                      <p className="funfit-meta-text">
                        I audited Amazon Music&apos;s current component library and introduced a new &quot;Social-Expressive&quot; module. This included new gradient tokens, emotive typography styles, and flexible card components that maintain brand consistency while appealing to Gen Z.
                      </p>
                    </div>
                    <div className="funfit-overview-meta-card !mb-0">
                      <p className="funfit-meta-heading">
                        <span className="marker-highlight marker-highlight--blue">Developer Readiness</span>
                      </p>
                      <p className="funfit-meta-text">
                        All final designs were organized with strict naming conventions, responsive auto-layout constraints, and detailed interaction specs (state changes, animations) to ensure a smooth handoff to engineering.
                      </p>
                    </div>
                  </div>
                  <div
                    className="funfit-overview-meta-card funfit-overview-meta-card--flush !mb-0 mt-8 !border-0 !bg-transparent !shadow-none"
                  >
                    <DraggableQuarterImage
                      src={designSystemBoard}
                      alt="Design system and component UI library for Vibe Sync"
                      viewportHeight="min(320px, 48vw)"
                      defaultZoom={0.5}
                    />
                  </div>
                </div>

                <div className="funfit-subsection">
                  <h3 className="funfit-section-subtitle-neutral">Measuring Success: Validating Emotional Resonance</h3>
                  <p className="funfit-body-text funfit-body-text--spaced-md">
                    As this was a conceptual sprint, we couldn&apos;t track live conversion data (A/B testing or KPI tracking). Instead, we conducted rigorous usability testing with 10 target Gen Z users to validate our strategic hypotheses.
                  </p>
                  <div className="funfit-impact-stats-block">
                    <div className="funfit-impact-grid">
                      <div className="funfit-impact-card vibesync-impact-card vibesync-impact-card--cyan">
                        <div className="funfit-impact-value">100%</div>
                        <div className="funfit-impact-label">Task Success Rate</div>
                        <p className="mt-4 funfit-body-text !mb-0 text-center">
                          on the <span className="marker-highlight marker-highlight--blue">&apos;Create &amp; Share a Vibe&apos;</span> happy path.
                        </p>
                      </div>
                      <div className="funfit-impact-card vibesync-impact-card vibesync-impact-card--cyan">
                        <div className="funfit-impact-value">10</div>
                        <div className="funfit-impact-label">Target Gen Z Users</div>
                        <p className="mt-4 funfit-body-text !mb-0 text-center">Interviewed and tested in this conceptual validation sprint.</p>
                      </div>
                      <div className="funfit-impact-card vibesync-impact-card vibesync-impact-card--cyan">
                        <p className="text-[length:var(--type-l4)] font-bold leading-[var(--type-l4-lh)] text-[#00d5dd]">Retention proxy</p>
                        <p className="mt-4 funfit-body-text !mb-0 text-center">
                          Users explicitly stated the <span className="marker-highlight marker-highlight--cyan">visual customization</span> would make them return to the app to update their profiles.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 grid gap-8 md:grid-cols-2">
                    <figure className="vibesync-user-quote vibesync-user-quote--cyan !mb-0">
                      <figcaption className="vibesync-user-quote__speaker">
                        <span className="vibesync-user-quote__dot" aria-hidden />
                        Target user · Age 19
                      </figcaption>
                      <blockquote className="vibesync-user-quote__bubble">
                        &quot;This doesn&apos;t feel like <span className="marker-highlight marker-highlight--cyan">Amazon</span>. It feels like an app my friends and I would actually use to{' '}
                        <span className="marker-highlight marker-highlight--blue">show off our music taste</span>.&quot;
                      </blockquote>
                    </figure>
                    <figure className="vibesync-user-quote vibesync-user-quote--cyan !mb-0">
                      <figcaption className="vibesync-user-quote__speaker">
                        <span className="vibesync-user-quote__dot" aria-hidden />
                        Target user · Age 22
                      </figcaption>
                      <blockquote className="vibesync-user-quote__bubble">
                        &quot;I love how easy it is to <span className="marker-highlight marker-highlight--blue">pair a photo with a song</span> and push it straight to my IG stories. The{' '}
                        <span className="marker-highlight marker-highlight--cyan">templates</span> are so clean.&quot;
                      </blockquote>
                    </figure>
                  </div>
                  <div className="mx-auto w-full max-w-[1169px] overflow-hidden">
                    <img src={successWide} alt="Success metric dashboard" className="mt-10 block h-auto w-full object-contain" />
                  </div>
                </div>
              </div>

              <div id="reflection" className="funfit-section">
                <h2 className="funfit-section-title funfit-section-title--standard">Reflection: Designing for Culture, Not Just Utility</h2>
                <div className="funfit-reflection-block">
                  <h3 className="funfit-reflection-heading">What this challenge reinforced</h3>
                  <ul className="vibesync-reflection-points">
                    <li className="vibesync-reflection-points__item">
                      <span className="vibesync-reflection-points__icon" aria-hidden>
                        <Heart className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <p className="funfit-reflection-text !mb-0">
                        This challenge reinforced that in highly competitive markets like music streaming, functional UX is not enough; you must design for emotional resonance and cultural behavior.
                      </p>
                    </li>
                    <li className="vibesync-reflection-points__item">
                      <span className="vibesync-reflection-points__icon" aria-hidden>
                        <Cpu className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <p className="funfit-reflection-text !mb-0">
                        If I had more time, I would partner with engineering to prototype the actual performance load of the dynamic generative assets.
                      </p>
                    </li>
                    <li className="vibesync-reflection-points__item">
                      <span className="vibesync-reflection-points__icon" aria-hidden>
                        <BarChart2 className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <p className="funfit-reflection-text !mb-0">
                        I would also run A/B tests to see which visual templates drive the highest share-to-click-through rate.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center py-10">
                  <motion.img
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    src={thankyou}
                    alt="Thank you note"
                    className="vibesync-reflection-thanks object-contain"
                  />
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
