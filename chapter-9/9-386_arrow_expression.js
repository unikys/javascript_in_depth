let myFunc = () => alert("This is a new function literal");
myFunc();

var myFuncES5 = function () {
    alert("This is a new function literal");
};
myFuncES5();



let paramFunc = (greetings, name) => {
    alert(greetings + " , " + name);
}
paramFunc("Hello", "World");


var paramFuncES5 = function (greetings, name) {
    alert(greetings + " , " + name);
}
paramFuncES5("Hello", "World");



