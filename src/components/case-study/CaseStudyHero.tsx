import { motion } from 'motion/react';
import { MediaBox } from './MediaBox';

interface Tag {
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

interface Link {
  href: string;
  label: string;
}

interface CaseStudyHeroProps {
  title: string;
  description: string;
  mediaType: 'video' | 'image';
  mediaSrc: string;
  descriptionLink?: Link;
  visitLink?: Link;
  tags?: Tag[];
}

export function CaseStudyHero({
  title,
  description,
  mediaType,
  mediaSrc,
  descriptionLink,
  visitLink,
  tags = []
}: CaseStudyHeroProps) {
  const getTagVariantClass = (variant?: Tag['variant']) => {
    switch (variant) {
      case 'primary':
        return 'case-hero-tag--primary';
      case 'tertiary':
      case 'secondary':
      default:
        return 'case-hero-tag--secondary';
    }
  };

  return (
    <section className="case-study-hero-section pb-20 px-10 md:px-12 lg:px-16">
      <MediaBox type={mediaType} src={mediaSrc} />
      <div className="max-w-[1200px] mx-auto case-study-hero-content-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="case-hero-header-block"
        >
          <h1 className="case-hero-title">{title}</h1>

          <div className="case-hero-description">
            {descriptionLink ? (
              <>
                <p className="case-hero-description-text">
                  <div className="hero-description-link">
                    <strong>{descriptionLink.label}</strong>
                  </div>
                </p>
                <br />
              </>
            ) : (
              <p className="case-hero-description-text">{description}</p>
            )}
          </div>

          {visitLink && (
            <div className="case-hero-visit-link-wrapper">
              <a
                href={visitLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="case-hero-visit-link"
              >
                {visitLink.label} →
              </a>
            </div>
          )}

          {tags.length > 0 && (
            <div className="case-hero-tag-list">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`case-hero-tag ${getTagVariantClass(tag.variant)}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
