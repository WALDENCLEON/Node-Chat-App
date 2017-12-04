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


socket.on('createMessage', (message) => {  //listening for event from client
console.log('createMessage: ', message);

        io.emit('newMessage', {  //emits to every single connection listening for newMessage emit
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
        
    });

socket.on('disconnect', () => {
console.log("Server was disconnected");
});
});





server.listen(port, () => {
console.log(`Server is running on ${port}`);
});

