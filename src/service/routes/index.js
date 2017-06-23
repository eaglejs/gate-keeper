var express = require('express');
var router = express.Router();
var mid = require('../middleware');
var gpio = require('rpi-gpio');
var Users = require('../models/users');
var User = require('../models/user');
var GarageDoors = require('../models/garage.doors');

// POST /toggleGarageDoor
router.post('rest/toggleGarageDoor', function (req, res, next) {
    gpio.setup(7, gpio.DIR_IN, readInput);
 
    function readInput() {
        gpio.read(7, function(err, value) {
            console.log('The value is ' + value);
        });
    }
});

// POST /login
router.post('/rest/login', function (req, res, next) {

    if (!!(req.body.username && req.body.password)) {
        User.authenticate(req.body.username, req.body.password, function (error, user) {
            if (error || !user) {
                res.status(403).json({
                    error: error
                });
            } else {
                req.session.userId = user._id;
                res.json({
                    username: user.username,
                    name: user.name,
                    email: user.email,
                    role: user.role
                });
            }
        });
    } else {
        var err = new Error('Email and password are required.');
        err.status = 401;
        return next(err);
    }
});

// GET /logout
router.get('/rest/logout', function (req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.status(200).json({ loggedIn: false });
            }
        });
    }
});

// POST /isLoggedIn
router.post('/rest/isLoggedIn', function (req, res, next) {
    if (req.session && req.session.userId) {
        User.findById(req.session.userId)
            .exec(function (error, user) {
                if (error) {
                    res.json({
                        message: 'You must be logged in to access the application.'
                    });
                } else {
                    res.json({
                        username: user.username,
                        name: user.name,
                        email: user.email,
                        role: user.role
                    });
                }
            });
    } else {
        res.send({
            error: "You must be logged in to access the application"
        });
    }
});

// POST /isRegistered
router.post('/rest/isRegistered', function (req, res, next) {
    // TO-DO: Check if there are users in the collection.

    User.find().exec(function (error, data) {
        data.length ? res.json({ isRegistered: true }) : res.json({ isRegistered: false });
    });

});

// POST /register
router.post('/rest/register', function (req, res, next) {

    User.find().exec(function (error, data) {
        if (!data.length) {
            if (req.body.email &&
                req.body.name &&
                req.body.username &&
                req.body.password &&
                req.body.confirmPassword) {

                // confirm that user typed same password twice
                if (req.body.password !== req.body.confirmPassword) {
                    var err = new Error('Passwords do not match.');
                    err.status = 400;
                    return next(err);
                }

                // create object with form input
                var userData = {
                    email: req.body.email,
                    name: req.body.name,
                    username: req.body.username,
                    password: req.body.password,
                    role: 'admin'
                };

                // user schema's `create` method to insert document into Mongo
                User.create(userData, function (error, user) {
                    if (error) {
                        return next(error);
                    } else {
                        req.session.userId = user._id;
                        return res.json(req.session);
                    }
                });

            } else {
                var err = new Error('All fields required.');
                err.status = 400;
                return next(err);
            }
        } else {
            if (req.session && req.session.userId) {
                User.findById(req.session.userId)
                    .exec(function (error, user) {
                        if (error || user.role !== 'admin') {
                            res.status(403).json({
                                message: 'Something went wrong or you are Unauthorized.'
                            });
                        } else {
                            if (req.body.email &&
                                req.body.name &&
                                req.body.username &&
                                req.body.password &&
                                req.body.confirmPassword) {

                                // confirm that user typed same password twice
                                if (req.body.password !== req.body.confirmPassword) {
                                    var err = new Error('Passwords do not match.');
                                    err.status = 400;
                                    return next(err);
                                }

                                // create object with form input
                                var userData = {
                                    email: req.body.email,
                                    name: req.body.name,
                                    username: req.body.username,
                                    password: req.body.password,
                                    role: 'user'
                                };

                                // user schema's `create` method to insert document into Mongo
                                User.create(userData, function (error, user) {
                                    if (error) {
                                        return next(error);
                                    } else {
                                        return res.json({message: 'Success!'});
                                    }
                                });

                            } else {
                                var err = new Error('All fields required.');
                                err.status = 400;
                                return next(err);
                            }
                        }
                    });
            } else {
                res.status(403).send({
                    error: "You are Unauthorized"
                });
            }

        }
    });


});

// POST /getUserInformation
router.post('/rest/getUserInformation', function (req, res, next) {
    if (req.session && req.session.userId) {
        User.findById(req.session.userId)
            .exec(function (error, user) {
                if (error) {
                    res.json({
                        message: 'Error(101): You must be logged in to access the application.'
                    });
                } else {
                    res.json({
                        username: user.username,
                        name: user.name,
                        email: user.email,
                        role: user.role
                    });
                }
            });
    } else {
        res.status(403).json({
            message: 'Error(102): You must be logged in to access the application.'
        })
            ;
    }
});

module.exports = router;
