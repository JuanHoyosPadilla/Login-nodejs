const {Router} = require('express');
const router = Router();

const {ctrlLogin} = require('../controllers/Login.controller')


router.post('/login',ctrlLogin);

module.exports = router;