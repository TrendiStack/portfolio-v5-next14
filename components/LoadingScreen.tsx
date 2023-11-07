'use client';

const { useEffect } = require('react');
import { motion as m } from 'framer-motion';
import { useRef, useState } from 'react';
import WavesVideo from './WavesVideo';

interface LoadingScreenProps {
  hasMounted: boolean;
}

export const LoadingScreen = ({ hasMounted }: LoadingScreenProps) => {
  const [textWidth, setTextWidth] = useState(0);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const text = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (text.current) setTextWidth(text.current.offsetWidth);

    const interval = setInterval(() => {
      setLoadingPercentage(prev => {
        if (prev < 100) return prev + 10;
        return prev;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [hasMounted, loadingPercentage]);
  return (
    <div
      aria-label="loading-screen"
      className="flex flex-col justify-center items-center text-primary min-h-screen w-full bg-secondary"
    >
      <WavesVideo className="absolute opacity-5" />
      <m.h1
        ref={text}
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: 0,
        }}
        transition={{ duration: 2 }}
        className="uppercase text-[9vh] md:text-8xl font-extrabold"
      >
        loading
      </m.h1>
      <m.div
        className="bg-primary h-1"
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: 0,
        }}
        transition={{ duration: 2 }}
        style={{
          width: textWidth,
        }}
      >
        <m.div
          className="h-full bg-neutral-500"
          initial={{
            width: '0%',
          }}
          animate={{
            width: `${loadingPercentage}%`,
          }}
          transition={{
            duration: 0.5,
          }}
        ></m.div>
      </m.div>
    </div>
  );
};

export default LoadingScreen;
