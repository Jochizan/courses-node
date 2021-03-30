const os = require('os');

// Architecture
console.log('Architecture:');
console.log(os.arch());
console.log('');

// Platform
console.log('Platform:');
console.log(os.platform());
console.log('');

// cpus
console.log('cpus');
console.log(os.cpus().length);
console.log('');

// Errores y señales del sistema
console.log('Erros and signals of the system');
console.log(os.constants);
console.log('');

// Function to convert from bytes to kbytes, mbytes and gbytes
const SIZE = 1024;

const kb = (bytes) => bytes / SIZE;

const mb = (bytes) => kb(bytes) / SIZE;

const gb = (bytes) => mb(bytes) / SIZE;

// Total Ram Memory
console.log('Total Ram Memory:');
console.log(`${os.totalmem()} bytes`);
console.log(`${kb(os.totalmem)} kb`);
console.log(`${mb(os.totalmem)} mb`);
console.log(`${gb(os.totalmem)} gb`);
console.log('');

// Free memory we have in bytes units
console.log('Free memory we have in kbytes units');
console.log(`free Ram memory: ${os.freemem()} bytes`);
console.log(`free Ram memory: ${kb(os.freemem())} kb`);
console.log(`free Ram memory: ${mb(os.freemem())} mb`);
console.log(`free Ram memory: ${gb(os.freemem())} mb`);
console.log('');

// Directory for the user root
console.log('Directory for the user root');
console.log(os.homedir());
console.log('');

// Directory for temporal files
console.log('Directory for temporal files');
console.log(os.tmpdir());
console.log('');

// Hostname of a server
console.log('Hostname of any server');
console.log(os.hostname());
console.log('');

// Actived Network interfaces right now
console.log('Network Interfaces right now');
console.log(os.networkInterfaces());
console.log('');
