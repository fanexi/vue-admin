const mongoose = require("mongoose");
const UserSchema = require("./user");
Model = {
    User: mongoose.model('User', UserSchema),
}
module.exports = Model