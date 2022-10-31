let fs = require('fs');


let readMe = fs.readFileSync('readMe.txt', 'utf8');

fs.writeFileSync('writeMe.txt', readMe)

console.log(readMe)

//code