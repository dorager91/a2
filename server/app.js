var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const mongoAtlasUrl =
    `mongodb+srv://m001-student:m001-mongodb-basics@sandbox.qaewnf2.mongodb.net/`;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var itemsRouter = require('./routes/items');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/items', itemsRouter);

try {
    mongoose.connect(mongoAtlasUrl, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (e) {
    console.log("Connection refused");
}
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Successfully connected to MongoDB");
});

module.exports = app;
