
var socket = io();  // this is the inital request method from socket library/client to server
var date = Date();
socket.on('connect', function () {
    console.log("Connected to Server");

    socket.emit('createMessage', {
        from: "Cleon@gmail.com",
        to: "Katie@gmail.com",
        text:"Let's do lunch",
        
    });
});


socket.on('newMessage', function (email) {

    console.log("New Message", email);

});


socket.on('disconnect', function () {
    console.log("Disconnected from server");
});