const express = require('express');
const router = express.Router();
const controller = require('../controllers/livros-controller');
const authService = require('../services/auth-service')

router.get('/', controller.get);
router.get('/books', controller.getBooks);
router.get('/books/genre/:genre', controller.getByGenre);
router.get('/book/id/:id', controller.getById);
router.post('/book', authService.authorize, controller.post);
router.put('/book/:id', authService.authorize, controller.put);
router.delete('/book/:id', authService.authorize, controller.delete);

module.exports = router;