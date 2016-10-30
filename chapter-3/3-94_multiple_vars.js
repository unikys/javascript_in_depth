(function () {
    var subjects = ["1st subject", "2nd subject", "3rd subject"];

    for (var i = 0 ; i < subjects.length ; i++) {
        var el = document.getElementById("subject" + i);
        el.innerHTML = el.value = subjects[i];
        el.addEventListener("click", function () {
            alert(this.value + " pressed!");
        });
    }

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://unikys.tistory.com/list/");
    xhr.onload = function () {
        var contents = JSON.parse(xhr.responseText);
        for (var i = 0 ; i < contents.length ; i++) {
            var el = document.getElementById("content" + i);
            el.innerHTML = contents[i];
        }
    };
}());
