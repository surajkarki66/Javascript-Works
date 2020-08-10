const colorBtn = document.querySelector(".color-btn");
const discoBtnOn = document.querySelector(".disco-btn-on");
const discoBtnOff = document.querySelector(".disco-btn-off");
const text = document.getElementById("text");
let interval = null;

// Event listener
colorBtn.addEventListener("click", colorChanger);
discoBtnOn.addEventListener("click", initDisco);
discoBtnOff.addEventListener("click", stopDisco);

// Functions
function disco() {
  const interval = setInterval(function () {
    var x = Math.round(Math.random() * 255);
    var y = Math.round(Math.random() * 255);
    var z = Math.round(Math.random() * 255);
    var bg = "background:rgb(" + x + ", " + y + ", " + z + ");";
    var element = document.querySelector("body");
    element.style = bg;
    text.textContent = "Colors: " + "RGB " + "(" + x + "," + y + "," + z + ")";
  }, 300);
  return interval;
}

function colorChanger() {
  var x = Math.round(Math.random() * 255);
  var y = Math.round(Math.random() * 255);
  var z = Math.round(Math.random() * 255);
  var bg = "background:rgb(" + x + ", " + y + ", " + z + ");";
  var element = document.querySelector("body");
  element.style = bg;
  text.textContent = "Colors: " + "RGB " + "(" + x + "," + y + "," + z + ")";
}

function initDisco() {
  discoBtnOff.style.backgroundColor = "";
  discoBtnOn.style.backgroundColor = "black";
  const i = disco();
  interval = i;
  discoBtnOn.removeEventListener("click", initDisco);
}

function stopDisco() {
  if (interval) {
    clearInterval(interval);
    discoBtnOn.style.backgroundColor = "";
    discoBtnOff.style.backgroundColor = "black";
    discoBtnOn.addEventListener("click", initDisco);
  }
}
