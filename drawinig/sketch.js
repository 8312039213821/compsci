// drawing
// Sami
// sep  13, 2024
//learning how to draw in javascript, alien drawing challenge

let headSize = 200;


function setup() {
  print("setup");
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNER);
  noStroke();
}

function draw() {
  let headX = windowWidth / 2;
  let headY = windowHeight / 2;

  background(220);  
  circle(headX, headY, headSize);
  rect(headX - headSize / 2, headY, headSize, headSize / 2);
  rect(headX - headSize / 2, headY + headSize / 2, headSize * .1 , headSize * .4);
  rect(headX + headSize * .4, headY + headSize / 2, headSize * .1 , headSize * .4);

  

 
}

