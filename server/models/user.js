'use strict';
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const userSchema = new Schema({
    user_id: Number,
    username: String,
    password: String,
})

module.exports = userSchema