/* eslint-disable consistent-return *//* eslint-disable linebreak-style */

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Bearer } = require('permit');
const { models } = require('../db/models');

const permit = new Bearer();

module.export = {
  login(req, res) {
    const { email, password } = req.body;
    models.User.findOne({
      where: {
        email,
        password,
      },
    })
      .then((user) => {
        if (!user) return res.status(401).json({ error: 'Ops.. aconteceu alguma coisa errada, preencha e tente novamente' });
        if (!bcrypt.compareSync(password, user.password)) {
          return res.status(401).json({ error: 'Falha na autentição' });
        }
        const jwtLoad = { id: user.id };
        const token = jwt.sign(jwtLoad, process.env.JWT_SECRET);
        return res.status(200).json({ token });
      });
  },

  auth(req, res, next) {
    const { token } = req.headers.token;
    if (!token) {
      permit.fail(res);
      return res.status(401).json({ error: 'authentication required!' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        permit.fail(res);
        return res.status(401).json({ error: 'failed to authenticate token!' });
      }
      req.id = decoded.id;
      next();
    });
  },
};
