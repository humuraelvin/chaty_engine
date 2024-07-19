const asyncHandler = require('express-async-handler');
const User = require('../models/user.model.js')
const generateToken = require('../utils/generateToken.js')


const allUsers = asyncHandler(async(req, res) => 

    {
        const keyword = req.query.search
        ?{
            $or:[
                {}
            ]
        }
    }

)
