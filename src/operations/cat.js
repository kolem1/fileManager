import { createReadStream } from 'fs';
import { getPath } from "../utils/getPath.js";
import { logError } from '../utils/logError.js';

export async function cat(currentPath, userPath) {
  try {
    const pathToFile = await getPath(currentPath, userPath);
    const stream = createReadStream(pathToFile, { encoding: 'utf8' })
    stream.pipe(process.stdout);
  } catch {
    logError();
  }
}