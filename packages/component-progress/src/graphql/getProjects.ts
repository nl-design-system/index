import { graphqlWithAuth } from './graphqlWithAuth.js';

const octokit = graphqlWithAuth();

export interface ProjectV2FieldCommon {
  dataType: string;
  name: string;
  id: string;
}

export interface Project {
  number: number;
  title: string;
  shortDescription: string;
  url: string;
  updatedAt: string;
  views: {
    nodes: {
      fields: {
        nodes: ProjectV2FieldCommon[];
      };
    }[];
  };
}

export interface ProjectResponse {
  organization: {
    projectsV2: {
      nodes: Project[];
    };
  };
}

export const getProjects = async () => {
  const { organization } = await octokit.graphql<ProjectResponse>(
    `query projects {
  organization(login: "nl-design-system") {
    projectsV2(first: 100) {
      nodes {
        number
        title
        shortDescription
        url
        updatedAt
        views(first: 1) {
          nodes {
            fields(first: 100) {
              nodes {
                ... on ProjectV2FieldCommon {
                  dataType
                  name
                  id
                }
              }
            }
          }
        }
      }
    }
  }
}`,
  );

  return organization.projectsV2.nodes;
};
