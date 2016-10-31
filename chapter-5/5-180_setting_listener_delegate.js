
(function () {
    var wrapper = document.getElementById("tableWrapper");
    wrapper.addEventListener("mouseover", function () {
        if (this.id && this.id.indexOf("cell") > -1) {
            this.style.backgroundColor = "#EEEEEE";
        }
    }, true);
    wrapper.addEventListener("mouseout", function () {
        if (this.id && this.id.indexOf("cell") > -1) {
            this.style.backgroundColor = "#FFFFFF";
        }
    }, true);
    wrapper.addEventListener("click", function () {
        if (this.id && this.id.indexOf("cell") > -1) {
            alert(this.innerHTML);
        }
    }, true);
}());

