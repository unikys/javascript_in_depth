
(function () {
    var firstTimestamp = Date.now();
    window.requestAnimationFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            if (callback instanceof Function) {
                return setTimeout(function () {
                    callback.call(this, Date.now() - firstTimestamp);
                }, 1000 / 60);
            } else {
                return setTimeout(callback, 1000 / 60);
            }
        };
    window.cancelAnimationFrame = window.cancelAnimationFrame ||
        window.cancelRequestAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        function (timeId) {
            clearTimeout(timeId);
        };
}());
