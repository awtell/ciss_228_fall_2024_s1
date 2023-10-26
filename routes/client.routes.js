const express = require('express');
const { getClientsController } = require('../controllers/client.controller');
const router = express.Router();

router.get('/clients', getClientsController);

module.exports = router;