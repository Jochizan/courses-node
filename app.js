require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Import Routes
const postsRoute = require('./routes/posts');

/**
 * NOTA IMPORTANTE importa el orden en el que declaras los middlewares...
 */
// JSON read
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// si existe funciones definidas en esta ruta buscar en la carpeta routes con su mismo "nombre"
app.use('/posts', postsRoute);

// Middlewares
// app.use('/posts', () => {
//   console.log('This is a middleware running');
// });

// Routes
app.get('/', (req, res) => {
  res.send('We are on home');
});

app.get('/posts', (req, res) => {
  res.send('We are on posts');
});

// Connect to DB
mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
  },
  (err) => {
    console.log(err);
    console.log('Connected to DB!');
  }
);

// Listen
app.listen(PORT, () => {
  console.log('Server up');
  console.log('http://localhost:%d/', PORT);
});
