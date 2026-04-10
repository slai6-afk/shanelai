import type { CSSProperties } from 'react';
import { useRef } from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { SketchCursorHint } from '../components/SketchCursorHint';
import { TextVectorMark } from '../components/vector-decor';

type PlaygroundProject = {
  title: string;
  url?: string;
  /** Short line for the card; avoid raw URL as the only copy */
  description: string;
  tags: string[];
  preview: 'iframe' | 'visual';
  mediaPosition?: 'left' | 'right';
  /** Sketch hint when `url` is set (live embed). */
  hoverHint?: string;
};

const playgroundProjects: PlaygroundProject[] = [
  {
    title: 'Dive With Me',
    url: 'https://cube-fade-93463598.figma.site/',
    description:
      'WebGL scene and motion study — Three.js experiment authored in Figma Make.',
    tags: ['#Threejs', '#WebGL', '#FigmaMake', '#Cursor'],
    preview: 'iframe',
    mediaPosition: 'left',
    hoverHint: 'Launch the Three.js dive — try fullscreen'
  },
  {
    title: 'Techno 101',
    url: 'https://apron-frill-04230071.figma.site',
    description: 'Exploring rhythmic visuals through parametric design.',
    tags: ['#MotionDesign', '#VisualCoding'],
    preview: 'iframe',
    mediaPosition: 'right'
  },
  {
    title: 'Cube',
    description:
      'Generative cubes with soft fades — built with p5.js, shipped via Figma Make and Cursor.',
    tags: ['#P5js', '#GenerativeArt', '#FigmaMake', '#Cursor'],
    preview: 'visual',
    mediaPosition: 'right'
  }
];

/** Aligned with HomePage `SelectedWorkSlide` tags */
const tagStyle: CSSProperties = {
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
};

/** Same media frame as HomePage selected works (818:476) */
const mediaShellStyle: CSSProperties = {
  borderRadius: '20px',
  boxShadow: 'var(--shadow-sm)',
  overflow: 'hidden',
  backgroundColor: 'var(--ds-bg-page)',
  width: '100%',
  aspectRatio: '818 / 476'
};

function PlaygroundPreview({
  project,
  isClickable
}: {
  project: PlaygroundProject;
  isClickable: boolean;
}) {
  return (
    <div className="w-full">
      <motion.div
        style={mediaShellStyle}
        className="relative"
        whileHover={
          isClickable
            ? {
                boxShadow: 'var(--shadow-lg)',
                scale: 1.01,
                transition: { type: 'spring', stiffness: 440, damping: 30 }
              }
            : {}
        }
      >
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
          <span
            style={{
              color: '#7A7A7A',
              fontSize: 'var(--type-l1)',
              fontWeight: 600,
              letterSpacing: 'var(--type-track-caps)',
              textTransform: 'uppercase'
            }}
          >
            Loading preview...
          </span>
        </div>

        {project.preview === 'iframe' && project.url ? (
          <iframe
            src={project.url}
            title={project.title}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
            className="absolute inset-0 h-full w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : null}

        {project.preview === 'visual' ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-300">
            <div className="absolute inset-0 bg-black/35" />
            <span
              style={{
                color: '#FFFFFF',
                fontSize: 'var(--type-l2)',
                fontWeight: 700,
                letterSpacing: 'var(--type-track-caps)',
                textTransform: 'uppercase',
                textShadow: '0 2px 4px rgba(0,0,0,0.35)',
                position: 'relative',
                zIndex: 1
              }}
            >
              Coming Soon
            </span>
          </div>
        ) : null}

        {isClickable ? (
          <div className="pointer-events-none absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm">
            <ExternalLink size={18} style={{ color: '#000000' }} aria-hidden />
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}

function PlaygroundSlideContent({
  project,
  isClickable
}: {
  project: PlaygroundProject;
  isClickable: boolean;
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '17px',
        height: '100%',
        width: '100%',
        maxWidth: '309px'
      }}
      className="w-full md:min-h-[476px] md:py-1"
    >
      <div>
        <h3
          style={{
            color: 'var(--ds-text-primary)',
            fontSize: 'var(--type-l4)',
            fontWeight: 400,
            lineHeight: 'var(--type-l4-lh)',
            letterSpacing: 'var(--type-track-body)',
            margin: 0,
            marginBottom: '18px'
          }}
        >
          {project.title}
        </h3>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
          {project.tags.map((tag) => (
            <span key={tag} style={tagStyle}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p
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

        {isClickable && project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 font-medium transition-opacity hover:opacity-80"
            style={{ color: 'var(--ds-accent-case)', fontSize: 'var(--type-l3)', lineHeight: 'var(--type-l3-lh)' }}
          >
            Open live demo
            <ExternalLink size={16} strokeWidth={2} aria-hidden />
          </a>
        ) : null}
      </div>
    </div>
  );
}

/** Match HomePage `SelectedWorkSlide` shell width */
const slideShellWidth = 'min(80vw, 1440px)';

function PlaygroundSlide({
  project,
  index,
  scrollRoot
}: {
  project: PlaygroundProject;
  index: number;
  scrollRoot: React.RefObject<HTMLDivElement | null>;
}) {
  const isClickable = Boolean(project.url);
  const mediaOnLeft = project.mediaPosition !== 'right';
  const slideX = index % 2 === 0 ? -40 : 40;
  const isComingSoon = !isClickable;

  const media = (
    <div style={{ flex: '1 1 0', minWidth: 0 }}>
      <SketchCursorHint
        label={project.hoverHint ?? ''}
        enabled={Boolean(isClickable && project.hoverHint)}
        className="block w-full"
      >
        <PlaygroundPreview project={project} isClickable={isClickable} />
      </SketchCursorHint>
    </div>
  );

  const content = <PlaygroundSlideContent project={project} isClickable={isClickable} />;

  return (
    <section
      className="px-4 sm:px-6 md:px-10 lg:px-16"
      style={{
        minHeight: '100vh',
        scrollSnapAlign: 'center',
        scrollSnapStop: 'always',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'max(108px, 11vh)',
        paddingBottom: 'max(56px, 7vh)'
      }}
    >
      <div className="mx-auto w-full" style={{ width: slideShellWidth, maxWidth: '100%' }}>
        <motion.div
          initial={{ opacity: 0, x: slideX }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35, root: scrollRoot }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative"
            whileHover={isClickable ? { y: -5 } : {}}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          >
            <div
              className="flex flex-col gap-6 md:flex-row md:items-center md:gap-[17px]"
              style={{
                width: '100%',
                margin: '0 auto',
                ...(isComingSoon
                  ? { filter: 'grayscale(1)', opacity: 0.62 }
                  : {})
              }}
            >
              {mediaOnLeft ? (
                <>
                  {media}
                  {content}
                </>
              ) : (
                <>
                  {content}
                  {media}
                </>
              )}
            </div>
            {isComingSoon ? (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '20px',
                  backgroundColor: 'rgba(20,20,20,0.24)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none'
                }}
              >
                <span
                  style={{
                    padding: '10px 16px',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(17,17,17,0.88)',
                    color: '#FFFFFF',
                    fontSize: 'var(--type-l1)',
                    fontWeight: 700,
                    letterSpacing: 'var(--type-track-caps)',
                    textTransform: 'uppercase'
                  }}
                >
                  Coming Soon
                </span>
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function PlaygroundPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollContainerRef}
      className="bg-[var(--ds-bg-page)]"
      style={{
        height: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        scrollPaddingTop: '88px'
      }}
    >
      <Navigation />

      <section
        className="px-4 sm:px-6 md:px-10 lg:px-16"
        style={{
          minHeight: '100vh',
          scrollSnapAlign: 'start',
          scrollSnapStop: 'always',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 'max(96px, 10vh)',
          paddingBottom: 'max(40px, 5vh)'
        }}
      >
        <motion.div
          className="mx-auto flex w-full flex-col items-center text-center"
          style={{ width: slideShellWidth, maxWidth: '100%', gap: '24px' }}
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.09, delayChildren: 0.05 }
            }
          }}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20, rotate: -2 },
              show: {
                opacity: 1,
                y: 0,
                rotate: 0,
                transition: { type: 'spring', stiffness: 280, damping: 22 }
              }
            }}
            style={{
              color: 'var(--ds-text-primary)',
              fontSize: 'var(--ds-text-display)',
              fontWeight: 400,
              lineHeight: 'var(--type-l6-lh)',
              letterSpacing: 'var(--type-track-tight)',
              margin: 0
            }}
          >
            <motion.span
              className="inline-block cursor-default"
              whileHover={{
                rotate: [0, -6, 6, -4, 0],
                transition: { duration: 0.55, ease: 'easeInOut' }
              }}
              aria-hidden
            >
              👸
            </motion.span>
            <TextVectorMark vector="highlight2">Playground</TextVectorMark>
            <motion.span
              className="inline-block cursor-default"
              whileHover={{
                rotate: [0, 6, -6, 4, 0],
                transition: { duration: 0.55, ease: 'easeInOut' }
              }}
              aria-hidden
            >
              👸
            </motion.span>
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -14 },
              show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 380, damping: 28 } }
            }}
            style={{
              color: 'var(--ds-text-secondary)',
              fontSize: 'var(--type-l3)',
              fontWeight: 400,
              lineHeight: 'var(--type-l3-lh)',
              letterSpacing: 'var(--type-track-body)',
              margin: 0,
              maxWidth: '480px'
            }}
          >
            make your techno mix here /
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, scale: 0.96 },
              show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 380, damping: 26 } }
            }}
            style={{
              color: 'var(--ds-text-secondary)',
              fontSize: 'var(--type-l3)',
              fontWeight: 400,
              lineHeight: 'var(--type-l3-lh)',
              letterSpacing: 'var(--type-track-body)',
              margin: 0,
              maxWidth: '480px'
            }}
          >
            Dive in Mexico with me /
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, x: 12 },
              show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 380, damping: 28 } }
            }}
            style={{
              color: 'var(--ds-text-secondary)',
              fontSize: 'var(--type-l3)',
              fontWeight: 400,
              lineHeight: 'var(--type-l3-lh)',
              letterSpacing: 'var(--type-track-body)',
              margin: 0,
              maxWidth: '480px'
            }}
          >
            Join in my guerrilla test 🎲
          </motion.p>
        </motion.div>
      </section>

      {playgroundProjects.map((project, index) => (
        <PlaygroundSlide
          key={project.title}
          project={project}
          index={index}
          scrollRoot={scrollContainerRef}
        />
      ))}

      <Footer />
    </div>
  );
}
