require('dotenv').config();
const UserDB = require('../models/User');
const bcrypt = require('bcrypt');

 function ctrlRegistro(req, res){
    const {username, password} = req.body;
    const newUser = new UserDB({
        username,
        password: bcrypt.hashSync(password, 10)
    });

    newUser.save((err, userdb) => {
       if(err){
           return res.json({
               err
           })
       }

       res.json({
           message: "Usuario creado",
           userdb
       })
   })
   
   

}

module.exports = {
    ctrlRegistro
}