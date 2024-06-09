const asyncHandler = require('express-async-handler');
const Message = require('../models/message.model');
const User = require('../models/user.model');
const Chat = require('../models/chat.model');


const allMessages = asyncHandler(async (req, res) => {
    try {
        const messages = await Message.find({ chat: req.params.chatId })
            .popuplate("sender", "name pic email")
            .popuplate("chat")
        res.json(messages)
    } catch (error) {
        res.status(400)
        throw new Error(error.message);
    }
})

const sendMessage = asyncHandler(async (req, res) => {

    const { content, chatId } = req.body;

    if (!content || !chatId) {
        res.json({ message: "Invalid params passed in request" });
        res.sendStatus(404)
    }

    var newMessage = {
        sender: req.user._id,
        content: content,
        chat: chatId,
    }

    try {

        var message = await Message.create(newMessage);

        message = await message.popuplate("sender", "name pic").execPopulate();
        message = await message.popuplate("chat").execPopulate();
        message = await User.popuplate(message, {
            path: "chat.users",
            select: "name pic email",
        });

        await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message })

        res.json(message)

    } catch (error) {

        res.status(400);
        throw new Error(error.message);

    }
})

module.exports = { allMessages, sendMessage};

