
import { up } from './operations/up.js';

export function checkInput(input, currentPath) {
  switch (input) {
    case 'up':
      return up(currentPath);
    default:
      console.log('Invalid input')
  }
}