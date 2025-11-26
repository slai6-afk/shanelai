import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About Me', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Previous Work', path: '/previous-work' }
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f5]/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.04)]"
    >
      <div className="nav-inner max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-4 md:py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div
              className="flex items-baseline gap-1"
              whileHover={{ opacity: 0.6 }}
              transition={{ duration: 0.3 }}
            >
              <span style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#666666', fontWeight: 400 }}>
                Made by
              </span>
              <span
                style={{
                  fontSize: 'clamp(16px, 2vw, 18px)',
                  color: '#000000',
                  fontWeight: 400,
                  textDecoration: 'underline'
                }}
              >
                Shane Lai
              </span>
            </motion.div>
          </Link>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-black/5 bg-white px-3 py-2 text-sm font-medium text-black shadow-sm hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6 md:gap-12">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link key={item.path} to={item.path}>
                <motion.span
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    color: '#000000',
                    fontSize: 'clamp(14px, 1.5vw, 16px)',
                    fontWeight: isActive ? 500 : 400,
                    textDecoration: isActive ? 'underline' : 'none'
                  }}
                >
                  {item.name}
                </motion.span>
              </Link>
            );
          })}
        </div>

        <div className={`md:hidden flex-col gap-4 pt-2 pb-4 ${isMenuOpen ? 'flex' : 'hidden'}`}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link key={item.path} to={item.path} className="block">
                <span
                  className="block rounded-lg px-3 py-2 text-base"
                  style={{
                    color: '#000000',
                    fontWeight: isActive ? 600 : 400,
                    backgroundColor: isActive ? '#ffffff' : 'transparent',
                    border: isActive ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent'
                  }}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
