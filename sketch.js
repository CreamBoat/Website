var canvas1 = getElementById("#main-canvas");
var ctx = canvas.getContext("2d");

function draw() {
  background(220);
  ellipse (mouseX,mouseY,20,20);
  text("mouseX: " + floor(mouseX) + ", mouseY: " + floor(mouseY), 40, 40);
  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 9; j++) {
      if (i >= 3 && i <= 5 && j >= 0 && j <= 2) {
        ctx.fillrect(100 + i * 20, 200 + j * 20, 20, 20);
      } else if (i >= 3 && i <= 5 && j >= 6 && j <= 8) {
        ctx.fillrect(100 + i * 20, 200 + j * 20, 20, 20);
      } else if (i >= 0 && i <= 2 && j >= 3 && j <= 5) {
        ctx.fillrect(100 + i * 20, 200 + j * 20, 20, 20);
      } else if (i >= 3 && i <= 5 && j >= 3 && j <= 5) {
        ctx.fillrect(100 + i * 20, 200 + j * 20, 20, 20);
      } else if (i >= 6 && i <= 8 && j >= 3 && j <= 5) {
        ctx.fillrect(100 + i * 20, 200 + j * 20, 20, 20);
      } else if (i >= 9 && i <= 11 && j >= 3 && j <= 5) {
        ctx.fillrect(100 + i * 20, 200 + j * 20, 20, 20);
      }
    }
  }
}
