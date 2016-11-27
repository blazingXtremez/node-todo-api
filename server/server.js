var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

// POST Http method to create a new document
app.post('/todos', (req, res) => {
	var todo = new Todo({
		text : req.body.text
	});

	todo.save().then((doc) =>{
		res.send(doc);
	}, (err) =>{
		res.send(err);
	});
});



app.listen(3000, () =>{
	console.log('Server started on port 3000');
});


