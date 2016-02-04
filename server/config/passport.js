var User = require('./../models/UserModel'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy(function (username, password, done) {
	User.findOne({ username: username }).exec(function (err, user) {
		if (err) {
			console.log(err);
			return done(err);
		}
		if (!user) {
			return done('user not found', false);
		}
		user.verifyPassword(password).then(function (isMatch) {
			if (!isMatch) {
				return done('incorrect credentials', false);
			}
			return done(null, user.toJSON());
		});
	});
}));

passport.serializeUser(function (user, done) {
	done(null, user._id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id).exec(function (err, user) {
		if (err) { return done(err); }
		done(null, user);
	});
});