import { basename, join } from 'path';
import { writeFile } from 'fs/promises'
import { logError } from '../utils/index.js';


export async function add(currentPath, filename) {
  const fileBaseName = basename(filename);
  try {
    if (fileBaseName !== filename) {
      throw new Error();
    }
    const pathToFile = join(currentPath, filename);
    await writeFile(pathToFile, '', { flag: 'wx' });
  } catch {
    logError();
  }
}