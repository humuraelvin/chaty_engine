const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
require('dotenv').config();
const dbconnection = require('./utils/dbconnection')
const userRoutes = require('./routes/user.routes');
const chatRoutes = require('./routes/chat.routes')
const messageRoutes = require('./routes/message.routes')
const { notFound, errorHandler } = require('./middlewares/error.middleware')
const path = require('path');

const app = express();

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);


//---deployment

app.use(notFound);
app.use(errorHandler)


//db connection

dbconnection();


const port = process.env.PORT;

const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})


const io = require('socket.io')(server, {
    pingTimeout: 60000,
    cors: {
        origin: "http://localhost:8080",
    },
});


io.on("connection", (socket) => {
    console.log("Connected to socket io");

    socket.on("setup", (userData) => {
        socket.join(userData._id);
        socket.emit("connected");
    });

    socket.on("join chat", (room) => {
        
    })

})
