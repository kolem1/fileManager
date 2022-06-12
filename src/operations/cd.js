import { isAbsolute, join, normalize } from 'path';
import { access } from 'fs/promises';

export async function cd(currentPath, inputedPath) {
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
    console.log('Operation failed')
    return currentPath;
  }
}