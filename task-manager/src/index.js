const exp = require('constants');
const express = require('express')
const app = express();
require('./db/mongoose')
const User = require('./models/user');
const Task = require('./models/task')

const port = process.env.PORT || 4000;

app.use(express.json())

// REST API FOR CREATING USER
app.post('/users', (req, res)=> {
	const user = new User(req.body);

	user.save().then(() => {
		res.staus(201).send(user)
	}).catch((err) => {
		res.status(400).send(err)
	})
});


// REST API FOR CREATING TASK
app.post('/tasks', (req, res) => {
	const task = new Task(req.body);

	task.save().then(() => {
		res.staus(201).send(task);
	}).catch((err) => {
		res.status(400).send(err);
	})
});


// REST API ENDPOINTS FOR READING ONE OR MANY USER

app.get('/users', (req, res) => {
	User.find({}).then((users) => {
		res.status(201).send(users)
	}).catch((err) => {
		res.status(500).send()
	})
});

app.get('/users/:id', (req, res) => {
	const _id = req.params.id;

	User.findById(_id).then((user) => {
		if(!user) {
			return res.status(404).send()
		}

		res.send(user)
	}).catch((err) => {
		res.status(500).send(err)
	})
})

// REST API ENDPOINTS FOR READING ONE OR MANY TASK

app.get('/tasks', (req, res) => {
	User.find({}).then((users) => {
		res.status(201).send(users)
	}).catch((err) => {
		res.status(500).send()
	});
})

app.get('/tasks/:id', (req, res) => {
	const _id = req.params.id

	Task.findById(_id).then((user) => {
		if(!user) {
			return res.status(404).send()
		}
		
		res.send(user);
	}).catch((err) => {
		res.status(500).send();
	})
})

app.listen(port, () => {
	console.log("Server is u on port " + port)
});
