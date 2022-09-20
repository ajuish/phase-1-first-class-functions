function sayHi(greeting="Hello",name="Alex"){
    return `${greeting}, ${name}`
}

function receivesAFunction(callback){
    return `My name is James, ${callback()}`
}

function returnsANamedFunction(){
    return function greeting(name){
        return `Hello ${name}!`
    }
}

function returnsAnAnonymousFunction(){
    return x => x+2
}

console.log(receivesAFunction(sayHi))