import { copyFile } from 'fs/promises';
import { constants } from 'fs';
import { basename, join } from 'path';
import { getFilePath, getPath, logError } from "../utils/index.js";

export async function cp(currentPath, userPathToFile, pathToNewDirectory) {
  try {
    const pathToFile = await getFilePath(currentPath, userPathToFile, pathToNewDirectory);
    const fileName = basename(pathToFile);
    const newPath = await getPath(currentPath, join(pathToNewDirectory, fileName));
    await copyFile(pathToFile, newPath, constants.COPYFILE_EXCL);
  } catch {
    logError();
  }
}