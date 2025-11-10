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
      image: 'https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2F4c111f71a8ad40d1b529a26875b1a9a2',
      link: '#',
      category: 'Internship',
      clientName: 'Temu'
    },
    {
      title: 'Minimax',
      role: 'AI Product Intern(APM)',
      description: 'Defined and developed AI voice companion features; optimized long-duration voice interactions, boosting feature retention by 23%. Refined gamified card collection mechanics, increasing daily active users by 12% within three months.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2F717db487d74d47828363ddbef4c1b71e',
      imgStyle: {
        '@media (max-width: 991px)': {
          backgroundColor: 'rgba(255, 255, 255, 1)',
        }
      },
      link: '#',
      category: 'Internship',
      clientName: 'Minimax'
    },
    {
      title: 'CastChat',
      role: 'UX Designer Intern',
      description: 'Conducted competitive research and proposed practical design solutions. Collaborated with product managers and UI designers to improve leaderboard interaction and user flow for social AI platform.',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F46b2761d61834692828a7f7e644854fc%2Fce938746fb44488b97f7c9c2929ae6ff',
      link: '#',
      category: 'Internship',
      clientName: 'CastChat'
    },
    {
      title: 'NYC Tourism',
      role: 'Information Architect',
      description: 'Led information architecture redesign for The Little Apple Team. Conducted card sorting and tree testing, improving findability for new-to-NYC students by 30%. Optimized content structure for better user navigation.',
      image: 'https://images.unsplash.com/photo-1631116615407-bc27638e6b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOWUMlMjB0b3VyaXNtJTIwY2l0eXxlbnwxfHx8fDE3NjE5MzQ5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/case-study/nyc-tourism',
      category: 'Research',
      clientName: 'The Little Apple Team'
    },
    {
      title: 'FunFitLand VR',
      role: 'UX Design Intern',
      description: 'Led accessibility feature for VR training game in a 30-person startup. Focused on arm-span adaptation for limited-mobility users through visual and haptic redesign, making VR fitness more inclusive.',
      image: 'https://images.unsplash.com/photo-1758521960456-c876c573e0b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWUiUyMGZpdG5lc3MlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjE5MzQ5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/case-study/funfitland',
      category: 'Intershipe',
      clientName: 'FunFitLand VR'
    },
    {
      title: 'Memory Navigator',
      role: 'AR/UX Designer',
      description: 'AR system for elderly users to train spatial memory. Built with HoloLens and Unity, combining cognitive science principles with intuitive AR interaction design and real-time feedback mechanisms.',
      image: 'https://images.unsplash.com/photo-1671417722838-3fbaa7f66203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBUiUyMGhvbG9ncmFtJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MTkzNDk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/case-study/memory-navigator',
      category: 'Research'
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
