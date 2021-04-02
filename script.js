const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 13371;
const Todo = require('./models/todo');

console.log('Todo require => ', Todo);
console.log('Todo from moongose =>', mongoose.model('TodoModel'));
console.log(Todo === mongoose.model('TodoModel'));
// http://localhost:13371/ and http://localhost:27017/

(async () => {
  await mongoose.connect('mongodb://localhost/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
})();

// start writing queries

// MongoDB Community Server

app.use('/', express.static(path.resolve(__dirname, 'assets')));

app.use(bodyParser.json());

app.post('/api/create', async (req, res) => {
  const record = req.body;
  console.log(record);
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log('Server up');
  console.log('http://localhost:%d/', port);
});
