/* eslint-disable linebreak-style */
const { Router } = require('express');
const User = require('../controller/UsersController');

const router = Router();
// aqui vai as requisições || endpoints
router.get('/', User.getAllUser);
router.get('/:uid', User.getUserId);
router.post('/', User.createUsers);
router.put('/:uid', User.updateUser);
router.delete('/:uid', User.deleteUsers);

module.exports = router;
