const path = require('path');
const http = require('http');
<<<<<<< HEAD
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from the server.');
  });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newMessage', generateMessage('Admin', `${coords.latitude}, ${coords.longitude}`));
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
=======
const socketIO = require('socket.io');
const express = require('express');
const {generateMessage} = require('./utils/message'); //importing returned objected from generateMessage function
const port = process.env.PORT || 3000;
var app = express();

var server = http.createServer(app);


const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

var io = socketIO(server);

io.on('connection', (socket) => {   //registers event listenter 'connection'
console.log("New User Connected");

    socket.emit('newMessage', generateMessage('Admin', "Welcome to the Chat App"));

        socket.broadcast.emit('newMessage', generateMessage("Admin", "Another user has joined"));
        //sent to clients who have already connected when another session has been established on same socket


        socket.on('createMessage', (message, callback) => {  
            //listening for event from client, message becomes object from create message that callback becomes ack function 
        console.log('createMessage: ', message);


        //io.emit emits to every single connection listening for 'newMessage' socket.on, only emitting on createMessage input
            io.emit('newMessage', generateMessage(message.from, message.text));
            callback("This is from the server");
    });


    socket.on('disconnect', () => {
    console.log("Server was disconnected");
    });
 });


    server.listen(port, () => {
    console.log(`Server is running on ${port}`);
    });

>>>>>>> e85b91a424c9f846b710bc707f392dcf82be48e6
