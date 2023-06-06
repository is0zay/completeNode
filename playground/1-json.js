const fs = require('fs');
// const book = {
// 	title: 'Ego is the Enemey',
// 	author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);


// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const personJSON = dataBuffer.toString();
const person = JSON.parse(personJSON);
person.name = "Isaiah";
person.age = 23;

fs.writeFileSync('1-json.json', JSON.stringify(person));