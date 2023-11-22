const indexControllers = require('../controllers/indexController.js')
const express = require('express');
const router = express.Router();

router.get('/',indexControllers.index);

module.exports = router;