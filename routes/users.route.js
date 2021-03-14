const express = require('express');
const router = express.Router();
// Colocar controller que ainda não foi criado
const user_controller = require('../controllers/users.controller');
// teste simples
router.get('/testar', user_controller.test);
router.get('/', user_controller.list);
module.exports = router;