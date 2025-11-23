import React from 'react';
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
  const getTagStyle = (variant?: string) => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: '#ED964F',
          color: '#FFFFFF'
        };
      case 'secondary':
        return {
          backgroundColor: '#FFFFFF',
          color: '#000000',
          border: '1px solid rgba(0, 0, 0, 0.2)'
        };
      case 'tertiary':
      default:
        return {
          backgroundColor: '#FFFFFF',
          color: '#000000',
          border: '1px solid rgba(0, 0, 0, 0.2)'
        };
    }
  };

  return (
    <section className="case-study-hero-section pb-20 px-40 md:px-12 lg:px-16">
      <MediaBox
        type={mediaType}
        src={mediaSrc}
      />
      <div className="max-w-[1200px] mx-auto case-study-hero-content-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginTop: '10px' }}
        >
          <h1 style={{
            color: '#000000',
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 400,
            lineHeight: '1.2',
            marginTop: 0,
            marginBottom: '16px'
          }}>
            {title}
          </h1>

          <div style={{
            color: '#666666',
            fontSize: 'clamp(16px, 2vw, 20px)',
            fontWeight: 400,
            lineHeight: '1.6',
            marginBottom: '32px',
            maxWidth: '800px'
          }}>
            {descriptionLink ? (
              <>
                <p style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  <a
                    href={descriptionLink.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ fontSize: '16px' }}
                  >
                    {descriptionLink.label}
                  </a>
                </p>
                <br />
              </>
            ) : (
              <p style={{ margin: 0 }}>{description}</p>
            )}
          </div>

          {visitLink && (
            <div style={{ fontWeight: 400, marginBottom: '32px' }}>
              <a
                href={visitLink.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#ED964F',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s'
                }}
              >
                {visitLink.label} →
              </a>
            </div>
          )}

          {tags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  style={{
                    display: 'block',
                    padding: '8px 16px',
                    fontSize: '12px',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    borderRadius: '8px',
                    textTransform: 'capitalize',
                    ...getTagStyle(tag.variant)
                  }}
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
