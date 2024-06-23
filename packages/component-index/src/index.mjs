import * as fs from 'fs/promises';
import { getComponentProgess } from './getComponents.mjs';

const init = async () => {
  try {
    await fs.mkdir('./dist', { recursive: true });
  } catch (error) {
    console.error('Could not create dist directory', error);
  }

  try {
    const componentProgress = await getComponentProgess();
    await fs.writeFile('./dist/index.json', JSON.stringify(componentProgress));
  } catch (error) {
    console.error('Could not create index.json', error);
  }
};

init();
