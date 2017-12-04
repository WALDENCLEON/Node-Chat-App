const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const express = require('express');

const port = process.env.PORT || 3000;
var app = express();

var server = http.createServer(app);


const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

var io = socketIO(server);

io.on('connection', (socket) => {   //registers event listenter 'connection'
console.log("New User Connected");

var date = Date();

socket.emit('newMessage', {   //emitting event to client
    from:'Cleon@gmail.com',
    text: "Hey, Katie! Let's meet for lunch.",
    craetedAt: date
});

socket.on('createMessage', (newMessage) => {  //listening for event from client

        console.log('createMessage: ', newMessage);
        
    });

socket.on('disconnect', () => {
console.log("Server was disconnected");
});
});





server.listen(port, () => {
console.log(`Server is running on ${port}`);
});

