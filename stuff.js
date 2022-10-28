let counter = function (arr){
    return 'there are ' + arr.length + ' elemnts in this array'
}

let adder = function (a,b){

    return `The sum of two numbers is ${a+b}`
}

let pi = 3.142; 


module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}

