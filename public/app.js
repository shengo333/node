let http = require('http');

let fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', function(chunk){
    console.log('new chunk recieved')
    myWriteStream.write(chunk)
})