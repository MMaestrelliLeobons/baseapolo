/**
 *
 */

var mongoose = require('mongoose');

var opportunitySchema = mongoose.Schema({
	title: String,
	post_date: Date,
	end_date: Date,
	admin: mongoose.Schema.ObjectId,
	likes: Number,
	description: String
});

var userSchema = mongoose.Schema({
	name: String,
	birthday: Date,
	interest: [mongoose.Schema.ObjectId]
});

module.exports = mongoose.model('opportunity', opportunitySchema);
module.exports = mongoose.model('user', userSchema);