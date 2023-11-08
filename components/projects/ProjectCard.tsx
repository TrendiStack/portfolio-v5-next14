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
          <div
            className="bg-primary w-full h-full flex justify-center items-center lg:scale-110 lg:group-hover:scale-105 lg:transition-all lg:duration-500
          "
          >
            {!hover ? (
              <>
                <Image
                  src={fImg.url}
                  alt={`Picture of the ${name} project}`}
                  width={fImg.width}
                  height={fImg.height}
                  className="w-full h-full object-cover hidden lg:block"
                />
                <Image
                  src={sImg.url}
                  alt={`Picture of the ${name} project}`}
                  width={360}
                  height={sImg.height}
                  className="max-md:p-8 lg:hidden h-auto w-auto"
                />
              </>
            ) : (
              <Image
                src={sImg.url}
                alt={`Picture of the ${name} project}`}
                width={360}
                height={sImg.height}
                className="max-md:p-8 h-auto w-auto"
              />
            )}
          </div>
        </div>
        <h3 className="group lg:font-light inline-flex xl:text-lg max-xl:text-lg capitalize ">
          {name}
          <PiArrowUpRightThin className="text-white group-hover:-rotate-45 transition-all duration-300" />
        </h3>
      </article>
    </Link>
  );
};

export default ProjectCard;
