/* eslint-disable quotes *//* eslint-disable linebreak-style */
const express = require('express');
// const AuthController = require('../controller/AuthController');
const UserController = require('../controller/usersController');

const router = express.Router();

router.get('/', UserController.all);
// router.get('/:uid', AuthController.auth, UserController.getUserId);
router.get('/:uid', UserController.getUserId);
router.post('/', UserController.createUser);
router.put('/:uid', UserController.updateUser);
router.delete('/:uid', UserController.userDelete);

module.exports = router;
