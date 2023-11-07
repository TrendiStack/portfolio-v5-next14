import { Project } from '@/types/ProjectTypes';
import ContextDivider from '../ContextDivider';
import HeaderText from '../HeaderText';
import Image from 'next/image';
import List from '../List';
import Overview from '../Overview';
import Section from '../Section';

interface ProjectsProps {
  params: { slug: string };
  data: Project[];
}

const Projects = ({ params, data }: ProjectsProps) => {
  const filteredData = data.filter(project => project.slug === params.slug)[0];
  const heading = filteredData.heading;
  const subheading = filteredData.subheading;
  const overview = filteredData.description;
  const services = filteredData.services.split(',') || [];
  const hosting = filteredData.hosting;
  const language = filteredData.language;
  const frameworks = filteredData.frameworks.split(',') || [];
  const images = filteredData.images || [];

  return (
    <Section
      id="project"
      padding
      className="lg:container lg:mx-auto pt-28 lg:px-28 lg:pt-72"
    >
      <HeaderText text={heading} />
      <HeaderText
        subheading
        text={subheading}
        className="mt-3 lg:mt-5 mb-5 lg:mb-28"
      />

      <Overview title="overview" initial={overview} />
      <ContextDivider colour="black" />
      <List services title="services" list={services} />

      <ContextDivider colour="black" />

      <List
        toolset
        title="tool set"
        list={{
          hosting: hosting,
          language: language,
          frameworks: frameworks,
        }}
      />

      <div className="flex flex-col items-center gap-8 lg:gap-8 pt-14 lg:pt-28 pb-8 ">
        {images.map((image, i) => (
          <div key={i} className="bg-neutral-300 p-8 lg:p-20 rounded-2xl">
            <Image
              src={image.url}
              alt="temp image"
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
