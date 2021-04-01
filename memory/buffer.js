//let buffer = Buffer.alloc(1);
//let buffer = Buffer.from([1, 2, 3]);
let buffer = Buffer.from('Hola');

console.log(buffer);
console.log(buffer.toString());

// --
let abc = Buffer.alloc(26);
let i = 0;

console.log(abc);

abc.forEach((el, index) => {
  abc[index] = 97 + i;
  //el = 97 + i;
  //  console.log(abc[index], el);
  //if (el === abc[index]) {
  //console.log('No entiendo');
  //}
  ++i;
});

console.log(abc);
console.log(abc.toString());
