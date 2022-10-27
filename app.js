function callFunction(fun){
    fun()
}

// function expression 

let sayBye = function(){
    console.log('bye')
}

callFunction(sayBye)