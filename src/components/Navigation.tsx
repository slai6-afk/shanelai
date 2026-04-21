import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { memo } from 'react';
import brandImage from '../assets/brand.png';
import { SketchCursorHint } from './SketchCursorHint';

export const Navigation = memo(function Navigation() {
  const navItems = [
    { name: 'Work', path: '/projects' },
    { name: 'Playground', path: '/playground' },
    { name: 'Workflow', path: '/design-engineering-workflow' },
    { name: 'About', path: '/about' }
  ];

  const linkStyle = {
    color: 'var(--ds-nav-text)',
    fontSize: 'var(--ds-text-nav)',
    fontWeight: 400,
    lineHeight: 'var(--type-l2-lh)',
    letterSpacing: 'var(--type-track-body)',
    textDecoration: 'none' as const,
    whiteSpace: 'nowrap' as const,
    display: 'inline-flex' as const,
    alignItems: 'center' as const
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="ds-site-nav fixed top-0 left-0 right-0 z-50"
    >
      <div
        className="nav-inner mx-auto flex w-full max-w-[1600px] items-center justify-between rounded-[100px] px-3 sm:px-5 md:px-12 lg:px-[48px]"
        style={{
          minHeight: '46px'
        }}
      >
        <NavLink to="/" end>
          <SketchCursorHint label="Home — hi again" className="block">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.07, rotate: -5 }}
              transition={{ type: 'spring', stiffness: 420, damping: 18 }}
            >
              <div
                className="nav-brand-mark relative h-[54px] w-[54px] shrink-0 overflow-hidden rounded-full sm:h-[60px] sm:w-[60px] md:h-[68px] md:w-[68px]"
              >
                <img
                  src={brandImage}
                  alt="Shane Lai"
                  width={68}
                  height={68}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
                {/* Inner stroke above artwork (inset shadow on img alone sits under opaque pixels) */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-full"
                  style={{ boxShadow: 'inset 0 0 0 8px #ffffff' }}
                />
              </div>
            </motion.div>
          </SketchCursorHint>
        </NavLink>

        <div
          className="scrollbar-hide flex items-center gap-4 overflow-x-auto sm:gap-5 md:gap-7"
        >
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} style={linkStyle}>
              {({ isActive }) => (
                <motion.span
                  whileTap={{ opacity: 0.75 }}
                  transition={{ duration: 0.15 }}
                  className={`ds-nav-link ${isActive ? 'ds-nav-link--active' : ''}`}
                  style={{
                    ...linkStyle,
                    fontWeight: isActive ? 500 : 400,
                    opacity: isActive ? 1 : 0.88,
                  }}
                >
                  {item.name}
                  {item.name === 'Workflow' ? (
                    <span aria-hidden style={{ marginLeft: 6, fontSize: 'var(--type-l1)', lineHeight: 1 }}>✨</span>
                  ) : null}
                </motion.span>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
});
