
Object.create = function (o) {
    function F() {}
    F.prototype = o;
    return new F();
}

