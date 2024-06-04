const {bookService} = require('../services');
const {BookModel} = require("../dataBase");

module.exports = {

    getAllBooks: async (req, res, next) => {
        try {
            const books = await bookService.findAll();

            res.json(books)
        } catch (e) {
            next(e);
        }
    },

    createBook: async (req, res, next) => {
        try {
            const newBook = await BookModel.create(req.body);

            res.json(newBook);
        } catch (e) {
            next(e);
        }
    },

    getBookById: async (req, res, next) => {
        try {
            const {bookId} = req.params;
            const book = await bookService.findById(bookId);

            res.json(book);
        } catch (e) {
            next(e);
        }
    },

    updateBookById: async (req, res, next) => {
        try {
            const {bookId} = req.params;
            await bookService.updateBook(bookId, req.body);

            res.json('updated');
        } catch (e) {
            next(e);
        }
    },

    deleteBookById: async (req, res, next) => {
        try {
            const {bookId} = req.params;
            await bookService.deleteBook(bookId);
            res.json('deleted')
        } catch (e) {
            next(e);
        }
    }
}