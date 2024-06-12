function setup() {
  createCanvas(400, 400);

  for (let y = 0; y <= height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(135, 206, 235), color(75, 0, 130), inter); 
    stroke(c);
    line(0, y, width, y);
  }

  let numCircles = 100;
  let spacing = 20;
  strokeWeight(1.5); 
  for (let i = 0; i < numCircles; i++) {
    let diameter = (numCircles - i) * spacing;
    noFill();
    stroke(255);
    ellipse(width / 2, height / 2, diameter, diameter);
  }
}