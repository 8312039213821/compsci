// events
// Sami
// sep  12, 2024
//
// - describe what you did to take this project "above and beyond"


function setup() {
  print("setup")
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  position = mouseX + ", " + mouseY;
  text(position, windowWidth/2, windowHeight / 2)
}

