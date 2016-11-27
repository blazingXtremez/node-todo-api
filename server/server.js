// root of the application
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// connect to the db using mongoose
mongoose.connect('mongodb://localhost:27017/TodoApp');

// defining mongoose model
var Todo = mongoose.model('Todo',{
	text :{
		type : String,
		required : true,
		minlength: 1,
		trim : true
	},
	completed :{
		type : Boolean,
		default : false
	},
	completedAt:{
		type : Number,
		default : null
	}
});

// create a new instance for now
// var newTodo = new Todo({
// 	text : 'Cook Dinner'
// });

// update the db, save the instance 
// newTodo.save().then((doc) => {
// 	console.log("saved todo", doc);
// },(err) => {
// 	console.log('Unable to save to do');
// // });

// var newTodo = new Todo({
// 	text : 'Edit the code    '
// });

// newTodo.save().then((doc) =>{
// 	console.log("saved New todo ", doc);
// }, (error) =>{
// 	console.log("Error occured ", error);
// });

// new user model to be created
// email - required, trim, string, minlength

var User = mongoose.model('User', {
	email : {
		required : true,
		minlength : 1, 
		trim : true, 
		type : String
	}
});

// create a new user
var newUser = new User({
	email : 'riteishy2j@gmail.com'
});

// save the user to database
newUser.save().then((doc) => {
	console.log("new user is saved ", doc);
}, (err) => {
	console.log("Error occured ", err)
});
