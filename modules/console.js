// console.log()
//imprime algo en consola
console.log('Hola!');

// console.info()
// es un alias de console.log
console.log('Hola! (pero con .info)...');

// console.warn()
// imprime una advertencia en consola;
console.warn('Este sitio utiliza cookies' + ' Este es un console.warn');

// console.error()
//imprime un error en consola
const code = 5;
console.error('Hubo otro error', code);
console.error(new Error('Así también se declara un error'));

// console.table()
// Tabula un grupo de datos
const usuario = [
  {
    nombre: 'Luis',
    apellido: 'Lora',
    edad: 22,
  },
  {
    nombre: 'Agustín',
    apellido: 'Morán',
    edad: 19,
  },
];
console.table(usuario);

// console.group() & console.groupEnd()
// Agrupa una cantidad de datos en consola
const dias = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
];

console.group('diasSemana');
for (let i = 0; i < dias.length; i++) {
  console.log(dias[i]);
}
console.groupEnd('diasSemana');

// console.clear()
// Límpia la consola
function limpiarConsola() {
  setTimeout(() => {
    console.clear('Limpiando cada 5 segs');
  }, 10000);
}
limpiarConsola();

// console.count() & console.countReset()
// Cuenta la cantidad de veces que se ejecuta algo
console.count('Veces');
console.count('Veces');
console.countReset('Veces');
console.count('Veces');
console.count('Veces');

// console.time() & console.timeEnd()
// determina el tiempo que demora un proceso en ocurrir
console.time('100-elementos');
for (let i = 0; i < 100; i++) {}
console.timeEnd('100-elementos');
