import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ProjectCarousel } from '../components/ProjectCarousel';

export function PreviousWorkPage() {
  const categories = ['All', 'Internship', 'Research', 'Personal'];

  const carouselSlides = [
    {
      title: 'Temu',
      role: 'Product Designer(current)',
      description: 'Improved AI-embaded custom service user experience (under NDA). Focused on interaction efficiency and service usability for AI chat platforms serving global e-commerce users.',
      image: 'https://images.unsplash.com/photo-1643906226799-59eab234e41d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzYxODk5MDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '#',
      category: 'Internship',
      clientName: 'Temu'
    },
    {
      title: 'Minimax',
      role: 'AI Product Intern',
      description: 'Defined and developed AI voice companion features; optimized long-duration voice interactions, boosting feature retention by 23%. Refined gamified card collection mechanics, increasing daily active users by 12% within three months.',
      image: 'https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNoYXQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxODUxMDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '#',
      category: 'Internship',
      clientName: 'Minimax'
    },
    {
      title: 'CastChat',
      role: 'UX Designer Intern',
      description: 'Conducted competitive research and proposed practical design solutions. Collaborated with product managers and UI designers to improve leaderboard interaction and user flow for social AI platform.',
      image: 'https://images.unsplash.com/photo-1689872330350-87e38c591b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFwcCUyMGRlc2lnbnxlbnwxfHx8fDE3NjE5MzUwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '#',
      category: 'Internship',
      clientName: 'CastChat'
    },
    {
      title: 'NYC Tourism IA Redesign',
      role: 'Information Architect',
      description: 'Led information architecture redesign for The Little Apple Team. Conducted card sorting and tree testing, improving findability for new-to-NYC students by 30%. Optimized content structure for better user navigation.',
      image: 'https://images.unsplash.com/photo-1631116615407-bc27638e6b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOWUMlMjB0b3VyaXNtJTIwY2l0eXxlbnwxfHx8fDE3NjE5MzQ5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/case-study/nyc-tourism',
      category: 'Research',
      clientName: 'The Little Apple Team'
    },
    {
      title: 'Talkie AI Companion',
      role: 'UX Research Assistant',
      description: 'Conducted interviews with U.S. truck drivers to understand emotional and physical needs during long hauls. Translated findings into UX flows for AI voice companion, focusing on safety and emotional support.',
      image: 'https://images.unsplash.com/photo-1670509295484-df0c2512fec4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGRyaXZlciUyMGhpZ2h3YXl8ZW58MXx8fHwxNzYxODk1MDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/case-study/talkie',
      category: 'Research',
      clientName: 'Talkie AI'
    },
    {
      title: 'FunFitLand VR',
      role: 'UX Design Intern',
      description: 'Led accessibility feature for VR training game in a 30-person startup. Focused on arm-span adaptation for limited-mobility users through visual and haptic redesign, making VR fitness more inclusive.',
      image: 'https://images.unsplash.com/photo-1758521960456-c876c573e0b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWUiUyMGZpdG5lc3MlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjE5MzQ5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/case-study/funfitland',
      category: 'Research',
      clientName: 'FunFitLand VR'
    },
    {
      title: 'Memory Navigator',
      role: 'AR/UX Designer',
      description: 'AR system for elderly users to train spatial memory. Built with HoloLens and Unity, combining cognitive science principles with intuitive AR interaction design and real-time feedback mechanisms.',
      image: 'https://images.unsplash.com/photo-1671417722838-3fbaa7f66203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBUiUyMGhvbG9ncmFtJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MTkzNDk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/case-study/memory-navigator',
      category: 'Personal'
    },
    {
      title: 'Zephyr\'s Lament',
      role: 'Data Artist',
      description: 'Interactive installation translating climate data into sculptural visual forms. Explores the sacred quality of environmental data through slow motion and light at 0.4 cm/s, creating contemplative experiences.',
      image: 'https://images.unsplash.com/photo-1756756412200-f4721d505d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzYxOTIyMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '#',
      category: 'Personal'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navigation />

      <section className="pt-40 pb-32 px-8 md:px-16 relative">
        {/* Decorative Circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-52 left-[8%] w-3 h-3 rounded-full bg-black"
        />

        <div className="max-w-[1400px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
            style={{ 
              color: '#000000', 
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 400,
              lineHeight: '1.2',
              letterSpacing: '-0.02em'
            }}
          >
            Previous Work
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-20 max-w-2xl"
            style={{
              color: '#666666',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '1.8'
            }}
          >
            <p>What I do in my internships, research projects.</p>
            <p>&</p>
            <p>Personal explorations in AI-powered design, and creative technology.</p>
          </motion.div>

          {/* Project Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectCarousel slides={carouselSlides} categories={categories} />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
