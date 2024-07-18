const mongoose = require('mongoose');


const dbconnection = async () => {
    try {
        
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDb successfully");

    } catch (error) {
        console.log("Error connecting to mongodb", error);
    }
}