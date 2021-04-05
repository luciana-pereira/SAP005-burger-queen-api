/* eslint-disable linebreak-style */
require('dotenv').config();

const bcrypt = require('bcrypt');
const User = require('../models/UserModel');

User.create({
  name: 'admin',
  password: bcrypt.hashSync('123', 10),
});

User.findAll().then((result) => {
  console.log(result);
});
