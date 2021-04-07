/* eslint-disable quotes *//* eslint-disable linebreak-style */
const { Router } = require('express');
// const AuthController = require('../controller/AuthController');
const UserController = require('../controller/usersController');

const router = Router();

router.get('/', UserController.all);
// router.get('/:uid', AuthController.auth, UserController.getUserId);
router.get('/:id', UserController.getUserId);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.userDelete);

module.exports = router;
