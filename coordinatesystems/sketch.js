// Cordinatesystems
// Sami
// sep  11, 2024
//looking at how coordinates work in java
// - describe what you did to take this project "above and beyond"

canvasWidth = 500
canvasHeight = 400

function setup() {
  print("setup")
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(220);
  drawcircles(50)

}

function drawcircles(circleSize){
  circle(0,0,circleSize);
  circle(0,canvasHeight,circleSize);
  circle(canvasWidth / 2,canvasHeight / 2,circleSize);
  circle(canvasWidth,0,circleSize);
  circle(canvasWidth,canvasHeight,circleSize);
}