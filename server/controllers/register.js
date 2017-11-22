var mongodb = require('../models/user_data');

var register = function(req,res){
      console.log(req.body);
    var newUser = new mongodb({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        userName : req.body.userName,
        password : req.body.password
    });
   
    newUser.save(function(error){
        if(error){
         console.error(error);
         return res.status(502).send(error);
        }

        return res.status(200).send({ message : 'added sucessfully' });
   });

}

module.exports = register;