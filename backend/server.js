const express = require('express');
require('dotenv').config();
const cors = require('cors');
const dbconnection = require('./utils/dbconnection')



const app = express();
app.use(express.json())
app.use(cors()) 


dbconnection();

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
} )