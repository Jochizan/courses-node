const express = require('express');
const PORT = process.env.PORT || 4000;

// routes
const indexRoutes = require('./routes/index.routes');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/message', indexRoutes)

app.listen(PORT, () => {
  console.log(`App on listen http://localhost:${PORT}`)
})