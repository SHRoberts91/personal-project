var Account = require('../models/AccountModel');

module.exports = {
    create: function(req, res) {
        Account.create(req.body, function(err, result) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            console.log(result);
            return res.status(200).send(result);
        });
    },
    read: function(req, res) {
        Account
        .find(req.query)
        .exec(function(err,result) {
            if (err) {
                return res.status(500).json(err);
            }
            console.log(result)
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