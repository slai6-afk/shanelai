import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ProjectCard } from '../components/ProjectCard';
import { TextVectorMark } from '../components/vector-decor';
import homepageCover from '../assets/homepage.png';
import nycTourismCover from '../assets/Gemini_Generated_Image_2e1a482e1a482e1a 1.png';
import temuCover from '../assets/cover.png';
import pennyCover from '../assets/penny_hero.png';

export function ProjectsPage() {
  const projects = [
    {
      title: 'penny. — Mindful Money for the Non-Accountant Generation',
      description:
        'Flipping the paradigm from financial shame to intentional lifestyle design — using behavioral science to turn budgeting into a gamified joy you can pace.',
      image: pennyCover,
      tags: ['FinTech', 'Behavioral Design', 'Gen Z'],
      type: 'design' as const,
      link: '/case-study/penny',
      hoverHint: 'Click to see penny. — mindful money app',
      imageFit: 'cover' as const,
      mediaBackground: '#F8B2BD'
    },
    {
      title: 'Neo: Conversational Stylist & Support Agent for New York or Nowhere',
      description:
        'Architecting systemic fluidity in post-purchase CUI — turning a 4.5-min email loop into a 45-second brand moment with 100% resolution rate and zero human escalations.',
      image: '/neo-hero.png',
      tags: ['Conversational AI', 'CUI', 'Voiceflow'],
      type: 'design' as const,
      link: '/case-study/neo',
      hoverHint: "Click to see Neo — NYON's AI stylist",
      imageFit: 'cover' as const,
      mediaBackground: '#000000'
    },
    {
      title: 'Amazon Music: Bridging the "Gen-Z Discovery Gap" through expressive social ecosystems',
      description:
        'How I led product strategy in a 4-week sprint to transform Amazon Music into a Gen Z social hub, bridging the discovery-to-retention gap.',
      image: homepageCover,
      tags: ['Social', 'Product', 'Figma'],
      type: 'design' as const,
      link: '/case-study/vibe-sync',
      hoverHint: 'Click to see Vibe Sync for Amazon Music',
      imageFit: 'contain' as const,
      mediaBackground: '#000000'
    },
    {
      title: 'Temu: Fixing the "Leaky Bucket" of AI Support',
      description:
        'How I redesigned Temu\'s AI support ecosystem, dropping manual agent escalation from 81% to 20% through intent-driven routing and strategic UI friction.',
      image: temuCover,
      tags: ['AI', 'NLP', 'Product', 'Data viz'],
      type: 'design' as const,
      link: '/case-study/temu-ai-support',
      hoverHint: 'Click to see Temu AI support redesign',
      imageFit: 'contain' as const,
      mediaBackground: '#ffffff'
    },
    {
      title: 'FunFitLand: Making Fitness Accessible to Everyone In Immersive World',
      description:
        'Designing for the extremes: How I built an inclusive VR fitness framework that expanded accessibility to 90% of diverse physical abilities',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2Ff9363af89837426eac1bacac49533375',
      tags: ['VR', 'Accessibility', 'Design'],
      type: 'design' as const,
      link: '/case-study/funfitland',
      hoverHint: 'Click to see how I design inclusive VR fitness'
    },
    {
      title: 'NYC Tourism: Discover the Big Apple & Making It Your Home',
      description:
        'How I re-engineered NYC tourism IA to reduce cognitive load for students by 35% through personalized discovery',
      image: nycTourismCover,
      tags: ['IA', 'UX Research', 'Testing'],
      type: 'research' as const,
      link: '/case-study/nyc-tourism',
      hoverHint: 'Click to see how I untangle the NYC trip for newcomers',
      imageFit: 'contain' as const,
      mediaBackground: '#000000'
    },
    {
      title: 'Memory Navigator',
      description: 'AR cognitive training system for elderly users with real-time spatial guidance',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2Fd3d7c1c3590b47178dabf39dc0bd330a',
      tags: ['AR', 'HoloLens', 'Design'],
      type: 'design' as const,
      link: '/case-study/memory-navigator',
      hoverHint: 'Click to see how memory becomes spatial AR'
    },
    {
      title: 'Huuuuu!',
      description: 'Mindful breathing companion that transforms breath into visual meditation',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2Fca07cfe232474fd98a425e6157eb83f4',
      tags: ['Wellness', 'Mobile', 'Design'],
      type: 'design' as const,
      link: '/case-study/huuuuu',
      hoverHint: 'Click to see breath turned into calm visuals'
    },
    {
      title: 'Talkie',
      description: 'AI voice companion for truck drivers designed through empathy-driven research',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2F8f1c564879944802a28da9b67b45e07b',
      tags: ['AI', 'Voice', 'Research'],
      type: 'research' as const,
      link: '/case-study/talkie',
      hoverHint: 'Click to see voice AI for long-haul drivers'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--ds-bg-page)]">
      <Navigation />

      <section className="pt-40 pb-32 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-24 text-center"
            style={{
              color: 'var(--ds-text-primary)',
              fontSize: 'var(--ds-text-display)',
              fontWeight: 400,
              fontFamily: 'var(--font-heading)',
              lineHeight: 'var(--type-l6-lh)',
              letterSpacing: 'var(--type-track-tight)'
            }}
          >
            <TextVectorMark vector="highlight3">Projects</TextVectorMark>
          </motion.h1>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                type={project.type}
                link={project.link}
                hoverHint={project.hoverHint}
                index={index}
                imageFit={project.imageFit}
                mediaBackground={project.mediaBackground}
              />
            ))}
          </div>

          {/* Optional Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-32 mb-16 h-px"
            style={{ transformOrigin: 'left', backgroundColor: 'var(--ds-border-subtle)' }}
          />

          {/* Closing Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center max-w-2xl mx-auto"
            style={{
              color: 'var(--ds-text-secondary)',
              fontSize: 'var(--type-l3)',
              fontWeight: 400,
              fontFamily: 'var(--font-heading)',
              lineHeight: '1.8'
            }}
          >
            Each project represents a careful balance between research insight and design craft, 
            exploring how technology can serve human needs with clarity and intention.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
