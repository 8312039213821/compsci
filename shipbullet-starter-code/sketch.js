// OOP Pair Programming Starter Code
// Your Names
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;
let bulletArray = [];

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.theImage = theImage;
  }

  update() {
    // move ship -- you might want to use the keyIsDown() function here
    if(keyIsDown(LEFT_ARROW) === true){
        this.x -= 4;
    }

    else if(keyIsDown(RIGHT_ARROW) === true){
        this.x += 4;
    }

    if(keyIsDown(UP_ARROW) === true){
        this.y -= 4;
    }

    else if(keyIsDown(DOWN_ARROW) === true){
        this.y += 4;
    }
    
    // if doing extra for experts, show bullet(s)
  }

  display() {
    // show the ship
    image(shipImage, this.x, this.y)

  }

  handleKeyPress() {
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
    if(keyIsDown() === true){
      if(keyCode === 32){
        for (let i = 0; i < array.length; i++) {
          bulletArray.push(new Bullet(this.x, this.y, 0, 4, bulletImage))
        }
      }
    }
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.theImage = theImage
  }

  update() {
    this.y -= this.dy;
  }

  display() {
    image(this.theImage, this.x, this.y)
  }

  isOnScreen() {
    if(this.y < 0){
      bulletArray.pop(bulletArray)
    }
  }
}

