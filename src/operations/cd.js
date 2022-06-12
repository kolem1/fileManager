import { logError } from '../utils/logError.js';
import { getPath } from '../utils/getPath.js';

export async function cd(currentPath, inputedPath) {
  try {
    return await getPath(currentPath, inputedPath);
  } catch {
    logError();
  }
}