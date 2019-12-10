function setup() {
  createCanvas(1280, 598);
}

function draw() {
  background(220);
  ellipse (mouseX,mouseY,20,20);
  text("mouseX: " + floor(mouseX) + ", mouseY: " + floor(mouseY), 40, 40);
}
