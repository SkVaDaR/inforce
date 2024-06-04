const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const bookRouter = require('./routes');

const app = express();

_mongooseConnector();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/books', bookRouter);

app.listen(process.env.PORT, ()=>{
    console.log('app listen');
});

function _mongooseConnector() {
    mongoose.connect(process.env.DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected successfully.'))
        .catch(err => console.error('MongoDB connection error:', err));
}