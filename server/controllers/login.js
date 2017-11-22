var  loginDB = require('../models/login_data');

var login = function(req,res){
    console.log(req.body);
      
    var loginUser = new loginDB({
        userName: req.body.userName,
        password: req.body.password
    });

    loginUser.findOne(loginUser,function(err,result){
        if(err){
            return res.status(502).send(error);  
        } 
        return res.status(200).send({ message : 'login sucessfully' });
    });
}

module.exports = login;