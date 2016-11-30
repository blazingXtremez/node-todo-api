var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

// POST Http method to create a new document
app.post('/todos', (req, res) =>{
	var todo = new Todo({
		text : req.body.text
	});

	todo.save().then((doc) =>{
		res.send(doc);
	}, (err) =>{
		res.status(400).send(err);
	});
});

// route to get all the todos
app.get('/todos', (req, res) =>{
	Todo.find().then((todos) =>{
		res.send({todos})
	},(err) => {
		res.status(400).send(err);
	});
});


// fetch individual id
// GET /todos/_id
app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

	// validate the id using isValid, response using 404
	if (!ObjectID.isValid(id)){
	 	return res.status(404).send();
	}

	// findByID and reply back, success or Error
	// Error send back 400
	Todo.findById(id).then((todo) => {
		if (!todo){
			return res.status(404).send();
		}
		return res.status(200).send({todo});
	}).catch((err)=> {
		return res.status(400).send();
	});

});

app.listen(3000, () =>{
	console.log('Server started on port 3000');
});


module.exports = {app};