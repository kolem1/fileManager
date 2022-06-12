import { rm as removeFile } from 'fs/promises'
import { getFilePath, logError } from "../utils/index.js";

export async function rm(currentPath, userPathToFile) {
  try {
    const pathToFile = await getFilePath(currentPath, userPathToFile);
    await removeFile(pathToFile);
  } catch {
    logError();
  }
}