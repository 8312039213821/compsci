// Project Title
// Your Name
// Date

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 10; i > 0; i--){
    objects.push(new ao(random(width), 400))
    
  }
}

function draw() {
  background(220);
  for(let o of objects){
    o.move();
    o.display();
  }
}
