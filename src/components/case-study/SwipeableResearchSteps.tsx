import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';

interface ResearchStep {
  title: string;
  takeaway: string;
  detail?: string;
  visual?: React.ReactNode;
}

interface SwipeableResearchStepsProps {
  steps: ResearchStep[];
}

export function SwipeableResearchSteps({ steps }: SwipeableResearchStepsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetail, setShowDetail] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.offsetWidth;
      const index = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(index);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="lg:hidden">
      {/* Swipeable Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-full snap-center px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              style={{ minHeight: '320px' }}
            >
              {/* Step Number */}
              <div
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-4"
              >
                {index + 1}
              </div>

              {/* Title */}
              <h4 className="text-base font-semibold text-gray-900 mb-3">
                {step.title}
              </h4>

              {/* Takeaway */}
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {step.takeaway}
              </p>

              {/* Visual */}
              {step.visual && (
                <div className="mb-4">
                  {step.visual}
                </div>
              )}

              {/* Optional Detail */}
              {step.detail && (
                <div>
                  {showDetail === index ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <p className="text-xs text-gray-600 leading-relaxed pt-3 border-t border-gray-100">
                        {step.detail}
                      </p>
                      <button
                        onClick={() => setShowDetail(null)}
                        className="text-xs text-orange-600 font-medium mt-2"
                      >
                        Show less
                      </button>
                    </motion.div>
                  ) : (
                    <button
                      onClick={() => setShowDetail(index)}
                      className="text-xs text-orange-600 font-medium"
                    >
                      Learn more →
                    </button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const container = scrollContainerRef.current;
              if (container) {
                container.scrollTo({
                  left: index * container.offsetWidth,
                  behavior: 'smooth'
                });
              }
            }}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index
                ? 'w-6 bg-orange-500'
                : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
