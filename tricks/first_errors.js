const asynchronism = (callback) => {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (err) {
      callback(err);
    }
  }, 1000);
};

asynchronism((err, data) => {
  if (err) {
    console.error('Tenemos un error:', err);
    return false;
    //throw no sirve en este caso
  }
  console.log('Todo ha hido bien, mi data es', data);
});
