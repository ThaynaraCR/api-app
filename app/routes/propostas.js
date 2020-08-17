const express = require('express');
const router = express.Router();
const PropostaController = require('../controllers/PropostaControllers')

/* listar propostas. */
router.get('/',PropostaController.index);
router.get('/filter',PropostaController.filter)

module.exports = router;