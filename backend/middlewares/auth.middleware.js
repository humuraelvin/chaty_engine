const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const asyncHandler = require('express-async-handler');

const protectRoute = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1]; // Fix here: split by " " instead of ""
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            res.status(401);
            throw new Error("Error Unauthorized, token failed");
        }
    }

    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token provided");
    }
});

module.exports = { protectRoute }; // Export as an object to match the import statement
