import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { lazy, Suspense } from 'react';
import { ScrollToTop } from './components/ScrollToTop';
import { CustomCursor } from './components/CustomCursor';

// Lazy load all pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const PlaygroundPage = lazy(() => import('./pages/PlaygroundPage').then(m => ({ default: m.PlaygroundPage })));
const DesignEngineeringWorkflowPage = lazy(() => import('./pages/DesignEngineeringWorkflowPage').then(m => ({ default: m.DesignEngineeringWorkflowPage })));
const PreviousWorkPage = lazy(() => import('./pages/PreviousWorkPage').then(m => ({ default: m.PreviousWorkPage })));
const NYCTourismCaseStudy = lazy(() => import('./pages/case-studies/NYCTourismCaseStudy').then(m => ({ default: m.NYCTourismCaseStudy })));
const FunFitLandCaseStudy = lazy(() => import('./pages/case-studies/FunFitLandCaseStudy').then(m => ({ default: m.FunFitLandCaseStudy })));
const MemoryNavigatorCaseStudy = lazy(() => import('./pages/case-studies/MemoryNavigatorCaseStudy').then(m => ({ default: m.MemoryNavigatorCaseStudy })));
const HuuuuuCaseStudy = lazy(() => import('./pages/case-studies/HuuuuuCaseStudy').then(m => ({ default: m.HuuuuuCaseStudy })));
const TalkieCaseStudy = lazy(() => import('./pages/case-studies/TalkieCaseStudy').then(m => ({ default: m.TalkieCaseStudy })));
const VibeSyncCaseStudy = lazy(() => import('./pages/case-studies/VibeSyncCaseStudy').then(m => ({ default: m.VibeSyncCaseStudy })));
const TemuCaseStudy = lazy(() => import('./pages/case-studies/TemuCaseStudy').then(m => ({ default: m.TemuCaseStudy })));
const BoatwrightLibraryCaseStudy = lazy(() => import('./pages/case-studies/BoatwrightLibraryCaseStudy').then(m => ({ default: m.BoatwrightLibraryCaseStudy })));
const NeoCaseStudy = lazy(() => import('./pages/case-studies/NeoCaseStudy').then(m => ({ default: m.NeoCaseStudy })));
const PennyCaseStudy = lazy(() => import('./pages/case-studies/PennyCaseStudy').then(m => ({ default: m.PennyCaseStudy })));
const RichmondLibraryCaseStudy = lazy(() => import('./pages/case-studies/RichmondLibraryCaseStudy').then(m => ({ default: m.RichmondLibraryCaseStudy })));

// Loading component for Suspense fallback
/** Wrap pages that share marketing typography (not case studies). See `.ds-marketing-shell` in globals.css. */
function MarketingPageShell({ children }: { children: React.ReactNode }) {
  return <div className="ds-marketing-shell min-h-[100vh]">{children}</div>;
}

function PageLoader() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: 'var(--ds-bg-page)'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid color-mix(in srgb, var(--ds-accent-warm) 20%, transparent)',
        borderTop: '3px solid var(--ds-accent-warm)',
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
        <Route path="/" element={<PageWrapper><MarketingPageShell><HomePage /></MarketingPageShell></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><MarketingPageShell><AboutPage /></MarketingPageShell></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><MarketingPageShell><ProjectsPage /></MarketingPageShell></PageWrapper>} />
        <Route path="/playground" element={<PageWrapper><MarketingPageShell><PlaygroundPage /></MarketingPageShell></PageWrapper>} />
        <Route path="/design-engineering-workflow" element={<PageWrapper><MarketingPageShell><DesignEngineeringWorkflowPage /></MarketingPageShell></PageWrapper>} />
        <Route path="/previous-work" element={<PageWrapper><MarketingPageShell><PreviousWorkPage /></MarketingPageShell></PageWrapper>} />
        <Route path="/case-study/nyc-tourism" element={<PageWrapper><NYCTourismCaseStudy /></PageWrapper>} />
        <Route path="/case-study/funfitland" element={<PageWrapper><FunFitLandCaseStudy /></PageWrapper>} />
        <Route path="/case-study/memory-navigator" element={<PageWrapper><MemoryNavigatorCaseStudy /></PageWrapper>} />
        <Route path="/case-study/huuuuu" element={<PageWrapper><HuuuuuCaseStudy /></PageWrapper>} />
        <Route path="/case-study/talkie" element={<PageWrapper><TalkieCaseStudy /></PageWrapper>} />
        <Route path="/case-study/vibe-sync" element={<PageWrapper><VibeSyncCaseStudy /></PageWrapper>} />
        <Route path="/case-study/temu-ai-support" element={<PageWrapper><TemuCaseStudy /></PageWrapper>} />
        <Route path="/case-study/boatwright-library" element={<PageWrapper><BoatwrightLibraryCaseStudy /></PageWrapper>} />
        <Route path="/case-study/neo" element={<PageWrapper><NeoCaseStudy /></PageWrapper>} />
        <Route path="/case-study/penny" element={<PageWrapper><PennyCaseStudy /></PageWrapper>} />
        <Route path="/case-study/richmond-library" element={<PageWrapper><RichmondLibraryCaseStudy /></PageWrapper>} />
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
        <CustomCursor />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}
