const express = require('express');
const router = express.Router();

// Importa o controller
const calculationController = require('../controllers/calculationController');

// Define rotas usando as funções do controller
router.post('/calcular', calculationController.calcular);

module.exports = router;