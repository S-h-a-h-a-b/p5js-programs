function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400); 
  background("black");
  
  noStroke();
  fill("yellow");
  arc(150, 200, 50, 50, 225, 135);  
  
  fill("red");
  rect(200, 200, 50, 25); 
  ellipse(225, 200, 50, 50); 
  fill("white"); 
  ellipse(215, 195, 15, 15);
  ellipse(235, 195, 15, 15);
  fill("blue");
  ellipse(235, 195, 10, 10);
  ellipse(215, 195, 10, 10);
}