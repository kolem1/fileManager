import { logError } from '../utils/logError.js';
import { getFolderPath } from '../utils/index.js';

export async function cd(currentPath, inputedPath) {
  try {
    return await getFolderPath(currentPath, inputedPath);
  } catch {
    logError();
  }
  return currentPath;
}