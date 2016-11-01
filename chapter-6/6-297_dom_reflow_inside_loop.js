

var i,
    tags = document.getElementByTagName("div"),
    length = tags.length;

for (i = 0 ; i < length ; i++) {
    console.log(tags[i].offsetWidth + " , " tags[i].clientHeight);
}
