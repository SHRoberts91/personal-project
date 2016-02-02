var User = require('../models/UserModel.js')

module.exports = {
    signup: function (req, res){
        var newUser = new User (req.body);
        newUser.save(function(err, result) {
            if(err){
                return res.status(500).json('error creating user');
            }
            return res.json('successful registration');
        });
    }
}