var express = require('express');
var router = express.Router();
var User = require('../models/user');
var GarageDoors = require('../models/garage.doors');

// POST /toggleGarageDoor
router.post('/rest/toggleGarageDoor', function (req, res, next) {
    res.status(200).json({
        "Hello World": true
    });
});

module.exports = router;