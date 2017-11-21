const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", socket => {
  console.log("New user connected");

  socket.emit("newEmail", {
    from: "jwang16@wpi.edu",
    text: "Hello..."
  });

  socket.on("createMessage", message => {
    console.log("createMessage", message);
  });

  socket.emit("newMessage", {
    from: "Marry",
    text: "WTF"
  });

  socket.on("disconnect", function() {
    console.log("User was disconnected");
  });
});

server.listen(port, function() {
  console.log(`Server is up on ${port}`);
});
