//coolpuzzle thing
//Sami
//Oct 30, 2024

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,255,0,0,0],
                [255,255,255,0,0]];
let flipPattern = -1; // Start with cross as pattern repersented with a -1, square will be a 1

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  randomGrid(); // Randomize the starting board
}

function draw() {
  background(220);
  determineActiveSquare();
  drawGrid();
  checkWin(); // Check for win condition
  drawOverlay(); // Draw the overlay
}

function mousePressed() {
  if (keyIsDown(SHIFT)) {
    singleFlip(currentCol, currentRow); // Only flip the active square
  } else {
    normalFlip(currentCol, currentRow); // Flip based on the pattern
  }
}

function normalFlip(col, row) {
  if (flipPattern === -1) {
    singleFlip(col, row);
    if (col > 0) singleFlip(col - 1, row);
    if (col < NUM_COLS - 1) singleFlip(col + 1, row);
    if (row > 0) singleFlip(col, row - 1);
    if (row < NUM_ROWS - 1) singleFlip(col, row + 1);
  } else if (flipPattern === 1) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        singleFlip(col + i, row + j);
      }
    }
  }
}

function singleFlip(col, row) {
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
    gridData[row][col] = (gridData[row][col] === 0) ? 255 : 0;
  }
}

function determineActiveSquare() {
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function randomGrid() {
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      gridData[y][x] = random([0, 255]);
    }
  }
}

function checkWin() {
  let firstValue = gridData[0][0];
  let win = gridData.every(row => row.every(value => value === firstValue));
  if (win) {
    fill(255, 0, 255); // Bright purple for the win message, so its visable
    textSize(40);
    textAlign(CENTER);
    text("You Win!", width / 2, height / 2);
  }
}

function drawOverlay() {
  fill(255, 0, 0, 100); // Semi-transparent red
  if (flipPattern === 1) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        if (currentCol + i < NUM_COLS && currentRow + j < NUM_ROWS) {
          rect((currentCol + i) * rectWidth, (currentRow + j) * rectHeight, rectWidth, rectHeight);
        }
      }
    }
  } else if (flipPattern === -1) {
    if (currentCol < NUM_COLS && currentRow < NUM_ROWS) {
      rect(currentCol * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
      if (currentCol > 0) rect((currentCol - 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
      if (currentCol < NUM_COLS - 1) rect((currentCol + 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
      if (currentRow > 0) rect(currentCol * rectWidth, (currentRow - 1) * rectHeight, rectWidth, rectHeight);
      if (currentRow < NUM_ROWS - 1) rect(currentCol * rectWidth, (currentRow + 1) * rectHeight, rectWidth, rectHeight);
    }
  }
}

function keyPressed() {
  if (key === ' ') {
    flipPattern *= -1 //toggle for the space bar switching between cross and square
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
}
