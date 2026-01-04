import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HeroGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
  autoPlayInterval?: number;
}

export function HeroGallery({ images, autoPlayInterval = 6000 }: HeroGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-play effect
  useEffect(() => {
    if (isHovered || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval, isHovered, isDragging]);

  // Hide hint after first interaction
  useEffect(() => {
    if (isDragging || isHovered) {
      const timer = setTimeout(() => setShowHint(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isDragging, isHovered]);

  // Subtle nudge animation on load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        dragX.set(20);
        setTimeout(() => dragX.set(0), 600);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const threshold = 100;
    
    if (info.offset.x > threshold) {
      // Dragged right - go to previous
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    } else if (info.offset.x < -threshold) {
      // Dragged left - go to next
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
    
    dragX.set(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '85vh',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.08)',
        backgroundColor: '#F9F9F9',
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
      className="md:h-[85vh] h-[60vh]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Drag Hint Tooltip */}
      <AnimatePresence>
        {showHint && !isDragging && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'absolute',
              top: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              color: '#ffffff',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 500,
              zIndex: 20,
              pointerEvents: 'none',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span style={{ fontSize: '16px' }}>⇆</span>
            <span>Drag to explore</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Gallery Container with Drag */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.3}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        style={{
          x: dragX,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        {/* Previous Image Peek (Desktop) */}
        <div
          className="hidden lg:block"
          style={{
            position: 'absolute',
            left: '-15%',
            width: '30%',
            height: '90%',
            opacity: 0.3,
            filter: 'blur(2px)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          <ImageWithFallback
            src={images[(currentIndex - 1 + images.length) % images.length].src}
            alt="Previous"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Current Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 20px',
              zIndex: 10,
              position: 'relative'
            }}
            className="md:px-20"
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0px 12px 32px rgba(0, 0, 0, 0.12)',
                backgroundColor: '#ffffff'
              }}
            >
              <ImageWithFallback
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  userSelect: 'none',
                  pointerEvents: 'none'
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Next Image Peek (Desktop) */}
        <div
          className="hidden lg:block"
          style={{
            position: 'absolute',
            right: '-15%',
            width: '30%',
            height: '90%',
            opacity: 0.3,
            filter: 'blur(2px)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          <ImageWithFallback
            src={images[(currentIndex + 1) % images.length].src}
            alt="Next"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
      </motion.div>

      {/* Dot Indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          zIndex: 20,
          pointerEvents: 'none'
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: currentIndex === index ? '40px' : '12px',
              height: '12px',
              borderRadius: '6px',
              backgroundColor: currentIndex === index ? '#000000' : 'rgba(0, 0, 0, 0.2)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              pointerEvents: 'auto',
              backdropFilter: 'blur(8px)'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: '#ffffff',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: 500,
          zIndex: 20,
          backdropFilter: 'blur(8px)'
        }}
      >
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
