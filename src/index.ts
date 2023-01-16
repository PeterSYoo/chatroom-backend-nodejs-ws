const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

require('dotenv').config();

app.use(
  cors({
    origin: process.env.APP,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: process.env.APP,
//     methods: ['GET', 'POST'],
//   },
// });

// io.on('connection', (socket) => {
//   console.log(`User Connected: ${socket.id}`);

//   socket.on('disconnect', () => {
//     console.log('User Disconnected', socket.id);
//   });
// });

// server.listen(process.env.PORT || 3001, () => {
//   console.log('Server started');
// });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started');
});
