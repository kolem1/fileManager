import { access } from 'fs/promises';
import { getPath } from './getPath.js';

export async function getExistingPath(currentPath, inputedPath) {
  let newPath = await getPath(currentPath, inputedPath);
  try {
    await access(newPath);
    return newPath;
  } catch {
    throw new Error();
  }
}