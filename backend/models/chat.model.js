const mongoose = require('mongoose');

const chatModel = mongoose.model(
    {
        chatName: { type: String, trim:true }
    }
)