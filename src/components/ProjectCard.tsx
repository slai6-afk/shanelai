import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { memo } from 'react';
import { SketchCursorHint } from './SketchCursorHint';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: 'design' | 'research';
  link?: string;
  /** Handwritten cursor hint; set when `link` is set for specific CTA copy. */
  hoverHint?: string;
  index: number;
  /** `contain` shows the full image (letterboxed); `cover` fills and may crop. */
  imageFit?: 'cover' | 'contain';
  /** Canvas color behind the image (used with `contain`). */
  mediaBackground?: string;
}

export const ProjectCard = memo(function ProjectCard({
  title,
  description,
  image,
  tags,
  type,
  link,
  hoverHint,
  index,
  imageFit = 'cover',
  mediaBackground,
}: ProjectCardProps) {
  const isClickable = !!link;
  const isContain = imageFit === 'contain';

  const tagColor =
    type === 'design'
      ? { bg: 'var(--ds-accent-tag)', text: '#ffffff' }
      : { bg: 'var(--ds-text-primary)', text: '#ffffff' };

  const linkShellClass = isClickable ? 'ds-focus-ring block rounded-[20px] outline-none' : 'block';

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: isClickable ? 1 : 0.5, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={isClickable ? 'cursor-pointer project-card-vector' : 'cursor-default project-card-vector'}
    >
      <div
        className={`relative mb-6 aspect-[4/3] overflow-hidden rounded-[20px] ${isContain ? 'flex min-h-0 items-center justify-center' : 'bg-[var(--ds-bg-page)]'}`}
        style={isContain ? { backgroundColor: mediaBackground ?? '#000000' } : undefined}
      >
        <ImageWithFallback
          src={image}
          alt={title}
          className={
            isContain
              ? 'max-h-full max-w-full object-contain'
              : 'h-full w-full object-cover rounded-[20px]'
          }
        />

        {!isClickable && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
            <span
              style={{
                color: '#FFFFFF',
                fontSize: 'var(--type-l2)',
                fontWeight: 500,
                letterSpacing: 'var(--type-track-caps)',
                textTransform: 'uppercase',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              Link Coming Soon
            </span>
          </div>
        )}
      </div>

      <motion.div
        className="mb-4 flex flex-wrap gap-2"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.15 + 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {tags.map((tag, i) => (
          <span
            key={i}
            className="inline-block"
            style={{
              backgroundColor: tagColor.bg,
              color: tagColor.text,
              padding: '6px 12px',
              fontSize: 'var(--type-l1)',
              fontWeight: 500,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              borderRadius: '8px',
            }}
          >
            {tag}
          </span>
        ))}
      </motion.div>

      <h3
        className="mb-3"
        style={{
          color: 'var(--ds-text-primary)',
          fontSize: 'var(--type-l4)',
          fontWeight: 500,
          lineHeight: 'var(--type-l4-lh)',
          letterSpacing: 'var(--type-track-body)',
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: 'var(--ds-text-secondary)',
          fontSize: 'var(--type-l3)',
          fontWeight: 400,
          lineHeight: 'var(--type-l3-lh)',
          letterSpacing: 'var(--type-track-body)',
        }}
      >
        {description}
      </p>
    </motion.div>
  );

  const body =
    isClickable && link ? (
      link.startsWith('http') ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className={linkShellClass}>
          {cardContent}
        </a>
      ) : (
        <Link to={link} className={linkShellClass}>
          {cardContent}
        </Link>
      )
    ) : (
      cardContent
    );

  return (
    <SketchCursorHint
      label={hoverHint ?? ''}
      enabled={Boolean(isClickable && link && hoverHint)}
      className="block"
    >
      {body}
    </SketchCursorHint>
  );
});
