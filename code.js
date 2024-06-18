var button = document.getElementById("mybutton");
console.log(button);
button.addEventListener("click", function () {
  var box = document.getElementById("Box");
  box.style.backgroundColor = getRandomColor();
});
function getRandomColor() {
  var r = Math.random() * 256;
  var g = Math.random() * 256;
  var b = Math.random() * 256;
  return "rgb(" + r + "," + g + "," + b + ")";
}
/*
var buttons = document.querySelectorAll("button");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        var box = document.getElementById("Box");
        box.style.backgroundColor = "red";
    });
});*/
