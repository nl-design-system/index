import isEmpty from 'lodash.isempty';
import { graphqlWithAuth } from './graphqlWithAuth.mjs';

const UTRECHT = 36;
const AMSTERDAM = 48;
const RVO = 49;
const LOGIUS = 53;
const DEN_HAAG = 55;

const PROJECT_NUMBERS = [UTRECHT, AMSTERDAM, RVO, LOGIUS, DEN_HAAG];
const PROJECT_FIELDS = new Map([
  ['naam', 'naam'],
  ['organisatie prefix', 'prefix'],
  ['minimale design tokens', 'designTokensMVP'],
  ['naamgeving design tokens', 'designTokensNaamgeving'],
  ['licentie component - eupl', 'eupl'],
  ['licentie documentatie - cc0', 'cc0'],
  ['figma url', 'figma'],
  ['npm url (css)', 'npmCSS'],
  ['github url (css)', 'githubCSS'],
  ['storybook url (css)', 'storybookCSS'],
  ['theme storybook url', 'storybookThemes'],
  ['status', 'status'],
]);

const HELP_WANTED = 27;
const COMMUNITY = 29;
const CANDIDATE = 32;
const HALL_OF_FAME = 30;

const inProject = (projectItems, projectNumber) =>
  projectItems.nodes.find(({ project }) => project.number === projectNumber);

const hasStatusDone = (projectItems, projectNumber) => {
  const project = inProject(projectItems, projectNumber);
  const projectStatus = project?.fieldValues.nodes.find((item) => item.field?.name === 'Status');
  return !!projectStatus && projectStatus.color === 'GREEN';
};

const sortAlphabetically = (a, b) => (a.component < b.component ? -1 : a.last_nom > b.last_nom ? 1 : 0);

const filterProjects = (issues = []) => {
  return issues
    .filter(({ projectItems }) => inProject(projectItems, HELP_WANTED))
    .sort(sortAlphabetically)
    .map(({ component, projectItems, ...issue }) => ({
      component,
      helpWanted: hasStatusDone(projectItems, HELP_WANTED),
      community: hasStatusDone(projectItems, COMMUNITY),
      candidate: hasStatusDone(projectItems, CANDIDATE),
      hallOfFame: hasStatusDone(projectItems, HALL_OF_FAME),
      projects: projectItems.nodes
        .filter(({ project }) => PROJECT_NUMBERS.includes(project.number))
        .map(cleanupFields)
        .map(getProgress),
      ...issue,
    }));
};

const cleanupFields = ({ project, fieldValues }) => ({
  organisation: project.title.replace('Components - ', ''),
  number: project.number,
  checks: fieldValues?.nodes
    .filter((node) => !isEmpty(node))
    .filter(({ field }) => PROJECT_FIELDS.has(field.name.toLowerCase()))
    .filter(({ field, value, color }) => {
      if (field.dataType === 'SINGLE_SELECT') {
        return color === 'GREEN';
      }
      return value !== '-';
    })
    .reduce(
      (checks, { field: { name }, value, color }) => ({
        ...checks,
        [PROJECT_FIELDS.get(name.toLowerCase())]: color === 'GREEN' ? true : value,
      }),
      {},
    ),
});

const getProgress = (project) => {
  return {
    ...project,
    progress: { value: Object.keys(project.checks).length, max: PROJECT_FIELDS.size },
  };
};

const octokit = graphqlWithAuth();

export const getComponentProgess = async () => {
  const {
    repository: { issues },
  } = await octokit.graphql.paginate(
    `query componentProgress($cursor: String) {
    repository(name: "backlog", owner: "nl-design-system") {
    issues(labels: ["component"], first: 20, after: $cursor) {
      totalCount
      nodes {
        component: title
        backlog: bodyUrl
        projectItems(includeArchived: false, first: 100) {
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
                      dataType
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
      }
        pageInfo {
          hasNextPage
          endCursor
        }
    }
  }
  }`,
  );

  return filterProjects(issues.nodes);
};
