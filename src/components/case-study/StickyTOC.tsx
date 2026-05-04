import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

interface TOCItem {
  id: string;
  label: string;
}

interface StickyTOCProps {
  items: TOCItem[];
  isFixed?: boolean;
}

export function StickyTOC({ items, isFixed = false }: StickyTOCProps) {
  const [activeId, setActiveId] = useState<string>('');
  // Track whether a manual click-scroll is in flight so the observer
  // doesn't fight the user's intent during the smooth-scroll animation.
  const isScrollingRef = useRef(false);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Element with id "${id}" not found`);
      return;
    }

    const y = element.getBoundingClientRect().top + window.scrollY - 80;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    // Use a Map so we can quickly look up each section's position order.
    const idToIndex = new Map(items.map((item, i) => [item.id, i]));

    const observer = new IntersectionObserver(
      (entries) => {
        // Skip updates while a programmatic scroll is running.
        if (isScrollingRef.current) return;

        // Collect all currently intersecting sections, pick the topmost one.
        // Also handle scroll-up: when a section exits from the top, fall back
        // to the section immediately before it in the items list.
        let bestId = activeId;
        let bestIndex = activeId ? (idToIndex.get(activeId) ?? -1) : -1;

        entries.forEach((entry) => {
          const idx = idToIndex.get(entry.target.id) ?? -1;

          if (entry.isIntersecting) {
            // Prefer the highest (earliest in document order) visible section.
            if (bestIndex === -1 || idx < bestIndex) {
              bestIndex = idx;
              bestId = entry.target.id;
            }
          } else if (entry.boundingClientRect.top < 0) {
            // Section scrolled above the viewport — activate the one just
            // after it (or keep if already further down).
            const nextIdx = idx + 1;
            const nextId = items[nextIdx]?.id;
            if (nextId && nextIdx > bestIndex) {
              bestIndex = nextIdx;
              bestId = nextId;
            }
          }
        });

        if (bestId && bestId !== activeId) {
          setActiveId(bestId);
        }
      },
      // Top offset matches nav height; bottom clip keeps only the upper
      // portion of the viewport "active" so the indicator feels precise.
      { rootMargin: '-80px 0px -50% 0px', threshold: 0 }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();

    // Immediately reflect the click in the TOC, then lock observer briefly
    // so the smooth-scroll animation doesn't flicker back to another section.
    setActiveId(id);
    isScrollingRef.current = true;
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 900); // covers typical smooth-scroll duration

    scrollToSection(id);
  };

  // Clean up the timer on unmount.
  useEffect(() => {
    return () => {
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, []);

  const navClassName = `sticky-toc-nav ${isFixed ? 'sticky-toc-fixed' : 'sticky-toc-static'}`;

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={navClassName}
    >
      <p className="case-toc-title">Contents</p>

      <ul className="case-toc-list">
        {items.map((item) => (
          <li key={item.id} className="case-toc-list-item">
            <button
              onClick={(e) => handleClick(e, item.id)}
              className={`toc-item ${activeId === item.id ? 'active' : ''}`}
              data-active={activeId === item.id}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
