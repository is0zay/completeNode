// CRUD create read update delete

// const mongodb = require('mongodb');	// install mongodb npm library
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
//					VVV
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// use connect method to connect to mongodb server
// use db client to get specific database name
MongoClient.connect(connectionURL, { useNewUrlParser:true }, (error, client)=> {
	if(error){
		return console.log('Unable to connect to database');
	}
	
	const db = client.db(databaseName);

// DELETE DOCUMENT (ONE & MANY)

// db.collection('users').deleteMany({
// 	 age: 21 
// 	}).then((result) => {
// 		console.log(result.deletedCount);
// 	}).catch((error) => {
// 		console.log(error)
// 	});

// db.collection('tasks').deleteOne({
// 	description: 'Interview with EP'
// }).then((result) => {
// 	console.log(result.deletedCount);
// }).catch((error) => {
// 	console.log(error);
// });



	// UPDATE DOCUMENTS (ONE & MANY) USING PROMISES 

	// db.collection('users').updateOne({ _id: new ObjectID("647fe0be74adfce101eb3878") }, {
	// 	$inc: {
	// 		age: 2
	// 	}
	// }).then((result) => {
	// 	console.log(result);
	// }).catch((error) => {
	// 	console.log(error);
	// })

	// db.collection('tasks').updateMany({ completed: false } ,{
	// 	$set: {
	// 		completed: true
	// 	}
	// }).then((result) => {
	// 	console.log(result);
	// }).catch((error) => {
	// 	console.log(error);
	// });



	// READING DOCUMENTS (ONE & MANY)

	// db.collection('users').findOne({ _id: new ObjectID("647fe398c72043e1eeae8c26")}, (error,user) => {
	// 	if(error) {
	// 		return console.log('Unable to fetch ')
	// 	}
	// 	console.log(user)
	// });

	// db.collection('users').find({ age: 23 }).toArray((error, users) => {
	// 	console.log(users);
	// });

	// db.collection('users').find({ age: 23 }).count((error, count) => {
	// 	console.log(count);
	// });

	// db.collection('tasks').findOne({ _id: new ObjectID("647fe5454109e7e2d0317357") }, (err,task) => {
	// 	console.log(task);
	// })


	// db.collection('tasks').find({ completed: false}).toArray((err,tasks) => {
	// 	if(err) {
	// 		return console.log('Unable to fetch')
	// 	}
	// 	console.log(tasks)
	// });




	// CREATE DOCUMENTS (ONE & MANY)

	// db.collection('users').insertOne({
	// 	name: 'Cam',
	// 	age: 21
	// }, (error, result) => {
	// 	if(error) {
	// 		return console.log('Unable to insert user');
	// 	}
	// 	console.log(result.ops)
	// });

	// //create multiple document entries
	// db.collection('users').insertMany([
	// 	{
	// 		name: 'Dom',
	// 		age: 24
	// 	}, {
	// 		name:'Kobe',
	// 		age: 40
	// 	}
	// ], (error, result) => {
	// 	if(error) {
	// 		return console.log('Unable to insert documents');
	// 	}

	// 	console.log(result.ops)
	// });

	// db.collection('tasks').insertMany([
	// 	{
	// 		description: 'Virtual Mock Interview',
	// 		completed: false
	// 	},
	// 	{
	// 		description: 'In Person Mock Interview',
	// 		completed: false
	// 	},
	// 	{
	// 		description: 'Interview with EP',
	// 		completed: false
	// 	}
	// ], (error,result) => {
	// 	if(error) {
	// 		return console.log('Unable to insert documents');
	// 	}

	// 	console.log(result.ops);
	// })
})