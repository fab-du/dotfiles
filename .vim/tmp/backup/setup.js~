

module.exports = function ( app ){
    app.set('db_connection', "mongodb://localhost/test");

    //Setup DataBase 
    var mongoose = require('mongoose'); 
    var Schema = mongoose.Schema; 

    var db = mongoose.connect( app.get("db_connection")); 

    //Path Require 
    var path = require('path'); 


    //SetUp View 
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    

// view engine setup//{{{
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
////}}}

    return app; 
};  

