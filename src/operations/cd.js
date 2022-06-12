import { stat } from 'fs/promises'
import { logError } from '../utils/logError.js';
import { getPath } from '../utils/getPath.js';

export async function cd(currentPath, inputedPath) {
  try {
    const pathToFolder = await getPath(currentPath, inputedPath);
    const fileStat = await stat(pathToFolder);
    if (fileStat.isFile()) {
      throw new Error();
    }
    return pathToFolder;
  } catch {
    logError();
  }
  return currentPath;
}