console.log(global);
console.log(process);
console.log(__dirname);
console.log(__filename);

global.myVariable = 'el valor';

console.log(myVariable);

let i = 0;

let interval = setInterval(() => {
  console.log('Hola');
  if (i === 3) {
    clearInterval(interval);
  }
  i++;
}, 1000);
