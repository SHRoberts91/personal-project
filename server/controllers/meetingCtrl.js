var Meeting = require('../models/MeetingModel');

module.exports = {
    create: function(req, res) {
        var newMeeting = new (req.body);
        newMeeting.save(function(err, result) {
            if (err) {
                return res.status(500).json(err);
            }
            return res.status(200).json(result);
        });
    },
    read: function(req, res) {
        Meeting
        .find({})
        .exec(function(err,result) {
            if (err) {
                return res.status(500).json(err);
            }
            res.json(result);
        });
    },
    update: function(req, res) {
        Meeting.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                return res.status(500).json(err);
            }
            res.json(result);
        })
    },
    delete: function(req, res) {
        Meeting.findByIdAndRemove(req.params.id, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(result);
        })
    }
}