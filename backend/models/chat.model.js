const mongoose = require('mongoose');

const chatModel = mongoose.model(
    {
        chatName: { type: String, trim:true },
        isGroupChat: { type: Boolean, default: false },
        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }]
    }
)