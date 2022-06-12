
import { up } from './operations/up.js';
import { cd } from './operations/cd.js';
import { ls } from './operations/ls.js';
import { cat } from './operations/cat.js';
import { add } from './operations/add.js';
import { rn } from './operations/rn.js';
import { cp } from './operations/cp.js';
import { mv } from './operations/mv.js';
import { rm } from './operations/rm.js';
import { os } from './operations/os/index.js';
import { hash } from './operations/hash.js';
import { compress } from './operations/compress.js';
import { decompress } from './operations/decompress.js';
import { parseArgs } from './utils/index.js';

export async function checkInput(input, currentPath) {
  const [operation, ...args] = parseArgs(input);
  switch (operation) {
    case 'up':
      return up(currentPath);
    case 'cd':
      return await cd(currentPath, args[0]);
    case 'ls':
      return await ls(currentPath);
    case 'cat':
      await cat(currentPath, args[0]);
      break;
    case 'add':
      await add(currentPath, args[0]);
      break;
    case 'rn':
      await rn(currentPath, args[0], args[1]);
      break;
    case 'cp':
      await cp(currentPath, args[0], args[1]);
      break;
    case 'mv':
      await mv(currentPath, args[0], args[1]);
      break;
    case 'rm':
      await rm(currentPath, args[0])
      break;
    case 'os':
      os(args[0]);
      break;
    case 'hash':
      await hash(currentPath, args[0]);
      break;
    case 'compress':
      await compress(currentPath, args[0], args[1]);
      break;
    case 'decompress':
      await decompress(currentPath, args[0], args[1]);
      break;
    default:
      console.log('Invalid input');
  }
  return currentPath;
}