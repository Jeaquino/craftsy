const productControllers = require('../controllers/productControllers')
const express = require('express');
const router = express.Router();

router.get('/detail/:id',productControllers.detailProduct);

module.exports = router;