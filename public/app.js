let http = require('http');

let fs = require('fs');




var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');

    myReadStream.pipe(res)
})


server.listen(3000, '127.0.0.1')
console.log('yo dawgs, now listening to port 3000')