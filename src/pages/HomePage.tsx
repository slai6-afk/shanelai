import { motion } from 'motion/react';
import { Mail, ArrowDown } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ProjectCard } from '../components/ProjectCard';

export function HomePage() {
  const highlightedWorks = [
    {
      title: 'Memory Navigator',
      description: 'AR cognitive training system for elderly users with real-time spatial guidance',
      image: 'https://images.unsplash.com/photo-1740908900846-271f4f021b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBUiUyMG1lbW9yeSUyMGNvZ25pdGl2ZXxlbnwxfHx8fDE3NjE5MzYyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['AR', 'HoloLens', 'Design'],
      type: 'design' as const,
      link: '/case-study/memory-navigator'
    },
    {
      title: 'Huuuuu',
      description: 'A breath-activated wearable that transforms personal warmth into collective empowerment',
      image: 'https://images.unsplash.com/photo-1579120632007-f493373daed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGRyaXZlciUyMHZvaWNlfGVufDF8fHx8MTc2MTkzNjI3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Arduino · Wearable · IoT', 'Interaction Designer', 'Design'],
      type: 'research' as const,
      link: '/case-study/Huuuuu'
    },
    {
      title: 'FunFitLand (UFit)',
      description: 'VR fitness experience designed for accessibility and inclusive movement',
      image: 'https://images.unsplash.com/photo-1646496496941-3cd864ab1f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWUiUyMGZpdG5lc3MlMjBnYW1lfGVufDF8fHx8MTc2MTkzNjI3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['VR', 'Accessibility', 'Design'],
      type: 'design' as const,
      link: '/case-study/funfitland'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-[160px] pb-[0px] px-6 md:px-12 lg:px-16 pr-[48px] pl-[48px]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
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
              Transforming complex ideas into intuitive, human-centered experiences.
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.a
                href="mailto:shanshanlai160402@gmail.com"
                whileHover={{ opacity: 0.6 }}
                className="inline-flex items-center gap-3"
                style={{ fontSize: '16px', fontWeight: 400, color: '#000000' }}
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
      <section className="md:py-28 px-6 md:px-12 lg:px-16 py-[30px] px-[48px] py-[40px]">
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
