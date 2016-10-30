
// With IIFE / Closure
(function () {
    var localVariable = "I'm not global";
}());


// With module
var myModule = (function () {
    var localVariable = "I'm an inside local variable";
    return {
        show: function () {
            alert(localVariable);
        }
    };
}());

myModule.show();



(function (window) {
    var localVariable = "I'm an inside local variable";

    window.myModule = {
        show: function () {
            alert(localVariable);
        }
    };
}(window));

myModule.show();
