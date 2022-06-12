import { createReadStream } from 'fs';
import { getFilePath, logError } from "../utils/index.js";

export async function cat(currentPath, userPath) {
  try {
    const pathToFile = await getFilePath(currentPath, userPath);
    const stream = createReadStream(pathToFile, { encoding: 'utf8' })
    stream.pipe(process.stdout);
  } catch {
    logError();
  }
}