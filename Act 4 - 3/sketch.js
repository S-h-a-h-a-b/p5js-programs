function setup() {
  createCanvas(400, 400);
  noLoop(); 
  background(255);

  let numCircles = 20; 
  let maxDiameter = width; 

  for (let i = numCircles; i > 0; i--) {
    let diameter = (i / numCircles) * maxDiameter;
    let colorValue = map(i, 0, numCircles, 0, 255);
    let alphaValue = map(i, 0, numCircles, 255, 50); 

    fill(colorValue, 100, 150, alphaValue); 
    noStroke();
    ellipse(width / 2, height / 2, diameter, diameter);
  }

  drawPattern();
}

function drawPattern() {
  let numLines = 36; 
  let angleStep = TWO_PI / numLines;
  let centerX = width / 2;
  let centerY = height / 2;
  let lineLength = width / 2;

  strokeWeight(2);
  stroke(255);

  for (let angle = 0; angle < TWO_PI; angle += angleStep) {
    let x1 = centerX + cos(angle) * lineLength;
    let y1 = centerY + sin(angle) * lineLength;
    line(centerX, centerY, x1, y1);
  }
}