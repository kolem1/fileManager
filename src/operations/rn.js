import { basename, dirname, join } from 'path';
import { rename } from 'fs/promises'
import { getPath } from '../utils/getPath.js';
import { logError } from '../utils/logError.js'

export async function rn(currentPath, userFilePath, newName) {
  const fileBaseName = basename(newName);
  try {
    if (fileBaseName !== newName) {
      throw new Error();
    }
    const filePath = await getPath(currentPath, userFilePath);
    const fileDirname = dirname(filePath);
    const newFilePath = join(fileDirname, newName);
    await rename(filePath, newFilePath);
  } catch {
    logError();
  }
}