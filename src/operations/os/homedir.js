import { homedir as getHomedir } from 'os';
export function homedir() {
  console.log(getHomedir());
}
