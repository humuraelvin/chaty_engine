const jwt = require('jsonwebtoken');


const generateToken = (id) => {
    jwt.sign(id, process.env.JWT_SECRET_KEY, { expiresIn: "2d" })
}

module.exports = generateToken;