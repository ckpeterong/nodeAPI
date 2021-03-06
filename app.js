var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql= require('mysql');
var http = require('http');

// protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.
var helmet = require('helmet'); 

// express-basic-auth basic authentication 
//https://www.npmjs.com/package/express-basic-auth
const basicAuth = require('express-basic-auth'); // const cannot be reassigned


var index = require('./routes/index');
var users = require('./routes/users');
var users_add = require('./routes/users-add');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Basic auth using express-basic-auth. 401 comes by default.
app.use(basicAuth({
  users: { 'admin': 'supersecret' }
}));

// security implementation
app.use(helmet());


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Database connection
app.use(function(req, res, next){
	global.connection = mysql.createConnection({
	  	host     : 'localhost', 
	  	user     : 'root',
      database : 'er_v4_base',
      password : 'root123'
	});
	connection.connect();
	next();
});
app.use('/', index);
app.use('/api/v1/users', users);
app.use('/api/v1/users/add', users_add);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
var server = http.createServer(app);
server.listen(4001);
