// root of the application
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// connect to the db using mongoose
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
	mongoose
};