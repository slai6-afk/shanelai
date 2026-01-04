import { motion } from 'motion/react';
import { Mail, Linkedin, ArrowUp } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:shanshanlai160402@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/shanshan-lai' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ 
      backgroundColor: '#0f0f0f',
      borderTop: '1px solid rgba(255,255,255,0.08)'
    }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontWeight: 400 }}>
              © 2025 Shane Lai
            </p>
          </motion.div>

          <div className="flex items-center gap-6">
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
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: '#FF7300' }}
                  style={{ color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }}
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
            
            {/* Divider */}
            <div style={{ 
              width: '1px', 
              height: '20px', 
              backgroundColor: 'rgba(255,255,255,0.2)' 
            }} />
            
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                scale: 1.1, 
                color: '#FF7300',
                y: -2
              }}
              style={{ 
                color: 'rgba(255,255,255,0.8)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '13px'
              }}
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
              <span>Top</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
