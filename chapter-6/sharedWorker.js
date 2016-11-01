(function () {
    var messages = {
        "doLargeLoop": function (port) {
            var i,
                sum = 0,
                start, end;
            port.postMessage("Worker thread: Starting large loop"); start = Date.now();

            for (i = 0 ; i < 10000000000 ; i++) {
                sum += i;
            }
            end = Date.now();
            port.postMessage(`Elapsed time(${((end - start) / 1000).toFixed(2)} sec, sum=${sum})`);
        },
        "getConnection": function (port) {
            port.postMessage(`${connection} connections are connected`);
        }
    },
    connection = 0;
    onconnect = function (e) {
        var port = e.ports[0]; connection++;
        port.onmessage = function (e) {
        if (messages.hasOwnProperty(e.data)) {
            messages[e.data](port);
        }
    };
    port.start(); };
}());
