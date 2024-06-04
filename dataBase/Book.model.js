const {Schema, model} = require('mongoose');

const {dataBaseTablesEnum} = require('../constants')

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    publishedDate: {
        type: Date,
    },
    thumbnailUrl: {
        type: String
    },
    shortDescription: {
        type: String
    },
    longDescription: {
        type: String
    },
    status: {
        type: String
    },
    authors: {
        type: Array,
        required: true
    }
}, {timestamps: true});

module.exports = model(dataBaseTablesEnum.BOOK, bookSchema);