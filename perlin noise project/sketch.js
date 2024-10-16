// Perlin Noise Project
// Sami
// Oct 2, 2024

let cTime = 5;
let rectWidth = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
}

function draw() {
  background(220);
  stairCase();
  widthChanger();
  
}

function stairCase(){
  //loop that keeps making bars for the whole width of the window
  for(let x = 0; x < width; x += rectWidth){
    cTime+= .001;
    noFill();
    let rectHeight = noise(cTime);
    rectHeight = map(rectHeight, 0, 1, 0, height)
    rect(x, height, rectWidth, -rectHeight)
  }
}

function widthChanger(){
  if(keyIsPressed && keyCode === LEFT_ARROW){
    rectWidth /= 1.5;
    print("a")
  }
  else if(keyIsPressed && keyCode === RIGHT_ARROW){
    rectWidth *= 1.5;
  }
}