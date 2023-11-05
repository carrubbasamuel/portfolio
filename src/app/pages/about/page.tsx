"use client"

import { motion } from 'framer-motion';

export default function About () {
  return (
    <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section id='About'>
                About
            </section>

        </motion.div>
  );
}
