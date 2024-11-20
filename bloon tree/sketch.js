let scale = 30; // Increase scale to make the tree bigger
let den;
let leafDepthLimit = 5; // Default limit for leaf drawing

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);

  // Calculate the starting Y position such that the trunk touches the bottom
  let trunkHeight = scale * 6; // Trunk length (scale * depth)
  let startingY = height - trunkHeight; // Start the tree from here

  // Draw tree from the center of the canvas, with adjusted starting Y
  drawTree(width / 2, startingY, 90, 6);
}

function drawLine(x1, y1, x2, y2, depth, maxDepth) {
  // Set branch color
  stroke(0); // Black color for the branches

  // Make branches thicker near the trunk (higher depth)
  let thickness = map(depth, 0, maxDepth, 1, 12); // Scale thickness from 1 (thin) to 10 (thick)
  strokeWeight(thickness);

  // Draw the branch
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth, maxDepth = depth) {
  if (depth > 0) {
    let x2 = x1 + cos(radians(angle)) * depth * scale; // Calculate endpoints of current branch
    let y2 = y1 - sin(radians(angle)) * depth * scale; // Using trig ratios. Get shorter based on depth

    drawLine(x1, y1, x2, y2, depth, maxDepth);
    den = map(mouseX, 0, width, 5, 50);

    // For a 2-branch tree:
    drawTree(x2, y2, angle - den, depth - 1, maxDepth);
    drawTree(x2, y2, angle + den, depth - 1, maxDepth);
    // 3rd branch
    drawTree(x2, y2, angle, depth - 1, maxDepth);

    // Draw leaves if the depth is below the leafDepthLimit (x, and z adding or removing leaves)
    if (depth < leafDepthLimit) {
      drawLeaf(x2, y2, depth);
    }
  }
}

function drawLeaf(x, y, depth) {
  // Set the seed for the random values based on the leaf's position (x, y)
  randomSeed(x * y * depth); // A combination of position and depth as the seed
  
  // Set random color for the leaf
  fill(random(100, 255), random(100, 255), random(100, 255));
  noStroke();

  // Generate random size based on depth
  let size = random(15, 50 - depth * 3); // Increased size range

  // Draw the balloon/leaf
  ellipse(x, y, size, size);
}


function keyPressed() {
  // Increase leaf depth limit with 'x'
  if (key === 'x') {
    leafDepthLimit = min(leafDepthLimit + 1, 6); // Maximum limit is 6 (all branches)
  }

  // Decrease leaf depth limit with 'z'
  if (key === 'z') {
    leafDepthLimit = max(leafDepthLimit - 1, 0); // Minimum limit is 0 (no leaves)
  }
}
