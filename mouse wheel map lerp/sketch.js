// MouseWheel, Map ,Lerp
// Sami
// Sep 25, 2024

let x, y, d = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2; y = height/2;
  noFill();
}

function draw() {
  //background(220);

  x = lerp(x, mouseX, 0.20)
  y = lerp(y, mouseY, 0.20)

  let r = map(x, 0, width, 0, 255);
  let g = map(y, 0, height, 0, 255);
  let b = map(x, 0, height, 255, 0);
  stroke(r,g,b);

  circle(x, y, d)
}
