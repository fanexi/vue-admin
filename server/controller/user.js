const Model = require('../models')
const express = require('express')
let responseData = {};
const login = async (req, res, next) => {
    let {
        username,
        password
    } = req.body
    try {
        const result = await Model.User.findOne({
            username,
            password,
        })
        if (!result) {
            Object.assign(responseData, {
                message: "用户名或者密码错误",
                status: 500
            })
        } else {
            Object.assign(responseData, {
                message: "success",
                status: 200,
                data: {
                    token: '111111111'
                }
            })
        }
        res.send(responseData)
    } catch (err) {
        res.send(responseData)
    }
}
module.exports = {
    login
}