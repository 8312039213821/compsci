// Project Title
// Sami
// September 16, 2024

let charx = 960, chary = 300;
let groundHeight = 950;
let Time = 0;
let scene = 0;
let sceneBlue, sceneRed, sceneGreen;
let sunRed, sunBlue, sunGreen;
let sunX, sunY;

function setup() {
  createCanvas(1920, 1080);
  noStroke()
}

function draw() {
  background(sceneRed, sceneGreen, sceneBlue);

  //sun
  fill(sunRed, sunGreen, sunBlue);
  circle(sunX, sunY, 300);

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
  
  //ground
  fill(0, 250, 100);
  rect(0, groundHeight, 1920, 1080);
  

  //changing the background based on the time
  if(scene === 0){
    sceneRed = 0;
    sceneGreen = 200;
    sceneBlue = 255;

    sunRed = 255;
    sunGreen = 255;
    sunBlue = 0;

    sunX = 200;
    sunY = 200;
  }
  else if(scene === 1){
    sceneRed = 255;
    sceneGreen = 200;
    sceneBlue = 255;

    sunRed = 255;
    sunGreen = 200;
    sunBlue = 0;

    sunX = 1700;
    sunY = 700;
  }
  else if(scene === 2){
    sceneRed = 255;
    sceneGreen = 255;
    sceneBlue = 255;

    sunRed = 255;
    sunGreen = 255;
    sunBlue = 0;

    sunX = 3000;
    sunY = 3000;
  }
  else if(scene === 3){
    sceneRed = 0;
    sceneGreen = 0;
    sceneBlue = 0;

    sunRed = 255;
    sunGreen = 255;
    sunBlue = 255;

    sunX = 200;
    sunY = 200;

    //making cresent by overlaying circle with another circle
    fill(0, 0, 0)
    circle(sunX * .7, sunY * .7, 300)

  }
  
  //making sure that scene will not go above 4
  if(scene >= 4){
    scene = 0;
  }
  else if(scene <= -1){
    scene = 3
  }


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

  //my name in text for bottom right
  textSize(30)
  text("Sami", 1800, 940)
  
  
}


//increasing time with left click
function mouseClicked(){
  scene = scene + 1;
}

function keyPressed(){
  if(keyCode === 32){
  scene = scene - 1;
  }
}



