const mongoose = require('mongoose');


const dbconnection = async() => {
    try {
        
        await mongoose.connect(process.env.MONGO_URI);

    } catch (error) {
        
    }
}