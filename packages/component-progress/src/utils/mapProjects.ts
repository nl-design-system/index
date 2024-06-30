import { PROJECTS } from './index.js';
import { Project, ProjectV2FieldCommon } from '../graphql/getProjects.js';

export type MappedProjects = (Omit<Project, 'views'> & { number: number; key: string; tasks: any[] })[];

const filterProjectChecks = (nodes: ProjectV2FieldCommon[]) =>
  nodes.filter((check) => check.dataType !== 'TITLE' && check.name !== 'Status');

export const mapProjects = (projects: Project[]): MappedProjects =>
  projects.map(({ views, ...project }) => {
    console.log(JSON.stringify(views, null, 2));
    return {
      ...project,
      number: project.number,
      key: PROJECTS[project.number],
      tasks: filterProjectChecks(views.nodes[0].fields.nodes),
    };
  });
