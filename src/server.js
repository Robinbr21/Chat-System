require('dotenv').config();
import cors from "cors";
import routes from "./routes";

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const PORT = process.env.PORT ;

// middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));


//API
app.use('/', routes.chat);


io.on('connection', (socket) => {
    console.log(`a user connected: ${socket.id}`);
    socket.on('chat message', (msg) => {
      console.log(`message ${socket.id}: `   + msg);
      io.emit('new message', {
        message: `"${socket.id}" ==>>> `   + msg
      });
    });
    
    socket.on('disconnect', () => {
        console.log(`${socket.id} user disconnected`);
    });
});


server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});

