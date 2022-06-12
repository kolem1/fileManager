import { basename, join } from 'path';
import { writeFile } from 'fs/promises'
import { logError } from './../utils/logError.js';


export async function add(currentPath, filename) {
  const pathToFile = join(currentPath, filename);
  const fileBaseName = basename(filename);
  try {
    if (fileBaseName !== filename) {
      throw new Error();
    }
    await writeFile(pathToFile, '', { flag: 'wx' });
  } catch {
    logError();
  }
}