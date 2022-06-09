//buttons
let qBtn = document.getElementById("Q");
let wBtn = document.getElementById("W");
let eBtn = document.getElementById("E");
let rBtn = document.getElementById("R");
let yBtn = document.getElementById("Y");
let uBtn = document.getElementById("U");
let iBtn = document.getElementById("I");
let oBtn = document.getElementById("o");

//canvas
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

// Functions
function clap() {
  //finds sounds and plays it
  document.getElementById("clap").play();
  document.getElementById("clap").currentTime = 0;
  //to draw the hit marker
  ctx.beginPath();
  //draws a circle and positions it
  ctx.arc(140, 50, 40, 0, 2 * Math.PI);
  //fills it with colour
  ctx.fillStyle = "#4ADF86";
  ctx.fill();
  //draws it on the canvas
  ctx.stroke();
  //timer to delete what is drawn on the canvas
  setTimeout(() => ctx.clearRect(0, 0, c.width, c.height), 100);
}

function hiHat() {
  document.getElementById("hiHat").play();
  document.getElementById("hiHat").currentTime = 0;
  ctx.beginPath();
  ctx.arc(70, 100, 40, 0, 2 * Math.PI);
  ctx.fillStyle = "#4ADF86";
  ctx.fill();
  ctx.stroke();
  setTimeout(() => ctx.clearRect(0, 0, c.width, c.height), 100);
}

function kick() {
  document.getElementById("kick").play();
  document.getElementById("kick").currentTime = 0;
  ctx.beginPath();
  ctx.arc(330, 300, 40, 0, 2 * Math.PI);
  ctx.fillStyle = "#4ADF86";
  ctx.fill();
  ctx.stroke();
  setTimeout(() => ctx.clearRect(0, 0, c.width, c.height), 100);
}

function openHat() {
  document.getElementById("openHat").play();
  document.getElementById("openHat").currentTime = 0;
  ctx.beginPath();
  ctx.arc(70, 150, 40, 0, 2 * Math.PI);
  ctx.fillStyle = "#4ADF86";
  ctx.fill();
  ctx.stroke();
  setTimeout(() => ctx.clearRect(0, 0, c.width, c.height), 100);
}

function ride() {
  document.getElementById("ride").play();
  document.getElementById("ride").currentTime = 0;
  ctx.beginPath();
  ctx.arc(400, 50, 40, 0, 2 * Math.PI);
  ctx.fillStyle = "#4ADF86";
  ctx.fill();
  ctx.stroke();
  setTimeout(() => ctx.clearRect(0, 0, c.width, c.height), 100);
}

function snare() {
  document.getElementById("snare").play();
  document.getElementById("snare").currentTime = 0;
  ctx.beginPath();
  ctx.arc(180, 240, 40, 0, 2 * Math.PI);
  ctx.fillStyle = "#4ADF86";
  ctx.fill();
  ctx.stroke();
  setTimeout(() => ctx.clearRect(0, 0, c.width, c.height), 100);
}

function tink() {
  document.getElementById("tink").play();
  document.getElementById("tink").currentTime = 0;
  ctx.beginPath();
  ctx.arc(270, 200, 40, 0, 2 * Math.PI);
  ctx.fillStyle = "#4ADF86";
  ctx.fill();
  ctx.stroke();
  setTimeout(() => ctx.clearRect(0, 0, c.width, c.height), 100);
}

function tom() {
  document.getElementById("tom").play();
  document.getElementById("tom").currentTime = 0;
  ctx.beginPath();
  ctx.arc(390, 180, 40, 0, 2 * Math.PI);
  ctx.fillStyle = "#4ADF86";
  ctx.fill();
  ctx.stroke();
  setTimeout(() => ctx.clearRect(0, 0, c.width, c.height), 100);
}

//plays sound when key is pressed
document.addEventListener("keydown", (e) => {
  if (e.key == "q") {
    clap();
  }
  if (e.key == "w") {
    hiHat();
  }
  if (e.key == "e") {
    kick();
  }
  if (e.key == "r") {
    openHat();
  }
  if (e.key == "y") {
    ride();
  }
  if (e.key == "u") {
    snare();
  }
  if (e.key == "i") {
    tink();
  }
  if (e.key == "o") {
    tom();
  }
});
