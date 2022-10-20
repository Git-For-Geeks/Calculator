var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "../light.png";
  } else {
    console.log("Yessssssssssssss");
    icon.src = "../dark.png";
  }
};

function clearScreen() {
  document.getElementById("result").value = "";
}
function textview(value) {
  document.getElementById("result").value += value;
}
function calculate() {
  var p = document.getElementById("result").value;
  document.getElementById("result").value = eval(p);
}

function returnback() {
  var value = document.getElementById("result").value;
  document.getElementById("result").value = value.substr(0, value.length - 1);
}
function round() {
  var p = document.getElementById("result").value;
  document.getElementById("result").value = Math.round(p);
}
function sqrt() {
  var p = document.getElementById("result").value;
  document.getElementById("result").value = Math.sqrt(p);
}
function reciprocal() {
  var p = document.getElementById("result").value;
  document.getElementById("result").value = 1 / p;
}
