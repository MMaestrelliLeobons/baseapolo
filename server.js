/**
 *
 */

// Require .env to parse enviroment variables
require('dotenv').load();

// modules ==========================================================
var express = require('express');
var bodyParser = require('body-parser');
var	methodOverride = require('method-override');
var	http = require('http');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

// Configuration ====================================================
app.set('port', process.env.PORT || 3000);

var db = require('./config/db');
mongoose.connect(db.url, function (err, database){
	if(!err) {
		console.log("-- Connected to the database \'" + process.env.DB_HOST + "\'");
	} else {
		console.log(err);
	}
});

// Routes ===========================================================
app.use(express.static(path.join(__dirname, 'public')));

// Listen ===========================================================
http.createServer(app).listen(app.get('port'), function() {
	console.log("- Express server listening on port " + app.get('port'));
});