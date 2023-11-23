const productControllers = require('../controllers/productControllers')
const express = require('express');
const router = express.Router();

router.get('/detail/:id',productControllers.detailProduct);
router.post('/create',productControllers.createProduct);

module.exports = router;