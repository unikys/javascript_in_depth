
var property1 = "New",
    property2 = "Object literal",
    namedProperty = "Functionalities";

var mergedObject = {
    property1: property1,
    property2: property2,
    property3: namedProperty
};

console.log(mergedObject);

var newMergedObject = {
    property1,
    property2,
    property3: namedProperty
};
console.log(newMergedObject);


// Computable property names
var i = 0,
    newComputedProperty = {
        ["property" + ++i]: i,
        ["property" + ++i]: i,
        ["property" + ++i]: i
    };

console.log(newComputedProperty);

var j = 0,
    previousComputedProperty = {};

previousComputedProperty["property" + ++j] = j;
previousComputedProperty["property" + ++j] = j;
previousComputedProperty["property" + ++j] = j;
console.log(previousComputedProperty);


// get, set accessors
var newFunctionDefinition = {
    func() {
        alert("This is new definition");
    },
    _name: "Unikys",
    get name() {
        return this._name;
    },
    set name(name) {
        this._name = name;
    }
};


var previousFunctionDefinition = {
    func: function () {
        alert("This is the compatible definition");
    },
    _name: "Unikys"
};

Object.defineProperty(previousFunctionDefinition, "name", {
    get: function () {
        return this._name;
    },
    set: function (name) {
        this.name = _name;
    }
});

// __proto__ property
var car = {
    name: "Default",
    type: "Car",
    getName() {
        return this.name;
    }
}
var suvES6 = {
    __proto__: car,
    name: "My car",
    type: "SUV"
};
var suvES5 = Object.create(car, {
    name: {
        writable:true,
        configurable: true,
        value:"My car"
    },
    type: {
        writable: true,
        configurable: true,
        value: "SUV"
    }
});

var suvES5Other = Object.create(car);
suvES5Other.name = "My car";
suvES5Other.type = "SUV";


