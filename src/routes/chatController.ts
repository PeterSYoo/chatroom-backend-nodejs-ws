const express = require('express');
const chat = express();

chat.get('/chats', (req, res) => {
  res.send('Chats Endpoint');
});

module.exports = chat;
