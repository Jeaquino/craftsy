const userControllers = require('../controllers/userController.js')
const express = require('express');
const router = express.Router();

router.get('/login',userControllers.login);
router.post('/login',userControllers.logeo);
router.get('/registro',userControllers.register);
router.post('/registro',userControllers.createUser);
router.get('/saludo',userControllers.saludo);

module.exports = router;