import { rm } from 'fs/promises'
import { getFilePath, logError } from '../utils/index.js';
import { cp } from './cp.js';

export async function mv(currentPath, userPathToFile, pathToNewDirectory) {
  try {
    await cp(currentPath, userPathToFile, pathToNewDirectory);
    const filePath = await getFilePath(currentPath, userPathToFile);
    await rm(filePath);
  } catch {
    logError
  }
}