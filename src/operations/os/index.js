import { eol } from "./eol.js";

export function os(operation) {
  switch (operation) {
    case '--EOL':
      eol();
      break;
    default:
      console.log('Invalid input');
  }
}