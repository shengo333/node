let events = require('events');


let util = require('util');


let Person = function(name){
    this.name = name
};


util.inherits(Person, events.EventEmitter)


var james  = new Person('james')
var mary  = new Person('mary')
var ryu  = new Person('ryu')


let people = [james, mary, ryu]


people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' + mssg)
    })
})


james.emit('speak', 'hey dudes')
ryu.emit('speak', 'hey dudes second time')