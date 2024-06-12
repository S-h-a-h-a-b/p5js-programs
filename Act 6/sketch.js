let particles_a = [];
let particles_b = [];
let particles_c = [];
let nums = 200;
let noiseScale = 800;
let logo;
let sound;
let fft;
let amplitude;
let logoSize = 180;

function preload() {

  logo = loadImage('meta.png'); 
  sound = loadSound('Aria math.mp3'); 
}

function setup(){
	createCanvas(750, 750);
	background(255, 255, 255);
	width = 1024;
	height = 768;
  background(0)
	for(var i = 0; i < nums; i++){
		particles_a[i] = new Particle(random(0, width),random(0,height));
		particles_b[i] = new Particle(random(0, width),random(0,height));
		particles_c[i] = new Particle(random(0, width),random(0,height));
	}
	

  fft = new p5.FFT();
  amplitude = new p5.Amplitude();
  sound.loop();
}

function draw(){
  background(0, 100);  
  filter(BLUR, 2); 

  smooth();
  noStroke();
  
  for(let i = 0; i < nums; i++){
    let radius = map(i, 0, nums, 1, 2);
    let alpha = map(i, 0, nums, 0, 250);

    fill(255, 41, 86, alpha);
    particles_a[i].move();
    particles_a[i].display(radius, 2);
    particles_a[i].checkEdge();

    fill(0, 0, 255, alpha);
    particles_b[i].move();
    particles_b[i].display(radius);
    particles_b[i].checkEdge();

    fill(0, 183, 208, alpha);
    particles_c[i].move();
    particles_c[i].display(radius);
    particles_c[i].checkEdge();
  } 
  
  let spectrum = fft.analyze();
  let audioLevel = amplitude.getLevel();
  let maxRadius = 300;
  
  stroke(255);
  noFill();
  for (let i = 0; i < 5; i++) {
    let r = map(audioLevel, 0, 1, 100, maxRadius) * (i + 1);
    ellipse(width / 2.8, height / 2, r, r);
  }
  
  let wave = fft.waveform();
  beginShape();
  stroke(27, 41, 180);
  strokeWeight(2);
  for (let i = 0; i < wave.length; i++) {
    let angle = map(i, 0, wave.length, 0, TWO_PI);
    let r = map(wave[i], -1, 1, logoSize / 2, maxRadius);
    let x = width / 2.8 + r * cos(angle);
    let y = height / 2 + r * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);
  
  // Draw the logo in the center
  imageMode(CENTER);
  image(logo, width / 2.8, height / 2, logoSize, logoSize);
}

function Particle(x, y){
	this.dir = createVector(0, 0);
	this.vel = createVector(0, 0);
	this.pos = createVector(x, y);
	this.speed = 0.4;

	this.move = function(){
		var angle = noise(this.pos.x/noiseScale, this.pos.y/noiseScale)*TWO_PI*noiseScale;
		this.dir.x = cos(angle);
		this.dir.y = sin(angle);
		this.vel = this.dir.copy();
		this.vel.mult(this.speed);
		this.pos.add(this.vel);
	}

	this.checkEdge = function(){
		if(this.pos.x > windowWidth || this.pos.x < 0 || this.pos.y > windowHeight || this.pos.y < 0){
			this.pos.x = random(50, windowWidth);
			this.pos.y = random(50, windowHeight);
		}
	}
	
	this.display = function(r){
		ellipse(this.pos.x, this.pos.y, r, r);
	}
}
