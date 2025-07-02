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
  const checkedProgressTasks = issue.tasks.filter((task) => isProgressTask(task));
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
    'A11y getest',
    'API conventie',
    'API gemeenschappelijk',
    'API unit tests',
    'Afbeelding',
    'Afgevinkt.',
    'Backlog',
    'Beschrijving',
    'Beveiliging',
    'Bruikbaar',
    'Changelog',
    'Code changelog',
    'Component assessment',
    'Content flexibel',
    'Coverage features',
    'Design tokens conventie',
    'Design tokens nuttig',
    'Discussion URL',
    "Do and don't voorbeelden",
    'Documentatie a11y',
    'Documentatie aliassen',
    'Documentatie anatomie',
    'Documentatie getest',
    'Documentatie op website',
    'Figma NLDS',
    'Figma URL',
    'Figma changelog',
    'Figma geversioneerd',
    'Figma in lijn',
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
    'NPM (candidate)',
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
    'Semantiek goedgekeurd',
    'Semver',
    'Start thema',
    'Storybook (CSS)',
    'Storybook NLDS',
    "Storybook thema's",
    'Varianten',
    'Versimpeld of gesplitst',
    'Visuele regressietest',
    'Webcomponent',
    'Welk bord',
    'i18n getest',
    'nldesignsystem.nl',
    "≥2 Thema's",
    '≥2 organisaties geswitcht',
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
  return relayProgressTaskNames.includes(name) || implementationProgressTaskNames.includes(name);
};
