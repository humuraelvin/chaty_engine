const jwt = require('jsonwebtoken')
const User = require('../models/user.model.js')
const asyncHandler = require('express-async-handler')

const protectRoute = asyncHandler(async(req, res, next) => 

    {
        let token;

        if (req.headers.authorization && 
            req.headers.authorization.startsWith("Bearer")
        ) {
            
            token = req.headers.authorization.split(" ")[1];

            const validToken = jwt.verify(token, process.env.JWT_SECRET_KEY)

            if (validToken) {
                res.status(200)
            }else{
                throw new Error("Not authorized Invalid token provided")
            }

        }

        if (!token) {
            
        }

    }
)