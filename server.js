/**
 *
 */

// Require .env to parse enviroment variables
require('dotenv').load();

// modules ==========================================================
var express = require('express');
var bodyParser = require('body-parser');
var morgan     = require('morgan'); 		// used to see requests
var	methodOverride = require('method-override');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/config');

var app = express();

// Configuration ====================================================

// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

// log all requests to the console 
app.use(morgan('dev'));

// Connecting to the DB
mongoose.connect(config.db_url, function (err, database){
	if(!err) {
		console.log("-- Connected to the database \'" + process.env.DB_HOST + "\'");
	} else {
		console.log(err);
	}
});

// Setting port and static path to express
app.use(express.static(path.join(__dirname, 'public')));

// Routes ===========================================================
var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);

// Send users to front-end
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Listen ===========================================================
app.listen(config.port);
console.log("- Express server listening on port " + config.port);