const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Bienvenido al Backend de Calculo de Gastos' );
});

router.get('/about', (req, res) => {
  res.send( 'Este es el backend para la aplicacion de calculo de gastos' );
});

router.get('/contact', (req, res) => {
  res.sendFile('./contacto.avif', {
    root: __dirname
  });
});

router.use((req, res) => {
  res.status(404).json({ error: 'Pagina no encontrada' });
});

module.exports = router;
