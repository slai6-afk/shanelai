import { motion } from 'motion/react';
import { Mail, ArrowDown } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ProjectCard } from '../components/ProjectCard';

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
      <section className="pb-[0px] px-6 md:px-12 lg:px-16 pr-[48px] pl-[48px]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ paddingTop: '115px' }}
          >
            <h1
              className="mb-12 max-w-5xl"
              style={{
                color: '#000000',
                fontSize: 'clamp(40px, 6vw, 80px)',
                fontWeight: 400,
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}
            >
              <div className="hero-title-line line-1" style={{ lineHeight: '70px' }}>
                <span className="hero-title-text text-1" style={{ fontSize: '54.9px' }}>
                  Turning{' '}
                  <span style={{ color: 'rgb(254, 115, 1)' }}>Data</span>
                  ,&nbsp;&nbsp;
                </span>
              </div>
              <div className="hero-title-line line-2" style={{ lineHeight: '70px' }}>
                <span className="hero-title-text text-2" style={{ fontSize: '54.9px', color: 'rgba(255, 115, 0, 1)' }}>
                  Systems,&nbsp;&nbsp;
                </span>
              </div>
              <div className="hero-title-line line-3" style={{ lineHeight: '70px' }}>
                <span className="hero-title-text text-3" style={{ fontSize: '54.9px', color: 'rgba(255, 115, 0, 1)' }}>
                  Human Behavior&nbsp;&nbsp;
                </span>
              </div>
              <div className="hero-title-line" style={{ lineHeight: '70px' }}>
                <span className="hero-title-text text-4" style={{ fontSize: '54.9px' }}>
                  Into Meaningful Design.
                </span>
              </div>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.a
                href="mailto:shanshanlai160402@gmail.com"
                whileHover={{ opacity: 0.6 }}
                className="inline-flex items-center gap-3 home-email-link"
                style={{ fontSize: '16px', fontWeight: 400 }}
              >
                <Mail size={20} />
                <span>Get in touch</span>
              </motion.a>

<div
  style={{
    marginTop: '8px',
    fontSize: '16px',
    fontWeight: 400,
    color: '#000000',
    lineHeight: '1.6',
  }}
>
  <div>Mobile: 929-420-7656</div>
  <div>Base: NYC, New York</div>
</div>

</motion.div>  {/* 关闭上面的 motion.div（包住邮箱的那个） */}
</motion.div>  {/* 关闭最外层 motion.div（Hero 区域动画） */}
</div>
</section>


      {/* Selected Works Section */}
      <section className="md:py-28 px-6 md:px-12 lg:px-16 py-[30px] px-[48px] py-[40px] selected-works-section">
        <div className="max-w-[1400px] mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
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
