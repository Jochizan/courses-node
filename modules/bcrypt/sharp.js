const sharp = require('sharp');

// La siguiente reducira una imagen de 120x120 o
// cualquier tamaño a 80x80 y lo guardara en una
// imagen mas pequeña sin eliminar la original,
// entre otras opciones como convertir a otro formato de imagen.
sharp('test_image.jpg').resize(80).toFile('resize_image.jpg');
