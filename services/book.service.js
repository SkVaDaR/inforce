const BookModel = require('../dataBase/Book.model');

module.exports = {
    findAll: () => BookModel.find({}),

    insertBook: (book) => BookModel.create(book),

    findById: (bookId) => BookModel.findById(bookId),

    updateBook: (bookId, updatedBook) => BookModel.findOneAndUpdate(bookId, updatedBook),

    deleteBook: (bookId) => BookModel.findByIdAndDelete(bookId)
};