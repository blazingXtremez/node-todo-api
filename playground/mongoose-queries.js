const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

// var id = '683e195221914e18f7796b79';

// if (!ObjectID.isValid(id)){
// 	console.log("ID is not valid");
// }

// //using find
// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log(todos);
// });


// // find one
// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log(todo);
// });

// find by id
// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log("ID Not found");
// 	}
// 	console.log(todo);
// }).catch((err) => {
// 	console.log(err);
// });


// query user collections
// user find by id
// 3 cases : user not found, print user when user found, any error

var id = '583a24cf2f78611a7ff05591';

User.findById(id).then((user) => {
	if (!user){
		return console.log("User not found");
	}
	console.log("USER : ", user);
}).catch((err) =>{
	console.log(error);
});