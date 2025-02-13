const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();

// Enable CORS if your client runs on a different port
app.use(cors);

const server = http.createServer(app);

// create a Socket.IO server and allow all origins for simplicity
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Socket.IO connection handle
io.on('connection', (socket) => {
  console.log('New client connected: ', socket.id);

  // Listen for chat messages from the client
  socket.on("chat message", (msg) => {
    console.log(`Message from ${socket.id}: ${msg}`);

    // Broadcast message to all connected clients
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('client disconnected: ', socket.id)
  });
});

// start the server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})

