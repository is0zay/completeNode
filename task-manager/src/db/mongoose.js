const mongoose = require('mongoose');
const validator =  require('validator');

// CONNECTING TO THE DATABASE WITH MONGOOSE
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
	useNewUrlParser: true,
	useCreateIndex: true
});






