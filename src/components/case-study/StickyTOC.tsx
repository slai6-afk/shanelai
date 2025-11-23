import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface TOCItem {
  id: string;
  label: string;
}

interface StickyTOCProps {
  items: TOCItem[];
}

export function StickyTOC({ items }: StickyTOCProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isHeroPast, setIsHeroPast] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const heroElement = document.querySelector('.case-study-hero-section');
    if (!heroElement) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeroPast(!entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    heroObserver.observe(heroElement);

    return () => heroObserver.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();

    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Element with id "${id}" not found`);
      return;
    }

    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const targetOffset = scrollTop + rect.top - 80;

    setActiveId(id);

    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
  };

  const navClassName = `sticky-toc-nav ${isHeroPast ? 'sticky-toc-fixed' : 'sticky-toc-inline'}`;

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
              className="toc-item"
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
