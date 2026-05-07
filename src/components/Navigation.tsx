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
    <>
      {/* SVG filter for Liquid Glass refraction — Chrome only */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden>
        <defs>
          <filter id="liquid-glass-nav" x="-10%" y="-50%" width="120%" height="200%" colorInterpolationFilters="sRGB">
            {/* Soft blur to smooth displacement */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blurred" />
            {/* Noise-based displacement for the lens/refraction feel */}
            <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="3" seed="2" result="noise" />
            <feDisplacementMap in="blurred" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            {/* Boost saturation like Apple's feColorMatrix saturate="50" */}
            <feColorMatrix in="displaced" type="saturate" values="4" result="saturated" />
            {/* Merge with original for specular */}
            <feBlend in="saturated" in2="SourceGraphic" mode="normal" result="final" />
          </filter>
        </defs>
      </svg>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="ds-site-nav fixed top-0 left-0 right-0 z-50"
      >
        <div
          className="nav-inner flex items-center justify-between px-3 sm:px-5 md:px-8"
          style={{ minHeight: '44px', borderRadius: 100 }}
        >
          <NavLink to="/" end>
            <SketchCursorHint label="Home — hi again" className="block">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.07, rotate: -5 }}
                transition={{ type: 'spring', stiffness: 420, damping: 18 }}
              >
                <div
                  className="nav-brand-mark relative shrink-0 overflow-hidden rounded-full"
                >
                  <img
                    src={brandImage}
                    alt="Shane Lai"
                    width={62}
                    height={62}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>
              </motion.div>
            </SketchCursorHint>
          </NavLink>

          <div
            className="scrollbar-hide flex items-center gap-3 overflow-x-auto sm:gap-5 md:gap-7"
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
    </>
  );
});
