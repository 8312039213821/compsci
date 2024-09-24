// drawing with loops
// Sami
// Sep 19, 2024



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  myBackground();
  myForeground();
}

function myBackground(){
  background(200);
}

function myForeground(){
  for(let x = 0; x < mouseX; x = x + 150){
    fill(0);
    circle(x, height/2, 75)
  }

  let starCount = 0;
  fill(255);
  while(starCount < 100){

    starCount++;
  }
}