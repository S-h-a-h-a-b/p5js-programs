function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let centerX = width / 2;
  let centerY = height / 3;

  fill(255, 204, 0);
  ellipse(centerX, centerY, 80, 80);
  
  fill(0);
  ellipse(centerX - 20, centerY - 10, 20, 20);
  ellipse(centerX + 20, centerY - 10, 20, 20);
  
  stroke(0);
  strokeWeight(2);
  noFill();
  arc(centerX, centerY + 10, 40, 20, 0, PI);
  
  fill(0, 102, 204);
  rect(centerX - 30, centerY + 40, 60, 80);
  
  strokeWeight(5);
  line(centerX - 40, centerY + 50, centerX - 70, centerY + 100);
  line(centerX + 40, centerY + 50, centerX + 70, centerY + 100);
  
  line(centerX - 20, centerY + 120, centerX - 30, centerY + 160);
  line(centerX + 20, centerY + 120, centerX + 30, centerY + 160);
}
