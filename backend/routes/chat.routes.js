const express = require('express');

const { accessChat, fetchChats, createGroupChat, createGroupChat, removeFromGroup, addToGroup, renameGroup } = require('../controllers/chat.controller');

const { protectRoute } = require('../middlewares/auth.middleware')

const router = express.Router();

router.route("/").post(protectRoute, accessChat);
router.route("/").get(protectRoute, fetchChats);
router.route("/group").post(protectRoute, createGroupChat);
router.route("/rename").put(protectRoute, renameGroup);
router.route("/groupremove").put(protectRoute, removeFromGroup);
router.route("/groupadd").put(protectRoute, addToGroup);

module.exports = router;

