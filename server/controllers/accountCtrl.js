var Account = require('../models/AccountModel');

module.exports = {
    create: function(req, res) {
        var newAccount = new (req.body);
        newAccount.save(function(err, result) {
            if (err) {
                return res.status(500).json(err);
            }
            return res.status(200).json(saved);
        });
    },
    read: function(req, res) {
        Account
        .find({})
        .exec(function(err,result) {
            if (err) {
                return res.status(500).json(err);
            }
            res.json(result);
        });
    },
    update: function(req, res) {
        Account.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                return res.status(500).json(err);
            }
            res.json(result);
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