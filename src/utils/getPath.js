import { isAbsolute, join, normalize } from 'path';
import { access } from 'fs/promises';
import { logError } from '../utils/logError.js';

export async function getPath(currentPath, inputedPath) {
  let newPath;
  if (isAbsolute(inputedPath)) {
    newPath = normalize(inputedPath);
  } else {
    newPath = join(currentPath, inputedPath);
  };
  try {
    await access(newPath);
    return newPath;
  } catch {
    throw new Error();
  }
}