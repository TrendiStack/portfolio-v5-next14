'use client';

import { PiArrowUpRightThin } from 'react-icons/pi';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  name: string;
  fImg: { url: string; width: number; height: number };
  sImg: { url: string; width: number; height: number };
}

const ProjectCard = ({ name, fImg, sImg }: ProjectProps) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href="/project/[name]"
      as={`/project/${name.toLowerCase().replace(/\s/g, '-')}`}
    >
      <article
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        className="group flex flex-col gap-3"
      >
        <div className="bg-white w-80 h-64 lg:w-[33rem] lg:h-[23rem] rounded-2xl overflow-hidden">
          <div className="bg-primary w-full h-full flex justify-center items-center scale-110 group-hover:scale-105 transition-all duration-500">
            {!hover ? (
              <Image
                src={fImg.url}
                alt={`Picture of the ${name} project}`}
                width={fImg.width}
                height={fImg.height}
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={sImg.url}
                alt={`Picture of the ${name} project}`}
                width={360}
                height={sImg.height}
                className="max-md:p-8"
              />
            )}
          </div>
        </div>
        <h3 className="group lg:font-light inline-flex lg:text-xl">
          {name}
          <PiArrowUpRightThin className="text-white group-hover:-rotate-45 transition-all duration-300" />
        </h3>
      </article>
    </Link>
  );
};

export default ProjectCard;
