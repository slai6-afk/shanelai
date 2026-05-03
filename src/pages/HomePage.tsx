import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Linkedin, Mail } from 'lucide-react';
import { LINKEDIN_PROFILE_URL } from '../constants/links';
import { Fragment, useEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AboutStickerSpan } from '../components/about/AboutStickerSpan';
import { WordBackdropDecor } from '../components/vector-decor';
import talkieSticker from '../assets/vector/talkie.png';
import temuSticker from '../assets/vector/temu.png';
import { Footer } from '../components/Footer';
import { HeroSpiral } from '../components/HeroSpiral';
import { Navigation } from '../components/Navigation';
import { SketchCursorHint } from '../components/SketchCursorHint';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import ammVideo from '../assets/AMM_video.mp4';
import memoryNavigatorPoster from '../assets/Gemini_Generated_Image_c23ldzc23ldzc23l.png';
import nycHeroVideo from '../assets/herovideo_NYC.mov';
import funFitLandPoster from '../assets/bebbc88443fdebed4e56ae9980488dadc3739961.png';
import titleImage from '../assets/title.png';
import nycCover from '../assets/cover.png';
import homeVideo from '../assets/home video.mp4';
import workIcon from '../assets/work.png';
import happyPlaygroundIcon from '../assets/happyplayground.png';
import playOneImage from '../assets/play1.png';
import playTwoImage from '../assets/play2.png';

/** Same video as FunFitLand case study hero — matches Figma 166:176 preview. */
const funFitLandHeroVideo =
  'https://cdn.builder.io/o/assets%2F46b2761d61834692828a7f7e644854fc%2F12f602c331974b6a80f9c9034a740790?alt=media&token=0110fa1e-2440-40b4-845a-2032514a4142&apiKey=46b2761d61834692828a7f7e644854fc';

/** Hero “Previously @” Temu sticker frame */
const HOME_HERO_STICKER_WIDTH = 'min(124px, 33vw)';
/** Talkie / MiniMax asset reads smaller in-frame — ~2× Temu so the pop sticker matches weight */
const HOME_HERO_MINIMAX_STICKER_WIDTH = 'min(248px, 66vw)';

interface HomeProject {
  title: string;
  description: ReactNode;
  /** Scribble tint + scope class for `WordBackdropDecor` in the teaser line */
  slideAccent: 'vibe' | 'temu' | 'nyc' | 'funfit';
  tags: string[];
  /** When omitted, the slide is not wrapped in a link. */
  link?: string;
  mediaType: 'image' | 'video';
  mediaSrc: string;
  mediaPoster?: string;
  mediaAlt: string;
  mediaPosition?: 'left' | 'right';
  contentLayout?: 'distributed' | 'centered';
  /** Rounded media frame; default 20px (aligned with playground + project cards). */
  mediaBorderRadius?: string;
  /** Gap between tag pills in px; Figma uses 12. */
  tagsGap?: number;
  /** Horizontal gap between media and copy at md+; Figma 166:176 uses 24px. */
  columnGap?: string;
  /** Handwritten cursor hint on hover (all slides). */
  hoverHint?: string;
}

const homeProjects: HomeProject[] = [
  {
    title: 'Temu: Fixing the "Leaky Bucket" of AI Support',
    slideAccent: 'temu',
    description: (
      <Fragment>
        How I redesigned Temu&apos;s AI support ecosystem, dropping manual agent escalation from{' '}
        <WordBackdropDecor vector="highlight2">81%</WordBackdropDecor> to{' '}
        <WordBackdropDecor vector="highlight3">20%</WordBackdropDecor> through intent-driven routing and strategic UI
        friction.
      </Fragment>
    ),
    tags: ['Product Design', 'AI & NLP', 'Support deflection', 'Data viz'],
    link: '/case-study/temu-ai-support',
    mediaType: 'video',
    mediaSrc: homeVideo,
    mediaAlt: 'Temu AI support case study preview video',
    mediaPosition: 'left',
    contentLayout: 'distributed',
    hoverHint: 'Click to see Temu AI support redesign',
  },
  {
    title: 'Amazon Music: Bridging the "Gen-Z Discovery Gap" through expressive social ecosystems',
    slideAccent: 'vibe',
    description: (
      <Fragment>
        How I led product strategy in a{' '}
        <WordBackdropDecor vector="highlight2">4-week sprint</WordBackdropDecor> to transform Amazon Music into a{' '}
        <WordBackdropDecor vector="highlight3">Gen Z social hub</WordBackdropDecor>, bridging the discovery-to-retention gap.
      </Fragment>
    ),
    tags: ['design', 'Product Thinking', 'Figma make', 'Social media'],
    link: '/case-study/vibe-sync',
    mediaType: 'video',
    mediaSrc: ammVideo,
    mediaPoster: memoryNavigatorPoster,
    mediaAlt: 'Amazon Music concept preview video',
    mediaPosition: 'right',
    contentLayout: 'centered',
    hoverHint: 'Click to see Vibe Sync for Amazon Music',
  },
  {
    title: 'NYC Tourism: Discover the Big Apple & Making It Your Home',
    slideAccent: 'nyc',
    description: (
      <Fragment>
        How I re-engineered NYC tourism IA to reduce cognitive load for students by{' '}
        <WordBackdropDecor vector="highlight2">35%</WordBackdropDecor> through{' '}
        <WordBackdropDecor vector="highlight3">personalized discovery</WordBackdropDecor>
      </Fragment>
    ),
    tags: ['UX', 'Redesign', 'IA'],
    link: '/case-study/nyc-tourism',
    mediaType: 'video',
    mediaSrc: nycHeroVideo,
    mediaPoster: nycCover,
    mediaAlt: 'NYC Tourism Redesign preview video',
    mediaPosition: 'left',
    contentLayout: 'distributed',
    hoverHint: 'Click to see how I make NYC feel like home',
  },
  {
    title: 'FunFitLand: Making Fitness Accessible to Everyone In Immersive World',
    slideAccent: 'funfit',
    description: (
      <Fragment>
        Designing for the extremes: How I built an{' '}
        <WordBackdropDecor vector="highlight2">inclusive VR fitness framework</WordBackdropDecor> that expanded accessibility
        to <WordBackdropDecor vector="highlight3">90%</WordBackdropDecor> of diverse physical abilities
      </Fragment>
    ),
    tags: ['VR', 'Accessibility', 'Design'],
    link: '/case-study/funfitland',
    mediaType: 'video',
    mediaSrc: funFitLandHeroVideo,
    mediaPoster: funFitLandPoster,
    mediaAlt: 'FunFitLand VR fitness preview video',
    mediaPosition: 'left',
    contentLayout: 'distributed',
    tagsGap: 12,
    columnGap: '24px',
    hoverHint: 'Click to see how I design inclusive VR fitness',
  },
];

interface SelectedWorkSlideProps {
  project: HomeProject;
  index: number;
}

function SelectedWorkSlide({ project, index }: SelectedWorkSlideProps) {
  const slideWidth = 'min(100%, 1440px)';
  const mediaRadius = project.mediaBorderRadius ?? '20px';
  const tagsGap = project.tagsGap ?? 8;
  const columnGap = project.columnGap;
  const [mediaFailed, setMediaFailed] = useState(false);
  const [shouldLoadMedia, setShouldLoadMedia] = useState(index < 3);
  const [isInView, setIsInView] = useState(false);
  const mediaContainerRef = useRef<HTMLDivElement | null>(null);
  const mediaVideoRef = useRef<HTMLVideoElement | null>(null);
  const mediaPositionAtMdUp = index % 2 === 0 ? 'right' : 'left';
  const needsEdgeCrop = project.slideAccent === 'temu';

  useEffect(() => {
    const target = mediaContainerRef.current;
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry) {
          return;
        }

        if (entry.isIntersecting) {
          setShouldLoadMedia(true);
          setIsInView(true);
          return;
        }

        setIsInView(false);
      },
      {
        // Preload earlier so next cards are ready before entering viewport.
        rootMargin: '1200px 0px',
        threshold: 0.15,
      }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (project.mediaType !== 'video') {
      return;
    }

    const video = mediaVideoRef.current;
    if (!video) {
      return;
    }

    if (isInView) {
      void video.play().catch(() => {
        // Some browsers block autoplay in special power/data-saving modes.
      });
      return;
    }

    video.pause();
  }, [isInView, project.mediaType]);

  const content = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: project.contentLayout === 'centered' ? 'center' : 'space-between',
        gap: '17px',
        height: '100%',
        width: '100%',
        maxWidth: '309px',
      }}
      className={`home-selected-work__content w-full lg:py-1 ${project.contentLayout === 'centered' ? 'lg:min-h-[422px]' : 'lg:min-h-[476px]'}`}
    >
      <div style={{ paddingTop: '10px' }}>
        <h3
          style={{
            color: 'var(--ds-text-primary)',
            fontSize: 'clamp(18px, 1.7vw, 24px)',
            fontWeight: 800,
            fontFamily: 'var(--font-heading)',
            lineHeight: 1.2,
            letterSpacing: '-0.025em',
            margin: 0,
            marginBottom: '18px',
          }}
        >
          {project.title}
        </h3>

        <div
          className="home-selected-work__tags"
          style={{ display: 'flex', gap: `${tagsGap}px`, flexWrap: 'wrap', marginBottom: '18px' }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                backgroundColor: 'var(--ds-accent-tag)',
                color: '#ffffff',
                minHeight: '30px',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: 'var(--type-l1)',
                fontWeight: 400,
                letterSpacing: '0.02em',
                lineHeight: '18px',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <p
        className="home-selected-work__description"
        style={{
          color: 'var(--ds-text-secondary)',
          fontSize: 'var(--type-l3)',
          fontWeight: 400,
          lineHeight: 'var(--type-l3-lh)',
          letterSpacing: 'var(--type-track-body)',
          margin: 0,
          maxWidth: '309px'
        }}
      >
        {project.description}
      </p>
    </div>
  );

  const cursorLabel = project.hoverHint ?? '';

  /** Handwritten hint + slight zoom only when hovering the media frame (not title/copy). */
  const media = (
    <div ref={mediaContainerRef} className="home-selected-work__media" style={{ flex: '1 1 0', minWidth: 0 }}>
      <SketchCursorHint
        label={cursorLabel}
        enabled={cursorLabel.length > 0}
        className="block w-full"
      >
        <div
          className="ds-media-frame origin-center overflow-hidden"
          style={{
            borderRadius: mediaRadius,
            boxShadow: 'none',
            backgroundColor: 'var(--ds-bg-page)',
            position: 'relative',
          }}
        >
          {project.mediaType === 'video' && !mediaFailed ? (
            <video
              ref={mediaVideoRef}
              src={shouldLoadMedia ? project.mediaSrc : undefined}
              autoPlay={isInView}
              loop
              muted
              playsInline
              preload={shouldLoadMedia ? 'metadata' : 'none'}
              aria-label={project.mediaAlt}
              className="block w-full origin-center scale-100 transition-transform duration-300 ease-out group-hover:scale-[1.015]"
              style={{
                aspectRatio: '818 / 476',
                objectFit: 'cover',
                ...(needsEdgeCrop ? { clipPath: 'inset(3px 0 3px 0)' } : {}),
              }}
              onError={() => setMediaFailed(true)}
            />
          ) : (
            <ImageWithFallback
              src={project.mediaPoster ?? project.mediaSrc}
              alt={project.mediaAlt}
              className="block w-full origin-center scale-100 transition-transform duration-300 ease-out group-hover:scale-[1.015]"
              style={{
                aspectRatio: '818 / 476',
                objectFit: 'cover',
              }}
            />
          )}
        </div>
      </SketchCursorHint>
    </div>
  );

  const row = (
    <div
      className={`home-selected-work__row flex flex-col md:flex-row md:items-center ${
        columnGap ? '' : 'gap-4 sm:gap-6 md:gap-[17px]'
      }`}
      style={{
        width: '100%',
        margin: '0 auto',
        ...(columnGap ? { gap: columnGap } : {}),
      }}
    >
      {mediaPositionAtMdUp === 'right' ? (
        <>
          {content}
          {media}
        </>
      ) : (
        <>
          {media}
          {content}
        </>
      )}
    </div>
  );

  return (
    <section
      className={`home-selected-work home-selected-work--${project.slideAccent} home-selected-work--stack mx-3 sm:mx-5 md:mx-8 lg:mx-12 rounded-[20px] sm:rounded-[24px] md:rounded-[28px] px-4 sm:px-6 md:px-10 lg:px-16`}
      style={{
        minHeight: '100vh',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'normal',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'max(108px, 11vh)',
        paddingBottom: 'max(56px, 7vh)',
        zIndex: 10 + index,
      }}
    >
      <div className="mx-auto w-full" style={{ width: slideWidth }}>
        {project.link ? (
          <Link
            to={project.link}
            className="group block w-full"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {row}
          </Link>
        ) : (
          row
        )}
      </div>
    </section>
  );
}

export function HomePage() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const selectedWorksRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: heroSectionRef,
    offset: ['start start', 'end start'],
  });
  const spiralOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.12]);
  const spiralScale = useTransform(scrollYProgress, [0, 0.65], [1.06, 0.62]);

  return (
    <div
      ref={scrollContainerRef}
      className="home-scroll-container"
      style={{
        height: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        backgroundColor: 'var(--ds-bg-surface)',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        scrollPaddingTop: '88px',
      }}
    >
      <Navigation />

      <section
        ref={heroSectionRef}
        className="px-4 sm:px-6 md:px-12 lg:px-16"
        style={{
          minHeight: '100vh',
          scrollSnapAlign: 'start',
          scrollSnapStop: 'always',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'max(84px, 8vh)',
          paddingBottom: 'max(20px, 2.5vh)',
        }}
      >
        <div className="max-w-[1280px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
              textAlign: 'center',
              minHeight: 'calc(100dvh - 140px)',
              paddingTop: '10px',
              paddingBottom: '10px'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                width: '100%'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'min(580px, calc(100dvh - 320px))',
                  minHeight: '360px'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 'clamp(112px, 32%, 210px)',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0
                  }}
                >
                  <motion.div
                    style={{
                      display: 'flex',
                      width: 'min(92vw, 760px, calc(100dvh - 320px))',
                      height: 'min(92vw, 760px, calc(100dvh - 320px))',
                      opacity: spiralOpacity,
                      scale: spiralScale,
                      filter: 'saturate(1.22) contrast(1.06)',
                      transformOrigin: 'center center',
                    }}
                  >
                    <HeroSpiral
                      totalDots={680}
                      dotRadius={2.35}
                      duration={4.6}
                      margin={20}
                      minOpacity={0.18}
                      maxOpacity={0.92}
                      minScale={0.62}
                      maxScale={1.75}
                      useMultipleColors
                      colors={[
                        { color: '#F3EDFF' },
                        { color: '#DFC8FF' },
                        { color: '#F8DFFF' },
                      ]}
                      size={760}
                    />
                  </motion.div>
                </div>

                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '18px',
                    minHeight: 'min(580px, calc(100dvh - 320px))',
                    marginTop: 'clamp(16px, 3vh, 38px)',
                    marginBottom: 'clamp(16px, 3vh, 38px)',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    width: '100%',
                    maxWidth: '713px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  <SketchCursorHint
                    label="This is Shane Lai, WASSUP?"
                    className="inline-block"
                  >
                    <img
                      src={titleImage}
                      alt="Shane Lai"
                      style={{
                        width: 'clamp(108px, 14vw, 216px)',
                        height: 'auto',
                        display: 'block'
                      }}
                    />
                  </SketchCursorHint>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', width: '100%', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', alignItems: 'center' }}>
                      <p
                        style={{
                          margin: 0,
                          color: 'var(--ds-text-tertiary)',
                          fontSize: 'clamp(12px, 1.1vw, 15px)',
                          lineHeight: 1.4,
                          fontWeight: 700,
                          fontFamily: 'var(--font-heading)',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                        }}
                      >
                        PRODUCT DESIGNER IN NYC🗽
                      </p>

                      <p
                        style={{
                          margin: 0,
                          color: 'var(--ds-text-primary)',
                          fontSize: 'clamp(22px, 3.2vw, 48px)',
                          lineHeight: 1.1,
                          fontWeight: 900,
                          fontFamily: 'var(--font-heading)',
                          letterSpacing: '-0.03em',
                          maxWidth: '680px',
                        }}
                      >
                        I design AI and consumer products that turn human behavior into better interactions — 3 years strong.
                      </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                      {/* Credentials */}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <p style={{ margin: 0, color: 'var(--ds-text-tertiary)', fontSize: 'var(--ds-badge-fz)', fontWeight: 'var(--ds-badge-weight)' as never, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--ds-badge-font)' }}>
                          Previously at
                        </p>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                          <AboutStickerSpan
                            stickerSrc={temuSticker}
                            stickerLabel="Temu — open AI support case study"
                            vectorHighlight={false}
                            stickerWidth={HOME_HERO_STICKER_WIDTH}
                            motion={{ restRotateDeg: -3, hoverRotateDeg: 12, restOffsetY: -48, restNudgeX: 3, hoverNudgeX: 1 }}
                          >
                            <a
                              href="/case-study/temu-ai-support"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px',
                                height: 'var(--ds-badge-h)',
                                padding: '0 var(--ds-badge-px)',
                                borderRadius: 'var(--ds-badge-radius)',
                                backgroundColor: 'var(--ds-badge-temu-bg)',
                                color: 'var(--ds-badge-temu-fg)',
                                fontSize: 'var(--ds-badge-fz)',
                                fontWeight: 'var(--ds-badge-weight)' as never,
                                fontFamily: 'var(--ds-badge-font)',
                                letterSpacing: 'var(--ds-badge-track)',
                                textTransform: 'uppercase',
                                textDecoration: 'none',
                              }}
                            >
                              Temu
                              <span style={{ opacity: 0.7, fontSize: '10px' }}>↗</span>
                            </a>
                          </AboutStickerSpan>
                          <AboutStickerSpan
                            stickerSrc={talkieSticker}
                            stickerLabel="Sticker: MiniMax — Talkie"
                            vectorHighlight={false}
                            stickerWidth={HOME_HERO_MINIMAX_STICKER_WIDTH}
                            motion={{ restRotateDeg: 5, hoverRotateDeg: -10, restOffsetY: -48, restNudgeX: -5, hoverNudgeX: -3 }}
                          >
                            <span
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px',
                                height: 'var(--ds-badge-h)',
                                padding: '0 var(--ds-badge-px)',
                                borderRadius: 'var(--ds-badge-radius)',
                                backgroundColor: 'var(--ds-badge-minimax-bg)',
                                color: 'var(--ds-badge-minimax-fg)',
                                fontSize: 'var(--ds-badge-fz)',
                                fontWeight: 'var(--ds-badge-weight)' as never,
                                fontFamily: 'var(--ds-badge-font)',
                                letterSpacing: 'var(--ds-badge-track)',
                                textTransform: 'uppercase',
                              }}
                            >
                              MiniMax
                              <span style={{ opacity: 0.7, fontSize: '10px' }}>↗</span>
                            </span>
                          </AboutStickerSpan>
                        </div>
                      </div>
                      {/* Divider */}
                      <div style={{ width: '32px', height: '1px', backgroundColor: 'var(--ds-border-subtle)' }} />
                      {/* Action CTAs */}
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <motion.a
                          href="mailto:shanshanlai160402@gmail.com"
                          aria-label="Email"
                          whileHover={{ scale: 1.05, y: -3 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ type: 'spring', stiffness: 480, damping: 26 }}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            height: 'var(--ds-cta-md-h)',
                            padding: '0 var(--ds-cta-md-px)',
                            borderRadius: 'var(--ds-cta-radius)',
                            backgroundColor: 'var(--ds-cta-primary-bg)',
                            color: 'var(--ds-cta-primary-fg)',
                            fontSize: 'var(--ds-cta-md-fz)',
                            fontWeight: 'var(--ds-cta-weight)' as never,
                            fontFamily: 'var(--ds-cta-font)',
                            letterSpacing: 'var(--ds-cta-track)',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                          }}
                        >
                          <Mail size={15} strokeWidth={2.5} />
                          Email
                        </motion.a>
                        <motion.a
                          href={LINKEDIN_PROFILE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                          whileHover={{ scale: 1.05, y: -3 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ type: 'spring', stiffness: 480, damping: 26 }}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            height: 'var(--ds-cta-md-h)',
                            padding: '0 var(--ds-cta-md-px)',
                            borderRadius: 'var(--ds-cta-radius)',
                            border: '2px solid var(--ds-cta-outline-bd)',
                            backgroundColor: 'transparent',
                            color: 'var(--ds-cta-outline-fg)',
                            fontSize: 'var(--ds-cta-md-fz)',
                            fontWeight: 'var(--ds-cta-weight)' as never,
                            fontFamily: 'var(--ds-cta-font)',
                            letterSpacing: 'var(--ds-cta-track)',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                          }}
                        >
                          <Linkedin size={15} strokeWidth={2.5} />
                          LinkedIn
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <button
              type="button"
              onClick={() => selectedWorksRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                textDecoration: 'none',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer'
              }}
            >
              <ArrowDown size={24} color="var(--ds-text-subtle)" strokeWidth={1.5} />
              <p
                style={{
                  margin: 0,
                  color: 'var(--ds-text-subtle)',
                  fontSize: 'var(--type-l3)',
                  lineHeight: 'var(--type-l3-lh)',
                  fontWeight: 400,
                  letterSpacing: 'var(--type-track-body)'
                }}
              >
                Works that I love most
              </p>
            </button>
          </motion.div>
        </div>
      </section>

      <div ref={selectedWorksRef} id="selected-works">
        {homeProjects.map((project, index) => (
          <SelectedWorkSlide key={project.title} project={project} index={index} />
        ))}
      </div>

      <section
        className="px-4 sm:px-6 md:px-12 lg:px-16"
        style={{
          minHeight: '60vh',
          scrollSnapAlign: 'start',
          scrollSnapStop: 'always',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'max(56px, 7vh)',
          paddingBottom: 'max(56px, 7vh)',
        }}
      >
        <div className="mx-auto w-full max-w-[1176px]">
          <div style={{ marginBottom: '18px' }}>
            <p
              style={{
                margin: 0,
                color: 'var(--ds-text-tertiary)',
                fontSize: 'var(--type-l1)',
                fontWeight: 500,
                letterSpacing: 'var(--type-track-caps)',
                textTransform: 'uppercase',
              }}
            >
              More To Explore
            </p>
            <h2
              style={{
                margin: '8px 0 0',
                color: 'var(--ds-text-primary)',
                fontSize: 'var(--ds-text-title)',
                lineHeight: 'var(--type-l5-lh)',
                fontWeight: 600,
                letterSpacing: 'var(--type-track-tight)',
              }}
            >
              Quick teaser before you click in
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '22px',
              overflow: 'visible',
            }}
          >
            <SketchCursorHint label="See all my selected projects" className="block w-full">
              <motion.div
                whileHover={{ y: -8, scale: 1.01, zIndex: 30 }}
                transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                style={{ position: 'relative', zIndex: 1 }}
              >
                <Link
                  to="/projects"
                  className="group block"
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    color: 'inherit',
                    borderRadius: '22px',
                    background: 'var(--ds-surface-elevated)',
                    boxShadow: 'var(--ds-shadow-elevated)',
                    padding: '18px',
                    position: 'relative',
                    overflow: 'visible',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px' }}>
                    <div>
                      <p style={{ margin: 0, fontSize: 'var(--type-l1)', letterSpacing: 'var(--type-track-caps)', textTransform: 'uppercase', color: 'var(--ds-text-tertiary)' }}>
                        Work
                      </p>
                      <h3 style={{ margin: '6px 0 0', fontSize: 'var(--type-l4)', lineHeight: 'var(--type-l4-lh)', fontWeight: 600, letterSpacing: 'var(--type-track-body)', color: 'var(--ds-text-primary)' }}>
                        Featured Cases
                      </h3>
                    </div>
                    <img
                      src={workIcon}
                      alt="Work icon"
                      width={52}
                      height={52}
                      style={{ width: 52, height: 52, objectFit: 'contain', display: 'block' }}
                    />
                  </div>

                  <div
                    style={{
                      position: 'relative',
                      height: '170px',
                      marginTop: '14px',
                      borderRadius: '16px',
                      background: 'linear-gradient(180deg, #f7f7f8 0%, #f1f2f4 100%)',
                      overflow: 'visible',
                    }}
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2Fca07cfe232474fd98a425e6157eb83f4"
                      alt="Huuuuu teaser"
                      className="transition-transform duration-300 ease-out group-hover:-translate-y-6 group-hover:rotate-[-7deg]"
                      style={{
                        position: 'absolute',
                        top: '16px',
                        left: '14px',
                        width: '42%',
                        borderRadius: '12px',
                        transform: 'rotate(-5deg)',
                        boxShadow: '0 10px 24px rgba(0,0,0,0.18)',
                      }}
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2F8f1c564879944802a28da9b67b45e07b"
                      alt="Talkie teaser"
                      className="transition-transform duration-300 ease-out group-hover:-translate-y-8 group-hover:rotate-[8deg]"
                      style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        width: '44%',
                        borderRadius: '12px',
                        transform: 'rotate(6deg)',
                        boxShadow: '0 10px 24px rgba(0,0,0,0.18)',
                      }}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1758521960456-c876c573e0b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWUiUyMGZpdG5lc3MlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjE5MzQ5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="FunFitLand research teaser"
                      className="transition-transform duration-300 ease-out group-hover:-translate-y-10 group-hover:rotate-[-3deg]"
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: '30%',
                        width: '42%',
                        borderRadius: '12px',
                        transform: 'rotate(-2deg)',
                        boxShadow: '0 10px 24px rgba(0,0,0,0.18)',
                      }}
                    />
                  </div>
                </Link>
              </motion.div>
            </SketchCursorHint>

            <SketchCursorHint label="Playground with fun experiments" className="block w-full">
              <motion.div
                whileHover={{ y: -8, scale: 1.01, zIndex: 30 }}
                transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                style={{ position: 'relative', zIndex: 1 }}
              >
                <Link
                  to="/playground"
                  className="group block"
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    color: 'inherit',
                    borderRadius: '22px',
                    background: 'linear-gradient(135deg, #fffaf2 0%, #fff4de 100%)',
                    boxShadow: 'var(--ds-shadow-elevated)',
                    padding: '18px',
                    position: 'relative',
                    overflow: 'visible',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px' }}>
                    <div>
                      <p style={{ margin: 0, fontSize: 'var(--type-l1)', letterSpacing: 'var(--type-track-caps)', textTransform: 'uppercase', color: 'var(--ds-text-tertiary)' }}>
                        Playground
                      </p>
                      <h3 style={{ margin: '6px 0 0', fontSize: 'var(--type-l4)', lineHeight: 'var(--type-l4-lh)', fontWeight: 600, letterSpacing: 'var(--type-track-body)', color: 'var(--ds-text-primary)' }}>
                        Vibe Coding
                      </h3>
                    </div>
                    <img
                      src={happyPlaygroundIcon}
                      alt="Playground icon"
                      width={52}
                      height={52}
                      style={{ width: 52, height: 52, objectFit: 'contain', display: 'block' }}
                    />
                  </div>

                  <div
                    style={{
                      position: 'relative',
                      height: '170px',
                      marginTop: '14px',
                      borderRadius: '16px',
                      background: 'linear-gradient(180deg, #fff8ea 0%, #ffefcf 100%)',
                      overflow: 'visible',
                    }}
                  >
                    <img
                      src={playOneImage}
                      alt="Playground teaser one"
                      className="transition-transform duration-300 ease-out group-hover:-translate-y-8 group-hover:rotate-[-8deg]"
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '16px',
                        width: '48%',
                        borderRadius: '12px',
                        transform: 'rotate(-6deg)',
                        boxShadow: '0 10px 24px rgba(0,0,0,0.15)',
                        background: 'rgba(255,255,255,0.45)',
                      }}
                    />
                    <img
                      src={playTwoImage}
                      alt="Playground teaser two"
                      className="transition-transform duration-300 ease-out group-hover:-translate-y-12 group-hover:rotate-[7deg]"
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '14px',
                        width: '54%',
                        borderRadius: '12px',
                        transform: 'rotate(5deg)',
                        boxShadow: '0 10px 24px rgba(0,0,0,0.15)',
                        background: 'rgba(255,255,255,0.55)',
                      }}
                    />
                  </div>
                </Link>
              </motion.div>
            </SketchCursorHint>
          </div>
        </div>
      </section>

      <section
        className="px-4 sm:px-6 md:px-12 lg:px-16"
        style={{
          minHeight: '100vh',
          scrollSnapAlign: 'center',
          scrollSnapStop: 'always',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 'max(48px, 6vh)',
          paddingBottom: 'max(48px, 6vh)',
          backgroundColor: 'var(--ds-bg-page)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'clamp(20px, 3.5vw, 36px)',
            textAlign: 'center',
            maxWidth: '720px',
            width: '100%',
          }}
        >
          <h2
            style={{
              margin: 0,
              color: 'var(--ds-text-primary)',
              fontSize: 'clamp(44px, 7vw, 88px)',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              textTransform: 'uppercase',
            }}
          >
            CONTACT
          </h2>

          <p
            style={{
              margin: 0,
              color: 'var(--ds-text-secondary)',
              fontSize: 'clamp(15px, 1.4vw, 18px)',
              lineHeight: 1.7,
              fontWeight: 400,
              maxWidth: '500px',
            }}
          >
            Let&apos;s grab coffee (or Hot Pot). 🍲 I&apos;m always down for a caffeine-fueled ☕️ brainstorm. If it involves fun products or spicy food, I&apos;m definitely in.
          </p>

          <motion.a
            href="mailto:shanshanlai160402@gmail.com"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 480, damping: 26 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 'var(--ds-cta-rect-h)',
              padding: '0 var(--ds-cta-rect-px)',
              borderRadius: 'var(--ds-cta-rect-radius)',
              backgroundColor: 'var(--ds-cta-primary-bg)',
              color: 'var(--ds-cta-primary-fg)',
              fontSize: 'var(--ds-cta-rect-fz)',
              fontWeight: 'var(--ds-cta-weight)' as never,
              fontFamily: 'var(--ds-cta-font)',
              letterSpacing: '0.02em',
              textDecoration: 'none',
              minWidth: '260px',
            }}
          >
            Say hello
          </motion.a>

          {/* 2×2 grid — equal column widths, same gap both axes */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '10px',
            width: '100%',
            maxWidth: '400px',
          }}>
            {/* Row 1: ghost CTA pills (action) */}
            <motion.a
              href="mailto:shanshanlai160402@gmail.com"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 480, damping: 26 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '7px',
                height: 'var(--ds-cta-sm-h)',
                borderRadius: 'var(--ds-cta-radius)',
                border: '1.5px solid rgba(0,0,0,0.15)',
                backgroundColor: 'var(--ds-bg-page)',
                color: 'var(--ds-cta-ghost-fg)',
                fontSize: 'var(--ds-cta-sm-fz)',
                fontWeight: 'var(--ds-cta-weight)' as never,
                fontFamily: 'var(--ds-cta-font)',
                letterSpacing: 'var(--ds-cta-track)',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              <Mail size={13} strokeWidth={2.5} />
              Email
            </motion.a>

            <motion.a
              href={LINKEDIN_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 480, damping: 26 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '7px',
                height: 'var(--ds-cta-sm-h)',
                borderRadius: 'var(--ds-cta-radius)',
                border: '1.5px solid rgba(0,0,0,0.15)',
                backgroundColor: 'var(--ds-bg-page)',
                color: 'var(--ds-cta-ghost-fg)',
                fontSize: 'var(--ds-cta-sm-fz)',
                fontWeight: 'var(--ds-cta-weight)' as never,
                fontFamily: 'var(--ds-cta-font)',
                letterSpacing: 'var(--ds-cta-track)',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              <Linkedin size={13} strokeWidth={2.5} />
              LinkedIn
            </motion.a>

            {/* Row 2: brand badges (credential / work) */}
            <motion.a
              href="/case-study/temu-ai-support"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 480, damping: 26 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                height: 'var(--ds-badge-h)',
                borderRadius: 'var(--ds-badge-radius)',
                backgroundColor: 'var(--ds-badge-temu-bg)',
                color: 'var(--ds-badge-temu-fg)',
                fontSize: 'var(--ds-badge-fz)',
                fontWeight: 'var(--ds-badge-weight)' as never,
                fontFamily: 'var(--ds-badge-font)',
                letterSpacing: 'var(--ds-badge-track)',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Temu
              <span style={{ opacity: 0.7, fontSize: '10px' }}>↗</span>
            </motion.a>

            <motion.a
              href="https://www.minimaxi.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 480, damping: 26 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                height: 'var(--ds-badge-h)',
                borderRadius: 'var(--ds-badge-radius)',
                backgroundColor: 'var(--ds-badge-minimax-bg)',
                color: 'var(--ds-badge-minimax-fg)',
                fontSize: 'var(--ds-badge-fz)',
                fontWeight: 'var(--ds-badge-weight)' as never,
                fontFamily: 'var(--ds-badge-font)',
                letterSpacing: 'var(--ds-badge-track)',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              MiniMax
              <span style={{ opacity: 0.7, fontSize: '10px' }}>↗</span>
            </motion.a>
          </div>

          <div
            style={{
              color: 'var(--ds-text-secondary)',
              fontSize: '14px',
              lineHeight: 2,
              letterSpacing: '0.01em',
            }}
          >
            <p style={{ margin: '0 0 2px' }}>
              Email:{' '}
              <a href="mailto:shanshanlai160402@gmail.com" style={{ color: 'inherit' }}>
                shanshanlai160402@gmail.com
              </a>
            </p>
            <p style={{ margin: '0 0 2px' }}>
              Text:{' '}
              <a href="tel:+19294207656" style={{ color: 'inherit' }}>
                929.420.7656
              </a>
            </p>
            <p style={{ margin: 0 }}>📍 NYC / Overseas / Underwater</p>
          </div>

          <SketchCursorHint label="My funfact? Check here" className="inline-block">
            <Link
              to="/about"
              aria-label="About — fun facts and story"
              style={{
                fontSize: 'var(--type-l3)',
                lineHeight: 'var(--type-l3-lh)',
                letterSpacing: '0.08em',
                borderRadius: '8px',
                padding: '4px 6px',
                color: 'var(--ds-text-tertiary)',
                textDecoration: 'none',
              }}
            >
              ✨ 🎧 🥟 💬 🚀 🤿
            </Link>
          </SketchCursorHint>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
