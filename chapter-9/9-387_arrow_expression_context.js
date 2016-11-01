
var name = "Global"; function Person() {
    this.name = "Unikys"
    setTimeout(() => alert("My name is " + this.name), 100);
    setTimeout(function () {
        alert("Global name is " + this.name);
    }, 100);
}
var person = new Person();
