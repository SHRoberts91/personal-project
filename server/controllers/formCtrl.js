var GeneralForm = require('../models/GeneralFormModel'),
    UpdatedForm = require('../models/UpdatedFormModel');


module.exports = {
    create: function(req, res) {
        GeneralForm.create(req.body, function(err, result) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            // console.log(result);
            return res.status(200).send(result,"successfully created account!");
        });
    },
    read: function(req, res) {
        GeneralForm
        .find(req.query)
        .exec(function(err,result) {
            if (err) {
                return res.status(500).send(err);
            }
            console.log("back end working",result)
            res.send(result);
        });
    },
    update: function(req, res) {
        GeneralForm.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(result);
        })
    },
    delete: function(req, res) {
        GeneralForm.findByIdAndRemove(req.params.id, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(result);
        })
    },
    createModified: function(req, res) {
        GeneralForm.create(req.body, function(err, result) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            // console.log(result);
            return res.status(200).send(result,"successfully created account!");
        });
    },
    readModified: function(req, res) {
        GeneralForm
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
        GeneralForm.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(result);
        })
    },
    deleteModified: function(req, res) {
        GeneralForm.findByIdAndRemove(req.params.id, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(result);
        })
    }
}