"use client"

import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/home/page';


export default function Root() {

  return (
      <AnimatePresence>
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Home />
          </motion.div>
      </AnimatePresence>
  );
}
