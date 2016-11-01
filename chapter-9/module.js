export function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
        callback(JSON.parse(this.responseText));
    };
    xhr.send();
}

export default function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
        callback(this.responseText);
    };
    xhr.send();
}
