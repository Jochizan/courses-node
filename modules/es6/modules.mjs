const salute = () => {
  console.log('Hola mundo!!');
};

const value = 'Hola soy Joan';

export default {
  salute,
  props: { value },
};
