const express = require('express');
const router = express.Router();
const PropostaController = require('../controllers/AuthControllers')

/* listar propostas. */

router.post('/auth/',AuthController)

module.exports = router;