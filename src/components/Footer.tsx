import { motion } from 'motion/react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:shanshanlai160402@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/shane-lai' }
  ];

  return (
    <footer className="border-t border-black/10 mt-48">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ color: '#666666', fontSize: '14px', fontWeight: 400 }}>
              © 2025 Shane Lai
            </p>
          </motion.div>

          <div className="flex items-center gap-8">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ opacity: 0.6 }}
                  aria-label={link.label}
                >
                  <Icon size={20} style={{ color: '#000000' }} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
