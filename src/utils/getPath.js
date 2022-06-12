import { isAbsolute, join, normalize } from 'path';

export async function getPath(currentPath, inputedPath) {
  let newPath;
  if (isAbsolute(inputedPath)) {
    newPath = normalize(inputedPath);
  } else {
    newPath = join(currentPath, inputedPath);
  };
  return newPath;
}