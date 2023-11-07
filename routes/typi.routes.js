const express = require('express');
const { getTypiCodeByUserIdController, insertTypiCodeByUserIdController } = require('../controllers/typi.controller');
const { insertPostsByUserID } = require('../services/fetchData');
const router = express.Router();


router.post('/typiByUserId', getTypiCodeByUserIdController);
router.post('/insertTypiByUserId', insertTypiCodeByUserIdController);



module.exports = router;