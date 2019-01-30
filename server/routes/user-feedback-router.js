var express = require('express');
var userFeedbackRouter = express.Router();
var UserFeedback = require('../models/user-feedback');
var moment = require('moment');

userFeedbackRouter.get('/', function (req, res) {
    UserFeedback.find(function (err, result) {
        if (err) {
            console.error(err);
            res.status(400).send(JSON.stringify(err));
            return;
        }
        res.send(JSON.stringify(result));
    });
});

userFeedbackRouter.post('/', function (req, res) {
    var userFeedback = new UserFeedback({
        date: moment(),
        feedback: req.body.feedback,
        category: req.body.category
    });

    userFeedback.save(function (err, result) {
        if (err) {
            console.error(err);
            res.status(400).send(JSON.stringify(err));
            return;
        }
        res.status(201).send(JSON.stringify(result));
    });
});

userFeedbackRouter.delete('/:feedbackId', function (req, res) {
    UserFeedback.findOneAndDelete({ _id: req.params.sensorId }, function (err, result) {
        if (err) {
            res.status(404).send(JSON.stringify(err));
            return;
        }
        res.sendStatus(204);
    });
});

module.exports = userFeedbackRouter;
