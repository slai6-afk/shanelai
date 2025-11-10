import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectSlide {
  title: string;
  role: string;
  description: string;
  image: string;
  link: string;
  category: string;
  clientLogo?: string;
  clientName?: string;
}

interface ProjectCarouselProps {
  slides: ProjectSlide[];
  categories: string[];
}

export function ProjectCarousel({ slides, categories }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Filter slides by category
  const filteredSlides = activeCategory === 'All' 
    ? slides 
    : slides.filter(slide => slide.category === activeCategory);

  // Reset to first slide when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Auto-scroll every 6 seconds unless hovered
  useEffect(() => {
    if (!isHovered && filteredSlides.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredSlides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, filteredSlides.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredSlides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (filteredSlides.length === 0) {
    return (
      <div className="text-center py-32">
        <p style={{ color: '#666666', fontSize: '16px', fontWeight: 400 }}>
          No projects found in this category.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Clean Tab Navigation - 1x.tech style */}
      <div className="flex items-center gap-10 mb-10 border-b border-black/8">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          
          return (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ opacity: isActive ? 1 : 0.7 }}
              transition={{ duration: 0.2 }}
              className="relative pb-3"
              style={{
                color: isActive ? '#000000' : '#9ca3af',
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '-0.02em'
              }}
            >
              {category}
              
              {/* Active underline indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTabLine"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Carousel Container */}
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Carousel Container */}
        <div 
          className="relative bg-white overflow-hidden"
          style={{
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '16px'
          }}
        >
          <div className="relative min-h-[500px] md:min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${currentIndex}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-0"
              >
                {/* Left Side - Image */}
                <div 
                  className="relative aspect-square md:aspect-auto overflow-hidden bg-[#e5e5e5] group"
                  style={{
                    borderTopLeftRadius: '16px',
                    borderBottomLeftRadius: '16px'
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={filteredSlides[currentIndex].image}
                      alt={filteredSlides[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Right Side - Content */}
                <div className="flex flex-col justify-center p-12 md:p-16 lg:p-20">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {/* Client Logo */}
                    {(filteredSlides[currentIndex].clientLogo || filteredSlides[currentIndex].clientName) && (
                      <div className="mb-8 pb-8 border-b border-black/5">
                        {filteredSlides[currentIndex].clientLogo ? (
                          <div className="h-10 flex items-center">
                            <ImageWithFallback
                              src={filteredSlides[currentIndex].clientLogo!}
                              alt={filteredSlides[currentIndex].clientName || 'Client logo'}
                              className="max-h-full max-w-[140px] object-contain opacity-90"
                            />
                          </div>
                        ) : (
                          <div 
                            className="inline-block px-4 py-2 border border-black/10"
                            style={{ borderRadius: '6px' }}
                          >
                            <p style={{ 
                              color: '#000000', 
                              fontSize: '11px',
                              fontWeight: 500,
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase'
                            }}>
                              {filteredSlides[currentIndex].clientName}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    <p 
                      className="mb-4"
                      style={{ 
                        color: '#666666', 
                        fontSize: '13px',
                        fontWeight: 400,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {filteredSlides[currentIndex].role}
                    </p>

                    <h3 
                      className="mb-6"
                      style={{ 
                        color: '#000000', 
                        fontSize: 'clamp(28px, 3vw, 36px)',
                        fontWeight: 500,
                        lineHeight: '1.2',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {filteredSlides[currentIndex].title}
                    </h3>

                    <p 
                      className="mb-10"
                      style={{ 
                        color: '#666666', 
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '1.7'
                      }}
                    >
                      {filteredSlides[currentIndex].description}
                    </p>

                    {filteredSlides[currentIndex].link !== '#' && (
                      <Link to={filteredSlides[currentIndex].link}>
                        <motion.div
                          whileHover={{ opacity: 0.6, x: 4 }}
                          transition={{ duration: 0.3 }}
                          className="inline-flex items-center gap-2 group/link"
                          style={{ 
                            color: '#000000', 
                            fontSize: '16px',
                            fontWeight: 500
                          }}
                        >
                          <span>View Case Study</span>
                          <ArrowRight size={18} />
                        </motion.div>
                      </Link>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-4 md:px-8">
            {/* Left Arrow */}
            <motion.button
              onClick={goToPrev}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="pointer-events-auto w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm border border-black/10 flex items-center justify-center shadow-xl transition-shadow"
              style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
              aria-label="Previous project"
            >
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: -2 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronLeft size={24} style={{ color: '#000000' }} />
              </motion.div>
            </motion.button>

            {/* Right Arrow */}
            <motion.button
              onClick={goToNext}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="pointer-events-auto w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm border border-black/10 flex items-center justify-center shadow-xl transition-shadow"
              style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
              aria-label="Next project"
            >
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight size={24} style={{ color: '#000000' }} />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {filteredSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group"
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.div
                className="rounded-full transition-all"
                animate={{
                  width: currentIndex === index ? 32 : 8,
                  height: 8,
                  backgroundColor: currentIndex === index ? '#000000' : '#e5e5e5'
                }}
                whileHover={{
                  backgroundColor: currentIndex === index ? '#000000' : '#999999',
                  height: currentIndex === index ? 8 : 10
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
