const fs = require('fs').promises;

const readFile = async (path) => {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });
    console.log(data.toString());
  } catch (err) {
    console.log('No se pudo leer el archivo.\nError:', err);
  }
};

const writeFile = async (path, contents) => {
  try {
    await fs.writeFile(path, contents);
  } catch (err) {
    console.log('No se pudo escribir.\nError:', err);
  }
};

const deleteFile = async (path) => {
  try {
    await fs.unlink(path);
  } catch (err) {
    console.log('No se pudo borrar el archivo.\nError:', err);
  }
};

// readFile(__dirname + '/test_file');
// writeFile(__dirname + '/file', 'Soy un archivo nuevo');
// deleteFile(__dirname + '/file');
