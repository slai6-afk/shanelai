import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface FigureWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
  index?: number;
  imgStyle?: React.CSSProperties;
}

export function FigureWithCaption({ src, alt, caption, index = 0, imgStyle }: FigureWithCaptionProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ margin: '32px 0' }}
    >
      <div style={{
        backgroundColor: 'transparent',
        overflow: 'hidden',
        borderRadius: '4px'
      }}>
        <ImageWithFallback
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            ...imgStyle
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
        {caption}
      </figcaption>
    </motion.figure>
  );
}
