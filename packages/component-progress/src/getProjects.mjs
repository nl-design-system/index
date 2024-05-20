import { graphqlWithAuth } from './graphqlWithAuth.mjs';

const HELP_WANTED_PROJECT = 27;
const COMMUNITY_PROJECT = 29;
const CANDIDATE_PROJECT = 32;
const HALL_OF_FAME_PROJECT = 30;

export const PROJECT_NUMBERS = [HELP_WANTED_PROJECT, COMMUNITY_PROJECT, CANDIDATE_PROJECT, HALL_OF_FAME_PROJECT];

export const getProjectDetails = async () => {
  const { organization } = await graphqlWithAuth({
    query: `query projectDetails($helpWanted: Int!, $community: Int!, $candidate: Int!, $hallOfFame: Int!) {
    organization(login: "nl-design-system") {
      HELP_WANTED: projectV2(number:$helpWanted) {
        ...ProjectFragment
      }
      COMMUNITY: projectV2(number:$community) {
        ...ProjectFragment
      }
      CANDIDATE: projectV2(number:$candidate) {
        ...ProjectFragment
      }
      HALL_OF_FAME: projectV2(number:$hallOfFame) {
        ...ProjectFragment
      }
    }
  }
  
  fragment ProjectFragment on ProjectV2 {
  number
  title
  shortDescription
  url
  updatedAt
  view(number: 1) {
    fields(first: 50) {
      totalCount
      checks: nodes {
        ... on ProjectV2FieldCommon {
          dataType
          name
          id
        }
      }
    }
  }
}`,
    helpWanted: HELP_WANTED_PROJECT,
    community: COMMUNITY_PROJECT,
    candidate: CANDIDATE_PROJECT,
    hallOfFame: HALL_OF_FAME_PROJECT,
  });

  return organization;
};
