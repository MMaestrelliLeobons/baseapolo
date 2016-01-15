/**
 *
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('opportunity', {
	title: String,
	post_date: Date,
	end_date: Date,
	//admin: {user.id : user.name},
	likes: int,
	description: String
});

module.exports = mongoose.model('user', {
	name: String
});