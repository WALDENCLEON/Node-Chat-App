
var socket = io();  // this is the inital request method from socket library/client to server


socket.on('connect', function () {
    console.log("Connected to Server");

});


socket.on('disconnect', function () {
    console.log("Disconnected from server");
});


socket.on('newMessage', function (message) {

    console.log("newMessage", message);

});