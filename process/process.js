process.on('beforeExit', () => {
  console.log('El proceso va a terminar');
});

process.on('exit', () => {
  console.log('Ale, el proceso acabó');
});

process.on('uncaughtException', (err, source) => {
  console.log('Se te escapo un error:', err, source);
});

process.on('')
root();
