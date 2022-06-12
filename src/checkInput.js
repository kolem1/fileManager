
import { up } from './operations/up.js';
import { cd } from './operations/cd.js';
import { ls } from './operations/ls.js';

export async function checkInput(input, currentPath) {
  const [operation, ...args] = input.split(' ');
  switch (operation) {
    case 'up':
      return up(currentPath);
    case 'cd':
      return await cd(currentPath, args[0]);
    case 'ls':
      return await ls(currentPath);
    default:
      console.log('Invalid input')
  }
}