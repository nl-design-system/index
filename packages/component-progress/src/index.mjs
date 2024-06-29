import * as fs from 'fs/promises';
import { getComponentIssues, getProjects } from './graphql/index.mjs';
import { mapProjects, mapToComponentProgress, PROJECT_NUMBERS } from './utils/index.mjs';

const init = async () => {
  try {
    await fs.mkdir('./dist', { recursive: true });
  } catch (error) {
    console.error('Could not create dist directory');
  }

  const projects = await getProjects(PROJECT_NUMBERS);
  const mappedProjects = mapProjects(projects);

  await fs
    .writeFile('./dist/projects.json', JSON.stringify(mappedProjects))
    .catch(() => console.error('Could not create projects.json'));

  const componentIssues = await getComponentIssues();
  const componentProgress = mapToComponentProgress(componentIssues, mappedProjects);

  await fs
    .writeFile('./dist/index.json', JSON.stringify(componentProgress))
    .catch(() => console.error('Could not create index.json'));
};

init();
