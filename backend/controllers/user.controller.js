const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');
const generateToken = require('../utils/generateToken');


const allUsers = asyncHandler(async(req, res) => {
    const keyWord = req.query.search;
})