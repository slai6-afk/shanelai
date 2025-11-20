import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: 'design' | 'research';
  link?: string;
  index: number;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  type, 
  link, 
  index 
}: ProjectCardProps) {
  const isClickable = !!link;
  
  const tagColor = type === 'design' 
    ? { bg: '#FFA789', text: '#FFFFFF' } 
    : { bg: '#000000', text: '#FFFFFF' };

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: isClickable ? 1 : 0.5, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={isClickable ? { 
        y: -8,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      } : {}}
      className={`group ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
    >
      {/* Image Container */}
      <motion.div 
        className="aspect-[4/3] bg-[#f5f5f5] overflow-hidden mb-6 relative"
        style={{
          borderRadius: '14px',
          boxShadow: 'var(--shadow-sm)'
        }}
        whileHover={isClickable ? {
          boxShadow: 'var(--shadow-lg)',
          transition: { duration: 0.3, ease: 'easeOut' }
        } : {}}
      >
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Link Icon - Only show if clickable */}
        {isClickable && (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            {link?.startsWith('http') ? (
              <ExternalLink size={18} style={{ color: '#000000' }} />
            ) : (
              <ArrowRight size={18} style={{ color: '#000000' }} />
            )}
          </motion.div>
        )}

        {/* Coming Soon Label - Only show if not clickable */}
        {!isClickable && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
            <span 
              style={{ 
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              Link Coming Soon
            </span>
          </div>
        )}
      </motion.div>

      {/* Tags */}
      <motion.div 
        className="flex flex-wrap gap-2 mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.15 + 0.2,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {tags.map((tag, i) => (
          <motion.span
            key={i}
            whileHover={isClickable ? {
              filter: 'brightness(1.1) drop-shadow(0 0 8px rgba(255, 167, 137, 0.4))',
              transition: { duration: 0.2 }
            } : {}}
            style={{
              backgroundColor: tagColor.bg,
              color: tagColor.text,
              padding: '6px 12px',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              display: 'inline-block',
              borderRadius: '8px'
            }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>

      {/* Title */}
      <h3 
        className="mb-3"
        style={{ 
          color: '#000000',
          fontSize: '24px',
          fontWeight: 500,
          lineHeight: '1.3'
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p 
        style={{ 
          color: '#666666',
          fontSize: '15px',
          fontWeight: 400,
          lineHeight: '1.6'
        }}
      >
        {description}
      </p>
    </motion.div>
  );

  if (isClickable && link) {
    // Check if it's an external link
    if (link.startsWith('http')) {
      return (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          {cardContent}
        </a>
      );
    } else {
      // Internal link
      return (
        <Link to={link} className="block">
          {cardContent}
        </Link>
      );
    }
  }

  return cardContent;
}
