const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const userController = require('./routes/userController');
const chatController = require('./routes/chatController');

// Enables .env
require('dotenv').config();

const PORT = process.env.PORT;

// WebSockets
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.APP,
    methods: ['GET', 'POST']
  },
});

io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on('ping', (startTime) => {
    let latency = Date.now() - startTime;
    socket.emit('pong', latency);
  });

  socket.on('join_room', (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on('send_message', (data) => {
    console.log(data);
  });

  socket.on('disconnect', () => {
    console.log('User Disconnected', socket.id);
  });
});

server.listen(PORT || 3001, () => {
  console.log('Server started');
});

// Middleware
app.use(cors());
app.use('/', userController);
app.use('/', chatController);

// Root Endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});
