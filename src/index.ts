const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

require('dotenv').config();

const PORT = process.env.PORT;

app.use(
  cors({
    origin: 'https://chatroom-backend-nodejs-ws.up.railway.app',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'https://chatroom-backend-nodejs-ws.up.railway.app',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log('User Disconnected', socket.id);
  });
});

server.listen(PORT || 3001, () => {
  console.log('Server started');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
