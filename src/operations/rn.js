import { basename, dirname, join } from 'path';
import { rename } from 'fs/promises';
import { logError, getFilePath } from '../utils/index.js';

export async function rn(currentPath, userFilePath, newName) {
  const fileBaseName = basename(newName);
  try {
    if (fileBaseName !== newName) {
      throw new Error();
    }
    const filePath = await getFilePath(currentPath, userFilePath);
    const fileDirname = dirname(filePath);
    const newFilePath = join(fileDirname, newName);
    await rename(filePath, newFilePath);
  } catch {
    logError();
  }
}