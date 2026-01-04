import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface TOCItem {
  id: string;
  label: string;
}

interface StickyTOCProps {
  items: TOCItem[];
  isVisible?: boolean;
}

export function StickyTOC({ items, isVisible = false }: StickyTOCProps) {
  const [activeId, setActiveId] = useState<string>('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Element with id "${id}" not found`);
      return;
    }

    const y = element.getBoundingClientRect().top + window.scrollY - 80;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();

    setActiveId(id);
    scrollToSection(id);
  };

  const navClassName = `sticky-toc-nav sticky-toc-fixed ${isVisible ? 'sticky-toc-visible' : ''}`;

  return (
    <motion.nav
      initial={{ x: -20 }}
      animate={{ x: 0 }}
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
