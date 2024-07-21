const asyncHandler = require('express-async-handler')
const Message = require('../models/message.model.js')
const User = require('../models/user.model.js')
const Chat = require('../models/chat.model.js')


const allMessages = asyncHandler(async (req, res) =>

    {
    try {
        const messages = await Message.find({ chat: req.params.chatId })
            .populate("sender", "name pic email")
            .populate("chat")

          res.json(messages)
    } catch (error) {
        res.status(400)
        throw new Error(error.messages)
    }
    }
);


const sendMessage = asyncHandler(async(req, res) => 

    {
        const { content, chatId } = req.body;

        if (!content || !chatId ) {
            console.log("Invalid data passed into request");
            return res.sendStatus(400)
        }

    }
)