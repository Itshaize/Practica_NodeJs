const express = require('express');
const gastosControllers = require('../controllers/gastos.controllers');

const router = express.Router();

router.get('/gastos', gastosControllers.getGastos);

module.exports = router;
