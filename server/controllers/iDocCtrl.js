var GeneraliDoc = require('../models/GeneraliDocModel'),
    UpdatediDoc = require('../models/UpdatediDocModel');


module.exports = {
    create: function(req, res) {
        GeneraliDoc.create(req.body, function(err, result) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            // console.log(result);
            return res.status(200).send(result,"successfully created iDoc!");
        });
    },
    read: function(req, res) {
        GeneraliDoc
        .find(req.query)
        .exec(function(err,result) {
            if (err) {
                return res.status(500).send(err);
            }
            console.log("read iDoc",result)
            res.send(result);
        });
    },
    update: function(req, res) {
        GeneraliDoc.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(result);
        })
    },
    delete: function(req, res) {
        GeneraliDoc.findByIdAndRemove(req.params.id, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(result);
        })
    },
    createModified: function(req, res) {
        GeneraliDoc.create(req.body, function(err, result) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            // console.log(result);
            return res.status(200).send(result,"successfully created account!");
        });
    },
    readModified: function(req, res) {
        GeneraliDoc
        .find(req.query)
        .exec(function(err,result) {
            if (err) {
                return res.status(500).send(err);
            }
            console.log("back end working",result)
            res.send(result);
        });
    },
    updateModified: function(req, res) {
        GeneraliDoc.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(result);
        })
    },
    deleteModified: function(req, res) {
        GeneraliDoc.findByIdAndRemove(req.params.id, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(result);
        })
    }
}