const bcrypt = require('bcrypt');

const password = 'aeaMano';

bcrypt.hash(password, 5, (err, hash) => {
  console.log(hash);
  bcrypt.compare('password', hash, (err, ans) => {
    console.log(ans);
  });
});
