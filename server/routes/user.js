/* eslint-disable quotes *//* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

const UserController = require('../controller/UsersController');

router.get('/', UserController.all);
router.get('/:uid', UserController.getUserId);
router.post('/', UserController.create);
router.put('/:uid', UserController.updateUser);
router.delete('/:uid', UserController.userDelete);

module.exports = router;
