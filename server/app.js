var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./controller/database');
//required for sending and getting data from the client
var cors = require('cors');

//routes go here !!
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

var app = express();

//enabling CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//connect to mongo db
mongoose.connect(config.database, { useCreateIndex: true, useNewUrlParser: true });

// view engine setup, not required for our project
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//calling the routes
app.use('/', indexRouter);
app.use('/user',userRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({error:'true'});
});

module.exports = app;
