const mongoose = require('mongoose');


const dbconnection = async () => {
    try {
        
        await mongoose.connect(process.env.M)

    } catch (error) {
        
    }
}