const asyncHandler = require('express-async-handler');
const User = require('../models/user.model.js')
const generateToken = require('../utils/generateToken.js')
const bcrypt = require('bcryptjs')


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

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name, 
        email,
        password:hashedPassword,
        pic
    })

    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id)
        });
    }else{
        res.status(200)
        throw new Error("User failed to be created")
    }

})


const loginUser = asyncHandler(async(req, res) => {
    
    const { email, password } = req.body;

    const user = await User.findOne({ email })
    
    const validPassword = await bcrypt.compare(
        password, user.password
    )

    if (user && validPassword) {
        res.json({
            _id:user.id,
            name: user.name,
            email:user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id),
        });
    }else

})