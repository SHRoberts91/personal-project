var Account = require('../models/AccountModel');

module.exports = {
    create: function(req, res) {
        Account.create(req.body, function(err, result) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            // console.log(result);
            return res.status(200).send(result,"successfully created account!");
        });
    },
    read: function(req, res) {
        Account
        .find(req.query)
        .exec(function(err,result) {
            if (err) {
                return res.status(500).send(err);
            }
            // console.log("back end working",result)
            res.send(result);
        });
    },
    update: function(req, res) {
        Account.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(result);
        })
    },
    delete: function(req, res) {
        Account.findByIdAndRemove(req.params.id, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(result);
        })
    }
}