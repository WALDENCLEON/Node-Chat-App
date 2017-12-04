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

socket.emit('newMessage', {  //sent to client when initial client connection is made with server
    from:'Admin',
    text:"Welcome!"

});

socket.broadcast.emit('newMessage', { //sent to clients who have already connected and another session has been established on same socket
from: 'Admin',
text: "New user joined",
createdAt: new Date().getTime()
});


socket.on('createMessage', (message) => {  //listening for event from client
console.log('createMessage: ', message);

        io.emit('newMessage', {  //emits to every single connection listening for 'createMessage' socket.on
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
        
    });

socket.on('disconnect', () => {
console.log("Server was disconnected");
});
})


server.listen(port, () => {
console.log(`Server is running on ${port}`);
});

