// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var port = process.env.PORT || 8080;
var mongoose       = require('mongoose');
var passport       = require('passport');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var db = require('./config/db');
require('./config/passport')(passport); // pass passport for configuration
// configuration ===========================================


mongoose.connect(db.url); // connect to our mongoDB database (uncomment after you enter in your own credentials in config/db.js)

// get all data/stuff of the body (POST) parameters

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

app.set('view engine','ejs');


//require for password
app.use(session({secret: 'ilovenode'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


// routes ==================================================
require('./app/routes/index')(app,passport); // configure our routes

// start app ===============================================
app.listen(port);										// startup our app at http://localhost:8080
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app


