require('dotenv').config();
const UserDB = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function ctrlLogin(req, res){

    const {username, password} = req.body;
    UserDB.findOne({username: username}, (err,userDB) => {
        console.log(userDB)
        if(!userDB){
            return res.json({
                messages: "Usuario o contraseña incorrectas"
            })
        }

        if(!bcrypt.compareSync(password, userDB.password)){
            return res.json({
                messages: "Usuario o contraseña incorrecto"
            })
        }

        const token = jwt.sign({
            usuario: userDB
        },process.env.KEY_SECRET,{expiresIn: 60*60})

        res.json({
            usuario: userDB,
            token
        })
    })

}

module.exports = {
    ctrlLogin
}