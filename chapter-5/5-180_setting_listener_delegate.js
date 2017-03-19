
(function () {
    var wrapper = document.getElementById("tableWrapper");
    wrapper.addEventListener("mouseover", function () {
        var target = event.target || event.srcElement;
        if (target.id && target.id.indexOf("cell") > -1) {
            target.style.backgroundColor = "#EEEEEE";
        }
    }, true);
    wrapper.addEventListener("mouseout", function () {
        var target = event.target || event.srcElement;
        if (target.id && target.id.indexOf("cell") > -1) {
            target.style.backgroundColor = "#FFFFFF";
        }
    }, true);
    wrapper.addEventListener("click", function () {
        var target = event.target || event.srcElement;
        if (target.id && target.id.indexOf("cell") > -1) {
            alert(target.innerHTML);
        }
    }, true);
}());

