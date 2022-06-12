import { cpus } from "./cpus.js";
import { eol } from "./eol.js";
import { homedir } from "./homedir.js";
import { username } from "./username.js";
import { architecture } from './architecture.js';

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
    case '--username':
      username();
      break;
    case '--architecture':
      architecture();
      break;
    default:
      console.log('Invalid input');
  }
}