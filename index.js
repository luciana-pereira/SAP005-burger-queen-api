/* eslint-disable consistent-return *//* eslint-disable linebreak-style */
const express = require('express');
const cors = require('cors');
const routes = require('./server/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(port);
