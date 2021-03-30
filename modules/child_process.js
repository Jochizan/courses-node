const { exec, spawn } = require('child_process');

// exec('ls -la', (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

let processSpawn = spawn('ls', ['-la']);

console.log(processSpawn.pid);
console.log(processSpawn.connected);

processSpawn.stdout.on('data', (data) => {
  console.log('¿Está muerto?');
  console.log(process.killed);
  console.log(data.toString());
});

processSpawn.on('exit', () => {
  console.log('Proceso terminado...');
  console.log(processSpawn.killed);
});
