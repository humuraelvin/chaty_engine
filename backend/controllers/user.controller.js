const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');
const generateToken = require('../utils/generateToken');


const allUsers = asyncHandler(async (req, res) => {
    const keyword = req.query.search
        ? {
            $or: [
                { name: { $regex: req.query.search, $options: "i" } },
                { email: { $regex: req.query.search, $options: "i" } },
            ],
        }
        : {};

    const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(users);
});


const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password, pic } = req.body;

    if (!name || !email || !password || !pic) {
        res.status(400);
        throw new Error("Please input all fields");
    };

    const userExists = await User.find({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User with provided email already exists");
    }

})