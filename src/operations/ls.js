import { readdir } from 'fs/promises'
import { logError } from "../utils/index.js";

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