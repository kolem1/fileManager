export function parseArgs(input) {
  const args = [];

  let restInput = input.trim();
  let multiwordIsStarted = false;
  let i = 0;

  while (i < restInput.length) {
    const char = restInput[i];
    if (char === '"' || char === "'") {
      multiwordIsStarted = !multiwordIsStarted;
    }
    if (char === ' ' && !multiwordIsStarted) {
      args.push(restInput.slice(0, i));
      restInput = restInput.slice(i).trim();
      i = 0;
      continue;
    }
    i++;
  }
  args.push(restInput);
  return args.map((arg) => arg.replace(/['"]/g, ''));
}
