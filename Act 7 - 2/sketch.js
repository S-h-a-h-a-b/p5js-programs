let song;
let fft;

function preload() {
  song = loadSound('sound.mp3',loaded);
}

function loaded() {
  song.loop();
}

function setup() {
  createCanvas(600, 400);

  fft = new p5.FFT();

  song.play();
}

function draw() {
  background(0);

  if (song.isPlaying()) {
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
  } 
}
