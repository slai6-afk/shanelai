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
    // Prevent any default behavior
    e.preventDefault();
    
    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Element with id "${id}" not found`);
      return;
    }
    
    // Immediately update active state
    setActiveId(id);
    
    // Scroll to the element smoothly
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start'
    });
    
    // Adjust for fixed header (100px offset to match IntersectionObserver rootMargin)
    // We need a small timeout to let scrollIntoView start, then adjust
    setTimeout(() => {
      const currentScrollY = window.scrollY;
      window.scrollTo({
        top: currentScrollY - 100,
        behavior: 'smooth'
      });
    }, 0);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      style={{
        position: 'sticky',
        top: '120px',
        alignSelf: 'flex-start',
        padding: '24px',
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        borderRadius: '4px',
        maxHeight: 'calc(100vh - 200px)',
        overflowY: 'auto'
      }}
    >
      <p style={{
        color: '#000000',
        fontSize: '12px',
        fontWeight: 500,
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
          <li key={item.id} style={{ marginBottom: '8px' }}>
            <button
              onClick={(e) => handleClick(e, item.id)}
              style={{
                background: 'none',
                border: 'none',
                padding: '6px 12px',
                width: '100%',
                textAlign: 'left',
                color: activeId === item.id ? '#000000' : '#666666',
                fontSize: '13px',
                fontWeight: activeId === item.id ? 500 : 400,
                transition: 'all 0.2s ease',
                borderLeft: activeId === item.id ? '2px solid #f97316' : '2px solid transparent',
                cursor: 'pointer'
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
