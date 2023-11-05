"use client"

import { motion } from 'framer-motion';

export default function About () {
  return (
    <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section id='contact'>
                Portfolio
            </section>

        </motion.div>
  );
}