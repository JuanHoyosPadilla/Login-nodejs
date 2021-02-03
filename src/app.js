require('dotenv').config();
const express = require('express');
const bodyPaser = require('body-parser');
const app = express();

//Conexion a base de datos
require('./database');

//Otras configuraciones
app.use(bodyPaser.urlencoded({extended: false}))
app.use(bodyPaser.json());
//app.use(express.json());

//Rutas
app.use(require('./routes/Login.routes'));
app.use(require('./routes/Register.routes'));

module.exports = app;