const express = require("express");
const router = express.Router();

const {
    postUser
}= require('./user.controller.js');

router.post("/", postUser);

module.exports = router;


