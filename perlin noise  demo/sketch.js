// Perlin Noise Demo
// Sami
// Sep 27, 2024

let cTime = 5;
let cInterval = .01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  background(220);
  line(width/2, 0, width/2, height);

  randomCircle();
  perlinCircle();
  staircase();

}

function perlinCircle(){
  let cSize = noise(cTime);
  cSize = map(cSize, 0, 1, 10, 200)
  circle(width * .75, height/2, cSize)
  text(round(cSize), width*.75, height/2)
  cTime += cInterval;

}

function randomCircle(){
  let cSize = random(10, 200);

  fill(cSize, 255- cSize, cSize/2)
  circle(width*.25, height/2, cSize)
  textAlign(CENTER, CENTER);
  textSize(30);
  text(round(cSize), width/4, height/2)

}

function staircase(){
  //randomSeed(34);
  for(let x = 0; x < width; x += 20){
    noFill();
    let rectHeight = random(50,500);
    rect(x, height, 20, -rectHeight)
  }

}