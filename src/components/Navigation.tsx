import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Previous Work', path: '/previous-work' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f5]/95 backdrop-blur-sm"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-6 md:py-8 flex justify-between items-center">
        <Link to="/">
          <motion.div
            className="flex items-baseline gap-1"
            whileHover={{ opacity: 0.6 }}
            transition={{ duration: 0.3 }}
          >
            <span style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#666666', fontWeight: 400 }}>
              Made by
            </span>
            <span style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#000000', fontWeight: 400, textDecoration: 'underline' }}>
              Shane Lai
            </span>
          </motion.div>
        </Link>

        <div className="flex items-center gap-6 md:gap-12">
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
      </div>
    </motion.nav>
  );
}
