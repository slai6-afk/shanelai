import { motion } from 'motion/react';
import { Mail, ArrowDown } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ProjectCard } from '../components/ProjectCard';
import { ChatIntroCard } from '../components/ChatIntroCard';

export function HomePage() {
  const highlightedWorks = [
    {
      title: 'Memory Navigator',
      description: 'A MR game system for seniors with cognitive issue, to identify the symptoms earlier and acknowledge specialists better.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2Fd3d7c1c3590b47178dabf39dc0bd330a',
      tags: ['AR', 'HoloLens'],
      type: 'design' as const,
      link: '/case-study/memory-navigator'
    },
    {
      title: 'Huuuuu',
      description: 'Using gloves with breath-sensors and heating knit to empower women in cold work fields.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2Fca07cfe232474fd98a425e6157eb83f4',
      tags: ['Arduino', 'Wearable'],
      type: 'research' as const,
      link: '/case-study/Huuuuu'
    },
    {
      title: 'FunFitLand (UFit)',
      description: 'Calibration system design in VR that fits users with diverse physical mobilities.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2Ff9363af89837426eac1bacac49533375',
      tags: ['VR', 'Accessibility', 'Design'],
      type: 'design' as const,
      link: '/case-study/funfitland'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navigation />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16 pt-24 pb-14">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-14">
              <div className="flex-1 min-w-0 space-y-6 text-center md:text-left">
                <h1
                  className="text-black font-normal tracking-[-0.03em] leading-[clamp(42px,9vw,74px)] text-[clamp(34px,8.5vw,68px)]"
                >
                  <span className="block">Turning <span className="text-[#fe7301]">Data</span>,</span>
                  <span className="block text-[#ff7300]">Systems, Human Behavior</span>
                  <span className="block">Into Meaningful Design.</span>
                </h1>
              </div>

              <div className="flex-1 w-full max-w-[520px] md:max-w-[460px] md:pt-2 mx-auto md:mx-0">
                <ChatIntroCard />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-2 text-center md:text-left"
            >
              <motion.a
                href="mailto:shanshanlai160402@gmail.com"
                whileHover={{ opacity: 0.6 }}
                className="inline-flex items-center justify-center md:justify-start gap-3 text-base font-normal home-email-link"
              >
                <Mail size={20} />
                <span>Get in touch</span>
              </motion.a>

              <div className="text-base font-normal leading-relaxed text-black flex flex-col md:flex-row md:items-center md:gap-4 justify-center md:justify-start">
                <div>Mobile: 929-420-7656</div>
                <div className="hidden md:block">•</div>
                <div>Base: NYC, New York</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-16 md:py-28 selected-works-section">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                color: '#000000',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 400,
                lineHeight: '1.3'
              }}
            >
              Selected Works
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-2 mt-3"
              style={{
                color: '#666666',
                fontSize: '14px',
                fontWeight: 400
              }}
            >
              <ArrowDown size={16} />
              <span>Scroll down</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {highlightedWorks.map((work, index) => (
              <ProjectCard
                key={work.title}
                title={work.title}
                description={work.description}
                image={work.image}
                tags={work.tags}
                type={work.type}
                link={work.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
