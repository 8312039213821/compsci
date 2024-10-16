// Drawing with Nested loops
// Sami
// Oct 9, 2024

let gridSpacing = 40;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  renderGrid();
}

function roundDist(x1, y1, x2, y2){
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(sq(a) + sq(b));
  return round(c);
}

function renderGrid(){
  for (let x = 0; x <= width; x += gridSpacing) {
    for (let y = 0; y <= height; y += gridSpacing) {
      let d = roundDist(x, y, mouseX, mouseY);
      circle(x,y,gridSpacing)

      text(d, x, y);
    }
  }
}
