(function () {
    sleep(5000);

    function sleep(waitMilliseconds) {
        var waitUntil = Date.now() + waitMilliseconds;
        while(Date.now() < waitUntil) {
            ;
        }
    }
}());
