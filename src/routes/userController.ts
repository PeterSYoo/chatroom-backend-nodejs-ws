import Users from '../models/Users';

const express = require('express');
const user = express();

user.get('/user/get-users', async (req, res) => {
  try {
    const users = await Users.find({});
    if (!users) return res.status(404).json({ error: 'Users not Found' });
    if (users) return res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Users' });
  }
});

// POST - Save user document after google sign in through firebase
user.post('/user/create-users', async (req, res) => {
  try {
  } catch (error) {}
});

module.exports = user;
