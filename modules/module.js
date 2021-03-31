const saludar = () => {
  console.log('Hola mundo');
};

const value = 'Hola soy Joan';

module.exports = {
  saludar,
  props: { value },
};
