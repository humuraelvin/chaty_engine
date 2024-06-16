const express = require('express');
const { allMessages, sendMessage } = require('../controllers/message.controller');
const { protectRoute } = require('../middlewares/auth.middleware')

const router = express.Router();

router.route("/:chatId").get(protectRoute, allMessages);
router.route("/").post(protectRoute, sendMessage);

module.exports = router;