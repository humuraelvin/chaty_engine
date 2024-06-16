const express = require('express');
const { registerUser, authUser, allUsers } = require('../controllers/user.controller');
const { protectRoute } = require('../middlewares/auth.middleware'); // Corrected import

const router = express.Router();

router.route("/").get(protectRoute, allUsers); // Consistent naming
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
