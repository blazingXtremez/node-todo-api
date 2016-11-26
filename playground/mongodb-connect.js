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

	// // inserting data to the collection
	// db.collection('Todos').insertOne({
	// 	"text" : " Something to do ",
	// 	"status" : "false"
	// }, (err, res) =>{
	// 	if (err){
	// 		return console.log('Error inserting the data', err);
	// 	}

	// 	console.log(JSON.stringify(res.ops, undefined, 2));
	// });

	// insert new doc in new collection, user
	// name, age, location string
	// db.collection('users').insertOne({
	// 	'name' : 'Ritesh',
	// 	'age'  : 25,
	// 	'location' : 'NYchr'
	// }, (err, res) => {
	// 	if (err){
	// 		return console.log("error inseting the document : ", err);
	// 	}

	// 	console.log(JSON.stringify(res.ops, undefined, 2));
	// });

	db.close();
});