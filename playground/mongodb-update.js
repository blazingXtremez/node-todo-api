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

	// update the documents in the database
	// db.collection('Todos').findOneAndUpdate({
	// 	_id : new ObjectID('583627d155a6e41017d89d5c')
	// }, { 
	// 	$set :{
	// 		status : true
	// 	}
	// }, {
	// 	returnOriginal : false
	// }). then ((result) => {
	// 	console.log(result);
	// })
	
	// update name to something else
	//use inc age by 1
	db.collection('users').findOneAndUpdate({
		name : 'Charlie'	
	}, {
		$set : {
			name : 'Ritesh'
		},

		$inc : {
			age : 1
		}
	},{
		returnOriginal : false
	}). then ((result) => {
		console.log(result);
	})


	db.close();
});