var User = require('./../models/UserModel'),
    passport = require('./../config/passport');
    // passport = require('passport'),
    // LocalStrategy = require('passport-local').Strategy;


// passport.use(new LocalStrategy(function (username, password, done) {
// 	User.findOne({ username: username }).exec(function (err, user) {
// 		if (err) {
// 			console.log(err);
// 			return done(err);
// 		}
// 		if (!user) {
// 			return done('user not found', false);
// 		}
// 		user.verifyPassword(password).then(function (isMatch) {
// 			if (!isMatch) {
// 				return done('incorrect credentials', false);
// 			}
// 			return done(null, user.toJSON());
// 		});
// 	});
// }));

// passport.serializeUser(function (user, done) {
// 	done(null, user._id);
// });

// passport.deserializeUser(function (id, done) {
// 	User.findById(id).exec(function (err, user) {
// 		if (err) { return done(err); }
// 		done(null, user);
// 	});
// });

module.exports = {
    
    register: function (req, res){
        User.create(req.body, function(createErr, createResult){
            if(createErr){
                console.log(createErr);
                res.status(500).json('error creating user');;
            }
            console.log(createResult);
            res.json('successful registration');
        });
        // var newUser = new User(req.body);
        // newUser.save(function(err, result) {
        //     if(err){
        //         return res.status(500).json('error creating user');
        //     }
        //     return res.json('successful registration');
        // });
    }
}