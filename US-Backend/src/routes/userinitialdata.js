const express = require('express');
const { userinitialData } = require('../controller/userinitialdata');
const router = express.Router();


router.get('/userinitialdata', userinitialData);

module.exports = router;
