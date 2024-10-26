import { exec } from 'child_process';

export function lsPatches(): Promise<string> {
  return new Promise(((resolve, reject) => exec(`ls /`, (error, stdout) => {
    if (error) {
      console.error(`exec error: ${error}`);
      reject(error);
    }
    // console.log(`stdout lsPatches: ${stdout}`);
    // console.error(`stderr lsPatches: ${stderr}`);
    resolve(stdout);
  })));
}

export default defineEventHandler(async () => {
  return {
    ls: await lsPatches(),
  };
});
