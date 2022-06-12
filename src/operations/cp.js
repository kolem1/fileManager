import { createReadStream, createWriteStream } from 'fs';
import { basename, join } from 'path';
import { getFilePath, getPath, logError } from "../utils/index.js";

export async function cp(currentPath, userPathToFile, pathToNewDirectory) {
  try {
    const pathToFile = await getFilePath(currentPath, userPathToFile, pathToNewDirectory);
    const fileName = basename(pathToFile);
    const newPath = await getPath(currentPath, join(pathToNewDirectory, fileName));
    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(newPath, { flags: 'wx' });
    readStream.pipe(writeStream);
  } catch {
    logError();
  }
}