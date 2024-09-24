// Project Title
// Sami
// September 16, 2024

let charx = 960, chary = 300;
let groundHeight = 950;
let Time = 0;
let scene = 0;
let sceneBlue = 0;
let sceneRed = 0;
let sceneGreen = 0;

function setup() {
  createCanvas(1920, 1080);
  noStroke()


}

function draw() {
  background(sceneRed, sceneGreen, sceneBlue);

  //hills
  //left hill
  fill(0, 150, 60);
  circle(700, groundHeight + 50, 500);
  //middle hill
  fill(0, 200, 80);
  circle(500, groundHeight + 100, 450);
  //right hill
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
  circle(charx + 100, chary, 160);
  //middle ball
  fill(250, 250, 250);
  circle(charx, chary, 250);
  //face
  fill(0, 0, 0);
  //right eye
  circle(charx + 45, chary - 20, 35);
  //left eye
  circle(charx - 45, chary - 20, 35);
  //mouth
  arc(charx, chary + 20, 100, 70, 0, PI );

  
  //interaction
  charx = mouseX;

  //increasing time with left click
  function mouseClicked(){
    scene = scene + 1;
  }
  
  //changing the background based on the time
  if(scene === 0){
    sceneRed = 0;
    sceneGreen = 200;
    sceneBlue = 255;
  }
  else if(scene === 1){
    sceneRed = 255;
    sceneGreen = 150;
    sceneBlue = 50;
  }
  else if(scene === 2){
    sceneRed = 0;
    sceneGreen = 200;
    sceneBlue = 255;
  }
  else if(scene === 3){
    sceneRed = 0;
    sceneGreen = 0;
    sceneBlue = 0;
  }
  
  
  
}
