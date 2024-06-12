var img;
function preload(){
  img = loadImage("cat.jpg")
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  noTint()
  image(img,0,0,img.width, img.height);
  filter(INVERT)
  
}