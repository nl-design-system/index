import { graphqlWithAuth } from './graphqlWithAuth.js';

export interface ProjectFieldValue {
  field: {
    dataType: string;
    name: string;
    id: number;
  };
  value?: string;
  color?: string;
}
export interface ProjectItem {
  project: {
    title: string;
    number: number;
    url: string;
  };
  fieldValues: {
    nodes: ProjectFieldValue[];
  };
}

export interface ComponentIssue {
  title: string;
  backlog: string;
  number: number;
  projectItems: {
    nodes: ProjectItem[];
  };
}

export interface ComponentProgress {
  repository: {
    issues: {
      nodes: ComponentIssue[];
    };
  };
}

export const getComponentIssues = async () => {
  const octokit = graphqlWithAuth();

  const {
    repository: { issues },
  } = await octokit.graphql.paginate<ComponentProgress>(
    `query componentProgress($cursor: String) {
  repository(name: "backlog", owner: "nl-design-system") {
    issues(labels: ["component"], first: 25, after: $cursor) {
      totalCount
      nodes {
        title
        number
        backlog: bodyUrl
        projectItems(includeArchived: false, first: 100) {
          nodes {
            project {
              title
              number
              url
            }
            fieldValues(first: 50) {
              nodes {
                ... on ProjectV2ItemFieldValueCommon {
                  field {
                    ... on ProjectV2FieldCommon {
                      dataType
                      name
                      id
                    }
                  }
                }
                ... on ProjectV2ItemFieldSingleSelectValue {
                  value: name
                  color
                }
                ... on ProjectV2ItemFieldTextValue {
                  value: text
                }
                ... on ProjectV2ItemFieldDateValue {
                  value: date
                }
              }
            }
          }
        }
      },
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}`,
  );

  return issues.nodes;
};
