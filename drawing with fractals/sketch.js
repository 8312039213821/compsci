// Project Title
// Your Name
// Date



function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill()
}


function cantor(x,y,len,depth){
  if (depth > 0){
    line(x,y, x+len, y);


    let newY = y + 20;
   cantor(x)
  }
}
function draw() {
  background(225);
  circleInCircle(width/2, height/2,width);
}


function circleInCircle(x,y,d){
  if(d>10){
    circle(x,y,d)
    let den = map(mouseX,0, width, 1.01, 1.5)
    circleInCircle(x,y,d/den);
  }
}
