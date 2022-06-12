import { createReadStream, createWriteStream } from "fs";
import { basename, join } from "path";
import { createBrotliCompress } from "zlib";
import { getFilePath, getFolderPath, logError } from "../utils/index.js";

export async function compress(currentPath, userPathToFile, userDestPath) {
  try {
    const pathToFile = await getFilePath(currentPath, userPathToFile);
    const filename = basename(pathToFile);
    const destFolderPath = await getFolderPath(currentPath, userDestPath);
    const archivePath = join(destFolderPath, `${filename}.br`);

    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(archivePath, { flags: "wx" });
    const brotliCompressor = createBrotliCompress();

    await new Promise((resolve, reject) => {
      readStream
        .pipe(brotliCompressor)
        .pipe(writeStream)
        .on("finish", () => {
          console.log(`Compressed`);
          resolve();
        })
        .on('error', () => {
          reject();
        });
    });
  } catch {
    logError();
  }
}
