import { stat } from 'fs/promises'
import { getExistingPath } from "./getExistingPath.js";

export async function getFilePath(currentPath, inputedPath) {
  try {
    const filePath = await getExistingPath(currentPath, inputedPath);
    const fileStat = await stat(filePath);
    if (fileStat.isDirectory()) {
      throw new Error();
    }
    return filePath;
  } catch {
    throw new Error();
  }
}