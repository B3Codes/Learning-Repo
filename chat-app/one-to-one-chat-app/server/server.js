// const express = require('express');
// const http = require('http');
// const cors = require('cors');
// const { Server } = require('socket.io');

// const app = express();
// app.use(cors());

// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"]
//   }
// });

// // Mapping from username to socket.id
// const users = {};

// io.on("connection", (socket) => {
//   console.log('New client connected: ', socket.id);

//   // Listen for a user registration event
//   socket.on("register", (userName) => {
//     // store username and map it to it's socket id
//     users[userName] = socket.id;
//     socket.userName = userName; // save it on the socket for the later use
//     console.log(`User registration ${userName}`);

//     // Emit the updated list of online users to everyone
//     io.emit('users', Object.keys(users));
//   });

//     // Listen for a private message event
//     socket.on('private message', ({ to, message }) => {
//       console.log(`Private message from ${socket.userName} to ${to}: ${message}`);
//       const targetSocketId = users[to];
//       if(targetSocketId) {
//         // send message only to the recipient
//         io.to(targetSocketId).emit('private message', {
//           from: socket.userName,
//           message
//         });
//       }
//     });


//     // Remove the user when they disconnect and update the online list
//     socket.on('disconnect', () => {
//       if(socket.userName) {
//         delete users[socket.userName];
//         io.emit('users', Object.keys(users));
//       }
//     });
//   });

//   const PORT =  5000;
//   server.listen(PORT, ()=> {
//     console.log(`Server is running on PORT: ${PORT}`);;
//   })


const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const User = require('../models/User');
const Message = require('../models/Message');
// const { timeStamp } = require('console');

// connect to mongodb
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected!"))
.catch((err) => console.log('Mongodb connection error', err));

const app = express();

// Use Middleware
app.use(express.json());
app.use(cors())


// Auth routes
app.use('/api/auth', require('../routes/auth'));

// Create HTTP server and Socket.IO server
const server = http.createServer(app);
// create a Socket.IO server with cors enabled
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  }
});

// Mapping from user to socket.id
const users = {}

// Middleware for Socket.IO authentication
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if(!token) {
    return next(new Error('authentication error'));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if(err) return next(new Error('Authentication Error!'));
    socket.user = decoded.user; //{id, userName}
    next();
  });
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  // console.log(socket);
  console.log('New client connected', socket.id);

  // when a user connects, store them in our mapping
  const username = socket.user.userName;
   // Add the socket to the user's array of connections
   if (users[username]) {
    users[username].push(socket.id);
  } else {
    users[username] = [socket.id];
  }

  //Broadcast updated users list to all connected client
  io.emit('users', Object.keys(users));

  // Listen for private messages
  socket.on('private message', async ({to, message}) => {
    const from = socket.user.userName;
    console.log(`Private message from ${from} to ${to}: ${message}`);

    // save the message in mongodb
    const newMessage = new Message({from, to, message});
    await newMessage.save();

    // send message to the recipient if they are connected
    const targetSocketId = users[to];
    if(targetSocketId) {
      io.to(targetSocketId).emit('private message', {from, message});
    }
  });

  // allows a client to load conversation history with a specific user
  socket.on('load messages', async(withUser) => {
    const from = socket.user.userName;
    const messages = await Message.find({
      $or: [
        {from, to: withUser},
        {from: withUser, to:from}
      ]
    }).sort({timestamp:1});
    socket.emit('conversation history', {withUser, messages});
  });

  // when client disconnects,remove them from our mapping and update the user list
  socket.on('disconnect', () => {
    console.log('client disconnected', socket.id);

    delete users[username];
    io.emit('users', Object.keys(users));
  });

});

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=> {
  console.log(`Server is running on PORT: ${PORT}`);
})

