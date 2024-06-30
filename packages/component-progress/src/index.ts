import { mkdir, writeFile } from 'node:fs/promises';
import { getComponentIssues, getProjects } from './graphql/index.js';
import { mapProjects, mapToComponentProgress } from './utils/index.js';

const init = async () => {
  try {
    await mkdir('./dist', { recursive: true });
  } catch (error) {
    console.error('Could not create dist directory');
  }

  const projects = await getProjects();
  const mappedProjects = mapProjects(projects);

  await writeFile('./dist/projects.json', JSON.stringify(mappedProjects, null, 2)).catch(() =>
    console.error('Could not create projects.json'),
  );

  const componentIssues = await getComponentIssues();
  const componentProgress = mapToComponentProgress(componentIssues, mappedProjects);

  await writeFile('./dist/index.json', JSON.stringify(componentProgress, null, 2)).catch(() =>
    console.error('Could not create index.json'),
  );
};

init();
