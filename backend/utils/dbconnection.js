const mongoose = require('mongoose');


const dbconnection = async() => {
    try {
        
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Connected to mongo_db sucessfully");

    } catch (error) {
        console.log("Error connecting to mongodb :", error);
    }
}

module.exports = dbconnection;