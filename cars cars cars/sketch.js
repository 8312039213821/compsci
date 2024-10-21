// cars cars cars

let myVehicle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myVehicle = new Vehicle;
}

function draw() {
  background(0, 255, 120);
  drawRoad();
}

function drawRoad(){
  rectMode(CENTER);
  fill(0)
  rect(width/2, height/2, width, height/2);
  for (let i = 0; i <= width; i += width/12) {
    fill(255, 255, 0);
    rect(i, height/2, width/24, 12);
  }
}

class Vehicle{
  constructor(x, y, type, color, direction, speed){
    this.x = x;
    this.y = y;
    this.type = type;
    this.color = color;
    this.direction = direction;
    this.speed = speed;
  }


  display(){
    if(type === 0){

    }
    else{

    }

  }


  move(){
    this.x += this.speed;
  }    

  speedUp(){
      this.speed += 4;
  }

  speedDown(){
      this.speed -= 4;
  }

  changeColor(){
      this.color = random((0, 0, 0),(255, 255, 255));
  }   

  action(){
    let a = random(0, 100);
    let b = random(0, 100);
    let c = random(0, 100);

    if(a === 3){

    }
    if(b === 3){
      
    }
    if(c === 3){
      
    }
  }  

}

