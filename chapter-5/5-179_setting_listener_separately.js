
(function () {
    var x, y, cell;
    for (x = 0; x < 100; x++) {
        for (y = 0; y < 100; y++) {
            cell = document.getElementById("cell" + ("0" + x).substring(-2) + ("0" + y).substring(-2));
            cell.onmouseover = function () {
                this.style.backgroundColor = "#EEEEEE";
            };
            cell.onmouseover = function () {
                this.sytle.backgroundColor = "#FFFFFF";
            };
            cell.onclick = function () {
                alert(this.innerHTML);
            };
        }
    }
}());

