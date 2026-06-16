"use client";

import { motion } from "framer-motion";

/**
 * Wraps every route. Next.js remounts this on navigation, so it gives us a
 * smooth fade/slide page transition between Home, Projects, and Blog pages.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
