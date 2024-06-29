import { graphqlWithAuth } from './graphqlWithAuth.mjs';

export const getComponentIssues = async () => {
  const octokit = graphqlWithAuth();

  const {
    repository: { issues },
  } = await octokit.graphql.paginate(
    `query componentProgress($cursor: String) {
  repository(name: "backlog", owner: "nl-design-system") {
    issues(labels: ["component"], first: 50, after: $cursor) {
      totalCount
      nodes {
        title
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
