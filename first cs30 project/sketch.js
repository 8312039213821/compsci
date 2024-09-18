// Project Title
// Sami
// September 16, 2024

let charx = 960, chary = 300;
let groundHeight = 950;

function setup() {
  createCanvas(1920, 1080);
  noStroke()


}

function draw() {
  background(0, 175, 255);

  //hills
  //leftmost hill
  fill(0, 150, 60);
  circle(700, groundHeight + 50, 500);
  //2nd leftmost hill
  fill(0, 200, 80);
  circle(500, groundHeight + 100, 450);
  //3rd leftmost hill
  fill(0, 150, 60);
  ellipse(1400, groundHeight + 50, 350, 600);

  //sun
  fill(255, 255, 0);
  circle(200, 200, 300);
  
  //ground
  fill(0, 250, 100);
  rect(0, groundHeight, 1920, 1080);

  //character (cloud)
  //left ball
  fill(200, 200, 200);
  circle(charx - 100, chary + 20, 180);
  //right ball
  fill(200, 200, 200);
  circle(charx, chary, 200);
  //middle ball
  fill(250, 250, 250);
  circle(charx, chary, 250);
  

}
