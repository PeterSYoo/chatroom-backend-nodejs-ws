const express = require('express');
const user = express();

user.get('/users', (req, res) => {
  res.send('Users Endpoint');
});

module.exports = user;
