let http = require('http');

let fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');

myReadStream.on('data', function(chunk){
    console.log('new chunk recieved')
    console.log(chunk)
})