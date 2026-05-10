import { ChevronLeft, ChevronRight, ExternalLink, FileText, Instagram, Linkedin } from 'lucide-react';
import { useEffect, useState, type CSSProperties } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SketchCursorHint } from '../components/SketchCursorHint';
import { AboutStickerSpan } from '../components/about/AboutStickerSpan';
import { InteractiveTravelGlobe } from '../components/about/InteractiveTravelGlobe';
import { VectorDecor } from '../components/vector-decor/VectorDecor';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import thuSticker from '../assets/vector/thu.png';
import fflSticker from '../assets/vector/ffl.png';
import talkieSticker from '../assets/vector/talkie.png';
import temuSticker from '../assets/vector/temu.png';
import panelDecorLeft from '../assets/image-CrDLMiGNAyHrCsQX75c3gL7TzC1GWq.png';
import panelDecorRight from '../assets/image-gmk0F4W4z2vJwgUc2gaMTvltLfo3Dg.png';
import { LINKEDIN_PROFILE_URL, RESUME_PDF_URL } from '../constants/links';
import storyCenterOne from '../assets/about/about-story-center-1.jpg';
import storyCenterTwo from '../assets/about/about-story-center-2.jpg';
import storyLeftOne from '../assets/about/about-story-left-1.jpg';
import storyLeftTwo from '../assets/about/about-story-left-2.jpg';
import storyRightOne from '../assets/about/about-story-right-1.jpg';
import storyRightTwo from '../assets/about/about-story-right-2.jpg';

type StoryTriptychProps = {
  slides: StorySlide[];
};

type StorySlide = {
  src: string;
  alt: string;
  /** White Caveat caption on hover (overlay darkens). */
  hoverSketch: string;
};

const heroLines = [
  'Design with Data,',
  'Think in Systems,',
  'Build for humans.'
];

/** Talkie / MiniMax asset reads small in-frame — ~2× default pop sticker (min(120px, 32vw)) */
const ABOUT_MINIMAX_STICKER_WIDTH = 'min(240px, 64vw)';

const heroSectionStyle: CSSProperties = {
  paddingTop: 'clamp(90px, 7.2vw, 112px)',
  paddingBottom: 'clamp(34px, 4.4vw, 64px)'
};

const heroContainerStyle: CSSProperties = {
  width: '100%',
  maxWidth: '1280px',
  gap: 'clamp(24px, 2.08vw, 30px)',
  padding: '12px 20px',
  alignItems: 'center'
};

/** Single line height — used for slots so typing does not shift layout */
const heroLineHeight = 'clamp(24px, 2.2vw, 32px)';

const heroTextStyle: CSSProperties = {
  color: 'var(--ds-text-primary)',
  fontSize: 'clamp(var(--type-l2), 1.35vw, var(--type-l4))',
  fontWeight: 400,
  fontFamily: 'var(--font-heading)',
  lineHeight: heroLineHeight,
  letterSpacing: 'var(--type-track-tight)'
};

const heroTypewriterBlockStyle: CSSProperties = {
  ...heroTextStyle,
  margin: 0,
  width: '100%',
  minHeight: `calc(3 * (${heroLineHeight}))`
};

const heroTypewriterLineStyle: CSSProperties = {
  display: 'block',
  width: '100%',
  minHeight: heroLineHeight
};

const heroImageFrameStyle: CSSProperties = {
  width: 'min(100%, calc(100vh - 150px))',
  maxWidth: '100%',
  maxHeight: 'calc(100vh - 150px)',
  aspectRatio: '1 / 1',
  overflow: 'hidden',
  borderRadius: '24px'
};

const panelSectionStyle: CSSProperties = {
  paddingBottom: '100px'
};

const panelStyle: CSSProperties = {
  width: '100%',
  maxWidth: '1152px',
  margin: '0 auto',
  /* Stickers pop above phrases; bottom decor stays clipped via .about-panel-decor-layer */
  overflow: 'visible',
  borderRadius: 'clamp(36px, 5.56vw, 80px)',
  backgroundColor: 'var(--ds-surface-elevated)',
  boxShadow: 'var(--ds-shadow-elevated)',
  padding: 'clamp(40px, 4.24vw, 61px) clamp(32px, 7.99vw, 115px)'
};

const panelContentStyle: CSSProperties = {
  maxWidth: '922px',
  gap: '36px'
};

const heroMyPathStyle: CSSProperties = {
  margin: 0,
  color: 'var(--ds-text-secondary)',
  fontSize: 'clamp(var(--type-l2), 1.2vw, var(--type-l3))',
  fontWeight: 500,
  fontFamily: 'var(--font-heading)',
  letterSpacing: 'var(--type-track-body)',
  lineHeight: 1.25,
  textAlign: 'center'
};

const heroMyPathClusterStyle: CSSProperties = {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'clamp(8px, 1.2vw, 14px)',
  marginTop: 'clamp(22px, 2.5vw, 34px)',
  ['--vector-tint' as string]: 'var(--ds-text-primary)'
};

const heroLinkRowStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  width: '100%',
  maxWidth: '420px',
  gap: 'clamp(12px, 2vw, 22px)',
  marginInline: 'auto',
};

const heroLinkCardStyle: CSSProperties = {
  display: 'flex',
  width: '100%',
  height: 'clamp(70px, 18vw, 84px)',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: 'clamp(12px, 3.5vw, 20px)',
  backgroundColor: 'var(--ds-bg-muted)',
  padding: 'clamp(6px, 1.6vw, 11px)',
  boxShadow: 'var(--ds-shadow-soft)',
  textDecoration: 'none',
  color: 'var(--ds-text-primary)'
};

const heroLinkCardLabelStyle: CSSProperties = {
  margin: 0,
  fontWeight: 400,
  fontFamily: 'var(--font-heading)',
  lineHeight: 1.15,
  letterSpacing: 'var(--type-track-body)',
  fontSize: 'clamp(var(--type-l1), 1.3vw, 22px)',
  textAlign: 'center',
};

const greetingStyle: CSSProperties = {
  maxWidth: '450px'
};

const storyTextStyle: CSSProperties = {
  color: 'var(--ds-text-primary)',
  fontSize: 'clamp(var(--type-l2), 1.25vw, var(--type-l3))',
  fontWeight: 400,
  fontFamily: 'var(--font-heading)',
  lineHeight: 'var(--type-l3-lh)',
  letterSpacing: 'var(--type-track-body)'
};

const storyParagraphGroupStyle: CSSProperties = {
  gap: 'clamp(24px, 3.54vw, 51px)'
};

const finalParagraphStyle: CSSProperties = {
  ...storyTextStyle,
  paddingTop: '20px'
};

const triptychWrapStyle: CSSProperties = {
  width: '100%',
  maxWidth: '762px'
};

const triptychStageStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: 'clamp(240px, 41.67vw, 600px)'
};

const triptychSideBaseStyle: CSSProperties = {
  position: 'absolute',
  top: '50%',
  width: '18%',
  maxWidth: '286px',
  aspectRatio: '286 / 315',
  overflow: 'hidden',
  borderRadius: 'clamp(18px, 2.22vw, 32px)'
};

const triptychCenterStyle: CSSProperties = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  zIndex: 1,
  width: '42%',
  maxWidth: '381px',
  aspectRatio: '381 / 420',
  transform: 'translate(-50%, -50%)',
  overflow: 'hidden',
  borderRadius: 'clamp(18px, 2.22vw, 32px)'
};

const triptychButtonBaseStyle: CSSProperties = {
  position: 'absolute',
  top: '50%',
  zIndex: 2,
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid var(--ds-border-subtle)',
  borderRadius: '999px',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  color: 'var(--ds-text-primary)',
  cursor: 'pointer',
};

const triptychLeftButtonStyle: CSSProperties = {
  ...triptychButtonBaseStyle,
  left: '5%'
};

const triptychRightButtonStyle: CSSProperties = {
  ...triptychButtonBaseStyle,
  right: '5%'
};

const typingCursorStyle: CSSProperties = {
  display: 'inline-block',
  width: '1px',
  height: '0.95em',
  marginLeft: '4px',
  verticalAlign: '-0.08em',
  backgroundColor: 'var(--ds-text-primary)',
  animation: 'blink 1s steps(1, end) infinite'
};

const firstTriptychSlides: StorySlide[] = [
  {
    src: storyLeftOne,
    alt: 'Shane Lai working moment',
    hoverSketch: 'Grinding through flows — caffeinated'
  },
  {
    src: storyCenterOne,
    alt: 'Shane Lai at a research event',
    hoverSketch: 'Field research face (still curious)'
  },
  {
    src: storyRightOne,
    alt: "Design detail from Shane Lai's work",
    hoverSketch: 'Zoomed in until the pixels behave'
  }
];

const secondTriptychSlides: StorySlide[] = [
  {
    src: storyLeftTwo,
    alt: 'Outdoor adventure portrait',
    hoverSketch: 'Sunscreen + spreadsheets = balance'
  },
  {
    src: storyCenterTwo,
    alt: 'Landscape from a mountain trip',
    hoverSketch: 'Elevation > inbox zero'
  },
  {
    src: storyRightTwo,
    alt: 'Underwater diving moment',
    hoverSketch: 'Mute mode: ocean edition'
  }
];

const triptychHoverCaptionStyle: CSSProperties = {
  fontFamily: "'Caveat', cursive",
  fontWeight: 600,
  fontSize: 'clamp(var(--type-l3), 3vw, var(--type-l4))',
  lineHeight: 'var(--type-l4-lh)',
  letterSpacing: '0.01em',
  color: 'var(--ds-bg-surface)',
  textShadow: '0 2px 14px rgba(0, 0, 0, 0.45)'
};

function getWrappedIndex(index: number, length: number) {
  return (index + length) % length;
}

type TriptychPolaroidProps = {
  slide: StorySlide;
  frameStyle: CSSProperties;
  /** Side cards stay slightly dim until hover */
  dimSide: boolean;
  ariaLabel: string;
  onActivate: () => void;
};

function TriptychPolaroid({ slide, frameStyle, dimSide, ariaLabel, onActivate }: TriptychPolaroidProps) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const showOverlay = hovered || focused;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      className="outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2"
      style={frameStyle}
      onClick={onActivate}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onActivate();
        }
      }}
    >
      <ImageWithFallback
        src={slide.src}
        alt={slide.alt}
        className="h-full w-full object-cover"
        style={{
          transition: 'opacity 300ms ease',
          opacity: dimSide ? (showOverlay ? 1 : 0.72) : 1
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center p-3 text-center"
        style={{
          transition: 'opacity 300ms ease, background-color 300ms ease',
          opacity: showOverlay ? 1 : 0,
          backgroundColor: showOverlay ? 'rgba(0, 0, 0, 0.52)' : 'rgba(0, 0, 0, 0)'
        }}
      >
        <span style={triptychHoverCaptionStyle}>{slide.hoverSketch}</span>
      </div>
    </div>
  );
}

function useTypewriterLines(lines: string[]) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      return;
    }

    const currentLine = lines[currentLineIndex];
    const hasFinishedCurrentLine = currentCharIndex >= currentLine.length;
    const isLastLine = currentLineIndex === lines.length - 1;
    const delay = hasFinishedCurrentLine ? 500 : 95;

    const timer = window.setTimeout(() => {
      if (!hasFinishedCurrentLine) {
        setCurrentCharIndex((value) => value + 1);
        return;
      }

      if (!isLastLine) {
        setCurrentLineIndex((value) => value + 1);
        setCurrentCharIndex(0);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [currentCharIndex, currentLineIndex, lines]);

  const renderedLines = lines.map((line, index) => {
    if (index < currentLineIndex) {
      return line;
    }

    if (index === currentLineIndex) {
      return line.slice(0, currentCharIndex);
    }

    return '';
  });

  const isComplete =
    currentLineIndex === lines.length - 1 &&
    currentCharIndex >= lines[lines.length - 1].length;

  return {
    renderedLines,
    currentLineIndex,
    isComplete
  };
}

function StoryTriptych({ slides }: StoryTriptychProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (slides.length <= 1 || isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((value) => getWrappedIndex(value + 1, slides.length));
    }, 3200);

    return () => window.clearInterval(interval);
  }, [isPaused, slides.length]);

  const leftIndex = getWrappedIndex(activeIndex - 1, slides.length);
  const rightIndex = getWrappedIndex(activeIndex + 1, slides.length);
  const leftSlide = slides[leftIndex];
  const centerSlide = slides[activeIndex];
  const rightSlide = slides[rightIndex];

  const goToSlide = (index: number) => {
    setActiveIndex(getWrappedIndex(index, slides.length));
  };

  return (
    <div
      className="mx-auto flex w-full items-center justify-center py-2 md:py-0"
      style={triptychWrapStyle}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div style={triptychStageStyle}>
        <TriptychPolaroid
          slide={leftSlide}
          dimSide
          ariaLabel={`Show ${leftSlide.alt}`}
          onActivate={() => goToSlide(leftIndex)}
          frameStyle={{
            ...triptychSideBaseStyle,
            left: '7%',
            transform: 'translateY(-50%) rotate(-11.95deg)',
            cursor: 'pointer',
            transition: 'transform 220ms ease'
          }}
        />

        <TriptychPolaroid
          slide={centerSlide}
          dimSide={false}
          ariaLabel={`Current slide: ${centerSlide.alt}`}
          onActivate={() => goToSlide(activeIndex + 1)}
          frameStyle={{
            ...triptychCenterStyle,
            cursor: 'pointer',
            transition: 'transform 220ms ease, box-shadow 220ms ease'
          }}
        />

        <TriptychPolaroid
          slide={rightSlide}
          dimSide
          ariaLabel={`Show ${rightSlide.alt}`}
          onActivate={() => goToSlide(rightIndex)}
          frameStyle={{
            ...triptychSideBaseStyle,
            right: '7%',
            transform: 'translateY(-50%) rotate(11.9deg)',
            cursor: 'pointer',
            transition: 'transform 220ms ease'
          }}
        />

        <button
          type="button"
          aria-label="Previous story slide"
          className="ds-triptych-nav"
          style={triptychLeftButtonStyle}
          onClick={() => goToSlide(activeIndex - 1)}
        >
          <ChevronLeft size={18} />
        </button>

        <button
          type="button"
          aria-label="Next story slide"
          className="ds-triptych-nav"
          style={triptychRightButtonStyle}
          onClick={() => goToSlide(activeIndex + 1)}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <section className="px-5" style={heroSectionStyle}>
          <div className="mx-auto flex flex-col" style={heroContainerStyle}>
            <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-start md:justify-start md:gap-5 lg:gap-6">
              <SketchCursorHint
                label="World Explorer, Click to see"
                className="w-full max-w-[980px] md:order-1 md:w-[min(70vw,calc(100vh-150px))] md:max-w-none md:flex-none"
              >
                <div style={heroImageFrameStyle}>
                  <InteractiveTravelGlobe />
                </div>
              </SketchCursorHint>

              <div className="w-full max-w-[420px] md:order-2 md:max-w-[420px] md:flex-1">
                <div className="flex w-full flex-col gap-12 md:gap-14">
                  <h1
                    className="text-center"
                    style={{
                      margin: 0,
                      color: 'var(--ds-text-primary)',
                      fontSize: 'clamp(18px, 2.35vw, 34px)',
                      lineHeight: 1.18,
                      fontWeight: 700,
                      fontFamily: 'var(--font-heading)',
                      letterSpacing: '-0.015em',
                    }}
                  >
                    Shane Lai:  PM / UX Designer / Artist / World Traveler
                  </h1>

                  <div style={heroLinkRowStyle}>
                  <SketchCursorHint
                    label="Keep connected!"
                    className="min-w-0 w-full"
                  >
                    <a
                      href={LINKEDIN_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ds-tile-hit ds-focus-ring w-full min-w-0 rounded-[clamp(12px,3.5vw,20px)] outline-none"
                      style={heroLinkCardStyle}
                    >
                      <div className="flex w-full min-w-0 items-start justify-between gap-1">
                        <Linkedin
                          className="h-[clamp(14px,4.2vw,24px)] w-[clamp(14px,4.2vw,24px)] shrink-0"
                          strokeWidth={1.5}
                          aria-hidden
                        />
                        <ExternalLink
                          className="h-[clamp(12px,3.4vw,18px)] w-[clamp(12px,3.4vw,18px)] shrink-0"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      </div>
                      <p style={heroLinkCardLabelStyle}>LinkedIn</p>
                    </a>
                  </SketchCursorHint>
                  <SketchCursorHint
                    label="See my career path?"
                    className="min-w-0 w-full"
                  >
                    <a
                      href={RESUME_PDF_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ds-tile-hit ds-focus-ring w-full min-w-0 rounded-[clamp(12px,3.5vw,20px)] outline-none"
                      style={heroLinkCardStyle}
                    >
                      <div className="flex w-full min-w-0 items-start justify-between gap-1">
                        <FileText
                          className="h-[clamp(14px,4.2vw,24px)] w-[clamp(14px,4.2vw,24px)] shrink-0"
                          strokeWidth={1.5}
                          aria-hidden
                        />
                        <ExternalLink
                          className="h-[clamp(12px,3.4vw,18px)] w-[clamp(12px,3.4vw,18px)] shrink-0"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      </div>
                      <p style={heroLinkCardLabelStyle}>Resume</p>
                    </a>
                  </SketchCursorHint>
                  <SketchCursorHint
                    label="Follow my daily updates?"
                    className="min-w-0 w-full"
                  >
                    <a
                      href="https://www.instagram.com/laishanshan51/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ds-tile-hit ds-focus-ring w-full min-w-0 rounded-[clamp(12px,3.5vw,20px)] outline-none"
                      style={heroLinkCardStyle}
                    >
                      <div className="flex w-full min-w-0 items-start justify-between gap-1">
                        <Instagram
                          className="h-[clamp(14px,4.2vw,24px)] w-[clamp(14px,4.2vw,24px)] shrink-0"
                          strokeWidth={1.5}
                          aria-hidden
                        />
                        <ExternalLink
                          className="h-[clamp(12px,3.4vw,18px)] w-[clamp(12px,3.4vw,18px)] shrink-0"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      </div>
                      <p style={heroLinkCardLabelStyle}>Instagram</p>
                    </a>
                  </SketchCursorHint>
                </div>

                <div className="items-center" style={heroMyPathClusterStyle}>
                  <VectorDecor name="down1" className="vector-decor--connector" alt="" />
                  <p style={heroMyPathStyle}>My path</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 md:px-10 lg:px-[144px]" style={panelSectionStyle}>
          <div className="about-panel-shell" style={panelStyle}>
            <div className="about-panel-decor-layer" aria-hidden>
              <img
                src={panelDecorLeft}
                alt=""
                className="about-panel-decor about-panel-decor--left"
                loading="lazy"
                decoding="async"
              />
              <img
                src={panelDecorRight}
                alt=""
                className="about-panel-decor about-panel-decor--right"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="about-panel-content mx-auto flex flex-col" style={panelContentStyle}>
              <div style={greetingStyle}>
                <p style={storyTextStyle}>Hi😄💗 Thank you for stopping by!</p>
              </div>

              <div style={{ maxWidth: '922px' }}>
                <p style={storyTextStyle}>
                  My name is Shane Lai (姗姗, 来). I’m deeply drawn to design and human psychology
                  from an early time, and bringing myself into building products to people around the
                  world.
                </p>
              </div>

              <StoryTriptych slides={firstTriptychSlides} />

              <div className="flex flex-col" style={storyParagraphGroupStyle}>
                <p style={storyTextStyle}>
                  I began my journey at the{' '}
                  <AboutStickerSpan
                    stickerSrc={thuSticker}
                    stickerLabel="Sticker: Tsinghua Human Factors Laboratory"
                    highlightVector="highlight2"
                    motion={{
                      restRotateDeg: 2,
                      hoverRotateDeg: -13,
                      restOffsetY: 10,
                      restNudgeX: -3,
                      hoverNudgeX: -2,
                    }}
                  >
                    Human Factors Laboratory at Tsinghua University 💜
                  </AboutStickerSpan>
                  , where I worked as a research assistant 🧑‍🔬 in my sophomore year.
                </p>
                <div style={storyTextStyle}>
                  <p className="m-0 mb-0 text-[inherit] leading-[inherit]">
                    It was also around that time that I encountered ChatGPT (back when it was still GPT-3),
                    trying to visualize a breeze traveling 2000 kilometers just to brush through olive
                    trees🌲.
                  </p>
                  <p className="m-0 mb-0 mt-0 text-[inherit] leading-[inherit]">&nbsp;</p>
                  <p className="m-0 text-[inherit] leading-[inherit]">
                    That moment was a epiphany. It made me rethink what my workflow would look like in
                    five years. Now, I find myself at the heart of that very tech revolution.
                  </p>
                </div>
                <p style={storyTextStyle}>
                  From{' '}
                  <AboutStickerSpan
                    stickerSrc={fflSticker}
                    stickerLabel="Sticker: VR fitness research"
                    highlightVector="highlight1"
                    motion={{
                      restRotateDeg: -5,
                      hoverRotateDeg: 11,
                      restOffsetY: 13,
                      restNudgeX: 4,
                      hoverNudgeX: 2,
                    }}
                  >
                    researching VR fitness
                  </AboutStickerSpan>{' '}
                  to interning at{' '}
                  <AboutStickerSpan
                    stickerSrc={talkieSticker}
                    stickerLabel="Sticker: MiniMax — Talkie"
                    highlightVector="highlight3"
                    stickerWidth={ABOUT_MINIMAX_STICKER_WIDTH}
                    motion={{
                      restRotateDeg: 5,
                      hoverRotateDeg: -10,
                      restOffsetY: 9,
                      restNudgeX: -5,
                      hoverNudgeX: -3,
                    }}
                  >
                    MiniMax
                  </AboutStickerSpan>{' '}
                  and{' '}
                  <AboutStickerSpan
                    stickerSrc={temuSticker}
                    stickerLabel="Temu — open AI support case study"
                    highlightVector="highlight2"
                    linkTo="/case-study/temu-ai-support"
                    motion={{
                      restRotateDeg: -3,
                      hoverRotateDeg: 12,
                      restOffsetY: 12,
                      restNudgeX: 3,
                      hoverNudgeX: 1,
                    }}
                  >
                    Temu
                  </AboutStickerSpan>
                  , I’ve learned to balance the big picture with the smallest details. To me, that
                  means obsessing over user flows while keeping the &quot;vibe&quot; of the code just
                  right.
                </p>
              </div>

              <StoryTriptych slides={secondTriptychSlides} />

              <p style={finalParagraphStyle}>
                When I’m not designing or coding, you’ll find me 🏋️‍♀️ in the gym or 🤿 underwater,
                diving is my meditation (though I’m much easier to spot and find in the gym)
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
