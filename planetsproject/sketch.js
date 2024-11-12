// Planets and moons bonus project
// Sami
// Oct 31, halloween 2024

let planets = [];

let sunR;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sunR = width/4;
}

function draw() {
  background(0);
  fill(255, 255, 0);
  circle(width/2, height/2, sunR);

  for (let i = 0; i < points.length; i++) {
    planets[i].changeDirection();
    planets[i].move();
    planets[i].display();
  }
}

function mouseClicked(){
  planets.push(new planet(width/2 - sunR, [random(255), random(255), random(255)], random(1, 80)))
}

class planet {
  constructor(x, c, xSpeed){
    this.x = x;
    this.y = height/2;
    this.r = sunR/4;
    this.c = c;
    this.direction = xSpeed;
    this.xSpeed = xSpeed;
  }

  changeDirection(){
    if(this.x <= width/2 - sunR){ //hits leftmost part of orbit
      this.direction = this.xSpeed; //making move right
    }
    else if(this.x >= width/2 + sunR){ //hits rightmost part of orbit
      this.direction = -this.xSpeed; //making move left
    }
  }

  display(){
    circle(this.x, this.y, sunR/10);
  }

  move(){
    this.x += this.direction;
  }

}
