var User = require('./../models/UserModel');

module.exports = {
    
    register: function (req, res){
        User.create(req.body, function(createErr, createResult){
            if(createErr){
                console.log(createErr);
                res.status(500).send('error creating user');;
            }
            console.log(createResult);
            res.send('successful registration');
        });
        // var newUser = new User(req.body);
        // newUser.save(function(err, result) {
        //     if(err){
        //         return res.status(500).json('error creating user');
        //     }
        //     return res.json('successful registration');
        // });
    },
    me: function(req, res){
        res.send(req.user)
    },
        read: function(req, res) {
        User
        .find(req.query)
        .exec(function(err,result) {
            if (err) {
                return res.status(500).json(err);
            }
            console.log(result);
            res.json(result);
        });
    },
    readUser: function(req, res){
        console.log(req.params.accounts);
        User.findById(req.params.id).populate('accounts').exec (function(err,result){
            if(err){
                res.status(500).send(err)
            }
            console.log(result);
            res.status(200).send(result)
        })
    },
    update: function(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                return res.status(500).json(err);
            }
            res.json(result);
        })
    },
    
}