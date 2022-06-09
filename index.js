let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

//plays sound when Q is pressed
document.addEventListener("keydown", (e) => {
  if (e.key == "q") {
    document.getElementById("clap").play();
    document.getElementById("clap").currentTime = 0;
    ctx.beginPath();
    ctx.arc(140, 50, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#4ADF86";
    ctx.fill();
    ctx.stroke();
    setTimeout(() => ctx.clearRect(0, 0, c.width, c.height), 100);
  }
});

//plays sound when W is pressed
document.addEventListener("keydown", (e) => {
  if (e.key == "w") {
    document.getElementById("hiHat").play();
    document.getElementById("hiHat").currentTime = 0;
    ctx.beginPath();
    ctx.arc(70, 100, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#4ADF86";
    ctx.fill();
    ctx.stroke();
    setTimeout(() => ctx.clearRect(0, 0, c.width, c.height), 100);
  }
});

//plays sound when E is pressed
document.addEventListener("keydown", (e) => {
  if (e.key == "e") {
    document.getElementById("kick").play();
    document.getElementById("kick").currentTime = 0;
    ctx.beginPath();
    ctx.arc(330, 300, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#4ADF86";
    ctx.fill();
    ctx.stroke();
    setTimeout(() => ctx.clearRect(0, 0, c.width, c.height), 100);
  }
});

//plays sound when R is pressed
document.addEventListener("keydown", (e) => {
  if (e.key == "r") {
    document.getElementById("openHat").play();
    document.getElementById("openHat").currentTime = 0;
    ctx.beginPath();
    ctx.arc(70, 150, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#4ADF86";
    ctx.fill();
    ctx.stroke();
    setTimeout(() => ctx.clearRect(0, 0, c.width, c.height), 100);
  }
});

//plays sound when Y is pressed
document.addEventListener("keydown", (e) => {
  if (e.key == "y") {
    document.getElementById("ride").play();
    document.getElementById("ride").currentTime = 0;
    ctx.beginPath();
    ctx.arc(400, 50, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#4ADF86";
    ctx.fill();
    ctx.stroke();
    setTimeout(() => ctx.clearRect(0, 0, c.width, c.height), 100);
  }
});

//plays sound when U is pressed
document.addEventListener("keydown", (e) => {
  if (e.key == "u") {
    document.getElementById("snare").play();
    document.getElementById("snare").currentTime = 0;
    ctx.beginPath();
    ctx.arc(180, 240, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#4ADF86";
    ctx.fill();
    ctx.stroke();
    setTimeout(() => ctx.clearRect(0, 0, c.width, c.height), 100);
  }
});

//plays sound when I is pressed
document.addEventListener("keydown", (e) => {
  if (e.key == "i") {
    document.getElementById("tink").play();
    document.getElementById("tink").currentTime = 0;
    ctx.beginPath();
    ctx.arc(270, 200, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#4ADF86";
    ctx.fill();
    ctx.stroke();
    setTimeout(() => ctx.clearRect(0, 0, c.width, c.height), 100);
  }
});

//plays sound when O is pressed
document.addEventListener("keydown", (e) => {
  if (e.key == "o") {
    document.getElementById("tom").play();
    document.getElementById("tom").currentTime = 0;
    ctx.beginPath();
    ctx.arc(390, 180, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#4ADF86";
    ctx.fill();
    ctx.stroke();
    setTimeout(() => ctx.clearRect(0, 0, c.width, c.height), 100);
  }
});
