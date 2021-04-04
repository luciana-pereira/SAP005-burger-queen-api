/* eslint-disable consistent-return *//* eslint-disable linebreak-style */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./server/routes/index');

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port);
