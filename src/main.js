import { homedir } from 'os';
import { checkInput } from './checkInput.js';

const args = process.argv.slice(2);

function run() {
  const nameArg = args.find((arg) => arg.startsWith('--username'));
  const name = nameArg.split('=')[1];
  console.log(`\nWelcome to the File Manager, ${name}!\n`);

  let dir = homedir();
  const showCurrentDir = () => console.log(`You are currently in ${dir}`);
  showCurrentDir();

  process.stdin.on('data', (data) => {
    dir = checkInput(data.toString().trim(), dir) || dir;
    showCurrentDir();
  });
}

run();
