const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 13371;
const Todo = require('./models/todo');

console.log('Todo require => ', Todo);
console.log('Todo from moongose =>', mongoose.model('TodoModel'));
console.log(Todo === mongoose.model('TodoModel'));
// http://localhost:13371/ and http://localhost:27017/

(async () => {
  await mongoose.connect('mongodb://localhost/db_mongo01', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
})();

// start writing queries

// MongoDB Community Server

app.use('/', express.static(path.resolve(__dirname, 'assets')));

app.use(express.json());

app.post('/api/create', async (req, res) => {
  const record = req.body;
  // * CREATE (_C_RUD)
  const response = await Todo.create(record);

  console.log(response, record);

  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log('Server up');
  console.log('http://localhost:%d/', port);
});
