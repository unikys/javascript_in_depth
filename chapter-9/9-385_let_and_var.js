if (true) {
    var varVariable = 1;
    let letVariable = 2;
}

console.log(varVariable); // === 1
console.log(letVariable); // Uncaught Reference Error

let myArray = [0,1,2,3,4,5],
    length = myArray.length;

for (let i = 0 ; i < length ; i++) {
    if (myArray[i] > 3) {
        break;
    }
}
console.log(myArray[i]);


var duplicatedName = "This is with var";
var duplicatedName = "No problem";
let duplicatedName = "Syntax error will be raised"; // Error

