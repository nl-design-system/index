import isEmpty from 'lodash.isempty';
import { PROJECT_NUMBERS, PROJECTS } from './index.mjs';

const cleanupValue = ({ field, value, color }) => {
  // Only allow https values
  if (field.dataType === 'TEXT' && URL.canParse(value)) {
    const url = new URL(value);
    return url.protocol === 'https:';
  }

  // Assume green means checked
  if (field.dataType === 'SINGLE_SELECT') {
    return color === 'GREEN';
  }

  return !!value;
};

const cleanupFields = ({ project, fieldValues }) => ({
  title: project.title.replace(/Components\s?-\s?([0-9]\s?-\s?)?/, ''),
  number: project.number,
  id: PROJECTS[project.number],
  url: project.url,
  tasks: fieldValues.nodes
    .filter((node) => !isEmpty(node) && node.field.dataType !== 'TITLE' && node.field.name !== 'Status')
    .map((node) => ({ ...node.field, value: node.value, checked: cleanupValue(node) })),
});

const getAllTasks = (issue, projects) => {
  const project = projects.find((project) => project.number === issue.number);
  const tasks = project.tasks.map((task) => {
    const check = issue.tasks.find((check) => check.id === task.id);
    const fallBack = {
      ...task,
      value: '',
      checked: false,
    };

    return check || fallBack;
  });

  const checked = issue.tasks.filter((issue) => issue.checked);
  const done = checked.length === project.tasks.length;

  return {
    ...issue,
    done,
    progress: { value: checked.length, max: project.tasks.length },
    tasks,
  };
};

const getRelayStep = (issue) => {
  const HELP_WANTED = issue.projects.find(({ id }) => id === 'HELP_WANTED')?.done;
  const COMMUNITY = issue.projects.find(({ id }) => id === 'COMMUNITY')?.done;
  const CANDIDATE = issue.projects.find(({ id }) => id === 'CANDIDATE')?.done;
  const HALL_OF_FAME = issue.projects.find(({ id }) => id === 'HALL_OF_FAME')?.done;

  const relayStep = HALL_OF_FAME
    ? 'HALL_OF_FAME'
    : CANDIDATE
      ? 'CANDIDATE'
      : COMMUNITY
        ? 'COMMUNITY'
        : HELP_WANTED
          ? 'HELP_WANTED'
          : 'UNKNOWN';

  return {
    relayStep,
    ...issue,
  };
};

export const mapToComponentProgress = (issues, projects) =>
  issues
    .map(({ title, projectItems, ...issue }) => ({
      title,
      ...issue,
      projects: projectItems.nodes
        .filter(({ project }) => Object.values(PROJECT_NUMBERS).includes(project.number))
        .map(cleanupFields)
        .map((component) => getAllTasks(component, projects)),
    }))
    .map(getRelayStep);
