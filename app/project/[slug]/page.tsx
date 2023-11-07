import type { Metadata } from 'next';
import Projects from '@/components/projects/Projects';
import { getProjects } from '@/utils/getProjects';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Params): Promise<Metadata> {
  const formattedTitle = slug
    .split('-')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
  return {
    title:
      formattedTitle +
      ' - Terel Phillips - Designer - Developer - Toronto, Ontario',
  };
}

const page = async (props: Params) => {
  const data = await getProjects();
  return (
    <main>
      <Projects params={props.params} data={data} />
    </main>
  );
};

export default page;
