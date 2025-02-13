const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Mapping from username to socket.id
const users = {};

io.on("connection", (socket) => {
  console.log('New client connected: ', socket.id);

  // Listen for a user registration event
  socket.on("register", (userName) => {
    // store username and map it to it's socket id
    users[userName] = socket.id;
    socket.userName = userName; // save it on the socket for the later use
    console.log(`User registration ${userName}`);

    // Emit the updated list of online users to everyone
    io.emit('users', Object.keys(users));
  });

    // Listen for a private message event
    socket.on('private message', ({ to, message }) => {
      console.log(`Private message from ${socket.userName} to ${to}: ${message}`);
      const targetSocketId = users[to];
      if(targetSocketId) {
        // send message only to the recipient
        io.to(targetSocketId).emit('private message', {
          from: socket.userName,
          message
        });
      }
    });


    // Remove the user when they disconnect and update the online list
    socket.on('disconnect', () => {
      if(socket.userName) {
        delete users[socket.userName];
        io.emit('users', Object.keys(users));
      }
    });
  });

  const PORT =  5000;
  server.listen(PORT, ()=> {
    console.log(`Server is running on PORT: ${PORT}`);;
  })

