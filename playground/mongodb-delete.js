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

	//deleteMany 
	// db.collection('Todos').deleteMany({
	// 	text : 'Eat Lunch'
	// }).then((result) => {
	// 	console.log(result);
	// });

	//deleteOne, deletes the first one that matches the criteria
	// db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) =>{
	// 	console.log(result);
	// });

	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({status : true}).then((result) =>{
	// 	console.log(result);
	// });	

	// delete many user
	// db.collection('users').deleteMany({
	// 	name : 'Ritesh'
	// }).then((result) =>{
	// 	console.log(result);
	// });

	// delete by id
	db.collection('users').deleteOne({
		_id : new ObjectID('583a15d63891d158e3476189')
	}).then ((result) => {
		console.log(result);
	});	

	//db.close();
});