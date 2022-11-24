var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//modules for authentication 
let session = require('express-session');
let passport = require('passport');
//let passport = require('./config/passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

//Setup express session!!!!
app.use(session({
  secret: "SomeSecret",
  saveUninitialized: false,
  resave: false
}));

//Init flash
app.use(flash());

//Init passport
app.use(passport.initialize());
app.use(passport.session());

//passport student config

//create a Student model
let studentModel = require('./models/student');
let Student = studentModel.Student;

//Serialize and deserialize
passport.serializeUser(Student.serializeUser());
passport.deserializeUser(Student.deserializeUser());


app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.render('error');
});

module.exports = app;
