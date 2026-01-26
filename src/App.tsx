import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { lazy, Suspense } from 'react';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy load all pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const PreviousWorkPage = lazy(() => import('./pages/PreviousWorkPage').then(m => ({ default: m.PreviousWorkPage })));
const NYCTourismCaseStudy = lazy(() => import('./pages/case-studies/NYCTourismCaseStudy').then(m => ({ default: m.NYCTourismCaseStudy })));
const FunFitLandCaseStudy = lazy(() => import('./pages/case-studies/FunFitLandCaseStudy').then(m => ({ default: m.FunFitLandCaseStudy })));
const MemoryNavigatorCaseStudy = lazy(() => import('./pages/case-studies/MemoryNavigatorCaseStudy').then(m => ({ default: m.MemoryNavigatorCaseStudy })));
const HuuuuuCaseStudy = lazy(() => import('./pages/case-studies/HuuuuuCaseStudy').then(m => ({ default: m.HuuuuuCaseStudy })));
const TalkieCaseStudy = lazy(() => import('./pages/case-studies/TalkieCaseStudy').then(m => ({ default: m.TalkieCaseStudy })));
const FunFitLandResearchCaseStudy = lazy(() => import('./pages/case-studies/FunFitLandResearchCaseStudy').then(m => ({ default: m.FunFitLandResearchCaseStudy })));

// Loading component for Suspense fallback
function PageLoader() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid rgba(255, 115, 0, 0.2)',
        borderTop: '3px solid #FF7300',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  // Simplified page transition wrapper
  const PageWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <Suspense fallback={<PageLoader />}>
        {children}
      </Suspense>
    </motion.div>
  );

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
        <Route path="/previous-work" element={<PageWrapper><PreviousWorkPage /></PageWrapper>} />
        <Route path="/case-study/nyc-tourism" element={<PageWrapper><NYCTourismCaseStudy /></PageWrapper>} />
        <Route path="/case-study/funfitland" element={<PageWrapper><FunFitLandCaseStudy /></PageWrapper>} />
        <Route path="/case-study/memory-navigator" element={<PageWrapper><MemoryNavigatorCaseStudy /></PageWrapper>} />
        <Route path="/case-study/huuuuu" element={<PageWrapper><HuuuuuCaseStudy /></PageWrapper>} />
        <Route path="/case-study/talkie" element={<PageWrapper><TalkieCaseStudy /></PageWrapper>} />
        <Route path="/case-study/funfitland-research" element={<PageWrapper><FunFitLandResearchCaseStudy /></PageWrapper>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="antialiased">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}
