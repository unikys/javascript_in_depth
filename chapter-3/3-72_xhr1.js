var element = document.getElementById("div"),
    button = document.getElementById("button"),

xhr = new XMLHttpRequest();
button.onclick = function () {
    xhr.open("GET", "http://unikys.tistory.com/");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            element.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
};
