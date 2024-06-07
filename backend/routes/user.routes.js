const express = require('express')
const { registerUser, authUser, allUsers } = require('../controllers/user.controller');
const { protectRoutes } = require('../middlewares/auth.middleware');

const router = express.Router;

router.route("/").get(protectRoutes, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router