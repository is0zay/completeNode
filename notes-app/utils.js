const { Module } = require("module");

console.log('utils.js');

const name = 'Zay';

const add = (a,b) => {
	return a+b;
};

module.exports = add;