function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  rectMode(CENTER)
  rotate(25)
  fill('lightblue')
  stroke('grey')
  push()
  strokeWeight('3')
  pop()
  translate(200,200)
  rect(0,0,60,70)
  
  fill('pink')
  stroke('black')
  strokeWeight('2')
  translate(-50,30)
  rotate(45)
  arc(50, 100, 80, 80, 0, PI + QUARTER_PI, PIE);
  
  fill('grey')
  stroke('white')
  strokeWeight('3')
  translate(50,-40)
  triangle(30, 75, 58, 20, 86, 75);
  
  stroke('purple')
  line(-190, 10, -110, 200);
}
