import * as fs from 'fs/promises';
import { getComponentProgess } from './getComponents.mjs';
import { getProjectDetails } from './getProjects.mjs';

const init = async () => {
  try {
    await fs.mkdir('./dist', { recursive: true });
  } catch (error) {
    console.error('Could not create dist directory', error);
  }

  try {
    const componentProgress = await getComponentProgess();
    await fs.writeFile('./dist/component-progress.json', JSON.stringify(componentProgress));
  } catch (error) {
    console.error('Could not create component-progress.json', error);
  }

  try {
    const projectDetails = await getProjectDetails();
    await fs.writeFile('./dist/project-details.json', JSON.stringify(projectDetails));
  } catch (error) {
    console.error('Could not create project-details.json', error);
  }
};

init();
