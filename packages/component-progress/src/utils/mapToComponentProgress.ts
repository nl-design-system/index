import isEmpty from 'lodash.isempty';
import { type MappedProjects, PROJECT_NUMBERS, PROJECTS } from './index.js';
import type { ComponentIssue, ProjectFieldValue, ProjectItem } from '../graphql/getComponentIssues.js';

const cleanupValue = ({ field, value, color }: ProjectFieldValue) => {
  // Only allow https values
  if (field.dataType === 'TEXT' && typeof value === 'string' && URL.canParse(value)) {
    const url = new URL(value);
    return url.protocol === 'https:';
  }

  // Assume green means checked
  if (field.dataType === 'SINGLE_SELECT') {
    return color === 'GREEN';
  }

  return !!value;
};

export interface CleanComponent {
  title: string;
  number: number;
  id: string;
  url: string;
  tasks: {
    id: number;
    name: string;
    value?: string;
    checked: boolean;
  }[];
}

const cleanupFields = ({
  project,
  fieldValues,
}: {
  project: ProjectItem['project'];
  fieldValues: ProjectItem['fieldValues'];
}): CleanComponent => ({
  title: project.title.replace(/Components\s?-\s?([0-9]\s?-\s?)?/, ''),
  number: project.number,
  id: PROJECTS[project.number],
  url: project.url,
  tasks: fieldValues.nodes
    .filter((node) => !isEmpty(node) && node.field.dataType !== 'TITLE' && node.field.name !== 'Status')
    .map((node) => ({ ...node.field, value: node.value, checked: cleanupValue(node) })),
});

const getAllTasks = (issue: CleanComponent, projects: MappedProjects): ExtendedCleanComponent => {
  const project = projects.find((project) => project.number === issue.number);

  const tasks =
    project?.tasks.map((task) => {
      const check = issue.tasks.find((check) => check.id === task.id);
      const fallBack = {
        ...task,
        value: '',
        checked: false,
      };

      return check || fallBack;
    }) || [];

  const allProgressTasks = project?.tasks.filter((task) => isProgressTask(task)) || [];
  const checkedProgressTasks = issue.tasks.filter((task) => isProgressTask(task)).filter((task) => task.checked);
  const done = checkedProgressTasks.length >= (allProgressTasks.length || 0);

  return {
    ...issue,
    done,
    progress: {
      value: checkedProgressTasks.length,
      max: allProgressTasks.length || 0,
    },
    tasks,
  };
};

export type RelayStep = 'HALL_OF_FAME' | 'CANDIDATE' | 'COMMUNITY' | 'HELP_WANTED' | 'UNKNOWN';

const getRelayStep = (issue: Omit<CleanComponentProgress, 'relayStep'>): CleanComponentProgress => {
  const HELP_WANTED = issue.projects.find(({ id }) => id === 'HELP_WANTED')?.done;
  const COMMUNITY = issue.projects.find(({ id }) => id === 'COMMUNITY')?.done;
  const CANDIDATE = issue.projects.find(({ id }) => id === 'CANDIDATE')?.done;
  const HALL_OF_FAME = issue.projects.find(({ id }) => id === 'HALL_OF_FAME')?.done;

  const relayStep: RelayStep = HALL_OF_FAME
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

export interface ExtendedCleanComponent extends CleanComponent {
  done: boolean;
  progress: {
    value: number;
    max: number;
  };
  tasks: {
    id: number;
    name: string;
    value: string;
    checked: boolean;
  }[];
}

export interface CleanComponentProgress {
  title: string;
  backlog: string;
  number: number;
  relayStep: string | RelayStep;
  projects: ExtendedCleanComponent[];
}

export const mapToComponentProgress = (issues: ComponentIssue[], projects: MappedProjects): CleanComponentProgress[] =>
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

const isProgressTask = ({ name }: { name: string }): boolean => {
  // Only count these tasks toward component progress
  const relayProgressTaskNames = [
    'A11y audit',
    'API unit tests',
    'Afbeelding',
    'Afgevinkt.',
    'Backlog',
    'Beschrijving',
    'Beveiliging',
    'Bruikbaar',
    'Code changelog',
    'Component assessment',
    'Discussion URL',
    "Do and don't voorbeelden",
    'Figma URL',
    'Figma changelog',
    'Figma geversioneerd',
    'Gebruikersonderzoek',
    'Getest met designers',
    'Getest met developers',
    'Getest met redacteuren',
    'GitHub (CSS)',
    'HTML/CSS',
    'Implementatie voldoet',
    'Kernteam',
    'Licentie component',
    'Licentie documentatie',
    'Link',
    'Minimale design tokens',
    'NPM',
    'Naam',
    'Naamgeving design tokens',
    'Niet afgevinkt.',
    'Onderzoek',
    'Prefix',
    'Privacy',
    'Promotie',
    'React',
    'Richtlijnen design tokens',
    'Richtlijnen redacteuren',
    'Semver',
    'Storybook (CSS)',
    "Storybook thema's",
    'Varianten',
    'Visuele regressietest',
    'Webcomponent',
    'Welk bord',
    'nldesignsystem.nl',
    '≥2 organisaties geswitcht',
  ];
  const candidateProgressTaskNames = [
    '📝 Issues bekend',
    '📝 Versimpeld of gesplitst',
    '📝 Acceptatiecriteria a11y',
    '📝 Semantiek',
    '📝 API',
    '📝 Testcases voor gebruik',
    '📝 Design tokens',
    '📝 Zoekwoorden',
    '📝 Stories en specs',
    '📝 Anatomie',
    '🎉 Huisstijl instelbaar',
    '🎉 Component gebruikt',
    '🎉 WCAG input',
    '🛠️ React component',
    '🛠️ CSS component',
    '🛠️ Figma component',
    '🛠️ Voorbeeld thema',
    '🛠️ Documentatie',
    '🧪 Design Tokens getest',
    '🧪 A11y getest',
    '🧪 Testcases gebruik getest',
    "🧪 Thema's getest",
    '🧪 Internationalisatie getest',
    '🧪 Documentatie getest',
    '🚀 NPM - CSS',
    '🚀 NPM - React',
    '🚀 NPM - Docs',
    '🚀 NPM - Design Tokens',
    '🚀 Figma - Start Bibliotheek',
    '🚀 Figma - Voorbeeld Bibliotheek',
  ];
  const implementationProgressTaskNames = [
    'Figma URL',
    'Figma URL (CSS)',
    'GitHub URL (CSS)',
    'Licentie component - EUPL',
    'Licentie documentatie - CC0',
    'Minimale design tokens',
    'NPM URL (CSS)',
    'Naam',
    'Naamgeving design tokens',
    'Organisatie prefix',
    'Storybook URL (CSS)',
    'Theme Storybook URL',
  ];
  return (
    relayProgressTaskNames.includes(name) ||
    candidateProgressTaskNames.includes(name) ||
    implementationProgressTaskNames.includes(name)
  );
};
