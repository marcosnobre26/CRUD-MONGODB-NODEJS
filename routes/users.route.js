const express = require('express');
const router = express.Router();
// Colocar controller que ainda não foi criado
const user_controller = require('../controllers/users.controller');

router.post('/', user_controller.create);
router.get('/', user_controller.list);
router.get('/:id', user_controller.details);
router.put('/:id/update', user_controller.user_update);
router.delete('/:id/delete', user_controller.user_delete);

module.exports = router;