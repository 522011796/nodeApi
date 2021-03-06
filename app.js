var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret:'ricky',
    cookie:{maxAge:3600000 * 24 * 30},
    resave:false,
    saveUninitialized:false
}));
app.use(express.static(path.join(__dirname, 'public')));

var index = require('./routes/index');
var users = require('./routes/users');
var artical = require('./routes/artical');
var reply = require('./routes/reply');
var music = require('./routes/music');
var art = require('./routes/art');
var updateData = require('./routes/updateData');
var addData = require('./routes/addData');
var login = require('./routes/login');
var logout = require('./routes/logout');
var sessionInfo = require('./routes/sessionInfo');
//vueblog
var articalVue = require('./routes/vueBlog/artical');
var imgArticle = require('./routes/vueBlog/imgArticle');
var imgWall = require('./routes/vueBlog/imgWall');

app.use('/', index);
app.use('/users', users);
app.use('/artical', artical);
app.use('/reply', reply);
app.use('/art', art);
app.use('/music', music);
app.use('/updateData', updateData);
app.use('/addData', addData);
app.use('/login', login);
app.use('/logout', logout);
app.use('/sessionInfo', sessionInfo);
//vueblog
app.use('/articalVue', articalVue);
app.use('/imgArticle', imgArticle);
app.use('/imgWall', imgWall);

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
