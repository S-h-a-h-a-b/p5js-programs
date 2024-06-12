let mic;
let fft;

function setup() {
  createCanvas(600, 400);

  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(0);

  let waveform = fft.waveform();

  noFill();
  beginShape();
  stroke(255); 
  strokeWeight(2);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, 0, height);
    vertex(x, y);
  }
  endShape();

  fill(255);
  noStroke();
  textAlign(CENTER);
  text('Sing or speak into the microphone', width / 2, height - 20);
}

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}
