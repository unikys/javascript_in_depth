<div id="spanningDiv" style="background-color:#EEEEEE; width: 100px"> This div will be increased
</div>
<script>
(function () {
var i,
element = document.getElementById("spanningDiv");
while (element.offsetWidth < 200) {
    element.style.width = (element.offsetWidth + 2) + "px";
}
}());
</script>


