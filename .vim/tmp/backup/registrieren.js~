var app = require('../app.js'); 

var mongoose = require('../db/setup.js');


exports.registration = function(req, res) {
  res.render('registrieren', { title: 'Registration' });
};


exports.processPost = function(req, res){
    mongoose.setup();
    
    var User = mongoose.getUserModel();
    var foo = new User(
        {
salt: "SalutMan309829384", 
name:{
    first: req.body.name, 
    second: req.body.name, 
}, 

info:{
    email: req.body.email /* We dont ask more personnal info since we are not facebook */
}, 

login:{
    userName: req.body.username, 
    password: req.body.password 
}
    });

    foo.save();
    
};



