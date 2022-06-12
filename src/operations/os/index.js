import { cpus } from "./cpus.js";
import { eol } from "./eol.js";
import { homedir } from "./homedir.js";

export function os(operation) {
  switch (operation) {
    case '--EOL':
      eol();
      break;
    case '--cpus':
      cpus();
      break;
    case '--homedir':
      homedir();
      break;
    default:
      console.log('Invalid input');
  }
}