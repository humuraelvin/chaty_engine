const jwt = require('jsonwebtoken')
const User = require('../models/user.model.js')
const asyncHandler = require('express-async-handler')

const protectRoute = asyncHandler(async(req, res, next) => 

    {
        let token;

        if (req.headers.authorization && 
            req.headers.authorization.startsWith("Bearer")
        ) {
            
            try {
                token = req.headers.authorization.split(" ")[1];

            const validToken = jwt.verify(token, process.env.JWT_SECRET_KEY)

            req.user = await User.findById(validToken.id).select("-password")

            next();
            
            } catch (error) {
                res.status(401)
                throw new Error("Not authorized, No token provided")
            }

        }

        if (!token) {
            res.status(400)
            throw new Error("Not authorized , No token provided")
        }

    }
)

module.exports = { protectRoute }