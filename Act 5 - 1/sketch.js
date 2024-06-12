function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  let r = sin(frameCount * 0.05) * 127 + 128;
  let g = sin(frameCount * 0.05 + PI / 3) * 127 + 128;
  let b = sin(frameCount * 0.05 + 2 * PI / 3) * 127 + 128;

  fill(r, g, b, 150);
  noStroke();
  
  ellipse(mouseX, mouseY, 40, 40);
}

function mousePressed() {
  background(255);
}