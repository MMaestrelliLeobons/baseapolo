/**
 * 
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var opportunitySchema = new Schema({
	title: String,
	post_date: Date,
	end_date: Date
});

module.exports = mongoose.model('opportunity', opportunitySchema);