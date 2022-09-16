const express = require('express');
const app = express();
const http = require('http');
const httpServer = http.createServer(app);
const { Server } = require("socket.io");
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://youtube9842.herokuapp.com/",
    methods: ["GET", "POST"]
  }
});

let port = Number(process.env.PORT || 3001);

app.get('/', (req, res) => {
  console.log("Hello");
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

httpServer.listen(port, "http://youtubeserver9842.herokuapp.com/", () => {
  <h1>`listening on *:${port}`</h1>
});