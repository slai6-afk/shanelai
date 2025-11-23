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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
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

    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Element with id "${id}" not found`);
      return;
    }

    setActiveId(id);

    // Scroll to element with offset to account for sticky nav
    const offsetPosition = element.offsetTop - 80;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="sticky-toc-nav"
      style={{
        position: 'sticky',
        top: '80px',
        alignSelf: 'flex-start',
        maxWidth: '180px',
        width: '100%'
      }}
    >
      <p style={{
        color: '#555555',
        fontSize: '11px',
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: '16px'
      }}>
        Contents
      </p>

      <ul style={{ 
        margin: 0, 
        padding: 0, 
        listStyle: 'none' 
      }}>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: '6px' }}>
            <button
              onClick={(e) => handleClick(e, item.id)}
              className="toc-item"
              data-active={activeId === item.id}
              style={{
                background: 'none',
                border: 'none',
                padding: '6px 0',
                width: '100%',
                textAlign: 'left',
                color: activeId === item.id ? '#000000' : '#555555',
                fontSize: '14px',
                fontWeight: activeId === item.id ? 400 : 300,
                transition: 'all 0.25s ease',
                borderLeft: activeId === item.id ? '2px solid #ED964F' : '2px solid transparent',
                paddingLeft: '12px',
                cursor: 'pointer',
                display: 'block'
              }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
