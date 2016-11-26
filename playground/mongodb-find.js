// loading in the library and connecting to the db

// mongo client lets user to connect to mongo server
//const MongoClient = require('mongodb').MongoClient;
// ObjectID on the fly

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err){
		return console.log("Unable to connect to the MongoDB Server");
	}

	console.log("Connected to MongoDB Server");

	// connect to do and find all the todos
	// db.collection('Todos').find({
	// 	_id: new ObjectID('583627d155a6e41017d89d5c')
	// }).toArray().then((docs) =>{
	// 	console.log("Todos: ");
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log("Unable to fetch Todos")
	// });


	// db.collection('Todos').find().count().then((count) =>{
	// 	console.log("Todos: ");
	// 	console.log(`Todos Count: ${count}`);
	// }, (err) => {
	// 	console.log("Unable to fetch Todos")
	// });

	// query to look for the user
	db.collection('users').find({
		'name' : 'Ritesh'
	}).toArray().then((docs) =>{
		console.log("Users: ");
		console.log(JSON.stringify(docs, undefined,2));
	}, (err) =>{
		console.log("Given user doesnt exist");
	});

	db.close();
});