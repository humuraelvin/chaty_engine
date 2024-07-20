const asyncHandler = require('express-async-handler');
const User = require('../models/user.model.js')
const generateToken = require('../utils/generateToken.js')


const allUsers = asyncHandler(async(req, res) => 

    {
        const keyword = req.query.search
        ?{
            $or:[
                {name:{$regex:req.query.search, $options:"i"}},
                {email:{$regex:req.query.search, $options:"i"}}
            ],
        }
    :{}

    const users = await User.find(keyword).find({_id: {$ne:req.user._id}})
    res.status(200).send(users)

})

const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please Enter all the fields")
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }

})
