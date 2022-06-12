import { createHash } from "crypto";
import { createReadStream } from 'fs';
import { getFilePath, logError } from "../utils/index.js";

export async function hash(currentPath, userPathToFile) {
  try {
    const pathToFile = await getFilePath(currentPath, userPathToFile);
    const currentHash = createHash("sha256");
    const stream = createReadStream(pathToFile);
    stream.pipe(currentHash);
    await new Promise((resolve) => {
      stream.on('end', () => resolve());
    })
    console.log(currentHash.digest('hex'));
  } catch {
    logError()
  }
}