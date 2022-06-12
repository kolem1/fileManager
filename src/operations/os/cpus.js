import { cpus as hostCpus } from 'os'

export function cpus() {
  const cpusInfo = hostCpus();
  console.log(`Total Cores: ${cpusInfo.length}`);
  const formatedInfo = cpusInfo.map(({ model, speed }) => {
    return {
      model,
      speed: speed / 1000,
    }
  })
  console.log(formatedInfo);
}