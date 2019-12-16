var solveButton = function(w, h, can) {
  for (var i = -6; i < 6; i++) {
    for (var j = -4.5; j < 4.5; j++) {
      if (i >= -3 && i <= -1 && j >= -4.5 && j <= -2.5) {
        can.beginPath();
        can.lineWidth = 2;
        can.strokeStyle = colourNameToHex("black");
        can.fillStyle = colourNameToHex("white");
        can.rect(w/2 + i * 40, h/2.2 + j * 40, 38, 38);
        can.stroke();
        can.fill();
      } else if (i >= -3 && i <= -1 && j >= 1.5 && j <= 3.5) {
        can.beginPath();
        can.lineWidth = 2;
        can.strokeStyle = colourNameToHex("black");
        can.fillStyle = colourNameToHex("yellow");
        can.rect(w/2 + i * 40, h/2.2 + j * 40, 38, 38);
        can.stroke();
        can.fill();
      } else if (i >= -6 && i <= -4 && j >= -1.5 && j <= 0.5) {
        can.beginPath();
        can.lineWidth = 2;
        can.strokeStyle = colourNameToHex("black");
        can.fillStyle = colourNameToHex("red");
        can.rect(w/2 + i * 40, h/2.2 + j * 40, 38, 38);
        can.stroke();
        can.fill();
      } else if (i >= -3 && i <= -1 && j >= -1.5 && j <= 0.5) {
        can.beginPath();
        can.lineWidth = 2;
        can.strokeStyle = colourNameToHex("black");
        can.fillStyle = colourNameToHex("blue");
        can.rect(w/2 + i * 40, h/2.2 + j * 40, 38, 38);
        can.stroke();
        can.fill();
      } else if (i >= 0 && i <= 2 && j >= -1.5 && j <= 0.5) {
        can.beginPath();
        can.lineWidth = 2;
        can.strokeStyle = colourNameToHex("black");
        can.fillStyle = colourNameToHex("orange");
        can.rect(w/2 + i * 40, h/2.2 + j * 40, 38, 38);
        can.stroke();
        can.fill();
      } else if (i >= 3 && i <= 5 && j >= -1.5 && j <= 0.5) {
        can.beginPath();
        can.lineWidth = 2;
        can.strokeStyle = colourNameToHex("black");
        can.fillStyle = colourNameToHex("green");
        can.rect(w/2 + i * 40, h/2.2 + j * 40, 38, 38);
        can.stroke();
        can.fill();
      }
    }
  }
};
