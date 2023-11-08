'use client';

import { motion as m, useScroll, useTransform } from 'framer-motion';
import { PiArrowUpRightThin, PiArrowDownThin } from 'react-icons/pi';
import { useRef } from 'react';
import ContextDivider from '../ContextDivider';
import Image from 'next/image';
import Link from 'next/link';
import mobileHeading from '@/public/images/Mobile heading text.png';
import Section from '../Section';
import WavesVideo from '../WavesVideo';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const designerY = useTransform(scrollYProgress, [0, 1], ['0', '200%']);
  const developerY = useTransform(scrollYProgress, [0, 1], ['0', '250%']);
  return (
    <div ref={ref}>
      <Section id="hero" padding className="relative max-lg:text-primary">
        <div className="w-full max-lg:h-full object-cover lg:w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
          <WavesVideo className="absolute" />
          <Image
            src="https://images.unsplash.com/photo-1566054757965-8c4085344c96?auto=format&fit=crop&q=80&w=2065&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero"
            width={2065}
            height={1377}
            quality={100}
            priority={true}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-secondary opacity-60"></div>
        </div>
        <div className="hero-header font-bold uppercase hidden lg:block ">
          <m.h1
            style={{ y: designerY }}
            className="tracking-widest lg:relative bottom-5"
          >
            designer
          </m.h1>
          <m.h1
            style={{ y: developerY }}
            className="tracking-tight sm:text-right developer-text"
          >
            developer
          </m.h1>
        </div>
        <Image
          src={mobileHeading}
          alt="Mobile Hero heading"
          width={760}
          height={917}
          quality={80}
          priority={true}
          className="lg:hidden w-full"
        />

        <ContextDivider colour="secondary" />

        <div className="flex max-sm:flex-col max-sm:gap-8">
          <p className="w-full uppercase xl:text-2xl 2xl:text-3xl font-light">
            latest projects <br />
            ©2022
          </p>
          <p className="max-md:absolute bottom-14 sm:text-xl 2xl:text-2xl">
            An inquisitive developer rooted in the vibrant city of Toronto,
            Ontario.
          </p>
        </div>

        <div className="absolute left-0 bottom-3 w-full flex items-center justify-between lg:font-light px-5 lg:px-8 lg:text-lg 2xl:text-2xl">
          <div className="flex items-center gap-52">
            <Link
              href="#projects"
              className="text-3xl 2xl:text-5xl max-md:hidden"
            >
              <PiArrowDownThin />
            </Link>
            <Link
              href="https://www.linkedin.com/in/terel-phillips"
              target="_blank"
              className="group inline-flex items-center"
            >
              LinkedIn
              <PiArrowUpRightThin className="group-hover:-rotate-45 transition-all duration-300" />
            </Link>
          </div>
          <Link href="mailto:terel.phillips23@gmail.com" target="_blank">
            terel.phillips23@gmail.com
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
