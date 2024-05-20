import isEmpty from 'lodash.isempty';
import { PROJECT_NUMBERS } from './getProjects.mjs';
import { graphqlWithAuth } from './graphqlWithAuth.mjs';

const filterEstafetteProjects = (issues = []) => {
  return issues.map(({ title, projectItems, ...issue }) => ({
    title,
    projects: projectItems.nodes.filter(({ project }) => PROJECT_NUMBERS.includes(project.number)).map(cleanupFields),
    ...issue,
  }));
};

const cleanupFields = ({ project, fieldValues }) => ({
  [project.number]: {
    title: project.title,
    checks: fieldValues.nodes
      .filter((node) => !isEmpty(node))
      .map(({ field: { name, id }, value }) => ({ name, id, value })),
  },
});

export const getComponentProgess = async () => {
  const {
    repository: { issues },
  } = await graphqlWithAuth({
    query: `{
repository(name: "backlog", owner: "nl-design-system") {
    issues(labels: ["component"], first: 100) {
      totalCount
      nodes {
        title
        url: bodyUrl
        projectItems(includeArchived: false, first: 10) {
          nodes {
            project {
              title
              number
            }
            fieldValues(first: 50) {
              nodes {
                ... on ProjectV2ItemFieldValueCommon {
                  field {
                    ... on ProjectV2FieldCommon {
                      name
                      id
                    }
                  }
                }
                ... on ProjectV2ItemFieldSingleSelectValue {
                  value: name
                }
                ... on ProjectV2ItemFieldTextValue {
                  value: text
                }
              }
            }
          }
        }
      }
    }
  }
}`,
  });

  return filterEstafetteProjects(issues.nodes);
};
