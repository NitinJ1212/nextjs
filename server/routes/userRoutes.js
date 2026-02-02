const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser } = require('../controllers/userController');

router.post('/', createUser);
router.get('/list', getUsers);
router.get('/:id', getUserById);

module.exports = router;
