import { createReadStream, createWriteStream } from "fs";
import { basename, join } from "path";
import { createBrotliDecompress } from "zlib";
import { getFilePath, getFolderPath, logError } from "../utils/index.js";

export async function decompress(currentPath, userPathToFile, userDestPath) {
  try {
    const archivePath = await getFilePath(currentPath, userPathToFile);
    const filename = basename(archivePath, '.br');
    const destFolderPath = await getFolderPath(currentPath, userDestPath);
    const filePath = join(destFolderPath, filename);

    const readStream = createReadStream(archivePath);
    const writeStream = createWriteStream(filePath, { flags: "wx" });
    const brotliDecompressor = createBrotliDecompress();

    await new Promise((resolve, reject) => {
      readStream
        .pipe(brotliDecompressor)
        .on('error', () => {
          reject();
        })
        .pipe(writeStream)
        .on("finish", () => {
          console.log(`Decompressed`);
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
