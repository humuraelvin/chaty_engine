const jwt = require('jsonwebtoken')
const User = require('../models/user.model.js')
const asyncHandler = require('express-async-handler')

const protectRoute = asyncHandler(async(req, res, next) => 

    {
        let token;

        if (req.headers.authorization && 
            req.headers.authorization.startsWith("Bearer")
        ) {
            
        }

    }
)