var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    console.log("Yessssssssssssss");
    icon.src = "./light.png";
  } else {
    console.log("Yessssssssssssss");
    icon.src = "./dark.png";
  }
};

function clearScreen() {
  document.getElementById("result").value = "";
}
function textview(value) {
  document.getElementById("result").value += value;
}
function calculate() {
  if((document.getElementById("result").value).indexOf("^")>-1){
    var base = (document.getElementById("result").value).slice(0, (document.getElementById("result").value).indexOf("^"));
    var exponent = (document.getElementById("result").value).slice((document.getElementById("result").value).indexOf("^") + 1);
    document.getElementById("result").value = eval("Math.pow(" + base + "," + exponent + ")");
  }
  else{
    var p = document.getElementById("result").value;
    document.getElementById("result").value =eval(p);
  }

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
function sin(){
  var p = document.getElementById("result").value;
  document.getElementById("result").value = Math.sin(p);
}
function cos(){
  var p = document.getElementById("result").value;
  document.getElementById("result").value = Math.cos(p);
}
function tan(){
  var p = document.getElementById("result").value;
  document.getElementById("result").value = Math.tan(p);
}
function log(){
  var p = document.getElementById("result").value;
  document.getElementById("result").value = Math.log10(p);
}

