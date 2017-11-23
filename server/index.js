var express = require('express');
var app = express();
var mongoose = require('mongoose');

var cors = require('cors');

var loginController = require('./controllers/login');
var registerController = require('./controllers/register');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


mongoose.connect('mongodb://localhost:27017/react-app || mongodb://heroku_hhwbq0rp:chinu3410@ds119476.mlab.com:19476/heroku_hhwbq0rp',function(error){
    if(error){
     console.error('Please make sure mongodb is installed and running..!');
     throw error;
    }
});

app.post('/register',registerController);

app.post('/login',loginController)


app.listen(3000,function(){
    console.log('server in running on 3000...');
});