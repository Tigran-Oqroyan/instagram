const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true  // Not mandatory, can be omitted
    },
    password: {
        type: String,
        required: true  // Not mandatory, can be omitted
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
