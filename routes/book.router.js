const bookRouter = require('express').Router();

const {bookController} = require('../controllers');

bookRouter.get('/', bookController.getAllBooks);

bookRouter.post('/', bookController.createBook);

bookRouter.get('/:bookId', bookController.getBookById);

bookRouter.put('/:bookId', bookController.updateBookById)

bookRouter.delete('/:bookId', bookController.deleteBookById);

module.exports = bookRouter;

