var canvas = document.getElementById("canvas1");
var dim = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw() {
  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 9; j++) {
      if (i >= 3 && i <= 5 && j >= 0 && j <= 2) {
        dim.beginPath();
        dim.lineWidth = 1;
        dim.strokeStyle = colourNameToHex("black");
        dim.fillStyle = colourNameToHex("white");
        dim.rect(50 + i * 20, 50 + j * 20, 19, 19);
        dim.stroke();
        dim.fill();
      } else if (i >= 3 && i <= 5 && j >= 6 && j <= 8) {
        dim.beginPath();
        dim.lineWidth = 1;
        dim.strokeStyle = colourNameToHex("black");
        dim.fillStyle = colourNameToHex("yellow");
        dim.rect(50 + i * 20, 50 + j * 20, 19, 19);
        dim.stroke();
        dim.fill();
      } else if (i >= 0 && i <= 2 && j >= 3 && j <= 5) {
        dim.beginPath();
        dim.lineWidth = 1;
        dim.strokeStyle = colourNameToHex("black");
        dim.fillStyle = colourNameToHex("red");
        dim.rect(50 + i * 20, 50 + j * 20, 19, 19);
        dim.stroke();
        dim.fill();
      } else if (i >= 3 && i <= 5 && j >= 3 && j <= 5) {
        dim.beginPath();
        dim.lineWidth = 1;
        dim.strokeStyle = colourNameToHex("black");
        dim.fillStyle = colourNameToHex("blue");
        dim.rect(50 + i * 20, 50 + j * 20, 19, 19);
        dim.stroke();
        dim.fill();
      } else if (i >= 6 && i <= 8 && j >= 3 && j <= 5) {
        dim.beginPath();
        dim.lineWidth = 1;
        dim.strokeStyle = colourNameToHex("black");
        dim.fillStyle = colourNameToHex("orange");
        dim.rect(50 + i * 20, 50 + j * 20, 19, 19);
        dim.stroke();
        dim.fill();
      } else if (i >= 9 && i <= 11 && j >= 3 && j <= 5) {
        dim.beginPath();
        dim.lineWidth = 1;
        dim.strokeStyle = colourNameToHex("black");
        dim.fillStyle = colourNameToHex("green");
        dim.rect(50 + i * 20, 50 + j * 20, 19, 19);
        dim.stroke();
        dim.fill();
      }
    }
  }
}
