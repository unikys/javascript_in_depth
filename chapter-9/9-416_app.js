import getURL, * from "module.js"
getJSON("/getJSON", function (json) {
    console.log(json);
});
getURL("/getURL", function (data) {
    console.log(data);
});

