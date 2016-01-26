var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../app/models/user');

// expose this function to our app using module.exports
module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // Local Signup
	passport.use('local-signup', new LocalStrategy({
		nameField: 'name'
		usernameField : 'email',
		passwordField : 'password',
		courseField: 'course',
		passReqToCallback : true
	},
	function(req,name, email, password, course, done) {

	}));
};