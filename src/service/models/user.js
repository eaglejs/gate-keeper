var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String
    }
});

mongoose.Promise = global.Promise;

// authenticate input against database documents
UserSchema.statics.authenticate = function(username, password, callback) {
    User.findOne({username: username})
        .exec(function (error, user) {
            if (error) {
                return callback(error);
            } else if ( !user ) {
                var err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, function(error, result) {
                if (result) {
                    return callback(null, user);
                } else {
                    return callback();
                }
            });
        })
}

// hash password before saving to database
UserSchema.pre('save', function(next) {
    var user = this;

    bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    });
});
var User = mongoose.model('User', UserSchema);
module.exports = User;