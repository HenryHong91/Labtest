function add(x,y){
    return x + y
}



function devide(a,b){
    return a/b
}


            
function subtract(x,y){
    return x-y
}


function multiple (x,y){
    return x * y
}

function discount (x,y){
    return ((x +10)+y); 
}

console.log(discount(5,10))

console.log(add(2,4))
console.log(devide(4,2))
console.log(subtract(5,1))
console.log(multiple(5,5))


var Sentiment = require('sentiment');
var Sentiment = new Sentiment();
var result = Sentiment.analyze('I\'m testing now');

console.dir(result);