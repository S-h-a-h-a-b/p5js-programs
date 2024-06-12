function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(255, 255, 0); 
  ellipse(200, 200, 200, 200); 

  fill(255); 
  ellipse(150, 180, 50, 50); 
  ellipse(250, 180, 50, 50); 

  fill(0); 
  ellipse(150, 180, 20, 20); 
  ellipse(250, 180, 20, 20); 

  noFill(); 
  stroke(0); 
  strokeWeight(4); 
  arc(200, 240, 100, 80, 0, PI); 
}
