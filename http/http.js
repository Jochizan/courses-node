const { createServer } = require('http');
const fs = require('fs').promises;
const port = process.env.PORT || 3000;

const readFile = async (path) => {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });
    return data.toString();
  } catch (err) {
    console.log('No se pudo leer el archivo.\nError:', err);
  }
};

const router = async (req, res) => {
  switch (req.url) {
    case '/':
      const page = await readFile(__dirname + '/index.html');
      res.writeHead(201, { 'content-type': 'text/html; charset=utf-8' });
      res.end(page);
      console.log(req.url);
      break;
    default:
      res.write('404 Not Found! Esa url no existe');
      res.end();
  }
};

const server = createServer(router);

server.listen(port, (err) => {
  if (err) {
    console.info('Could not establish a connection to the server');
    console.error(err.message);
  }
  console.info('> Ready On http://localhost:%d/', port);
});
