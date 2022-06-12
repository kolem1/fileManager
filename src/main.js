import { homedir } from 'os';
import { checkInput } from './checkInput.js';
import readline from 'readline';

const args = process.argv.slice(2);

async function run() {
  let nameArg = args.find((arg) => arg.startsWith('--username'));
  while (!nameArg) {
    console.log('Please, input your name');
    await new Promise((resolve) => {
      process.stdin.on('data', (data) => {
        nameArg = data.toString();
        process.stdin.end();
        resolve();
      })
    })
  }
  const name = nameArg.split('=')[1];
  console.log(`\nWelcome to the File Manager, ${name}!`);

  const rl = readline.createInterface({
    input: process.stdin
  });

  let dir = homedir();
  const showCurrentDir = () => console.log(`\nYou are currently in ${dir}`);
  showCurrentDir();

  rl.on('line', async function (data) {
    const answer = data.trim().toLowerCase();
    if (answer === '.exit') {
      rl.close();
      return;
    }
    dir = await checkInput(answer, dir);
    showCurrentDir();
  });

  rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${name}!`)
  })
}

run();
