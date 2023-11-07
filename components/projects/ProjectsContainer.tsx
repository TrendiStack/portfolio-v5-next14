'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Project as type } from '@/types/ProjectTypes';
import { useRef } from 'react';
import HeaderText from '../HeaderText';
import ProjectCard from './ProjectCard';
import Section from '../Section';

interface ProjectsProps {
  data: type[];
}

const ProjectsContainer = ({ data }: ProjectsProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  return (
    <Section id="projects" height className="bg-secondary text-primary">
      <div ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <HeaderText text="projects" className="absolute top-36" />
          <motion.div style={{ x }}>
            <div className="flex gap-5 lg:gap-10 lg:mt-28">
              {data.map((project, i) => (
                <ProjectCard
                  key={i}
                  name={project.heading}
                  fImg={project.featuredImage[0]}
                  sImg={project.featuredImage[1]}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default ProjectsContainer;
