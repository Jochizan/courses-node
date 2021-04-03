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
    useCreateIndex: true
  });
})();

// start writing queries

// MongoDB Community Server

app.use('/', express.static(path.resolve(__dirname, 'assets')));

app.use(express.json());

app.post('/api/delete', async (req, res) => {
  const { record } = req.body;
  console.log(record, '/api/deletec');
  // * DELETE (CRU_D_)
  const response = await Todo.deleteOne({ record });

  console.log(response, 'api/delete response');

  res.json({ status: 'ok' });
});

app.post('/api/edit', async (req, res) => {
  const { old: oldTitle, new: newTitle } = req.body;
  // * UPDATE (CR_U_D)
  const response = await Todo.updateOne(
    {
      record: oldTitle
    },
    { $set: { record: newTitle } }
  );

  console.log(response);

  res.json({ status: 'ok' });
});

app.get('/api/get', async (req, res) => {
  const records = await Todo.find({});
  // * READ (C_R_UD)
  console.log('Response => ', records);

  res.json(records);
});

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
