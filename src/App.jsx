import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Packages from './pages/Packages'
import TravelTips from './pages/TravelTips'
import About from './pages/About'
import Contact from './pages/Contact'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
}

function App() {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/destinations"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Destinations />
              </motion.div>
            }
          />
          <Route
            path="/packages"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Packages />
              </motion.div>
            }
          />
          <Route
            path="/travel-tips"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <TravelTips />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Contact />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}

export default App

