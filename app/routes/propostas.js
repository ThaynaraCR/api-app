const express = require('express');
const router = express.Router();
const PropostaController = require('../controllers/PropostaControllers')

/* listar propostas. */
router.get('/',PropostaController.index);
router.post('/filter',PropostaController.filter)

module.exports = router;