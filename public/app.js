let fs = require('fs');


fs.readFile('readMe.txt', 'utf8', function(err,data){
    fs.writeFile('writeMe.txt', data, function(err, result){
        if(err) {
            console.log('errir', err)
        }
    })
});

