import { getProjects } from '@/utils/getProjects';
import Hero from '@/components/hero/Hero';
import Info from '@/components/info/Info';
import ProjectsContainer from '@/components/projects/ProjectsContainer';

export default async function Home() {
  const projects = await getProjects();
  return (
    <main>
      <Hero />
      <ProjectsContainer data={projects} />
      <Info />
    </main>
  );
}
