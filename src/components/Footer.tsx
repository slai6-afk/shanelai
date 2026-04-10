import { motion } from 'motion/react';
import { Mail, Linkedin, ArrowUp } from 'lucide-react';
import { memo } from 'react';
import { LINKEDIN_PROFILE_URL } from '../constants/links';

export const Footer = memo(function Footer() {
  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:shanshanlai160402@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', href: LINKEDIN_PROFILE_URL }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const iconStyle = {
    color: 'var(--ds-footer-text)',
    cursor: 'pointer' as const
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--ds-footer-bg)',
        borderTop: '1px solid var(--ds-footer-border)'
      }}
    >
      <div className="site-footer__inner">
        <div className="site-footer__row">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={{
              color: 'var(--ds-footer-text-muted)',
              fontSize: 'var(--ds-text-caption)',
              fontWeight: 400,
              margin: 0
            }}
          >
            © 2025 Shane Lai
          </motion.p>

          <div className="site-footer__actions">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ scale: 1.06, color: 'var(--ds-accent-warm)' }}
                  className="inline-flex rounded-md p-2.5 -m-1.5 transition-colors"
                  style={iconStyle}
                  aria-label={link.label}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </motion.a>
              );
            })}

            <div
              className="hidden sm:block"
              style={{
                width: '1px',
                height: '20px',
                backgroundColor: 'var(--ds-border-subtle)'
              }}
              aria-hidden
            />

            <motion.button
              type="button"
              onClick={scrollToTop}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              whileHover={{
                scale: 1.04,
                color: 'var(--ds-accent-warm)'
              }}
              className="rounded-md px-3 py-2.5 -my-1"
              style={{
                color: 'var(--ds-footer-text)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: 'var(--ds-text-caption)',
                fontWeight: 400
              }}
              aria-label="Back to top"
            >
              <ArrowUp size={16} strokeWidth={1.75} />
              <span>Top</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
});
