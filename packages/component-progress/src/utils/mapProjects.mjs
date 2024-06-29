import { PROJECTS } from './index.mjs';

const filterProjectChecks = ({ nodes: [view] }) =>
  view.fields.nodes.filter((check) => check.dataType !== 'TITLE' && check.name !== 'Status');

export const mapProjects = (projects) =>
  projects.map(({ views, ...project }) => {
    return {
      ...project,
      number: project.number,
      key: PROJECTS[project.number],
      tasks: filterProjectChecks(views),
    };
  });
