const express = require('express');
const { getTypiCodeByUserIdController } = require('../controllers/typi.controller');
const router = express.Router();


router.post('/typiByUserId', getTypiCodeByUserIdController);



module.exports = router;