import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { PreviousWorkPage } from './pages/PreviousWorkPage';
import { NYCTourismCaseStudy } from './pages/case-studies/NYCTourismCaseStudy';
import { FunFitLandCaseStudy } from './pages/case-studies/FunFitLandCaseStudy';
import { MemoryNavigatorCaseStudy } from './pages/case-studies/MemoryNavigatorCaseStudy';
import { HuuuuuCaseStudy } from './pages/case-studies/HuuuuuCaseStudy';
import { TalkieCaseStudy } from './pages/case-studies/TalkieCaseStudy';
import { FunFitLandResearchCaseStudy } from './pages/case-studies/FunFitLandResearchCaseStudy';
import { CustomCursor } from './components/CustomCursor';
import { ScrollToTop } from './components/ScrollToTop';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <AboutPage />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <ProjectsPage />
            </motion.div>
          }
        />
        <Route
          path="/previous-work"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <PreviousWorkPage />
            </motion.div>
          }
        />
        <Route
          path="/case-study/nyc-tourism"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <NYCTourismCaseStudy />
            </motion.div>
          }
        />
        <Route
          path="/case-study/funfitland"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <FunFitLandCaseStudy />
            </motion.div>
          }
        />
        <Route
          path="/case-study/memory-navigator"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <MemoryNavigatorCaseStudy />
            </motion.div>
          }
        />
        <Route
          path="/case-study/huuuuu"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <HuuuuuCaseStudy />
            </motion.div>
          }
        />
        <Route
          path="/case-study/talkie"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <TalkieCaseStudy />
            </motion.div>
          }
        />
        <Route
          path="/case-study/funfitland-research"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <FunFitLandResearchCaseStudy />
            </motion.div>
          }
        />
        {/* Catch-all route for preview and unmatched paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="antialiased" style={{ cursor: 'none' }}>
        <CustomCursor />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}
