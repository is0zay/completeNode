const chalk = require('chalk');
const { argv } = require('process');
const process = require('process');
const yargs = require('yargs');
const notes = require('./notes');

//customize yargs version
yargs.version('1.1.0');

// add, remove, read, list commands

// create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe:'Note body',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function (argv) {
		notes.addNote(argv.title,argv.body);
	}
});

// create remove command
yargs.command({
	command: 'remove',
	describe: 'Removing a note!',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function (argv) {
		notes.removeNote(argv.title);
	}
});

// create read command
yargs.command({
	command: 'read',
	describe: 'Read a note!',
	handler: function () {
		console.log(chalk.green('Reading a note!'))
	}
});

// create list command

yargs.command({
	command: 'list',
	describe: 'List the notes!',
	handler: function () {
		console.log(chalk.blue.inverse('Listing the notes!'))
	}
});

yargs.parse();