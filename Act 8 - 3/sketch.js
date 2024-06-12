let data;
let values;
let labels;
let t = 0;

function preload() {
  data = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(700, 600);
  values = data.getColumn("Mass (Tt)");
  labels = data.getColumn("Component");
}

function draw() {
  background(255);

  stroke(0);
  line(50, 50, 50, height - 50);

  line(50, height - 50, width - 50, height - 50);

  textSize(12);
  textAlign(RIGHT, CENTER);
  for (let i = 0; i <= 40; i += 5) {
    let y = map(i, 0, 40, height - 50, 50);
    noStroke();
    fill(0);
    text(i, 40, y);
    stroke(200);
    line(50, y, width - 50, y);
  }

  translate(50, 0);

  for (let i = 0; i < values.length; i++) {
    noStroke();
    fill(54, 69, 79);
    rect(i * 27 + 10, height - 50, 20, -values[i] * t);

    push();
    translate(i * 27 + 20, height - 50 - values[i] * t - 10);
    rotate(radians(-45));
    fill(52, 52, 52);
    textAlign(LEFT, CENTER);
    text(labels[i], 0, 0);
    pop();
  }

  push();
  translate(-40, height / 2);
  rotate(radians(-90));
  textAlign(CENTER, CENTER);
  textSize(16);
  fill(0);
  text("Mass (Tt)", 0, 0);
  pop();

  textAlign(CENTER, CENTER);
  textSize(16);
  fill(0);
  text("Component", width / 3, height - 20);

  if (t < 40) {
    t = t + 1;
  }
}
