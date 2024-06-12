let bird;
let pipes;
let isGameOver = false;
let hasGameBegun = false; 
let score = 0;
let arcadeFont;

let minDistanceBetweenPipes;
let nextSpawnDistance;



function setup() {
  createCanvas(700, 500);
  minDistanceBetweenPipes = width / 3;
   
  resetGame();
  
  noLoop(); 
}

class Pipe {
  constructor() {
    this.x = width;
    this.width = 20;
    this.speed = 5;
    let minimumPipeGap = 140;
    
    // pipes have two parts, a top pipe and a bottom pipe
    // the gap controls how big the gap is between the two pipes
    // (and thus, the pipe height themselves)
    let gap = random(minimumPipeGap, height/3);
    this.topHeight = random(0, height - gap);
    this.bottomHeight = height - (this.topHeight + gap);
    
    // true if the pipe is completely past the bird
    this.pastBird = false; 
  }
  
  checkIfHitsBird(bird){
    // returns true if pipe hits bird, false otherwise
    if((bird.x + bird.width > this.x && bird.x < this.x + this.width) &&
       (bird.y < this.topHeight || (bird.y + bird.height) > (height - this.bottomHeight))){
      return true; 
    }
    return false;
  }
  
  checkIfPastBird(bird){
    // returns true if pipe passes bird, false otherwise
    // also sets the this.pastBird member variable
    this.pastBird = bird.x > this.x + this.width;
    return this.pastBird;
  }
  
  update(){
    // pipes always go from right to left
    this.x -= this.speed; 
  }
  
  draw(){
    fill(0);
    rect(this.x, 0, this.width, this.topHeight);
    rect(this.x, height - this.bottomHeight, this.width, this.bottomHeight);
  }
}

class Bird {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 10;
    this.angle = 0;
    this.flapStrength = 15;

    this.gravity = 0.9;
    this.velocity = 0; //only one dimensional velocity (y axis)
  }
  
  flap(){
    this.velocity += -this.flapStrength;   
  }

  update() {
    this.velocity += this.gravity;
    this.velocity *= 0.9; // some air resistance
    this.y += this.velocity;

    if (this.y + this.height > height) {
      // hit the bottom of the screen
      this.y = height - this.height;
      this.velocity = 0;
    } else if (this.y < 0) {
      // hit the top of the screen
      this.y = 0;
      this.velocity = 0;
    }
    
    // set angle based on upward / downward velocity
    // this implementation idea came from: https://mdbrim.github.io/flappy/index.html
    this.angle = map(this.velocity, -10, 20, -0.7, 0.7);  
    if(this.velocity == 0){
      this.angle = 0; 
    }
  }

  draw() {
    push();
      translate(this.x, this.y);
      rotate(this.angle);
      fill(0);
      rect(0, 0, this.width, this.height);
    pop();
  }
}

function resetGame(){
  score = 0;
  isGameOver = false; 
  
  bird = new Bird(64, height / 2);
  pipes = [new Pipe()];
  nextSpawnDistance = random(minDistanceBetweenPipes, width - width/4);
  loop();
}

function draw() {
  background(220);
  
  if(pipes.length <= 0 || width - pipes[pipes.length - 1].x >= nextSpawnDistance){
    pipes.push(new Pipe()); 
    nextSpawnDistance = random(minDistanceBetweenPipes, width - width/5);
  }
  
  for(let i = pipes.length - 1; i >= 0; i--){
    pipes[i].update();
    pipes[i].draw();
    
    if(pipes[i].checkIfHitsBird(bird)){
      isGameOver = true;
      noLoop(); 
    }
    
    if(pipes[i].pastBird === false && pipes[i].checkIfPastBird(bird)){
      score++;
    }
    
    if(pipes[i].x + pipes[i].width < 0){
      pipes.splice(i, 1); 
    }
  }
  
  bird.update();
  bird.draw(); 
  drawScore();
}

function drawScore() {

  fill(0);
  textAlign(LEFT);
  textSize(15);
  text('Score:' + score, 10, 20);

  if (isGameOver) {

    // dark overlay
    fill(0, 0, 0, 100);
    rect(0, 0, width, height);

    // draw game over text
    textAlign(CENTER);
    textSize(35);
    fill(255);
    text('GAME OVER!', width / 2, height / 3);
    
    textSize(12);
    text('Press SPACE BAR to play again.', width / 2, height / 2);
  }else if(hasGameBegun == false){
    
    fill(0, 0, 0, 100);
    rect(0, 0, width, height);

    textAlign(CENTER);
    textSize(15);
    fill(255);
    text('Press SPACE BAR to play!', width / 2, height / 3);
  }
 
}

function keyPressed(){
  if (key == ' '){ 
    bird.flap();
  }
  
  if (isGameOver == true && key == ' ') {
    resetGame();
  }else if(hasGameBegun == false && key == ' '){
    hasGameBegun = true;
    loop();
  }
  
}