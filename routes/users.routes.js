const express = require('express');
const { getUsersController, insertUserController } = require('../controllers/users.controller');
const router = express.Router();

router.get('/users', getUsersController);
router.post('/user', insertUserController);
// router.get('/user')
// router.put('/user');
// router.delete('/user');



module.exports = router;