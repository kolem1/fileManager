
import { up } from './operations/up.js';
import { cd } from './operations/cd.js';
import { ls } from './operations/ls.js';
import { cat } from './operations/cat.js';
import { add } from './operations/add.js';

export async function checkInput(input, currentPath) {
  const [operation, ...args] = input.split(' ');
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
    default:
      console.log('Invalid input')
  }
  return currentPath;
}