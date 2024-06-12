let trail = [];

function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  background(255);

  let newPosition = createVector(mouseX, mouseY);
  trail.push(newPosition);

  if (trail.length > 50) {
    trail.splice(0, 1); 
  }

  stroke(0);
  strokeWeight(5);
  noFill();
  beginShape();
  for (let i = 0; i < trail.length; i++) {
    let pos = trail[i];
    vertex(pos.x, pos.y);
  }
  endShape();
}
