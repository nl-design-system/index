import { graphqlWithAuth } from './graphqlWithAuth.mjs';

const octokit = graphqlWithAuth();

export const getProjects = async () => {
  const { organization } = await octokit.graphql(
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
