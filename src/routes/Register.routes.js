const {Router} = require('express');
const router = Router();

const {ctrlRegistro} = require('../controllers/Registro.controller');

router.post('/registro',ctrlRegistro);

module.exports = router;
