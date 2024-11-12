let planets = []; // Global array to store all planets
let sunR; // Sun radius

function setup() {
  createCanvas(windowWidth, windowHeight);
  sunR = width / 4; // Sun radius is a quarter of the width of the window
}

function draw() {
  background(0); // Black background for space
  fill(255, 255, 0); // Yellow for the sun
  circle(width / 2, height / 2, sunR); // Draw sun at the center

  // Loop through all planets in the array
  for (let i = 0; i < planets.length; i++) {
    planets[i].action(); // Call action method for each planet
  }
}

// Function to add a planet on regular click
function mouseClicked() {
  if (keyIsDown(SHIFT)) {
    if (planets.length > 0) {
      planets[planets.length - 1].createMoon(); // Add moon to the last planet if SHIFT is held
    }
  } else {
    planets.push(new Planet(width / 2 - sunR - 50, [random(255), random(255), random(255)], random(1, 3))); // Create a new planet
  }
}

// Planet class
class Planet {
  constructor(x, c, xSpeed) {
    this.x = x; // Planet's x position
    this.y = height / 2; // Planet's y position (fixed in the center)
    this.r = sunR / 4; // Radius of the planet
    this.c = c; // Color of the planet
    this.direction = xSpeed; // Direction of movement
    this.xSpeed = xSpeed; // Speed of movement
    this.moons = []; // Array to hold moons of the planet
  }

  // Method to move the planet horizontally
  move() {
    this.x += this.direction; // Update x position based on direction
  }

  // Method to display the planet
  display() {
    fill(this.c); // Set planet's color
    circle(this.x, this.y, this.r); // Draw the planet

    // Display moons behind or in front of the planet
    for (let moon of this.moons) {
      moon.display();
      moon.move();
    }
  }

  // Method to change the direction of the planet when it hits the orbit boundaries
  changeDirection() {
    if (this.x <= width / 2 - sunR - 50) {
      this.direction = Math.abs(this.xSpeed); // Move to the right
    } else if (this.x >= width / 2 + sunR + 50) {
      this.direction = -Math.abs(this.xSpeed); // Move to the left
    }
  }

  // Increase the orbit size slightly
  increaseOrbit() {
    if (this.xSpeed < 2) {
      this.xSpeed += 0.05; // Increase speed a bit
    }
  }

  // Decrease the orbit size slightly (but not to 0)
  decreaseOrbit() {
    if (this.xSpeed > 0.1) {
      this.xSpeed -= 0.05; // Decrease speed a bit
    }
  }

  // Change the color of the planet randomly
  changeColor() {
    this.c = [random(255), random(255), random(255)];
  }

  // Add a moon to the planet
  createMoon() {
    let moon = new Moon(this.x, this.y - this.r - 20, [random(100, 200), random(100, 200), random(100, 200)], random(1, 3));
    this.moons.push(moon); // Add the new moon to the planet's moons array
  }

  // Action that combines all planet's functions
  action() {
    this.move();
    this.changeDirection();
    this.display();
    // Random chance to call increase/decrease orbit or change color
    if (random(1) < 0.01) {
      this.increaseOrbit();
    }
    if (random(1) < 0.01) {
      this.decreaseOrbit();
    }
    if (random(1) < 0.01) {
      this.changeColor();
    }
  }
}

// Moon class
class Moon {
  constructor(x, y, c, xSpeed) {
    this.x = x;
    this.y = y;
    this.c = c; // Color for moon (greyscale)
    this.xSpeed = xSpeed; // Speed for moon
  }

  // Move the moon based on xSpeed
  move() {
    this.x += this.xSpeed;
  }

  // Display the moon
  display() {
    fill(this.c); // Set the color of the moon
    circle(this.x, this.y, 15); // Draw the moon
  }
}
