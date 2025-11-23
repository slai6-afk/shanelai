import { motion } from 'motion/react';
import { FileText, Linkedin, ExternalLink } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const externalLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/shane-lai',
      description: 'Professional network'
    },
    {
      icon: FileText,
      label: 'Resume',
      url: 'https://drive.google.com/file/d/1xXr0dZ3-o7-rn7tfaF30Pl9lIVBagJQF/view?usp=sharing',
      description: 'Download CV'
    }
  ];

  const expertise = [
    'Figma',
    'Adobe Creative Suite',
    'Prototyping',
    'User Research',
    'HTML/CSS/JavaScript',
    'Python',
    'Design Systems',
    'AI/ML Product Design',
    'Interaction Design',
    'Visual Design',
    'Usability Testing',
    'Cross-functional Collaboration'
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navigation />

      <section className="pt-40 pb-32 px-8 md:px-16 relative">
        {/* Decorative Circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-56 right-[10%] w-4 h-4 rounded-full bg-black"
        />

        <div className="max-w-[1400px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-24"
            style={{ 
              color: '#000000', 
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 400,
              lineHeight: '1.2',
              letterSpacing: '-0.02em'
            }}
          >
            Design with Data.<br />Think in Systems.<br />Build for Humans.
          </motion.h1>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
            {/* Left Column - Photo */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5"
              style={{ paddingRight: '100px' }}
            >
              <div
                className="aspect-[3/4] bg-[#e5e5e5] overflow-hidden mb-8"
              >
                <ImageWithFallback
                  src="https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2Fd00b64aacbda4fc48b6735b3025538b0"
                  alt="Shane Lai"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 style={{ color: '#000000', fontSize: '24px', fontWeight: 500, marginBottom: '8px' }}>
                  Shane Lai
                </h2>
                <p style={{ color: '#666666', fontSize: '16px', fontWeight: 400, lineHeight: '1.6', marginBottom: '12px' }}>
                  UX Designer / Product Designer
                  <br />New York City, NY
                  <br />English / Mandarin
                </p>
                <p style={{ color: '#666666', fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>
                  shanshanlai160402@gmail.com
                </p>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:col-span-7 space-y-12"
            >
              {/* External Links */}
              <div>
                <p style={{ fontWeight: 500, marginBottom: '100px', paddingBottom: '40px' }}>
                  <strong style={{ fontWeight: 700, color: 'rgba(0, 0, 0, 1)', marginBottom: '40px' }}>
                    I see design as a data-informed process that bridges human intuition and system logic.
                  </strong>
                </p>

                <h3
                  style={{
                    color: '#000000',
                    fontSize: '24px',
                    fontWeight: 500,
                    marginBottom: '30px'
                  }}
                >
                  Connect
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {externalLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group border border-black/10 p-8"
                      >
                        <div className="flex items-start justify-between mb-6">
                          <Icon size={24} style={{ color: '#000000' }} />
                          <ExternalLink size={18} style={{ color: '#666666' }} />
                        </div>
                        <h4
                          className="mb-2"
                          style={{
                            color: '#000000',
                            fontSize: '18px',
                            fontWeight: 500
                          }}
                        >
                          {link.label}
                        </h4>
                        <p style={{ color: '#666666', fontSize: '14px', fontWeight: 400 }}>
                          {link.description}
                        </p>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h3
                  className="mb-6"
                  style={{
                    color: '#000000',
                    fontSize: '20px',
                    fontWeight: 500
                  }}
                >
                  <p>Who I Am</p>
                </h3>
                <div
                  className="space-y-6"
                  style={{ color: '#666666', fontSize: '16px', fontWeight: 400, lineHeight: '1.8' }}
                >
                  <p>
                    I'm a UX Designer who moves fluidly between research, strategy, and execution. My experience ranges from designing AI-enhanced e-commerce systems at Temu to analyzing user data and leading design decisions grounded in evidence.
                  </p>
                  <p>
                    <p>
                      Currently pursuing my Master's at Pratt Institute, I aim to design intelligent and inclusive systems that scale meaningfully across global contexts.
                    </p>
                  </p>
                </div>
              </div>

              <div className="mb-12"></div>

              <div className="mb-12"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
