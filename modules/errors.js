const badFunction = () => 5 + z;

try {
  badFunction();
} catch (error) {
  console.log('badFunction ha fallado');
  console.error(error.message);
}

console.log('continue...');

const badFun = () => {
  setImmediate(() => {
    try {
      return 5 + z;
    } catch (error) {
      console.log('badfun ha fallado');
      console.error(error.message);
      console.log('continue...');
    }
  });
};

badFun();
