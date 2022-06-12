import { homedir } from 'os';
import { checkInput } from './checkInput.js';
import readline from 'readline';

const args = process.argv.slice(2);

async function run() {
  const nameArg = args.find((arg) => arg.startsWith('--username'));
  let name = nameArg?.split('=')[1];
  while (!name) {
    console.log('Please, input your name');
    await new Promise((resolve) => {
      process.stdin.on('data', (data) => {
        name = data.toString().trim();
        process.stdin.end();
        resolve();
      })
    })
  }
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
