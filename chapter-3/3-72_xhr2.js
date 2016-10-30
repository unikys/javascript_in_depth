(function () {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "http://unikys.tistory.com/api");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
}());
