const express = require('express');
const { getUsersController, insertUserController, authenticateController } = require('../controllers/users.controller');
const { insertUserValidation } = require('../validations/users-validator');
const authenticateToken = require('./middleware');
const router = express.Router();

router.get('/users', authenticateToken, getUsersController);
router.post('/user', insertUserValidation, insertUserController);
router.post('/authenticate', authenticateController);
// router.get('/user')
// router.put('/user');
// router.delete('/user');



module.exports = router;