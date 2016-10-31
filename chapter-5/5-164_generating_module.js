
(function (windows, undefined) {

    var _myLibrary = window.myLibrary;

    if (!_myLibrary) {
        _myLibrary = {};
    }
    if (!_myLibrary.unikys) {
        _myLibrary.unikys = {};
    }

    _myLibrary.unikys.sayHello = function () {
        alert("Hello, my name is Unikys"); 
    };

    window.myLibrary = _myLibrary;

}(window));

