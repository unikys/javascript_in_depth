let myObject = {
    name: "unikys",
    say() {
        alert("My name is " + this.name);
    }
};

myObject.say();
const constString = "This is a constant";
constString = "This will raise an error"; // Error!

