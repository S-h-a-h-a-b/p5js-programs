var img, x,y;
function preload () {
  img = loadImage('cat.jpg');
}


function setup() {
  createCanvas (600, 600);
}


function draw() {
  background (220);
  x = mouseX;
  y = mouseY;
  image(img,0,0,img.width, img.height);
  var c = get(x,y);
  fill(c);
  ellipse(x,y,70,70);
  }
  