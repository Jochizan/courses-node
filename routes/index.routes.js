const router = require('express').Router();
const { success, error } = require('../network/response');

router.get('/', (req, res) => {
  // console.log(req.headers);
  res.header({
    'custom-header': 'Valor personalizado'
  });

  success(req, res, 'Lista de mensajes', 200);
  // res.send('Hola desde el método GET');
});

router.post('/:id', (req, res) => {
  // console.log(req.body);
  // console.log(req.query);
  // console.log(req.params);
  // res.send('Mensaje ' + req.body.text + 'añadido');
  if (res.query.error === 'ok') return error(req, res, 'Error simulado', 400);

  success(req, res, 'Creado correctamente', 201);
});

router.patch('/:id', (req, res) => {
  res.status(201).send({ err: '', message: 'Mensaje actualizado' });
});

module.exports = router;
