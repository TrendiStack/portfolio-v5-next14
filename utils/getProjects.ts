import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';

const client = getClient();

export const getProjects = async () => {
  const { data } = await client.query({
    query: gql`
      query Projects {
        projects {
          createdAt
          description
          frameworks
          heading
          hosting
          id
          language
          publishedAt
          services
          slug
          subheading
          updatedAt
          images {
            url
            width
            height
          }
          featuredImage {
            width
            url
            height
          }
        }
      }
    `,
  });

  return data.projects;
};
