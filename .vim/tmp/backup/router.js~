var routes = require('./routes/index');
var users = require('./routes/users');
var registration= require('./routes/registrieren'); 
var einloggen= require('./routes/einloggen');

module.exports = function (app) {
    app.use('/', routes);
    app.use('/users', users);
    app.use('/einloggen',einloggen.einloggen);
    app.use('/registration',registration.registration);



    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });



    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });

    return app; 
}
