var socket = io();

socket.on("connect", function() {
  console.log("Connected to server");

  socket.emit("createMessage", {
    from: "Jonathan",
    text: "Hey...that works for me"
  });
});

socket.on("disconnect", function() {
  console.log("Disconnect from server");
});

socket.on("newMessage", function(message) {
  console.log("newMessage", message);
});
