import { logError } from "../utils/logError.js";
import { readdir } from 'fs/promises'

export async function ls(currentPath) {
  try {
    const files = await readdir(currentPath);
    files.forEach(file => {
      console.log(file);
    });
  } catch {
    logError();
  }
  return currentPath;
}