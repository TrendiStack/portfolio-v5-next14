'use client';

import { motion as m } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  };
  return (
    <main>
      <m.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: 'linear' }}
      >
        {children}
      </m.main>
    </main>
  );
}
