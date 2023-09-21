const express = require('express');
const { getUsersController } = require('../controllers/users.controller');
const router = express.Router();

router.get('/users', getUsersController);


module.exports = router;