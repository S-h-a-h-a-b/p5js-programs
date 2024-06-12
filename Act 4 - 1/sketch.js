function setup() {
  createCanvas(400, 400);
  background(0,0,0);

  let circleSize = 60;
  let gap = 40;
  for (let y = 50; y <= height - 50; y += gap) {
    for (let x = 50; x <= width - 50; x += gap) {
      ellipse(x, y, circleSize, circleSize);
    }
  }
}
