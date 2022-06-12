import { stat } from 'fs/promises'
import { getExistingPath } from "./getExistingPath.js";

export async function getFolderPath(currentPath, inputedPath) {
  try {
    const folderPath = await getExistingPath(currentPath, inputedPath)
    const folderStat = await stat(folderPath);
    if (folderStat.isFile()) {
      throw new Error();
    }
    return folderPath;
  } catch {
    throw new Error();
  }
}