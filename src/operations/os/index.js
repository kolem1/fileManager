import { cpus } from "./cpus.js";
import { eol } from "./eol.js";
import { homedir } from "./homedir.js";
import { username } from "./username.js";

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
    default:
      console.log('Invalid input');
  }
}